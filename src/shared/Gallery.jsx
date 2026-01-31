import React, { useEffect, useState } from "react";

const Gallery = ({ title, images }) => {
  const IMAGES_PER_PAGE_MOBILE = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // 🔍 Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Detect mobile correctly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lock background scroll when lightbox is open (mobile UX)
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [lightboxOpen]);

  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE_MOBILE);

  const displayedImages = isMobile
    ? images.slice(
        (currentPage - 1) * IMAGES_PER_PAGE_MOBILE,
        currentPage * IMAGES_PER_PAGE_MOBILE,
      )
    : images;

  // 🔁 Lightbox navigation
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

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
          cursor: pointer;
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

        /* ---------- MOBILE GRID ---------- */
        @media (max-width: 640px) {
          .section-heading h2 {
            font-size: 1.4rem;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .gallery-card {
            border-radius: 12px;
          }

          .gallery-card img {
            height: 220px;
          }

          .pagination {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 24px;
            flex-wrap: wrap;
          }

          .page-btn {
            padding: 8px 14px;
            border-radius: 8px;
            border: 1px solid #1d784d;
            background: transparent;
            color: #1d784d;
            font-size: 15px;
            cursor: pointer;
          }

          .page-btn.active {
            background-color: #1d784d;
            color: #fff;
          }
        }

        /* ---------- LIGHTBOX ---------- */
        .lightbox {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 0;
        }

        .lightbox-img {
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 4px;
          object-fit: contain;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 2.5rem;
          color: #fff;
          cursor: pointer;
          padding: 10px;
          z-index: 100001;
          line-height: 1;
          background: rgba(0,0,0,0.3);
          border-radius: 50%;
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.18);
          border: none;
          color: #fff;
          font-size: 2.4rem;
          padding: 12px 18px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s;
          z-index: 100000;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .lightbox-nav:hover {
          background: rgba(255,255,255,0.3);
        }

        /* Force Positioning with !important to override conflicts */
        .lightbox-nav.left {
          left: 20px !important;
          right: auto !important;
        }

        .lightbox-nav.right {
          right: 20px !important;
          left: auto !important;
        }

        /* Fix for perfect circle on desktop */
        @media (min-width: 641px) {
          .lightbox-nav {
            border-radius: 50% !important;
            width: 70px !important;
            height: 70px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0 !important;
            line-height: 1 !important;
          }
          
          .lightbox-nav.left,
          .lightbox-nav.right {
            border-radius: 50% !important;
          }
        }

        /* Extra mobile comfort & Fixes */
        @media (max-width: 640px) {
          .lightbox {
             background: #000;
             padding: 10px;
             display: flex;
             align-items: center;
             justify-content: center;
          }

          .lightbox-nav {
            position: fixed;
            font-size: 2.2rem;
            padding: 15px;
            background: rgba(0,0,0,0.5);
            border-radius: 50%;
            margin: 0;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .lightbox-nav:hover {
             background: rgba(0,0,0,0.7);
          }

          /* Force Mobile Positioning */
          .lightbox-nav.left {
            left: 10px !important;
            right: auto !important;
          }

          .lightbox-nav.right {
            right: 10px !important;
            left: auto !important;
          }

          /* Force Edge-to-Edge Image on Mobile with safe margins */
          .lightbox-img {
            width: 100%;
            max-width: 100%;
            height: auto;
            max-height: calc(100vh - 40px);
            border-radius: 0;
            object-fit: contain;
            margin: 0;
            padding: 0 5px;
          }

          .lightbox-close {
             top: 15px;
             right: 15px;
             font-size: 2rem;
             background: rgba(0,0,0,0.5);
             width: 50px;
             height: 50px;
             display: flex;
             align-items: center;
             justify-content: center;
          }

          /* Ensure both nav buttons are visible */
          .lightbox-nav.left,
          .lightbox-nav.right {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            border-radius: 50% !important;
          }

          /* Touch-friendly sizing for mobile */
          @media (max-width: 480px) {
            .lightbox-nav {
              width: 50px;
              height: 50px;
              font-size: 1.8rem;
              padding: 12px;
            }

            .lightbox-close {
              width: 45px;
              height: 45px;
              font-size: 1.8rem;
            }

            .lightbox-img {
              max-height: calc(100vh - 60px);
            }
          }

          /* Very small screens */
          @media (max-width: 360px) {
            .lightbox-nav {
              width: 45px;
              height: 45px;
              font-size: 1.6rem;
              padding: 10px;
            }

            .lightbox-close {
              width: 40px;
              height: 40px;
              font-size: 1.6rem;
            }
          }
        }
      `}</style>

      <div className="seminar-container">
        <div className="section-heading">
          <h2>{title}</h2>
          <div className="section-divider"></div>
        </div>

        <div className="gallery-grid">
          {displayedImages.map((img, index) => {
            const globalIndex = isMobile
              ? (currentPage - 1) * IMAGES_PER_PAGE_MOBILE + index
              : index;

            return (
              <div
                className="gallery-card"
                key={index}
                onClick={() => openLightbox(globalIndex)}
              >
                <img src={img} alt={`${title} ${index + 1}`} />
              </div>
            );
          })}
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

      {/* ---------- LIGHTBOX ---------- */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="lightbox-close" onClick={closeLightbox}>
            ✕
          </span>

          <button className="lightbox-nav left" onClick={prevImage}>
            ❮
          </button>

          <img
            src={images[currentImageIndex]}
            className="lightbox-img"
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
          />

          <button className="lightbox-nav right" onClick={nextImage}>
            ❯
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
