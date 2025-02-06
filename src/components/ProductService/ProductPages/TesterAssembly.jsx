import React, { useEffect } from "react";
import "../ProductPages.css";
import EOL from "../../../assets/TESTERASSEMBLY/EOLTESTER.webp";
import ACTUATORTESTER from "../../../assets/TESTERASSEMBLY/ACTUATORTESTER.webp";
import STISTATION from "../../../assets/TESTERASSEMBLY/STISTATION.webp";
import PCBCONNECTOR from "../../../assets/TESTERASSEMBLY/PCBCONNECTOR.webp";

const cardData = [
  {
    id: 1,
    title: "EOL TESTER",
    description:
      "It checks product functionality at the end of the production line.",
    imageUrl: `${EOL}`,
  },
  {
    id: 2,
    title: "ACTUATOR TESTER",
    description: "It evaluates the performance and functionality of actuators.",
    imageUrl: `${ACTUATORTESTER}`,
  },
  {
    id: 3,
    title: "STI STATION",
    description:
      "Is used for precise assembly and inspection in manufacturing.",
    imageUrl: `${STISTATION}`,
  },
  {
    id: 4,
    title: "PCB CONNECTOR",
    description:
      "PCB Connector links components for signal or power transmission.",
    imageUrl: `${PCBCONNECTOR}`,
  },
];

export default function TesterAssembly() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ marginTop: "9%", paddingLeft: "2rem" }}>
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title">FCT FIXTURES</h2>
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
