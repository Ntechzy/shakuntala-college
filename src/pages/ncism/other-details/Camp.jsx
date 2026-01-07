import React from "react";
import DocumentViewer from "../../../shared/DocumentViewer";

const Camp = () => {
  const images = [
  ];
  return (
    <section className="seminar-section">
      <style>{`
        .seminar-section {
          width: 100%;
          background-color: #eef0f2;
          padding: 3rem 0 4rem;
        }

        .seminar-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* ---------- SECTION HEADING ---------- */
        .section-heading {
          text-align: center;
          margin: 3rem 0 2rem;
        }

        .section-heading h2 {
          font-size: 1.8rem;
          font-weight: 500;
          color: #1d784d;
          margin: 0;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          background-color: #65bc51;
          margin: 12px auto 0;
          border-radius: 999px;
        }

        /* ---------- GALLERY ---------- */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 2rem;
        }

        .gallery-card {
          background-color: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0,0,0,0.15);
        }

        .gallery-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        /* ---------- RESPONSIVE ---------- */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .section-heading h2 {
            font-size: 1.5rem;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .gallery-card img {
            height: 180px;
          }
        }
      `}</style>

      <div className="seminar-container">
        {/* Document */}
        <DocumentViewer
          title="Camp"
          fileUrl="/ncism-other-details/camp/camp.pdf"
        />
        {/* ---------- GALLERY HEADING ---------- */}
        <div className="section-heading">
          <h2>Camp Gallery</h2>
          <div className="section-divider"></div>
        </div>

        {/* ---------- IMAGE GALLERY ---------- */}
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Seminar Workshop ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Camp;
