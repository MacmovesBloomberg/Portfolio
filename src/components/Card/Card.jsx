import React from "react";
import "./CardComponent.css";

const cardsData = [
  {
    id: 1,
    name: "Travel Blog",
    backgroundImage: 'url("src/assets/trvl.png")',
    websiteLink: "https://roaring-dusk-76b360.netlify.app/",
  },
  {
    id: 2,
    name: "News Feed",
    backgroundImage: 'url("src/assets/news.png")',
    websiteLink: "https://criocarouselsite.netlify.app/",
  },
  {
    id: 3,
    name: "E Shopping",
    backgroundImage: 'url("src/assets/eshop.png")',
    websiteLink:
      "https://64a1942d13d46c6001548445--courageous-dodol-e8f996.netlify.app/",
  },
];

export default function CardComponent() {
  const handleCardClick = (websiteLink) => {
    window.location.href = websiteLink;
  };

  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundImage: card.backgroundImage }}
          onClick={() => handleCardClick(card.websiteLink)}
        >
          <div className="card-content">
            <h3>{card.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
