import React from "react";
import Gallery from "../../../../shared/Gallery";

const images = Array.from({ length: 33 }, (_, i) =>
    `/ncism-infrastructure-facilitites/hospital/hospital${i + 1}.webp`
  );

const NCISMHospitalInfra = () => {
  return <Gallery title="Hospital Infrastructure" images={images} />;
};

export default NCISMHospitalInfra;
