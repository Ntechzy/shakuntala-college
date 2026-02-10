import React from "react";
import principal from "/principal.jpeg";

const NCISMPrincipal = () => {
  return (
    <>
      <style>{`
        /* Global Reset for this component scope */
        .inner-drop-container {
          width: 100%;
          padding: 40px 20px;
          background-color: #f9f9f9;
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
          background-color: #3498db;
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
          flex: 0 0 300px;
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
          object-position: top;
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

        /* Styles for potentially uncommented items */
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
            flex: auto; /* Allow flexibility */
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
          <h2 className="inner-drop-heading">From Principal's Desk</h2>
          <div className="person">
            {/* Left Side: Profile Card */}
            <div className="people-card">
              <img src={principal} alt="" className="person-img" />
              <p className="person-name">Dr Beena tripathi</p>
              <p className="person-des"> Principal </p>

              {/* Commented out as per original code, but styled if uncommented */}
              {/*<p className="person-phone"> +91-9935568575 </p>*/}
              {/*<p className="person-mail"> drshivesh81@gmail.com </p>*/}
            </div>

            {/* Right Side: Text Content */}
            <p className="person-content">
              Ayurveda is a 5,000-year-old system of natural healing that has
              its origins in the Vedic culture of India. Although suppressed
              during years of foreign occupation, Ayurveda has been enjoying a
              major resurgence in both its native land and throughout the world.
              Tibetan medicine and Traditional Chinese Medicine both have their
              roots in Ayurveda. Early Greek medicine also embraced many
              concepts originally described in the classical Ayurvedic medical
              texts dating back several thousands of years. More than a mere
              system of treating illness, Ayurveda is a science of life (Ayur =
              life, Veda = science or knowledge). It offers a body of wisdom
              designed to help people stay vital while realizing their full
              human potential. Providing guidelines on ideal daily and seasonal
              routines, diet, behavior and the proper use of our senses,
              Ayurveda reminds us that health is the balanced and dynamic
              integration between our environment, body, mind, and spirit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NCISMPrincipal;
