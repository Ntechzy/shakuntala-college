import React, { useState, useRef } from "react";
import "./applyNowForm.css";
const ApplyNowForm = () => {
  const [messageSent, setMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6cag2v",
        "template_xo39pe1",
        form.current,
        "QhoIipXXm4SK7ovcP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
    e.target.reset();
  };
  return (
    <div className="apply-container">
      <div className="flex aic jcc fdc g10">
        <div className="hs2-header-g">Apply Now</div>
        <div className="hs2-heading-g">Begin Your Journey</div>
      </div>
      <div className="apply-wrapper">
        <div>
          <img src="/books.jpg" alt="" />
        </div>
        <div className="apply-form-div">
          <form ref={form} onSubmit={sendEmail}>
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default ApplyNowForm;
