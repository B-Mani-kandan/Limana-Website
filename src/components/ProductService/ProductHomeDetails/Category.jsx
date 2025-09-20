import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import SMT from "../../../assets/PRODUCTSERVICE_HEAD/SMT.webp";
import FCT from "../../../assets/PRODUCTSERVICE_HEAD/FCT.webp";
import TESTER from "../../../assets/PRODUCTSERVICE_HEAD/TESTER.webp";
import Machines from "../../../assets/PRODUCTSERVICE_HEAD/Machines.webp";
import ESD from "../../../assets/PRODUCTSERVICE_HEAD/ESD.webp";
import Electronic from "../../../assets/PRODUCTSERVICE_HEAD/Electronic.webp";
import FUJI from "../../../assets/PRODUCTSERVICE_HEAD/FUJI.webp";
import ASM from "../../../assets/PRODUCTSERVICE_HEAD/ASM.webp";
import PANASONIC from "../../../assets/PRODUCTSERVICE_HEAD/PANASONIC.webp";
import al from "../../../assets/PRODUCTSERVICE_HEAD/al.webp";
import cleaning from "../../../assets/PRODUCTSERVICE_HEAD/cleaning.webp";
import cleaning1 from "../../../assets/PRODUCTSERVICE_HEAD/cleaning1.webp";

const cardData = [
  {
    id: 1,
    title: "SMT Fixture & Carriers",
    description: "SMT Fixtures & Carriers ensure precise component handling.",
    imageUrl: `${SMT}`,
    link: "/SMT-Fixtures",
  },
  {
    id: 2,
    title: "Test Fixtures",
    description: "FCT Fixtures ensure precise testing alignment.",
    imageUrl: `${FCT}`,
    link: "/FCT-Fixtures",
  },
  {
    id: 3,
    title: "Test & Assembly Station",
    description: "Tester & Assembly Machines automate testing and assembly.",
    imageUrl: `${TESTER}`,
    link: "/TesterAssembly",
  },
  {
    id: 4,
    title: "SMT Solutions",
    description: "Machines streamline production and enhance efficiency.",
    imageUrl: `${Machines}`,
    link: "/Machines",
  },
  {
    id: 5,
    title: "ESD Consumables",
    description: "ESD Consumables prevent electrostatic discharge.",
    imageUrl: `${ESD}`,
    link: "/ESD-Consumables",
  },
  {
    id: 6,
    title: "Electronic Assembly",
    description: "Electronic Assembly Equipment enables efficient assembly.",
    imageUrl: `${Electronic}`,
    link: "/Electronic-Assembly",
  },
  {
    id: 7,
    title: " Mounter Spares",
    description: " Mounter Spares provide Quality replacement parts.",
    imageUrl: `${FUJI}`,
    link: "/FUJI-MounterSpares",
  },
  {
    id: 8,
    title: " Mounter Spares",
    description: "High-performance replacement parts for mounters.",
    imageUrl: `${ASM}`,
    link: "/ASM-MounterSpares",
  },
  {
    id: 9,
    title: " Mounter Spares",
    description: "High-quality parts for improved mounter performance.",
    imageUrl: `${PANASONIC}`,
    link: "/Panasonic-MounterSpares",
  },
  {
    id: 10,
    title: "AI Spare Parts",
    description: "Premium parts for efficient automated assembly processes.",
    imageUrl: `${al}`,
    link: "/AI-SpareParts",
  },
  {
    id: 11,
    title: "Cleaning Solutions",
    description: "Premium products for efficient electronic component cleaning",
    imageUrl: `${cleaning}`,
    link: "/Cleaning-Solutions",
  },
  {
    id: 12,
    title: "Cleaning Machine",
    description:
      "Advanced machines for precise and effective electronic part cleaning.",
    imageUrl: `${cleaning1}`,
    link: "/Cleaning-Machines",
  },
];
export function Category() {
  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <div key={card.id} className="card-container inter-var">
          <div className="card-body">
            <div className="card-item card-title">{card.title}</div>
            <p className="card-item card-description">{card.description}</p>
            <div className="card-item card-image-container">
              <img
                src={card.imageUrl}
                height="1000"
                width="1000"
                className="card-image"
                alt="thumbnail"
              />
            </div>
            <div className="card-footer">
              <Link className="card-item card-link" to={card.link}>
                View More →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
