import React, { useEffect } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CubeTransparentIcon,
} from "@heroicons/react/20/solid";
import "../ProductPages.css";

import ESD from "../../../assets/PRODUCTSERVICE_HEAD/ESD.webp";
import ESD_BUDS from "../../../assets/ESDCONSUMABLES/ESD_BUDS.webp";
import ESD_DISPOSAL from "../../../assets/ESDCONSUMABLES/ESD_DISPOSAL.webp";
import ESD_GLOVES from "../../../assets/ESDCONSUMABLES/ESD_GLOVES.webp";
import ESD_PIN from "../../../assets/ESDCONSUMABLES/ESD_PIN.webp";
import ESD_PRODUCTS from "../../../assets/ESDCONSUMABLES/ESD_PRODUCTS.webp";
import ESD_STARPS from "../../../assets/ESDCONSUMABLES/ESD_STRAPS.webp";

export default function ESDConsumables() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="ESD-container">
      <div className="background-svg"></div>
      <div className="grid-container">
        <div className="text-section">
          <p className="highlight-text">Product & Service</p>
          <h1 className="ESD-title">ESD CONSUMABLES</h1>
          <p className="ESD-description">
            ESD (Electrostatic Discharge) Consumables are specialized materials
            used to prevent static electricity buildup and discharge, ensuring
            the protection of sensitive electronic components during
            manufacturing, assembly, and handling.
          </p>
          <p className="ESD-description">
            These include ESD-safe gloves, wrist straps, mats, bags, and
            clothing, which help maintain a controlled electrostatic
            environment, reducing the risk of damage to delicate circuits and
            devices.
          </p>
          <h4 className="ESD-sub">Common ESD consumables</h4>
          <p className="ESD-description">
            <span>ESD Gloves: </span>Provide protection against static discharge
            while allowing dexterity for handling delicate components.
          </p>
          <p className="ESD-description">
            <span>ESD Wrist Straps: </span>Ground operators to prevent static
            buildup and sudden discharges.
          </p>
          <p className="ESD-description">
            <span>ESD Mats: </span>Used on workbenches and floors to create a
            static-free workspace.
          </p>
          <p className="ESD-description">
            <span>ESD Bags: </span>Shield electronic components from
            electrostatic damage during storage and transport.
          </p>
          <p className="ESD-description">
            <span>ESD Garments: </span>Lab coats, smocks, and footwear designed
            to dissipate static charges.
          </p>
        </div>
        <div className="image-container">
          <img alt="esd" src={ESD} className="ESD_image" />
        </div>
        <div className="info-section">
          <p className="ESD-description">
            By implementing ESD consumables in work environments, industries
            such as semiconductor manufacturing, PCB assembly, and electronics
            production can minimize the risks associated with electrostatic
            discharge, ensuring higher product reliability and longevity.
          </p>
          <ul className="list">
            <li className="list-item">
              <CubeTransparentIcon className="Esd-icon" />
              <span>
                <strong>ESD GLOVES</strong>
              </span>
            </li>
            <img src={ESD_GLOVES} className="esd-image" alt="esd_gloves" />
            <li className="list-item">
              <CubeTransparentIcon className="Esd-icon" />
              <span>
                <strong>ESD WRIST STRAPS</strong>
              </span>
            </li>
            <img src={ESD_STARPS} className="esd-image" alt="esd_straps" />
            <li className="list-item">
              <CubeTransparentIcon className="Esd-icon" />
              <span>
                <strong>ESD DISPOSAL</strong>
              </span>
            </li>
            <img src={ESD_DISPOSAL} className="esd-image" alt="esd_disposal" />
            <li className="list-item">
              <CubeTransparentIcon className="Esd-icon" />
              <span>
                <strong>ESD PRODUCTS</strong>
              </span>
            </li>
            <img src={ESD_PRODUCTS} className="esd-image" alt="esd_products" />
            <li className="list-item">
              <CubeTransparentIcon className="Esd-icon" />
              <span>
                <strong>ESD_BUDS</strong>
              </span>
            </li>
            <img src={ESD_BUDS} className="esd-image" alt="esd_buds" />
            <li className="list-item">
              <CubeTransparentIcon className="Esd-icon" />
              <span>
                <strong>ESD PIN</strong>
              </span>
            </li>
            <img src={ESD_PIN} className="esd-image" alt="esd_pin" />
          </ul>
        </div>
      </div>
    </div>
  );
}
