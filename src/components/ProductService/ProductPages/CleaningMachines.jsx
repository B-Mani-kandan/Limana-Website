import React from "react";
import "../ProductPages.css";
import MACH_1 from "../../../assets/CLEANING_MACHINE/MACH_1.webp";
import MACH_2 from "../../../assets/CLEANING_MACHINE/MACH_2.webp";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import CleaningMachineCard from "./CleaningMachineCard";
const CleaningMachines = () => {
  return (
    <>
      <CleaningMachineCard />
      <div className="cleaningmach-container">
        <div className="cleaningmach-section">
          <div className="cleaningmach-content">
            <h3 className="ESD-title">Product Features</h3>
            <div className="ESD-description">
              <p>
                <ArrowRightIcon className="mch-icon" /> Fast and thoroughly
                cleaning
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> Saving labor, time,
                detergent
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> OEM/ODM wholesale
                service
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> No damage for cleaning
                the parts
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> Removing dirt and dust
                easily
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> With emergency stop
                switch
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> SUS 304/SUS 316 tank
                material
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> Filtration system to
                filter floating debris
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> Powerful and durable
                branded pumps
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> Free stainless steel
                cleaning basket
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> With water inlet/outlet
                in suitable place
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> With stainless steel
                basket
              </p>
              <p>
                <ArrowRightIcon className="mch-icon" /> Double/Multi frequency
                is available
              </p>
            </div>
          </div>
          <div className="cleaningmach-image">
            <img src={MACH_1} alt="Cleaning Machine" />
          </div>
        </div>
        <div className="cleaningmach-section cleaningmach-reverse">
          <div className="cleaningmach-content">
            <h2 className="ESD-title">A-500</h2>
            <div className="ESD-description">
              <p>No Consumables</p>

              <p>
                Perfectly handles various 30 surfaces such as steps,
                through-holes, etc.
              </p>
              <p>
                Utilizes clean air as a medium for non-contact cleaning,
                ensuring no damage to products and preventing secondary
                pollution.
              </p>
              <p>
                Closed-loop system that preserves airflow and pressure balance
                in the shop-floor, without contaminating the environment.
              </p>
              <p>Compact design, easy to install and maintain.</p>
            </div>
          </div>
          <div className="cleaningmach-image">
            <img src={MACH_2} alt="Eco-friendly Cleaning Machine" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CleaningMachines;
