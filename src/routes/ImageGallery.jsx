import React, { useEffect, useState } from "react";
import "./imageGallery.css";

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }
// // const images = import.meta.glob("/public/images/*.{jpg,JPG}");
// const avifImages = importAll(
//   require.context("./your_folder_path", false, /\.avif$/)
// );

// console.log(avifImages);

// const importAll = (r) => r.keys().map(r);
// const avifImages = importAll(require.context("/images", false, /\.avif$/));

// const avifImages = require.context("/images", false, /\.avif$/);
// console.log(avifImages);

// console.log("Imported Images:", images);
const ImageGallery = () => {
  const [avifImages, setAvifImages] = useState([]);

  useEffect(() => {
    // Fetch the images from the 'image' directory within 'public'
    const imageFolder = "/images/"; // Adjust the path based on your folder structure
    const images = [];
    for (let i = 1; i <= 117; i++) {
      images.push(`${imageFolder}image${i}.avif`);
    }
    setAvifImages(images);
    console.log(avifImages);
  }, []);

  return (
    <div className="image-gallery-container-main">
      <div className="hs2-header-g">Image Gallery</div>
      <div className="hs2-heading-g">Discover Our Visual Story</div>
      <div className="image-gallery-wrapper-main">
        <div className="gallery-main">
          {/* {Object.keys(avifImages).map((imagePath, index) => {
            // console.log("Rendering Image:", images[imagePath].name);
            return (
              <img
                key={index}
                className="gallery-imgs"
                src={avifImages[imagePath].name}
                alt={`Image ${index}`}
              />
            );
          })} */}
          {avifImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`AVIF Image ${index}`}
              className="gallery-images-avif"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
