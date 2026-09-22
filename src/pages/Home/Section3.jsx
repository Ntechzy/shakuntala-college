import React, { useState } from "react";
import "./section3.css";
import herbs from "/images/image1.avif";
import lab from "/hero/lab.avif";
import inner from "/hero/inner.avif";
import body from "/hero/body.avif";
import r1 from "/homeG/r1.jpeg";
import r2 from "/homeG/r2.jpeg";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const hs3news = [
  {
    id: 1,
    date: "21/09/2026",
    img: "/news1.webp",
    title: "Health Awareness: Ayurveda and Modern Medicine",
    link: "https://dainik.bhaskar.com/WgWJkjM0B6b?ref=MTc2ODk4MjY1NTExNTAyMjMzNg%3D%3D",
    content:
      "Lions Club Gomti Jaunpur highlighted how Ayurveda and modern medicine together can guide society toward better health and awareness.",
  },
  {
    id: 2,
    date: "21/09/2026",
    img: "/news1.webp",
    title: "Jaunpur Moves Towards a Healthy Society",
    link: "https://www.nayasaveranetwork.com/2026/09/jaunpur-moves-towards-healthy-society-integration-ayurveda-modern-medicine.html",
    content:
      "A report on Jaunpur moving toward a healthier society through the integration of Ayurveda and modern medical practices.",
  },
  {
    id: 3,
    date: "25/04/2024",
    img: herbs,
    title: "Bachelor of Ayurvedic Medicine and Surgery (B.A.M.S.)",
    content:
      "Explore holistic Ayurvedic principles, anatomy, herbology, diagnostics, and therapeutics for a career as an Ayurvedic practitioner. Enroll for transformative learning!",
  },
  {
    id: 4,
    date: "25/04/2024",
    img: lab,
    title: "Master of Surgery(M.S.) Ayurveda",
    content:
      "Master the intricate art of Ayurvedic surgery, blending ancient techniques with modern medical knowledge. Elevate your skills and career. Enroll now!",
  },
  {
    id: 5,
    date: "25/04/2024",
    img: body,
    title: "Ayurvedic Nursing",
    content:
      "Enhance your caregiving skills with Ayurvedic nursing, integrating traditional healing wisdom with modern healthcare practices. Enroll for holistic nursing education. ",
  },
  {
    id: 6,
    date: "25/04/2024",
    img: inner,
    title: "Ayurvedic Pharmacist",
    content:
      "Master the fusion of Ayurvedic wisdom and pharmaceutical science. Become an Ayurvedic Pharmacist adept at herbal formulations and holistic healthcare. Enroll today!",
  },
  {
    id: 7,
    date: "26/01/2025",
    img: r1,
    title: "Republic Day",
    content:
      "Republic Day is a national holiday in india commemorating the adoption of the constitution of the republic of india and the country's transition to a republic",
  },
  {
    id: 8,
    date: "26/01/2025",
    img: r2,
    title: "Republic Day",
    content:
      "Republic Day is a national holiday in india commemorating the adoption of the constitution of the republic of india and the country's transition to a republic",
  },
];

const Section3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNews = hs3news[currentIndex];

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
        <a
          className={`news-slide ${currentNews.link ? "clickable-news" : ""}`}
          href={currentNews.link || undefined}
          id="news-slide"
          rel={currentNews.link ? "noopener noreferrer" : undefined}
          target={currentNews.link ? "_blank" : undefined}
        >
          <img
            className="news-img"
            src={currentNews.img}
            alt={currentNews.title}
          />
          <div className="news-body">
            <h5>{currentNews.date}</h5>
            <h2>{currentNews.title}</h2>
            <p>{currentNews.content}</p>
          </div>
        </a>
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
