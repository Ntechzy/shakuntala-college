import React from "react";
import Gallery from "../../../../shared/Gallery";

const images = Array.from({ length: 4 }, (_, i) =>
    `/ncism-infrastructure-facilitites/hostel/hostel${i + 1}.webp`
  );

const NCISMHostelInfra = () => {
  return <Gallery title="Hostel Infrastructure" images={images} />;
};

export default NCISMHostelInfra;
