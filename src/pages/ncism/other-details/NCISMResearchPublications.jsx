import "./NCISMResearchPublications.css";

const researchPublicationImages = [
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1785569257/WhatsApp_Image_2026-07-21_at_1.00.12_PM_aodhtg.jpg",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1785569256/WhatsApp_Image_2026-07-21_at_12.57.27_PM_pfa5jp.jpg",
];

const NCISMResearchPublications = () => {
  return (
    <section className="ncism-research-publications">
      <div className="ncism-research-publications__stack">
        {researchPublicationImages.map((imageSrc, index) => (
          <div className="ncism-research-publications__image-card" key={imageSrc}>
            <img
              src={imageSrc}
              alt={`NCISM research publication ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NCISMResearchPublications;
