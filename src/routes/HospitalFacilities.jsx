import React from "react";

const HospitalFacilities = () => {
  // Define the array of image names (h1 to h33)
  const imageNames = Array.from({ length: 33 }, (_, index) => `/hospital-fac/h${index + 1}.avif`);

  return (
    <div>
      {/* <h2>Hospital Facilities</h2> */}
      <div className="image-grid">
        {imageNames.map((imageName, index) => (
          <div key={index} className="image-item">
            <img src={imageName} alt={`Facility`} />
            {/* <h1>{`Facility ${index + 1}`}</h1> */}
          </div>
        ))}
      </div>

      {/* Internal CSS for styling */}
      <style jsx>{`
        .image-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          padding: 20px;
        }

        .image-item {
          text-align: center;
        }

        .image-item img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 1.2rem;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default HospitalFacilities;
