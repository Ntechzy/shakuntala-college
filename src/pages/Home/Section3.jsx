import React, { useState } from "react";
import "./section3.css";
import herbs from "/images/image1.avif";
import lab from "/hero/lab.avif";
import inner from "/hero/inner.avif";
import body from "/hero/body.avif";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const hs3news = [
  {
    id: 1,
    date: "25/04/2024",
    img: herbs,
    title: "Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)",
    content:
      "Explore holistic Ayurvedic principles, anatomy, herbology, diagnostics, and therapeutics for a career as an Ayurvedic practitioner. Enroll for transformative learning!",
  },
  {
    id: 2,
    date: "25/04/2024",
    img: lab,
    title: "Master of Surgery(M.S.) Ayurveda",
    content:
      "Master the intricate art of Ayurvedic surgery, blending ancient techniques with modern medical knowledge. Elevate your skills and career. Enroll now!",
  },
  {
    id: 3,
    date: "25/04/2024",
    img: body,
    title: "Ayurvedic Nursing",
    content:
      "Enhance your caregiving skills with Ayurvedic nursing, integrating traditional healing wisdom with modern healthcare practices. Enroll for holistic nursing education. ",
  },
  {
    id: 4,
    date: "25/04/2024",
    img: inner,
    title: "Ayurvedic Pharmacist",
    content:
      "Master the fusion of Ayurvedic wisdom and pharmaceutical science. Become an Ayurvedic Pharmacist adept at herbal formulations and holistic healthcare. Enroll today!",
  },
];

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % hs3news.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? hs3news.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="hs3">
      <div className="hs3-header">Latest News & Blogs</div>
      <div className="hs3-heading">Get Every Single Update</div>

      <div className="news-slider">
        <button className="prev-btn" onClick={goToPrevSlide}>
          <FaChevronCircleLeft />
        </button>
        <div className="news-slide" id="news-slide">
          <img
            className="news-img"
            src={hs3news[currentIndex].img}
            alt={hs3news[currentIndex].title}
          />
          <div className="news-body">
            <h5>{hs3news[currentIndex].date}</h5>
            <h2>{hs3news[currentIndex].title}</h2>
            <p>{hs3news[currentIndex].content}</p>
          </div>
        </div>
        {/* {hs3news.map((news, index) => (
          <div key={news.id} className={`news-slide `}>
            <img className="news-img" src={news.img} alt={news.title} />
            <div className="news-body">
              <h5>{news.date}</h5>
              <h2>{news.title}</h2>
              <p>{news.content}</p>
            </div>
          </div>
        ))} */}
        <button className="next-btn" onClick={goToNextSlide}>
          <FaChevronCircleRight />
        </button>
      </div>
    </div>
  );
};

export default Section3;
