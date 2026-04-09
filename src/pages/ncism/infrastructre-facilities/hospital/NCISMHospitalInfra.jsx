import React from "react";
import Gallery from "../../../../shared/Gallery";
import DocumentViewer from "../../../../shared/DocumentViewer";

const images = Array.from(
  { length: 33 },
  (_, i) => `/ncism-infrastructure-facilitites/hospital/hospital${i + 1}.webp`,
);

const NCISMHospitalInfra = () => {
  return (
    <>
      <DocumentViewer
      title="Hospital Infrastructure"
      fileUrl="/hospital-fac/hospital-infra.pdf" />
      <Gallery title="Hospital Infrastructure" images={images} />
    </>
  );
};

export default NCISMHospitalInfra;
