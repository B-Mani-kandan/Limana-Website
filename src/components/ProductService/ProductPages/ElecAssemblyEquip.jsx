import React, { useEffect } from "react";
import BLUETOOTHDEVICE from "../../../assets/ELECTRONIC_ASSEMBLY/BLUETOOTHDEVICE.webp";
import AIRIONIZER from "../../../assets/ELECTRONIC_ASSEMBLY/AIRIONIZER.webp";
import COMPONENTCOUNTER from "../../../assets/ELECTRONIC_ASSEMBLY/COMPONENTCOUNTER.webp";
import SOLDERPASTEMIXTURE from "../../../assets/ELECTRONIC_ASSEMBLY/SOLDERPASTEMIXTURE.webp";
import PUSHPULL from "../../../assets/ELECTRONIC_ASSEMBLY/PUSHPULL.webp";
import TENSIONMETER from "../../../assets/ELECTRONIC_ASSEMBLY/TENSIONMETER.webp";
import DUSTPARTICLE from "../../../assets/ELECTRONIC_ASSEMBLY/DUSTPARTICLE.webp";
import SMTGREASEGUM from "../../../assets/ELECTRONIC_ASSEMBLY/SMTGREASEGUM.webp";
import SPLICINGCLIP from "../../../assets/ELECTRONIC_ASSEMBLY/SPLICINGCLIP.webp";
import SMTGREASE from "../../../assets/ELECTRONIC_ASSEMBLY/SMTGREASE.webp";
import AUTOMATICTAP from "../../../assets/ELECTRONIC_ASSEMBLY/AUTOMATICTAP.webp";
import AUTOMATICGLUE from "../../../assets/ELECTRONIC_ASSEMBLY/AUTOMATICGLUE.webp";
import SOLDERINGBITS from "../../../assets/ELECTRONIC_ASSEMBLY/SOLDERINGBITS.webp";
import POGOPINS from "../../../assets/ELECTRONIC_ASSEMBLY/POGOPINS.webp";
import "../Card.css";

const cardData = [
  {
    id: 1,
    title: "BLUETOOTH DEVICE TESTING MACHINE",
    description: "It tests Bluetooth device performance.",
    imageUrl: `${BLUETOOTHDEVICE}`,
  },
  {
    id: 2,
    title: "AIR IONIZER",
    description:
      "Air Ionizer improves air quality by neutralizing airborne particles.",
    imageUrl: `${AIRIONIZER}`,
  },
  {
    id: 3,
    title: "COMPONENT COUNTER MACHINE",
    description: "It counts electronic components accurately.",
    imageUrl: `${COMPONENTCOUNTER}`,
  },
  {
    id: 4,
    title: "SOLDER PASTE MIXTURE",
    description: "Solder Paste Mixture is used for electronics soldering.",
    imageUrl: `${SOLDERPASTEMIXTURE}`,
  },
  {
    id: 5,
    title: "PUSH PULL TESTER",
    description: "Push Pull Tester measures push and pull forces.",
    imageUrl: `${PUSHPULL}`,
  },
  {
    id: 6,
    title: "TENSION METER",
    description: "ension Meter measures the tension in a material or wire.",
    imageUrl: `${TENSIONMETER}`,
  },
  {
    id: 7,
    title: "DUST PARTICLE COUNTER METER",
    description: "Dust Particle Counter Meter measures dust particle levels.",
    imageUrl: `${DUSTPARTICLE}`,
  },
  {
    id: 8,
    title: "SMT GREASE GUN",
    description: "It is used for applying grease in SMT assembly.",
    imageUrl: `${SMTGREASEGUM}`,
  },
  {
    id: 9,
    title: "SPLICING CLIP TOOL",
    description: "It is used for joining wires or cables in assembly.",
    imageUrl: `${SPLICINGCLIP}`,
  },
  {
    id: 10,
    title: "SMT GREASE",
    description: "SMT Grease is used for lubrication in SMT assembly.",
    imageUrl: `${SMTGREASE}`,
  },
  {
    id: 11,
    title: "AUTOMATIC TAP DISPENSER",
    description: "Automatic Tap Dispenser dispenses taps automatically.",
    imageUrl: `${AUTOMATICTAP}`,
  },
  {
    id: 12,
    title: "AUTOMATIC GLUE DISPENSER",
    description: "Automatic Glue Dispenser applies glue automatically.",
    imageUrl: `${AUTOMATICGLUE}`,
  },
  {
    id: 13,
    title: "SOLDERING BITS",
    description: "Soldering Bits are tips used for soldering in electronics.",
    imageUrl: `${SOLDERINGBITS}`,
  },
  {
    id: 14,
    title: "POGO PINS",
    description: "Pogo Pins are spring-loaded electrical connectors.",
    imageUrl: `${POGOPINS}`,
  },
];

export default function ElecAssemblyEquip() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="product-header">
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title">ELECTRONIC ASSEMBLY EQUIPMENT</h2>
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
