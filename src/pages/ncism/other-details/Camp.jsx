import React from "react";
import DocumentViewer from "../../../shared/DocumentViewer";
import Gallery from "../../../shared/Gallery";

const Camp = () => {
  const images = [
    "/ncism-other-details/camp/camp1.webp",
    "/ncism-other-details/camp/camp2.webp",
    "/ncism-other-details/camp/camp3.webp",
    "/ncism-other-details/camp/camp4.webp",
    "/ncism-other-details/camp/camp5.webp",
    "/ncism-other-details/camp/camp6.webp",
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
      `}</style>

      <div className="seminar-container">
        {/* ---------- DOCUMENT ---------- */}
        <DocumentViewer
          title="Camp"
          fileUrl="/ncism-other-details/camp/camp.pdf"
        />
      </div>

      {/* ---------- CAMP GALLERY (SHARED COMPONENT) ---------- */}
      <Gallery title="Camp Gallery" images={images} />
    </section>
  );
};

export default Camp;
