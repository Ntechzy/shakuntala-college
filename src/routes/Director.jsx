import React from "react";
import vc from "/dr_vc_mgu.jpg";
import "./people.css";

const Director = () => {
  return (
    <>
      <div className="inner-drop-container">
        <div className="inner-drop-wrapper">
          <h2 className="inner-drop-heading">From Vice-Chancellor's Desk</h2>
          <div className="person">
            <div className="people-card">
              <img src={vc} alt="" className="person-img" />
              <p className="person-name">Prof Dr Awadhesh Kumar Singh</p>
              <p className="person-des"> Vice Chancellor (V.B.S.P.U.) </p>
              {/*<p className="person-phone"> 05452- 252299 </p>*/}
              {/*<p className="person-mail"> vc_vbspuniversity@rediffmail.com </p>*/}
            </div>
            <p>
              The globalization of society has placed the entire world under one
              roof, and the improvement of the education system is the main
              concern due to global technological growth. Veer Bahadur Singh
              Purvanchal University, Jaunpur district (U.P.), situated on the
              banks of the River Gomati and Taposthali of Maharshi Yamdagni, has
              endured the test of time and developed rapidly to provide students
              with all the facilities they need to cope with the changing world.
              “Teachers are the builders of the society” – keeping up with the
              statement, the University has highly trained teachers with
              extensive experience in their fields of specialization, which
              assists in mentoring students in an efficient Student-Mentor
              relationship. This kind of development of
              institutions/organizations with the help of strong teaching hands
              will help in strengthening the education system, which in turn
              will empower our country. A large number of national and
              international conferences, seminars, and workshops organized by
              the university provide an enriched experience for the students and
              also help them in developing key skills like Leadership and Team
              Building. Also, time-to-time faculty development programs help
              teachers stay updated with the new methodologies and technologies
              of teaching-learning process. The University has been keen on
              giving its budding talents a new path and attitude in order to
              make them capable of facing real time challenges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Director;
