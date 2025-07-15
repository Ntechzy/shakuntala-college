import React, { useState } from "react";
import DocViewer, {DocViewerRenderers } from "react-doc-viewer";
import './Affiliations.css';

const pdfs = [
  {
    year: "2024-25",
    file: "/mggau_affliations/2024_25.jpg",
    type: "jpg"
  },
  {
    year: "2023-24",
    file: "/mggau_affliations/2023_24.jpg", 
    type: "jpg"
  },
];

const Affiliations = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="affiliations-page" id="affiliations">
      <div className="affiliations-subtitle">Mahayogi Guru Gorakhnath AYUSH University, Gorakhpur</div>
      <div className="accordions-container">
        {pdfs.map((item, idx) => (
          <div className="accordion-item" key={item.year}>
            <button
              className={`accordion-btn ${openIndex === idx ? "active" : ""}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {item.year}
            </button>
            {openIndex === idx && (
              <div className="accordion-content">
                {item.type === 'pdf' ? (
                  <DocViewer
                    documents={[{ uri: item.file, fileType: item.type }]}
                    pluginRenderers={DocViewerRenderers}
                    config={{
                      header: {
                        disableFileName: true,
                      },
                      toolbar: {
                        showZoom: true,
                        showDownload: true,
                        showRotation: true,
                        showPageNavigation: true,
                        showPrint: true,
                      }
                    }}
                    style={{ height: "60vh", borderRadius: "8px", boxShadow: "0 2px 8px #ccc" }}
                  />
                ) : (
                  <div className="image-viewer">
                    <img src={item.file} alt={item.year + ' affiliation'} style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: '8px', boxShadow: '0 2px 8px #ccc' }} />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliations;
