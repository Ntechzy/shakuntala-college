import React, { useState } from "react";
import "./news.css"; // Import CSS for styling
import herbs from "/images/herbs.jpg";
const newsData = [
  {
    id: 1,
    date: "",
    img: herbs,
    title: "Breaking News 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    date: "",
    img: herbs,

    title: "Breaking News 2",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more news items as needed
];

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % newsData.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex =
      currentIndex === 0 ? newsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="news-slider">
      <button className="prev-btn" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="news-slide">
        <img src={herbs} alt={newsData[currentIndex].title} />
        <div className="news-body">
          <h2>{newsData[currentIndex].title}</h2>
          <p>{newsData[currentIndex].content}</p>
        </div>
      </div>
      <button className="next-btn" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default NewsSlider;
