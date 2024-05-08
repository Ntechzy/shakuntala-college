import React from "react";
import "./section1.css";
import "./section2.css";
import { MdClass } from "react-icons/md";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaUniversity,
  FaHandsHelping,
} from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const Section1 = () => {
  const hs1sec2cards = [
    {
      icon: <FaBookReader size={40} />,
      heading: "Quality Education",
      title:
        "We offer holistic education in Ayurvedic medicine, emphasizing practical skills, ethics, and personalized mentorship for students' success.",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      heading: "Experienced Faculty",
      title:
        "Our Expert faculty bring extensive knowledge, skills, and real-world experience to enrich students' learning journey..",
    },
    {
      icon: <FaUniversity size={40} />,
      heading: "Modern Infrastructure",
      title:
        "Our College boasts modern infrastructure, equipped with advanced facilities to support students' academic and practical learning needs. ",
    },
    {
      icon: <MdLocalHospital size={40} />,
      heading: "State Of The Art Hospital",
      title:
        "Shakuntala Ayurvedic Medical College and Hospital offers holistic healthcare services rooted in traditional Ayurvedic principles, prioritizing patient wellness and natural remedies.",
    },
  ];

  return (
    <div className="hs1">
      <div className="hs2-header s1-2">About Us</div>
      <div className="hs2-heading">Who We Are</div>
      <div className="hs1--sec1">
        <div className="hs1--sec1-left">
          <h2>
            Discover the Essence of Ayurveda at Dr. Shakuntala Ayurvedic Medical
            College
          </h2>
        </div>
        <div className="hs1--sec1-right">
          <p>
            Welcome to Dr. Shakuntala Ayurvedic Medical College, where the
            timeless wisdom of Ayurveda meets modern education. As you embark on
            a journey of holistic healing and self-discovery, allow us to guide
            you through the essence of Ayurveda and the unique opportunities
            that await you at our institution.
          </p>
        </div>
      </div>
      <div className="hs1--sec2">
        <div className="hs1--sec2-wrapper">
          {hs1sec2cards.map((card, index) => (
            <div key={index} className="hs1--sec2-cards">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.heading}</h3>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
