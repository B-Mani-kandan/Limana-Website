import { useEffect } from "react";
import "../Card.css";
import MMFEEDER from "../../../assets/ASM/MMFEEDER.webp";
import SIPLACE_XFEEDER from "../../../assets/ASM/SIPLACE_XFEEDER.webp";
import HEADCAMERA_CP20P from "../../../assets/ASM/HEADCAMERA_CP20P.webp";
import HEADCAMERA_CPP from "../../../assets/ASM/HEADCAMERA_CPP.webp";
import DPDRIVE_CP20P from "../../../assets/ASM/DPDRIVE_CP20P.webp";
import DPDRIVE_CPP from "../../../assets/ASM/DPDRIVE_CPP.webp";
import COSENSORCP_P20P from "../../../assets/ASM/COSENSORCP_P20P.webp";
import COSENSORCPP from "../../../assets/ASM/COSENSORCPP.webp";
import SPECIAL_NOZZLE from "../../../assets/ASM/SPECIAL_NOZZLE.webp";
import STANDARD_NOZZLE from "../../../assets/ASM/STANDARD_NOZZLE.webp";
import NOZZLEMAGAZINE from "../../../assets/ASM/NOZZLEMAGAZINE.webp";
import NOZZLE from "../../../assets/ASM/NOZZLE.webp";
import CONSUMABLES from "../../../assets/ASM/CONSUMABLES.webp";
import CONSUMABLES_2 from "../../../assets/ASM/CONSUMABLES_2.webp";
import PRVVALVE_CPP_20P from "../../../assets/ASM/PRVVALVE_CPP_20P.webp";
import PRVVALVE_CPP from "../../../assets/ASM/PRVVALVE_CPP.webp";

const cardData = [
  {
    id: 1,
    title: "8 MM FEEDER",
    description: "It handles 8mm component tape in SMT assembly.",
    imageUrl: `${MMFEEDER}`,
  },
  {
    id: 2,
    title: "SIPLACE X FEEDER",
    description: "It feeds components precisely in SMT assembly.",
    imageUrl: `${SIPLACE_XFEEDER}`,
  },
  {
    id: 3,
    title: "HEAD CAMERA CP20P",
    description: "Is used for precise imaging in industrial applications.",
    imageUrl: `${HEADCAMERA_CP20P}`,
  },
  {
    id: 4,
    title: "HEAD CAMERA CPP",
    description: "Is used for precise imaging in various applications.",
    imageUrl: `${HEADCAMERA_CPP}`,
  },
  {
    id: 5,
    title: "DP DRIVE CP20P",
    description: "Is used for precise motion control in industrial systems.",
    imageUrl: `${DPDRIVE_CP20P}`,
  },
  {
    id: 6,
    title: "DP DRIVE CPP",
    description: "Is used for motion control in industrial applications.",
    imageUrl: `${DPDRIVE_CPP}`,
  },
  {
    id: 7,
    title: "CO SENSOR CP 20P",
    description: "It detects carbon monoxide levels in the environment.",
    imageUrl: `${COSENSORCP_P20P}`,
  },
  {
    id: 8,
    title: "CO SENSOR CPP",
    description: "It detects carbon monoxide levels in various environments.",
    imageUrl: `${COSENSORCPP}`,
  },
  {
    id: 9,
    title: "SPECIAL NOZZLE",
    description: " Is designed for specific dispensing or application needs.",
    imageUrl: `${SPECIAL_NOZZLE}`,
  },
  {
    id: 10,
    title: "STANDARD NOZZLE",
    description: "Is used for general dispensing or application purposes.",
    imageUrl: `${STANDARD_NOZZLE}`,
  },
  {
    id: 11,
    title: "NOZZLE MAGAZINE",
    description:
      " Is used for storing and organizing nozzles in industrial settings.",
    imageUrl: `${NOZZLEMAGAZINE}`,
  },
  {
    id: 12,
    title: "NOZZLE",
    description: "Its directing or controlling the flow of a fluid.",
    imageUrl: `${NOZZLE}`,
  },
  {
    id: 13,
    title: "CONSUMABLES",
    description: "Consumables are materials used in production.",
    imageUrl: `${CONSUMABLES}`,
  },
  {
    id: 14,
    title: "FILTER",
    description:
      "Is used to remove impurities from air, water, or other substances.",
    imageUrl: `${CONSUMABLES_2}`,
  },
  {
    id: 15,
    title: "PRVVALVE CPP 20P",
    description: " Is a pressure relief valve used to control system pressure.",
    imageUrl: `${PRVVALVE_CPP_20P}`,
  },
  {
    id: 16,
    title: "PRVVALVE CPP",
    description:
      "Is a pressure relief valve used to regulate pressure in systems.",
    imageUrl: `${PRVVALVE_CPP}`,
  },
];

export default function ASM() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="product-header">
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title"> MOUNTER SPARES</h2>
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
