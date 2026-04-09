import React from "react";
import Gallery from "../../../../shared/Gallery";
import DocumentViewer from "../../../../shared/DocumentViewer";

const NCISMCollegeInfra = () => {
  const images = Array.from(
    { length: 23 },
    (_, i) => `/ncism-infrastructure-facilitites/college/college${i + 1}.webp`,
  );

  return (
    <>
      <DocumentViewer
      title="College Infrastructure"
      fileUrl="/college-infra/college-infra.pdf"
    />
      <Gallery title="College Infrastructure" images={images} />
    </>
  );
};

export default NCISMCollegeInfra;
