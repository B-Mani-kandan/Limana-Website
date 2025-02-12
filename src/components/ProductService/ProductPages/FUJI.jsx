import React, { useEffect } from "react";
import "../Card.css";
import NXT16 from "../../../assets/FUJI/NXT16mm.webp";
import NXT12 from "../../../assets/FUJI/NXT12mm.webp";
import Revolver from "../../../assets/FUJI/Revolver.webp";
import BOXPRISM from "../../../assets/FUJI/BOXPRISM.webp";
import NOZZLE from "../../../assets/FUJI/NOZZLE.webp";
import FILTER from "../../../assets/FUJI/FILTER.webp";
import CP6SHAFT from "../../../assets/FUJI/CP6SHAFT.webp";
import CP7SHAFT from "../../../assets/FUJI/CP7SHAFT.webp";
import NXTH1 from "../../../assets/FUJI/NXTH1.webp";
import NXTH08 from "../../../assets/FUJI/NXTH08.webp";
import NOZZLE_STATION from "../../../assets/FUJI/NOZZLE_STATION.webp";
import NOZZLE_NA74A from "../../../assets/FUJI/NOZZLE_NA74A.webp";
import MOTOR_SGMAS from "../../../assets/FUJI/MOTOR_SGMAS.webp";
import CP8CYLINDER from "../../../assets/FUJI/CP8CYLINDER.webp";
import CP7HOLDER from "../../../assets/FUJI/CP7HOLDER.webp";
import FUJIVACUUM from "../../../assets/FUJI/FUJIVACUUM.webp";
const cardData = [
  {
    id: 1,
    title: "NXT 16mm FEEDER KT16C",
    description: "A 16mm component feeder for SMT assembly.",
    imageUrl: `${NXT16}`,
  },
  {
    id: 2,
    title: "FUJI NXT 12mm FEEDER KT12C",
    description: "A precise automatic component feeder for SMT assembly.",
    imageUrl: `${NXT12}`,
  },
  {
    id: 3,
    title: "REVOLVER AUTO TOOL ASSY 2UGGHB000300",
    description:
      "Is an automated tool assembly for precise industrial applications.",
    imageUrl: `${Revolver}`,
  },
  {
    id: 4,
    title: "BOXPRISM XB03215",
    description: "Is a versatile industrial component.",
    imageUrl: `${BOXPRISM}`,
  },
  {
    id: 5,
    title: "V12 NOZZLE SHAFT AGKHA003501",
    description: "Is a precision shaft for nozzle applications.",
    imageUrl: `${NOZZLE}`,
  },
  {
    id: 6,
    title: "FILTER AA19H06",
    description: "Is an industrial-grade filtration component.",
    imageUrl: `${FILTER}`,
  },
  {
    id: 7,
    title: "CP6 SHAFT AWPH3068",
    description: "Is a reliable shaft for industrial use.",
    imageUrl: `${CP6SHAFT}`,
  },
  {
    id: 8,
    title: "CP7 SHAFT ADGPH3302",
    description: "Is a durable shaft for industrial applications.",
    imageUrl: `${CP7SHAFT}`,
  },
  {
    id: 9,
    title: "NXT H1 NOZZLE R36-100-260 AA08113",
    description: "Is a high-performance fluid dispensing nozzle.",
    imageUrl: `${NXTH1}`,
  },
  {
    id: 10,
    title: "NXT H08 H12 1.3 NOZZLE",
    description: "Is a high-precision nozzle for efficient fluid dispensing.",
    imageUrl: `${NXTH08}`,
  },
  {
    id: 11,
    title: "NOZZLE STATION N032C",
    description: "Is a precision nozzle station for fluid dispensing.",
    imageUrl: `${NOZZLE_STATION}`,
  },
  {
    id: 12,
    title: "NOZZLE STATION NA74A",
    description: "Is an industrial nozzle station for precise fluid control.",
    imageUrl: `${NOZZLE_NA74A}`,
  },
  {
    id: 13,
    title: "MOTOR SGMAS C2A2A FJ31 SAM6870",
    description: "Is a high-performance industrial motor.",
    imageUrl: `${MOTOR_SGMAS}`,
  },
  {
    id: 14,
    title: "CP8 CYLINDER ADCPA8142",
    description: "Is a durable cylinder for industrial applications.",
    imageUrl: `${CP8CYLINDER}`,
  },
  {
    id: 15,
    title: "CP7 HOLDER ADCPH3262 ",
    description: "Is a precision mounting component.",
    imageUrl: `${CP7HOLDER}`,
  },
  {
    id: 16,
    title: "FUJI VACUUM GENERATOR H10070",
    description: "Is a high-efficiency vacuum generator for industrial use.",
    imageUrl: `${FUJIVACUUM}`,
  },
];

export default function FUJI() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="product-header">
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title">FUJI MOUNTER SPARES</h2>
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
