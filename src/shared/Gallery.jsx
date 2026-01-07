import React, { useEffect, useState } from "react";

const Gallery = ({ title, images }) => {
  const IMAGES_PER_PAGE_MOBILE = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile correctly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE_MOBILE);

  const displayedImages = isMobile
    ? images.slice(
        (currentPage - 1) * IMAGES_PER_PAGE_MOBILE,
        currentPage * IMAGES_PER_PAGE_MOBILE
      )
    : images;

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

        /* ---------- GALLERY GRID ---------- */
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

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ---------- MOBILE ---------- */
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

          .pagination {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 20px;
          }

          .page-btn {
            padding: 6px 12px;
            border-radius: 6px;
            border: 1px solid #1d784d;
            background: transparent;
            color: #1d784d;
            font-size: 14px;
            cursor: pointer;
          }

          .page-btn.active {
            background-color: #1d784d;
            color: #fff;
          }
        }
      `}</style>

      <div className="seminar-container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="section-divider"></div>
        </div>

        <div className="gallery-grid">
          {displayedImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`${title} ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* ---------- MOBILE PAGINATION ---------- */}
        {isMobile && totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
