import React, { useEffect } from "react";
import "../ProductPages.css";
import GKGSOLDER from "../../../assets/MACHINES/GKGSOLDER.webp";
import GKGDISPENSER from "../../../assets/MACHINES/GKGDISPENSER.webp";
import HGLASER from "../../../assets/MACHINES/HGLASER.webp";
import HGLASERWELDING from "../../../assets/MACHINES/HGLASERWELDING.webp";
import PCBROUTING from "../../../assets/MACHINES/PCBROUTING.webp";
import BHS from "../../../assets/MACHINES/BHS.webp";
const cardData = [
  {
    id: 1,
    title: "GKG SOLDER ",
    description: "PASTE PRINTING",
    imageUrl: `${GKGSOLDER}`,
  },
  {
    id: 2,
    title: "GKG DISPENSER",
    description: "DISPENSER MACHINE",
    imageUrl: `${GKGDISPENSER}`,
  },
  {
    id: 3,
    title: "HG LASER",
    description: "LASER MACHINE",
    imageUrl: `${HGLASER}`,
  },
  {
    id: 4,
    title: "HG LASER WELDING",
    description: "LASER WELDING",
    imageUrl: `${HGLASERWELDING}`,
  },
  {
    id: 5,
    title: "PCB ROUTING ",
    description: " AND V GROOVE CUTTING MACHINE",
    imageUrl: `${PCBROUTING}`,
  },
  {
    id: 6,
    title: "BOARD HANDLING SYSTEM",
    description: "LOADER/UNLOADER, BUFFER/CONVEYOR,PCB CLEANER",
    imageUrl: `${BHS}`,
  },
];

export default function Machines() {
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
