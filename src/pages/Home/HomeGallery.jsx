import React from "react";
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

// const images = import.meta.glob("/public/homeG/*.{jpg,JPG}");
// console.log("Imported Images:", images);
const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="hs2-header-g">Image Gallery</div>
      <div className="hs2-heading-g">Discover Our Visual Story</div>
      <div className="image-gallery-wrapper">
        <div className="gallery">
          {/* {Object.keys(images).map((imagePath, index) => {
            console.log("Rendering Image:", images[imagePath].name);
            return (
              <img
                key={index}
                className="gallery-imgs"
                src={"/" + images[imagePath].name}
                alt={`Image ${index}`}
              />
            );
          })} */}
          {images.map((img, index) => (
            <img
              key={index}
              className="gallery-imgs"
              src={img}
              alt={`Image ${index}`}
            />
          ))}
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
