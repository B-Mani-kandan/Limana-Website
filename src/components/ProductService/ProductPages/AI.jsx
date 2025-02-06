import React, { useEffect } from "react";
import "../Card.css";
import PANA_1 from "../../../assets/AISPARE_PARTS/PANA_1.webp";
import PANA_2 from "../../../assets/AISPARE_PARTS/PANA_2.webp";
import PANA_3 from "../../../assets/AISPARE_PARTS/PANA_3.webp";
import PANA_4 from "../../../assets/AISPARE_PARTS/PANA_4.webp";
import PANA_5 from "../../../assets/AISPARE_PARTS/PANA_5.webp";
import PANA_6 from "../../../assets/AISPARE_PARTS/PANA_6.webp";
import PANA_7 from "../../../assets/AISPARE_PARTS/PANA_7.webp";
import PANA_8 from "../../../assets/AISPARE_PARTS/PANA_8.webp";
import UNIVERSAL_1 from "../../../assets/AISPARE_PARTS/UNIVERSAL_1.webp";
import UNIVERSAL_2 from "../../../assets/AISPARE_PARTS/UNIVERSAL_2.webp";
import UNIVERSAL_3 from "../../../assets/AISPARE_PARTS/UNIVERSAL_3.webp";
import UNIVERSAL_4 from "../../../assets/AISPARE_PARTS/UNIVERSAL_4.webp";
import UNIVERSAL_5 from "../../../assets/AISPARE_PARTS/UNIVERSAL_5.webp";
import UNIVERSAL_6 from "../../../assets/AISPARE_PARTS/UNIVERSAL_6.webp";
import UNIVERSAL_7 from "../../../assets/AISPARE_PARTS/UNIVERSAL_7.webp";
import UNIVERSAL_8 from "../../../assets/AISPARE_PARTS/UNIVERSAL_8.webp";

const cardData = [
  {
    id: 1,
    title: "PANASONIC RH3 PARTS",
    description: "SMT Fixtures & Carriers ensure precise component handling.",
    imageUrl: `${PANA_1}`,
  },
  {
    id: 2,
    title: "RHS,RHU PARTS",
    description: "FCT Fixtures ensure precise testing alignment.",
    imageUrl: `${PANA_2}`,
  },
  {
    id: 3,
    title: "PANASONIC AVB PARTS",
    description: "Tester & Assembly Machines automate testing and assembly.",
    imageUrl: `${PANA_3}`,
  },
  {
    id: 4,
    title: "PANASONIC AVB PARTS",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${PANA_4}`,
  },
  {
    id: 5,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${PANA_5}`,
  },
  {
    id: 6,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${PANA_6}`,
  },
  {
    id: 7,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${PANA_7}`,
  },
  {
    id: 8,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${PANA_8}`,
  },
  {
    id: 9,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_1}`,
  },
  {
    id: 10,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_2}`,
  },
  {
    id: 11,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_3}`,
  },
  {
    id: 12,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_4}`,
  },
  {
    id: 13,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_5}`,
  },
  {
    id: 14,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_6}`,
  },
  {
    id: 15,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_7}`,
  },
  {
    id: 16,
    title: "Machines",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${UNIVERSAL_8}`,
  },
];

export default function AI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ marginTop: "9%", paddingLeft: "2rem" }}>
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title">AI SPARES PARTS</h2>
      </div>
      <div className="Prd-cards-container">
        {cardData.map((card) => (
          <div key={card.id} className="Prd-card-container inter-var">
            <div className="Prd-card-body">
              <div className="Prd-card-item Prd-card-image-container">
                <img
                  src={card.imageUrl}
                  height="1000"
                  width="1000"
                  className="Prd-card-image"
                  alt="thumbnail"
                />
              </div>
              <div className="Prd-card-item Prd-card-title">{card.title}</div>
              <p className="Prd-card-item Prd-card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
