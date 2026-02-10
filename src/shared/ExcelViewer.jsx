import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExcelViewer = ({ fileUrl, title }) => {
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

  // Office Online Viewer
  const officeViewerUrl = `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
    fileUrl,
  )}`;

  /* -------- Read Excel from Cloudinary -------- */
  useEffect(() => {
    if (!fileUrl) return;

    fetch(fileUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

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

        setHeaders(rows[headerRowIndex]);
        setData(rows.slice(headerRowIndex + 1));
      });
  }, [fileUrl]);

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
                {headers.map((_, cIdx) => (
                  <td key={cIdx}>{row[cIdx] ?? ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ExcelViewer;
