import React, { useEffect } from "react";
import "../Card.css";
import EIGHTMM_FEEDER from "../../../assets/PANASONIC/EIGHTMM_FEEDER.webp";
import TWELEMM_FEEDER from "../../../assets/PANASONIC/TWELEMM_FEEDER.webp";
import NOZZLE_MAGAZINE from "../../../assets/PANASONIC/NOZZLE_MAGAZINE.webp";
import MAGAZINE from "../../../assets/PANASONIC/MAGAZINE.webp";
import SIXTEEN_HEADNOZZLE from "../../../assets/PANASONIC/SIXTEEN_HEADNOZZLE.webp";
import TWOHEAD_NOZZLE from "../../../assets/PANASONIC/TWOHEAD_NOZZLE.webp";
import NOZZLE_HOLDER from "../../../assets/PANASONIC/NOZZLE_HOLDER.webp";
import SPRING_NOZZLE from "../../../assets/PANASONIC/SPRING_NOZZLE.webp";
import CPAKCAL from "../../../assets/PANASONIC/CPAKCAL.webp";
import CPKCAL_CONSU from "../../../assets/PANASONIC/CPKCAL_CONSU.webp";
import VACUMFILTER from "../../../assets/PANASONIC/VACUMFILTER.webp";
import SPRINGNOZZLE_ARM from "../../../assets/PANASONIC/SPRINGNOZZLE_ARM.webp";
import PARTCAMERA from "../../../assets/PANASONIC/PARTCAMERA.webp";
import CCAMERA from "../../../assets/PANASONIC/CCAMERA.webp";
import SERVO_DRIVE from "../../../assets/PANASONIC/SERVO_DRIVE.webp";
import SERVO_MOTOR from "../../../assets/PANASONIC/SERVO_MOTOR.webp";

const cardData = [
  {
    id: 1,
    title: "8 MM FEEDER",
    description: "Is used for feeding 8mm tape in SMT assembly.",
    imageUrl: `${EIGHTMM_FEEDER}`,
  },
  {
    id: 2,
    title: "12/6 MM FEEDER",
    description: " 12/6 MM Feeder feeds 12mm and 6mm tapes in SMT assembly.",
    imageUrl: `${TWELEMM_FEEDER}`,
  },
  {
    id: 3,
    title: "NOZZLE MAGAZINE",
    description: "Nozzle Magazine stores and organizes in SMT assembly.",
    imageUrl: `${NOZZLE_MAGAZINE}`,
  },
  {
    id: 4,
    title: "MAGAZINE",
    description: "Magazine stores and organizes components",
    imageUrl: `${MAGAZINE}`,
  },
  {
    id: 5,
    title: "16 HEAD NOZZLE",
    description: "Is used for multi-point dispensing in SMT assembly..",
    imageUrl: `${SIXTEEN_HEADNOZZLE}`,
  },
  {
    id: 6,
    title: "2 HEAD NOZZLE",
    description: "It enables dual-point dispensing in SMT assembly.",
    imageUrl: `${TWOHEAD_NOZZLE}`,
  },
  {
    id: 7,
    title: "NOZZLE HOLDER",
    description: "Nozzle Holder secures and organizes in SMT assembly.",
    imageUrl: `${NOZZLE_HOLDER}`,
  },
  {
    id: 8,
    title: "SPRING FOR NOZZLE CUSION",
    description: "It provides support and flexibility in nozzle applications.",
    imageUrl: `${SPRING_NOZZLE}`,
  },
  {
    id: 9,
    title: "CPK CAL CONSUMABLES",
    description: "It is used for calibration in industrial applications.",
    imageUrl: `${CPAKCAL}`,
  },
  {
    id: 10,
    title: "CPK CAL CONSUMABLES",
    description: "It is used for calibration in industrial applications",
    imageUrl: `${CPKCAL_CONSU}`,
  },
  {
    id: 11,
    title: "VACUM FILTER",
    description: "It removes impurities from air or liquids in vacuum systems.",
    imageUrl: `${VACUMFILTER}`,
  },
  {
    id: 12,
    title: "SPRING FRO NOZZLE CLAMP ARM",
    description: "It provides tension and stability for nozzle clamping.",
    imageUrl: `${SPRINGNOZZLE_ARM}`,
  },
  {
    id: 13,
    title: "PART CAMERA",
    description: "It captures component images for inspection.",
    imageUrl: `${PARTCAMERA}`,
  },
  {
    id: 14,
    title: "C CAMERA",
    description: "Capturing images in industrial or inspection processes.",
    imageUrl: `${CCAMERA}`,
  },
  {
    id: 15,
    title: "SERVO DRIVE",
    description: "Controls the motion of a servo motor in automation systems.",
    imageUrl: `${SERVO_DRIVE}`,
  },
  {
    id: 16,
    title: "SERVO MOTOR",
    description: "Servo Motor provides precise control in automation systems.",
    imageUrl: `${SERVO_MOTOR}`,
  },
];

export default function Panasonic() {
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
