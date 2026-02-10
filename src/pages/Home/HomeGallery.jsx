import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../routes/imageGallery.css";

import img10 from "/homeG/ncismhome1.webp";
import img11 from "/homeG/ncismhome2.webp";
import img12 from "/homeG/ncism-front-page.webp";
import img1 from "/homeG/liberary.avif";
import img2 from "/homeG/sh14.avif";
import img3 from "/homeG/sh16.avif";
import img4 from "/homeG/sh39.avif";
import img5 from "/homeG/b3.avif";
import img6 from "/homeG/b4.avif";
import img7 from "/homeG/sh82.avif";
import img8 from "/homeG/sh110.avif";
import img9 from "/homeG/sh117.avif";
import Gallery from "../../shared/Gallery";

const images = [
  img10,
  img11,
  img12,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
];

const ImageGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeViewer = () => setOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="image-gallery-container">
      <div className="hs2-header-g">Image Gallery</div>
      <div className="hs2-heading-g">Discover Our Visual Story</div>

      {/* ---------- SHARED GALLERY ---------- */}
      <Gallery title={null} images={images} />

      {/* ---------- CTA BUTTON ---------- */}
      <div className="image-gallery-wrapper">
        <div className="gallery">
          <Link to="/image-gallery">
            <button className="gall-btn">
              <p>Visit Our Image Gallery...</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
