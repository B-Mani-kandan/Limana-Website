import React, { useEffect } from "react";
import "../ProductHomeDetails/Category.css";
import LED from "../../../assets/CLEANING_SOLUTIONS/LED.webp";
import DISPLAY from "../../../assets/CLEANING_SOLUTIONS/DISPLAY.webp";
import PCB from "../../../assets/CLEANING_SOLUTIONS/PCB.webp";
import SEMI_CONDUCTOR from "../../../assets/CLEANING_SOLUTIONS/SEMI_CONDUCTOR.webp";
import LITHIUM from "../../../assets/CLEANING_SOLUTIONS/LITHIUM_ION.webp";
import CAMERA_MODULE from "../../../assets/CLEANING_SOLUTIONS/CAMERA_MODULE.webp";

const cardData = [
  {
    id: 1,
    title: "LED INDUSTRY",
    description:
      "Specialized cleaning solutions enhance LED industry performance.",
    imageUrl: `${LED}`,
  },
  {
    id: 2,
    title: "DISPLAY INDUSTRY",
    description: "Specialized cleaning solutions for the display industry.",
    imageUrl: `${DISPLAY}`,
  },
  {
    id: 3,
    title: "PCB INDUSTRY",
    description: "PCB cleaning solutions enhance performance and reliability.",
    imageUrl: `${PCB}`,
  },
  {
    id: 4,
    title: "SEMICONDUCTOR INDUSTRY",
    description:
      "Semiconductor cleaning solutions ensure precision and reliability.",
    imageUrl: `${SEMI_CONDUCTOR}`,
  },
  {
    id: 5,
    title: "LITHIUM BATTERY INDUSTRY",
    description:
      "Lithium battery cleaning solutions enhance safety and performance.",
    imageUrl: `${LITHIUM}`,
  },
  {
    id: 6,
    title: "CAMERA MODULE",
    description: " Is used for imaging and inspection in various applications.",
    imageUrl: `${CAMERA_MODULE}`,
  },
];

export default function ExpertiseCleaning() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ paddingLeft: "5rem" }}>
        <h4
          style={{
            textTransform: "uppercase",
            fontSize: "20px",
            fontWeight: "600",
            color: "#004449",
            letterSpacing: "1.7px",
            marginBottom: "-2%",
          }}
        >
          Specialized Cleaning Solutions for These Industries
        </h4>
      </div>
      <div className="cards-container">
        {cardData.map((card) => (
          <div key={card.id} className="card-container inter-var">
            <div className="card-body">
              <div className="card-item card-image-container">
                <img
                  src={card.imageUrl}
                  height="1000"
                  width="1000"
                  className="card-image"
                  alt="thumbnail"
                />
              </div>
              <div className="card-item card-title">{card.title}</div>
              <p className="card-item card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
