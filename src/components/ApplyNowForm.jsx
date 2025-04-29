import React, { useState, useRef, useEffect } from "react";
import "./applyNowForm.css";
import Section2 from "../pages/Home/Section2";
import ImageGallery from "../routes/ImageGallery";
import HomeGallery from "../pages/Home/HomeGallery";
import Connect from "../pages/Home/Connect";
import emailjs from "@emailjs/browser";

const ApplyNowForm = () => {

  const getAdmissionYear = () => {
    const currentYear = new Date().getFullYear();
    return `${currentYear}-${currentYear + 1}`;
  };

  // const [messageSent, setMessageSent] = useState(false);

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_ct0glwi", "template_ps7zzxj", form.current, {
  //       publicKey: "tpt_h4u-z5yVXxnR7",
  //     })
  //     .then(
  //       () => {
  //         console.log("Welcome Back, Sid__Art_");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );

  //   setMessageSent(true);
  //   setTimeout(() => {
  //     setMessageSent(false);
  //   }, 3000);
  //   e.target.reset();
  // };

  useEffect(() => {
    window.mainScriptLoaded()
  }, [])

  return (


    <div className="apply-container">
      <div className="flex aic jcc fdc g10">
        <div className="opennow">Admissions are now open for {getAdmissionYear()}</div>
        <div className="hs2-header-g">Apply Now</div>
        <div className="hs2-heading-a">Begin Your Journey</div>
      </div>
      <div className="apply-wrapper">
        <div>
          <img src="/books.jpg" alt="" />
          <div id="formsID7375"></div>
        </div>
        {/* <div className="apply-form-div"> */}

          {/* <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="number"
              name="neet"
              placeholder="Your NEET Score"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Mesaage Here"
              required
            ></textarea>
            <button
              type="submit"
              className={`btn ${messageSent ? "btn-success" : "btn-primary"}`}
            >
              {messageSent ? "Message Sent!" : "Send Message"}
            </button>
          </form> */}

        {/* </div> */}
      </div>
      <Section2 />
      <HomeGallery />
      <Connect />
    </div>
  );
};
export default ApplyNowForm;
