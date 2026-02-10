import React from "react";
import Gallery from "../../../shared/Gallery";

const SeminarWorkshop = () => {
  const images = [
    "/ncism-other-details/seminar-and-workshop/seminar1.webp",
    "/ncism-other-details/seminar-and-workshop/seminar2.webp",
    "/ncism-other-details/seminar-and-workshop/seminar3.webp",
    "/ncism-other-details/seminar-and-workshop/seminar4.webp",
    "/ncism-other-details/seminar-and-workshop/seminar5.webp",
    "/ncism-other-details/seminar-and-workshop/seminar6.webp",
    "/ncism-other-details/seminar-and-workshop/seminar7.webp",
    "/ncism-other-details/seminar-and-workshop/seminar8.webp",
    "/ncism-other-details/seminar-and-workshop/seminar9.webp",
    "/ncism-other-details/seminar-and-workshop/seminar10.webp",
  ];

  return (
    <Gallery
      title="Seminar & Workshop Gallery"
      images={images}
    />
  );
};

export default SeminarWorkshop;
