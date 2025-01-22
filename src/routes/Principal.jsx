import React from "react";
import principal from "/principal.jpeg";
import "./people.css";

const Principal = () => {
  return (
    <>
      <div className="inner-drop-container">
        <div className="inner-drop-wrapper">
          <h2 className="inner-drop-heading">From Principal's Desk</h2>
          <div className="person">
            <div className="people-card">
              <img src={principal} alt="" className="person-img" />
              <p className="person-name">Dr Beena tripathi</p>
              <p className="person-des"> Principal </p>
              {/*<p className="person-phone"> +91-9935568575 </p>*/}
              {/*<p className="person-mail"> drshivesh81@gmail.com </p>*/}
            </div>
            <p>
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

export default Principal;
