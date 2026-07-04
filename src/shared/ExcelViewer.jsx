/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const IMAGE_MIME_TYPES = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  bmp: "image/bmp",
};

const getLocalName = (node) => node.localName || node.nodeName.split(":").pop();

const getFirstChildText = (node, childName) => {
  const child = Array.from(node.childNodes).find(
    (item) => getLocalName(item) === childName,
  );

  return child?.textContent ?? "";
};

const findDescendant = (node, childName) =>
  Array.from(node.getElementsByTagName("*")).find(
    (item) => getLocalName(item) === childName,
  );

const normalizeZipPath = (baseDir, target) => {
  const path = target.startsWith("/") ? target.slice(1) : `${baseDir}/${target}`;
  const parts = [];

  path.split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") {
      parts.pop();
      return;
    }
    parts.push(part);
  });

  return parts.join("/");
};

const getDirName = (path) => path.split("/").slice(0, -1).join("/");

const getRelsPath = (path) => {
  const parts = path.split("/");
  const fileName = parts.pop();
  return `${parts.join("/")}/_rels/${fileName}.rels`;
};

const parseXml = (text) =>
  new DOMParser().parseFromString(text, "application/xml");

const parseRelationships = (xml) =>
  Array.from(xml.getElementsByTagName("Relationship")).reduce((rels, item) => {
    rels[item.getAttribute("Id")] = {
      target: item.getAttribute("Target"),
      type: item.getAttribute("Type") || "",
    };

    return rels;
  }, {});

const getRelationshipId = (node) =>
  node
    ? node.getAttribute("r:id") ||
      node.getAttribute("id") ||
      node.getAttributeNS(
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        "id",
      )
    : null;

const getEmbedId = (node) =>
  node
    ? node.getAttribute("r:embed") ||
      node.getAttribute("embed") ||
      node.getAttributeNS(
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
        "embed",
      )
    : null;

const inflateRaw = async (bytes) => {
  if (!("DecompressionStream" in window)) return null;

  const stream = new Blob([bytes])
    .stream()
    .pipeThrough(new DecompressionStream("deflate-raw"));
  const buffer = await new Response(stream).arrayBuffer();

  return new Uint8Array(buffer);
};

const readZipEntries = (buffer) => {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(buffer);
  let eocdOffset = -1;

  for (let index = bytes.length - 22; index >= 0; index -= 1) {
    if (view.getUint32(index, true) === 0x06054b50) {
      eocdOffset = index;
      break;
    }
  }

  if (eocdOffset === -1) return {};

  const entryCount = view.getUint16(eocdOffset + 10, true);
  let centralOffset = view.getUint32(eocdOffset + 16, true);
  const decoder = new TextDecoder();
  const entries = {};

  for (let index = 0; index < entryCount; index += 1) {
    if (view.getUint32(centralOffset, true) !== 0x02014b50) break;

    const method = view.getUint16(centralOffset + 10, true);
    const compressedSize = view.getUint32(centralOffset + 20, true);
    const fileNameLength = view.getUint16(centralOffset + 28, true);
    const extraLength = view.getUint16(centralOffset + 30, true);
    const commentLength = view.getUint16(centralOffset + 32, true);
    const localOffset = view.getUint32(centralOffset + 42, true);
    const fileName = decoder.decode(
      bytes.slice(centralOffset + 46, centralOffset + 46 + fileNameLength),
    );
    const localFileNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + localFileNameLength + localExtraLength;
    const compressedData = bytes.slice(dataStart, dataStart + compressedSize);

    entries[fileName] = {
      async readBytes() {
        if (method === 0) return compressedData;
        if (method === 8) return inflateRaw(compressedData);
        return null;
      },
      async readText() {
        const data = await this.readBytes();
        return data ? decoder.decode(data) : "";
      },
    };

    centralOffset += 46 + fileNameLength + extraLength + commentLength;
  }

  return entries;
};

const extractExcelImages = async (buffer) => {
  try {
    const entries = readZipEntries(buffer);
    const workbookEntry = entries["xl/workbook.xml"];
    const workbookRelsEntry = entries["xl/_rels/workbook.xml.rels"];

    if (!workbookEntry || !workbookRelsEntry) return [];

    const workbookXml = parseXml(await workbookEntry.readText());
    const workbookRels = parseRelationships(
      parseXml(await workbookRelsEntry.readText()),
    );
    const firstSheet = Array.from(workbookXml.getElementsByTagName("*")).find(
      (node) => getLocalName(node) === "sheet",
    );
    const firstSheetRel = workbookRels[getRelationshipId(firstSheet)];

    if (!firstSheetRel) return [];

    const sheetPath = normalizeZipPath("xl", firstSheetRel.target);
    const sheetEntry = entries[sheetPath];
    const sheetRelsEntry = entries[getRelsPath(sheetPath)];

    if (!sheetEntry || !sheetRelsEntry) return [];

    const sheetXml = parseXml(await sheetEntry.readText());
    const sheetRels = parseRelationships(parseXml(await sheetRelsEntry.readText()));
    const drawingNode = Array.from(sheetXml.getElementsByTagName("*")).find(
      (node) => getLocalName(node) === "drawing",
    );
    const drawingRel = sheetRels[getRelationshipId(drawingNode)];

    if (!drawingRel) return [];

    const drawingPath = normalizeZipPath(getDirName(sheetPath), drawingRel.target);
    const drawingEntry = entries[drawingPath];
    const drawingRelsEntry = entries[getRelsPath(drawingPath)];

    if (!drawingEntry || !drawingRelsEntry) return [];

    const drawingXml = parseXml(await drawingEntry.readText());
    const drawingRels = parseRelationships(
      parseXml(await drawingRelsEntry.readText()),
    );
    const anchors = Array.from(drawingXml.getElementsByTagName("*")).filter(
      (node) => getLocalName(node).endsWith("Anchor"),
    );

    const images = await Promise.all(
      anchors.map(async (anchor) => {
        const from = findDescendant(anchor, "from");
        const blip = findDescendant(anchor, "blip");
        const imageRel = drawingRels[getEmbedId(blip)];

        if (!from || !imageRel) return null;

        const imagePath = normalizeZipPath(getDirName(drawingPath), imageRel.target);
        const imageEntry = entries[imagePath];
        const extension = imagePath.split(".").pop().toLowerCase();
        const mimeType = IMAGE_MIME_TYPES[extension] || "image/png";

        if (!imageEntry) return null;

        const imageBytes = await imageEntry.readBytes();
        if (!imageBytes) return null;

        return {
          row: Number(getFirstChildText(from, "row")),
          col: Number(getFirstChildText(from, "col")),
          url: URL.createObjectURL(new Blob([imageBytes], { type: mimeType })),
        };
      }),
    );

    return images.filter(Boolean);
  } catch (error) {
    console.warn("Excel images could not be extracted", error);
    return [];
  }
};

const ExcelViewer = ({ fileUrl, title }) => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [dataStartRow, setDataStartRow] = useState(0);

  // Office Online Viewer
  const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
    fileUrl,
  )}`;

  /* -------- Read Excel from Cloudinary -------- */
  useEffect(() => {
    if (!fileUrl) return;

    let active = true;
    let imageUrls = [];

    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then(async (buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const extractedImages = await extractExcelImages(buffer);

        const rows = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
          defval: "",
        });

        const headerRowIndex = rows.findIndex((row) =>
          row.some((cell) => {
            const value = String(cell).toLowerCase();
            return (
              value.includes("sr") ||
              value.includes("roll") ||
              value.includes("name")
            );
          }),
        );

        if (headerRowIndex === -1) return;

        if (!active) {
          extractedImages.forEach((image) => URL.revokeObjectURL(image.url));
          return;
        }

        imageUrls = extractedImages.map((image) => image.url);
        setHeaders(rows[headerRowIndex]);
        setData(rows.slice(headerRowIndex + 1));
        setDataStartRow(headerRowIndex + 1);
        setImages(extractedImages);
      });

    return () => {
      active = false;
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
      setImages([]);
      setDataStartRow(0);
    };
  }, [fileUrl]);

  const getCellImages = (rowIndex, colIndex) => {
    const excelRowIndex = dataStartRow + rowIndex;

    return images.filter(
      (image) => image.row === excelRowIndex && image.col === colIndex,
    );
  };

  /* -------- Export to PDF -------- */
  const exportToPDF = () => {
    const doc = new jsPDF("l", "pt", "a4");

    if (title) {
      doc.text(title, 40, 30);
    }

    autoTable(doc, {
      head: [headers],
      body: data,
      startY: title ? 50 : 30,
      styles: {
        fontSize: 8,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [29, 120, 77],
        textColor: 255,
      },
    });

    doc.save("attendance.pdf");
  };

  return (
    <section className="excel-section">
      <style>{`
        .excel-section {
          background: #eef0f2;
          padding: 24px 0;
        }

        .excel-header {
          text-align: center;
          margin-bottom: 16px;
        }

        .excel-header h2 {
          color: #1d784d;
          font-size: 1.4rem;
          font-weight: 500;
        }

        .excel-toolbar {
          max-width: 1300px;
          margin: 0 auto 12px;
          display: flex;
          justify-content: flex-end;
          padding: 0 12px;
        }

        .excel-toolbar button,
        .excel-view-btn {
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 0.9rem;
          cursor: pointer;
        }

        .excel-toolbar button {
          background: #1d784d;
          color: #ffffff;
          border: none;
        }

        .excel-toolbar button:hover {
          background: #65bc51;
        }

        .excel-view-btn {
          background: #ffffff;
          border: 1px solid #1d784d;
          color: #1d784d;
          text-decoration: none;
          font-weight: 500;
          margin-right: 8px;
        }

        .excel-view-btn:hover {
          background: #1d784d;
          color: #ffffff;
        }

        .excel-wrapper {
          max-width: 1300px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          overflow: auto;
          max-height: 75vh; /* 👈 vertical scrolling */
        }

        .excel-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1100px;
        }

        .excel-table thead th {
          position: sticky;
          top: 0;
          background: #1d784d;
          color: #ffffff;
          padding: 12px;
          font-size: 0.9rem;
          white-space: nowrap;
          z-index: 2;
        }

        .excel-table td {
          padding: 10px 12px;
          border-bottom: 1px solid #e5e7eb;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .excel-table tbody tr:nth-child(even) {
          background: #f9fafb;
        }

        .excel-table tbody tr:hover {
          background: #ecfdf5;
        }

        .excel-cell-images {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .excel-cell-images img {
          width: 72px;
          height: 88px;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid #d1d5db;
          background: #ffffff;
        }
      `}</style>

      {title && (
        <div className="excel-header">
          <h2>{title}</h2>
        </div>
      )}

      {/* Toolbar */}
      <div className="excel-toolbar">
        <a
          href={officeViewerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="excel-view-btn"
        >
          View Full Excel
        </a>

        <button onClick={exportToPDF}>Export to PDF</button>
      </div>

      {/* Table */}
      <div className="excel-wrapper">
        <table className="excel-table">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rIdx) => (
              <tr key={rIdx}>
                {headers.map((_, cIdx) => {
                  const cellImages = getCellImages(rIdx, cIdx);

                  return (
                    <td key={cIdx}>
                      {cellImages.length > 0 ? (
                        <div className="excel-cell-images">
                          {cellImages.map((image, index) => (
                            <img
                              key={image.url}
                              src={image.url}
                              alt={`Excel attachment ${index + 1}`}
                            />
                          ))}
                          {row[cIdx] ?? ""}
                        </div>
                      ) : (
                        row[cIdx] ?? ""
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ExcelViewer;
