import React from "react";
import "./section2.css";
import herbs from "/images/herbs.jpg";
import herbal from "../../assets/herbal.jpg";
import library from "../../assets/library.jpg";
import lab from "../../assets/lab.jpg";
import scholarship from "../../assets/scholarship.jpg";

const Section2 = () => {
  const coursecards = [
    {
      id: "1",
      img: herbal,
      heading: "Herbal Garden",
      title:
        "Explore our Ayurvedic herbal garden—a sanctuary of healing plants, cultivating experiential learning and a deep connection to nature's wisdom.",
    },
    {
      id: "2",
      img: scholarship,
      heading: "Scholarship Program",
      title:
        "Unlock Your Potential: Our Scholarship Program Offers Financial Support and Opportunities for Academic Excellence. Apply Today and Shape Your Future!",
    },
    {
      id: "3",
      img: library,
      heading: "Library",
      title:
        "Explore our Ayurvedic library, a hub of knowledge with extensive resources, expert guidance, and modern facilities for academic excellence.",
    },
    {
      id: "4",
      img: lab,
      heading: "Labs",
      title:
        "Discover Innovation: Our State-of-the-Art Labs Provide Hands-On Learning, Empowering Students to Explore, Experiment, and Excel in Their Fields.",
    },
  ];

  return (
    <div className="hs2">
      <div className="hs2-header">Why Choose Us?</div>
      <div className="hs2-heading">What Sets Us Apart</div>
      <div className="hs2-courses">
        {coursecards.map((card, index) => (
          <div key={index} className="hs2--sec2-cards cp">
            <div className="hs2--img">
              <img src={card.img} alt={card.heading} className="hs2--img-img" />
            </div>
            <h3>{card.heading}</h3>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
