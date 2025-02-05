import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import "../CLeaningSolution.css";
import ExpertiseCleaning from "./ExpertiseCleaning";

const features = [
  {
    name: "Cleaning Machines",
    description:
      "Efficient, durable, and high-performance solutions for industrial and commercial cleaning needs.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Cleaning Solvents",
    description:
      "Powerful, safe, and effective solutions for removing dirt, grease, and stains across various industries.",
    icon: LockClosedIcon,
  },
  {
    name: "Wiper Roll",
    description:
      "Highly absorbent and durable rolls for efficient cleaning in industrial and commercial settings.",
    icon: ArrowPathIcon,
  },
  {
    name: "Cleaning Cloths",
    description:
      "Soft, durable, and highly absorbent cloths for effective cleaning across various surfaces.",
    icon: FingerPrintIcon,
  },
];

const CleaningSolution = () => {
  return (
    <>
      <div className="feature-container">
        <div className="feature-content">
          <h2 className="feature-subtitle">Product & Services</h2>
          <p style={{ textTransform: "uppercase" }} className="feature-title">
            Expertise In Cleaning Solutions
          </p>
          <p className="feature-description">
            We provide industry-leading cleaning solutions tailored to meet the
            highest standards. Our advanced techniques ensure hygiene, safety,
            and efficiency across various sectors. With a commitment to
            excellence, we deliver customized solutions for optimal cleanliness.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.name} className="feature-card">
              <div className="feature-icon">
                <feature.icon aria-hidden="true" className="icon" />
              </div>
              <h3 className="feature-name">{feature.name}</h3>
              <p className="feature-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ExpertiseCleaning />
    </>
  );
};

export default CleaningSolution;
