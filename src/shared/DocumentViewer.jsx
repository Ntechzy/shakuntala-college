import React from "react";

const DocumentViewer = ({ fileUrl, title = "Document Viewer" }) => {
  const getFileType = (url) => url.split(".").pop().toLowerCase();
  const fileType = getFileType(fileUrl);

  const isImage = ["jpg", "jpeg", "png", "webp"].includes(fileType);
  const isPdf = fileType === "pdf";
  const isOfficeDoc = ["doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(
    fileType
  );

  const isLocalhost =
    fileUrl.startsWith("/") ||
    fileUrl.includes("localhost") ||
    fileUrl.includes("127.0.0.1");

  const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(fileUrl)}`;


  return (
    <section className="doc-viewer">
      <style>{`
        .doc-viewer {
          width: 100%;
          background-color: #eef0f2;
          padding: 24px 0;
        }

        .doc-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .doc-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .doc-title {
          font-size: 1.8rem;
          font-weight: 500;
          color: #1d784d;
        }

        .doc-divider {
          width: 70px;
          height: 4px;
          background-color: #65bc51;
          margin: 12px auto 0;
          border-radius: 999px;
        }

        .doc-frame-wrapper {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .doc-frame {
          width: 100%;
          height: 80vh;
          border: none;
        }

        .doc-image {
          width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }

        .doc-fallback {
          padding: 48px 20px;
          text-align: center;
        }

        .doc-fallback p {
          font-size: 1rem;
          color: #1d784d;
        }

        .doc-download {
          display: inline-block;
          margin-top: 16px;
          padding: 10px 20px;
          background-color: #1d784d;
          color: #ffffff;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .doc-download:hover {
          background-color: #65bc51;
        }

        @media (max-width: 768px) {
          .doc-frame {
            height: 60vh;
          }
          .doc-title {
            font-size: 1.4rem;
          }
        }
      `}</style>

      <div className="doc-container">
        {/* Header */}
        <div className="doc-header">
          <h2 className="doc-title">{title}</h2>
          <div className="doc-divider"></div>
        </div>

        <div className="doc-frame-wrapper">
          {/* PDF */}
          {isPdf && (
            <iframe className="doc-frame" src={fileUrl} title="PDF Viewer" />
          )}

          {/* Office Docs */}
          {isOfficeDoc && !isLocalhost && (
            <iframe
              className="doc-frame"
              src={officeViewerUrl}
              title="Excel Viewer"
            />
          )}

          {/* Images */}
          {isImage && (
            <img src={fileUrl} alt="Document" className="doc-image" />
          )}

          {/* Excel / Word on localhost */}
          {isOfficeDoc && isLocalhost && (
            <div className="doc-fallback">
              <p>
                This document cannot be previewed in the browser during local
                development.
              </p>
              <p>
                Please download the file to view it, or access it on the live
                website.
              </p>
              <a
                href={fileUrl}
                className="doc-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Document
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DocumentViewer;
