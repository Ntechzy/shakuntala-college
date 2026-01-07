import React from "react";
import Gallery from "../../../shared/Gallery";

const images = [
    "/ncism-other-details/awards/PRIZE1.webp",
    "/ncism-other-details/awards/PRIZE2.webp",
    "/ncism-other-details/awards/PRIZE3.webp",
    "/ncism-other-details/awards/PRIZE4.webp",
    "/ncism-other-details/awards/PRIZE5.webp",
    "/ncism-other-details/awards/PRIZE6.webp",
    "/ncism-other-details/awards/PRIZE7.webp",
  ];

const NCISMAwards = () => {
  return <Gallery title="Awards & achievements" images={images} />;
};

export default NCISMAwards;
