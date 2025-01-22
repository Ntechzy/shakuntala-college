import React from "react";
import "./hero.css";
import body from "/hero/body.avif";
import lab from "/hero/lab.avif";
import top from "/hero/top.avif";
import front from "/hero/front.avif";
// import students from "/hero/students.avif";
import b1 from "/hero/b1.jpg"
import inner from "/hero/inner.avif";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Outlet } from "react-router-dom";

const heroimages = [front, b1, body, top, lab, inner];

const Hero = () => {
  return (
    <div className="hero hero-img">
      <Carousel showArrows infiniteLoop showThumbs={false} autoPlay>
        {heroimages.map((image, index) => (
          <div key={index}>
            <img
              className="hero-slide"
              src={image}
              alt={`Slide ${index + 1}`}
            />
            <div className="hero-h1">
              <span>Embark on a Journey of Healing with</span>
              <h1>Ayurveda</h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                ADMISSIONS ARE NOW OPEN FOR 2024-2025
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
