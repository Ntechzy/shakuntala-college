import React from "react";
import chairman from "/chairman.png";
import "./people.css";

const Chairman = () => {
  return (
    <>
      <div className="inner-drop-container">
        <div className="inner-drop-wrapper">
          <h2 className="inner-drop-heading">From Chairman's Desk</h2>
          <div className="person">
            <div className="people-card">
              <img src={chairman} alt="" className="person-img" />
              <p className="person-name">Dr Shakuntala Yadav</p>
              <p className="person-des"> M.B.B.S., D.G.O. </p>
              <p className="person-phone"> +91-9889377675 </p>
              <p className="person-mail"> drsakuntalay@gmail.com </p>
            </div>
            <p>
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

export default Chairman;
