import React from 'react';

const Carriculum = () => {
  return (
    <div className="carriculum-container">
      {/* <h2>Curriculum </h2> */}

      {/* Embed the PDF */}
      <div className="pdf-container">
        <embed 
          src="/assets/CURRICULUM.pdf" 
          type="application/pdf" 
          width="100%" 
          height="600px"
        />
      </div>

      {/* Display images below */}
      <div className="images-container">
        <h3>Some Images</h3>
        <div className="image-gallery">
          <img src="/curriculum-image/c1.jpg" alt="Image 1" className="carriculum-image" />
          <img src="/curriculum-image/c2.jpg" alt="Image 2" className="carriculum-image" />
          <img src="/curriculum-image/c3.jpg" alt="Image 3" className="carriculum-image" />
        
        </div>
      </div>

      <style jsx>{`
        .carriculum-container {
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
        }

        .carriculum-container h2 {
          font-size: 28px;
          margin-bottom: 20px;
          text-align: center;
        }

        .pdf-container {
          margin-bottom: 30px;
          text-align: center;
        }

        .images-container {
          text-align: center;
        }

        .image-gallery {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .carriculum-image {
          width: 200px;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Carriculum;
