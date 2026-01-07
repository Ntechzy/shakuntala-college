import React from "react";
import Gallery from "../../../../shared/Gallery";

const NCISMCollegeInfra = () => {
  const images = Array.from({ length: 23 }, (_, i) =>
    `/ncism-infrastructure-facilitites/college/college${i + 1}.webp`
  );

  return (
    <Gallery
      title="College Infrastructure"
      images={images}
    />
  );
};

export default NCISMCollegeInfra;
