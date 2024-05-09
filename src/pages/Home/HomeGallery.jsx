import React from "react";
import { Link } from "react-router-dom";
import "../../routes/imageGallery.css";
import img1 from "/homeG/sh9.JPG";
import img2 from "/homeG/sh14.JPG";
import img3 from "/homeG/sh16.JPG";
import img4 from "/homeG/sh39.JPG";
import img5 from "/homeG/sh58.JPG";
import img6 from "/homeG/sh75.JPG";
import img7 from "/homeG/sh82.JPG";
import img8 from "/homeG/sh110.JPG";
import img9 from "/homeG/sh117.JPG";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
            <button className="gall-btn">Visit Our Image Gallery...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
