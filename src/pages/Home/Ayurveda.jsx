import React, { useState } from "react";
import "./ayurveda.css";

const aspects = [
  {
    title: "Doshas",
    content:
      "Central to Ayurvedic philosophy is the concept of doshas, which are energies believed to circulate in the body and govern physiological activity. There are three primary doshas: Vata (air and space), Pitta (fire and water), and Kapha (water and earth). Each person is believed to have a unique balance of these doshas, which can influence their health and personality.",
  },
  {
    title: "Prakriti",
    content:
      "Prakriti refers to an individual's unique constitution, which is determined by the predominance of doshas at birth. Understanding one's prakriti is important in Ayurveda for maintaining health and preventing disease. Ayurveda recognizes that each person's prakriti governs their physiological functions, temperament, preferences, and susceptibilities to disease.",
  },
  {
    title: "Treatment",
    content:
      "Ayurvedic treatment aims to restore balance to the doshas through various means, including herbal remedies, dietary changes, lifestyle modifications, and therapies such as massage (Abhyanga), detoxification (Panchakarma), and yoga. Panchakarma, meaning 'five actions,' is a comprehensive detoxification and rejuvenation therapy in Ayurveda.",
  },
  {
    title: "Herbal Remedies",
    content:
      "Ayurveda utilizes a wide range of herbs and botanical extracts in its medicinal preparations. These remedies are often tailored to the individual's dosha imbalance and specific health needs. Ayurvedic herbal remedies draw upon centuries of traditional knowledge and formulations passed down through oral traditions and ancient texts such as Charaka Samhita, Sushruta Samhita, and Ashtanga Hridaya.",
  },
  {
    title: "Diet and Nutrition",
    content:
      "Ayurveda places great emphasis on diet and nutrition as a means to maintain health. Foods are categorized based on their tastes (rasa) and qualities (guna), and dietary recommendations are made according to one's dosha imbalance. Ayurvedic dietary recommendations are personalized to each individual's unique constitution (prakriti), dosha imbalance, digestive strength (agni), and specific health concerns.",
  },
  {
    title: "Mind-Body Connection",
    content:
      "Ayurveda recognizes the interconnectedness of the mind, body, and spirit in health and disease. Practices such as meditation, yoga, and pranayama (breathing exercises) are often recommended to promote mental and emotional well-being. Yoga asanas (postures), pranayama (breathing exercises), and meditation are integral to Ayurvedic wellness routines, promoting physical strength, flexibility, and emotional balance.",
  },
  {
    title: "Preventive Health",
    content:
      "Ayurveda places a strong emphasis on preventive healthcare, advocating daily routines (Dinacharya) and seasonal practices (Ritucharya) to maintain balance and prevent illness. Seasonal recommendations include dietary adjustments, lifestyle modifications, and herbal remedies to counteract seasonal imbalances and promote health.",
  },
];

const Ayurveda = () => {
  const [selected, setSelected] = useState(true);
  const [selectedAspectIndex, setSelectedAspectIndex] = useState(0);

  const handleAspectClick = (index) => {
    setSelectedAspectIndex(index);
  };

  return (
    <>
      <div className="ayurveda-container">
        <div className="ayurveda-wrapper">
          <div className="ayurveda-header">What Is Ayurveda?</div>
          <div className="ayurveda-heading">
            Unveiling the Ancient System of Holistic Healing
          </div>
          <div className="ayurveda-meaning">
            Ayurveda is a traditional system of medicine with historical roots
            in the Indian subcontinent. It's considered one of the oldest
            healthcare systems in the world, with its origins dating back
            thousands of years. The word "Ayurveda" is derived from Sanskrit,
            with "Ayur" meaning life and "Veda" meaning knowledge or science, so
            Ayurveda can be loosely translated as the "science of life" or the
            "knowledge of longevity."
            <br />
            <br />
            Ayurveda, often called the "science of life," has been practiced in
            India for thousands of years and is considered one of the world's
            oldest healthcare systems. Here are some key aspects of Ayurveda:
          </div>
        </div>
        <div className="ayurveda-aspects-container">
          <div className="ayurveda-aspects-wrapper">
            <div className="left">
              {aspects.map((item, index) => (
                <button
                  key={index}
                  className={`btnn ${
                    selectedAspectIndex === index ? "active-btnn" : ""
                  }`}
                  onClick={() => handleAspectClick(index)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            {/* <span></span> */}
            <div className="right">
              <p>{aspects[selectedAspectIndex].content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ayurveda;
