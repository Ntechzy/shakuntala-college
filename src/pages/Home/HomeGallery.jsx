import React from "react";
import { Link } from "react-router-dom";
import "../../routes/imageGallery.css";

const images = import.meta.glob("/src/pages/Home/*.{jpg,JPG}");
// console.log("Imported Images:", images);
const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <div className="hs2-header-g">Image Gallery</div>
      <div className="hs2-heading-g">Discover Our Visual Story</div>
      <div className="image-gallery-wrapper">
        <div className="gallery">
          {Object.keys(images).map((imagePath, index) => {
            console.log("Rendering Image:", images[imagePath].name);
            return (
              <img
                key={index}
                className="gallery-imgs"
                src={images[imagePath].name}
                alt={`Image ${index}`}
              />
            );
          })}
          <Link to="/image-gallery">
            <button className="gall-btn">Visit Our Image Gallery...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
