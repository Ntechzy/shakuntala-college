import React from "react";
import Gallery from "../../../shared/Gallery";

const images = [
  "/ncism-other-details/sports/sports1.webp",
  "/ncism-other-details/sports/sports2.webp",
  "/ncism-other-details/sports/sports3.webp",
  "/ncism-other-details/sports/sports4.webp",
  "/ncism-other-details/sports/sports5.webp",
  "/ncism-other-details/sports/sports6.webp",
  "/ncism-other-details/sports/sports7.webp",
  "/ncism-other-details/sports/sports8.webp",
  "/ncism-other-details/sports/sports9.webp",
  "/ncism-other-details/sports/sports10.webp",
  "/ncism-other-details/sports/sports11.webp",
  "/ncism-other-details/sports/sports12.webp",
  "/ncism-other-details/sports/sports13.webp",
  "/ncism-other-details/sports/sports14.webp",
  "/ncism-other-details/sports/sports15.webp",
  "/ncism-other-details/sports/sports16.webp",
  "/ncism-other-details/sports/sports17.webp",
  "/ncism-other-details/sports/sports18.webp",
];

const Sports = () => {
  return <Gallery title="Sports" images={images} />;
};

export default Sports;
