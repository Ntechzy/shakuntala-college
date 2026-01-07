import React from "react";
import chairman from "/chairman.png";

const NCISMChairman = () => {
  return (
    <>
      <style>{`
        /* Global Reset for this component scope */
        .inner-drop-container {
          width: 100%;
          padding: 40px 20px;
          background-color: #f9f9f9; /* Light neutral background */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .inner-drop-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .inner-drop-heading {
          text-align: center;
          color: #2c3e50;
          font-size: 2.2rem;
          margin-bottom: 40px;
          position: relative;
          padding-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .inner-drop-heading::after {
          content: '';
          width: 80px;
          height: 4px;
          background-color: #3498db; /* Professional Blue Accent */
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        /* Flex container for content */
        .person {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          justify-content: center;
        }

        /* Profile Card Styling */
        .people-card {
          flex: 0 0 300px; /* Fixed width for card on desktop */
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
          border: 1px solid #eee;
          transition: transform 0.3s ease;
        }

        .people-card:hover {
          transform: translateY(-5px);
        }

        .person-img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid #f0f2f5;
          margin-bottom: 15px;
        }

        .person-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #2c3e50;
          margin: 10px 0 5px 0;
        }

        .person-des {
          color: #7f8c8d;
          font-weight: 600;
          margin: 0 0 10px 0;
          font-size: 1rem;
        }

        .person-phone, .person-mail {
          font-size: 0.95rem;
          color: #555;
          margin: 4px 0;
          font-weight: 500;
        }

        /* Text Content Styling */
        .person-content {
          flex: 1;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          text-align: justify;
          padding-top: 10px;
        }

        /* Tablet / Smaller Laptops (900px and below) */
        @media (max-width: 900px) {
          .person {
            flex-direction: column;
            align-items: center;
            gap: 30px; /* Reduced gap */
          }

          .people-card {
            width: 100%;
            max-width: 350px;
            flex: auto;
            margin-bottom: 10px;
          }

          .person-content {
            text-align: left; /* Better readability on touch screens */
            padding: 0;
            width: 100%;
          }
        }

        /* Mobile Phones (600px and below) */
        @media (max-width: 600px) {
          .inner-drop-container {
            padding: 20px 15px; /* Less outer padding */
          }

          .inner-drop-wrapper {
            padding: 25px 20px; /* Less wrapper padding */
          }
          
          .inner-drop-heading {
            font-size: 1.7rem;
            margin-bottom: 30px;
          }

          .people-card {
             padding: 20px; /* Compress card padding */
          }

          .person-img {
            width: 150px;
            height: 150px;
          }
          
          .person-content {
             font-size: 1rem; /* Slightly smaller body text for small screens */
             line-height: 1.6;
          }
        }

        /* Small Mobile Phones (400px and below) */
        @media (max-width: 400px) {
           .inner-drop-heading {
            font-size: 1.5rem;
          }
           .inner-drop-wrapper {
            padding: 20px 15px;
          }
           .person-img {
            width: 130px;
            height: 130px;
          }
        }
      `}</style>

      <div className="inner-drop-container">
        <div className="inner-drop-wrapper">
          <h2 className="inner-drop-heading">From Chairman's Desk</h2>
          <div className="person">
            {/* Left Side: Profile Card */}
            <div className="people-card">
              <img src={chairman} alt="Chairman" className="person-img" />
              <p className="person-name">Dr Shakuntala Yadav</p>
              <p className="person-des"> M.B.B.S., D.G.O. </p>
              <p className="person-phone"> +91-9889377675 </p>
              <p className="person-mail"> drsakuntalay@gmail.com </p>
            </div>

            {/* Right Side: Text Content */}
            <p className="person-content">
              With the growing institutionalization of education in Ayurveda
              there is an increased demand to study Ayurveda amongst young
              students. Under the Aegis of Krishna Sudama Group of Institutions,
              Dr Shakuntala Ayurvedic Medical College is committed to give
              quality education and health care facilities to the society. In
              the field of academics, our focus is to impart quality education
              and tap the hidden potentials of the young minds by inculcating
              theoretical knowledge, practical skills and unconventional
              techniques backed with relentless efforts and persuasion. The
              college aims at elevating the standards of Ayurveda education
              through quality teaching.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NCISMChairman;
