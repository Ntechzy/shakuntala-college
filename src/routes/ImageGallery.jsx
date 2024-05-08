import React from "react";
import "./imageGallery.css";

const images = import.meta.glob("/public/images/*.{jpg,JPG}");

// console.log("Imported Images:", images);
const ImageGallery = () => {
  return (
    <div className="image-gallery-container-main">
      <div className="hs2-header-g">Image Gallery</div>
      <div className="hs2-heading-g">Discover Our Visual Story</div>
      <div className="image-gallery-wrapper-main">
        <div className="gallery-main">
          {Object.keys(images).map((imagePath, index) => {
            // console.log("Rendering Image:", images[imagePath].name);
            return (
              <img
                key={index}
                className="gallery-imgs"
                src={images[imagePath].name}
                alt={`Image ${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
