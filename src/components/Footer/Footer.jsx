import React from "react";
import "./footer.css";
import logo from "/logo.jpg";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flogo-div">
        <a href="/">
          <img className="flogo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="footerlinks">
        <div className="f1">
          <ul>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/courses-fees">
              <li>Courses</li>
            </Link>
            <Link to="/student">
              <li>Student's Corner</li>
            </Link>
            <Link to="/">
              <li>Rules and Regulations</li>
            </Link>
            <Link to="/affiliations">
              <li>Affiliation</li>
            </Link>
          </ul>
        </div>
        <div className="f2">
          <ul>
            <Link to="/result">
              <li>Results</li>
            </Link>
            <Link to="/">
              <li>Vacancy</li>
            </Link>
            <Link to="/">
              <li>News</li>
            </Link>
            <Link to="/">
              <li>Notice</li>
            </Link>
            <Link to="/">
              <li>Permission and Affiliation</li>
            </Link>
          </ul>
        </div>
        <div className="f2">
          <ul>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link
              target="_blank"
              to="mailto:admission.drshakuntalaayush@gmail.com"
            >
              <li>
                <IoMdMail /> admission.drshakuntalaayush@gmail.com
              </li>
            </Link>
            <Link
              target="_blank"
              to="https://maps.app.goo.gl/i9tEYpxgQfVSvgraA"
            >
              <li>
                <FaLocationDot /> 1214, Nayansand, Thana Road, Gaurabadshahpur,
                <br />
                Jaunpur, Uttar Pradesh-222133 (India)
              </li>
            </Link>
            <Link to="tel:9918905623" target="_blank">
              <li>
                <FaPhoneAlt /> 9918905623
              </li>
            </Link>
          </ul>
        </div>
        <div className="f3">
          <div className="Contact">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.178403704445!2d82.79931207508446!3d25.764670208482922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39903100115d4b9d%3A0x48699baaa5b89ac1!2sDr%20Shakuntala%20Ayurvedic%20College%20Jaunpur!5e0!3m2!1sen!2sin!4v1713960653004!5m2!1sen!2sin"
                // width="400"
                // height="250"
                className="gmap"
                style={{ borderRadius: 5, border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="fbase">
        <p>
          Copyright © 2024 Dr. Shakuntala Ayurvedic Medical College and
          Hospital. All rights reserved.
        </p>
        <p>
          Created by <a href="https://ntechzy.com"> Ntechzy</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
