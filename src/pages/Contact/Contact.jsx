import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ct0glwi", "template_ps7zzxj", form.current, {
        publicKey: "tpt_h4u-z5yVXxnR7",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
    e.target.reset();
  };
  return (
    <section className="contact-us" id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a
            className="contact-a"
            href="mailto:admission.drshakuntalaayush@gmail.com"
            target="_blank"
          >
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>admission.drshakuntalaayush@gmail.com</h5>
              <p>Send an Email</p>
            </article>
          </a>
          <a
            className="contact-a"
            href="https://t.me/+919918905623"
            target="_blank"
          >
            <article className="contact__option">
              <LiaTelegram className="contact__option-icon" />
              <h4>Telegram</h4>
              <h5>+91 - 9918905623</h5>
              <p>Send a Message</p>
            </article>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=919918905623"
            target="_blank"
            className="contact-a"
          >
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+91-9918905623</h5>

              <p>Send a Message</p>
            </article>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
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
    </section>
  );
};

export default Contact;
