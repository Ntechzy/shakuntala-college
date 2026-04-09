import React from "react";
import registrar from "/vc.webp";

const NCISMRegistrar = () => {
  return (
    <>
      <style>{`
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

        .person {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          justify-content: center;
        }

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

        .person-phone, .person-mail {
          font-size: 0.95rem;
          color: #555;
          margin: 4px 0;
          font-weight: 500;
        }

        .person-content {
          flex: 1;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          text-align: justify;
          padding-top: 10px;
        }

        @media (max-width: 900px) {
          .person {
            flex-direction: column;
            align-items: center;
            gap: 30px;
          }

          .people-card {
            width: 100%;
            max-width: 350px;
            flex: auto;
            margin-bottom: 10px;
          }

          .person-content {
            text-align: left;
            padding: 0;
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .inner-drop-container {
            padding: 20px 15px;
          }

          .inner-drop-wrapper {
            padding: 25px 20px;
          }

          .inner-drop-heading {
            font-size: 1.7rem;
            margin-bottom: 30px;
          }

          .people-card {
            padding: 20px;
          }

          .person-img {
            width: 150px;
            height: 150px;
          }

          .person-content {
            font-size: 1rem;
            line-height: 1.6;
          }
        }

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
          <h2 className="inner-drop-heading">From Registrar's Desk</h2>
          <div className="person">
            <div className="people-card">
              <img src={registrar} alt="Registrar" className="person-img" />
              <p className="person-name">Registrar Office</p>
              <p className="person-des">Registrar</p>
            </div>

            <p className="person-content">
              The Registrar's office is committed to maintaining academic
              integrity, transparent administration, and smooth coordination
              across the institution. It supports statutory processes, student
              records, examination-related documentation, institutional
              communication, and regulatory compliance while ensuring efficient
              execution of university and college policies. Through disciplined
              administration and responsive support systems, the office works to
              strengthen a reliable academic environment for students, faculty,
              and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NCISMRegistrar;
