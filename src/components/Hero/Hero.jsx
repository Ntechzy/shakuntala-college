import React from "react";
import "./hero.css";
import body from "../../assets/hero/body.jpg";
import lab from "../../assets/hero/lab.jpg";
import top from "../../assets/hero/top.jpg";
import front from "../../assets/hero/front.jpg";
import students from "../../assets/hero/students.jpg";
import inner from "../../assets/hero/inner.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const heroimages = [front, students, body, top, lab, inner];

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
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
