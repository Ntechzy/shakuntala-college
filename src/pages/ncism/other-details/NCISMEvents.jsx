import React from "react";
import Gallery from "../../../shared/Gallery";

const images = [
  "/ncism-other-details/events/carriculum1.webp",
  "/ncism-other-details/events/carriculum2.webp",
  "/ncism-other-details/events/republicDay1.webp",
  "/ncism-other-details/events/republicDay2.webp",
  "/ncism-other-details/events/republicDay3.webp",
  "/ncism-other-details/events/republicDay4.webp",
  "/ncism-other-details/events/republicDay5.webp",
  "/ncism-other-details/events/republicDay6.webp",
  "/ncism-other-details/events/republicDay7.webp",
  "/ncism-other-details/events/republicDay8.webp",
  "/ncism-other-details/events/republicDay9.webp",
  "/ncism-other-details/events/republicDay10.webp",
  "/ncism-other-details/events/republicDay11.webp",
  "/ncism-other-details/events/freshers1.webp",
  "/ncism-other-details/events/freshers2.webp",
  "/ncism-other-details/events/freshers3.webp",
  "/ncism-other-details/events/freshers4.webp",
  "/ncism-other-details/events/freshers5.webp",
  "/ncism-other-details/events/freshers6.webp",
  "/ncism-other-details/events/freshers7.webp",
  "/ncism-other-details/events/freshers8.webp",
  "/ncism-other-details/events/freshers9.webp",
  "/ncism-other-details/events/freshers10.webp",
  "/ncism-other-details/events/freshers11.webp",
  "/ncism-other-details/events/freshers12.webp",
  "/ncism-other-details/events/freshers13.webp",
  "/ncism-other-details/events/freshers14.webp",
  "/ncism-other-details/events/freshers15.webp",
  "/ncism-other-details/events/freshers16.webp",
  "/ncism-other-details/events/freshers17.webp",
  "/ncism-other-details/events/freshers18.webp",
  "/ncism-other-details/events/freshers19.webp",
  "/ncism-other-details/events/freshers20.webp",
  "/ncism-other-details/events/freshers21.webp",
  "/ncism-other-details/events/freshers22.webp",
  "/ncism-other-details/events/freshers23.webp",
  "/ncism-other-details/events/freshers24.webp",
];

const NCISMEvents = () => {
  return <Gallery title="Events" images={images} />;
};

export default NCISMEvents;
