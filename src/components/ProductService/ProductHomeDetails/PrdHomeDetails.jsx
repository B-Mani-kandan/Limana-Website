import React from "react";
import "./PrdHomeDetails.css";
import PRDIMG_1 from "../../../assets/PRODUCTSERVICE_HEAD/Machines.webp";
import PRDIMG_2 from "../../../assets/PRODUCTSERVICE_HEAD/TESTER.webp";
import PRDIMG_3 from "../../../assets/PRODUCTSERVICE_HEAD/Electronic.webp";
import PRDIMG_4 from "../../../assets/PRODUCTSERVICE_HEAD/ASM.webp";
import PRDIMG_5 from "../../../assets/PRODUCTSERVICE_HEAD/al.webp";
import PRDIMG_6 from "../../../assets/PRODUCTSERVICE_HEAD/cleaning.webp";
import { Link } from "react-scroll";
export default function PrdHomeDetails() {
  return (
    <div className="prd-home-wrapper">
      <div className="prd-home-left">
        <h1 className="prd-home-title">Our Products & Services</h1>
        <p className="prd-home-description">
          We offer SMT carriers, semiconductor sealing tooling, and non-standard
          automation solutions.
        </p>
        <p className="prd-home-description">
          Our services include customized assembly lines, packing line
          automation, and tooling clamps designed to enhance efficiency,
          precision, and scalability in manufacturing.
        </p>
        <Link
          to="cards-container"
          smooth={true}
          offset={-100}
          duration={2000}
          href="#explore"
          className="prd-home-button"
        >
          Explore Our Product
        </Link>
      </div>
      <div className="prd-home-right">
        <div className="prd-home-image-grid">
          <img src={PRDIMG_1} alt="PRDIMG_1" className="prd-home-image" />
          <img src={PRDIMG_2} alt="PRDIMG_2" className="prd-home-image" />
          <img src={PRDIMG_3} alt="PRDIMG_3" className="prd-home-image" />
          <img src={PRDIMG_4} alt="PRDIMG_4" className="prd-home-image" />
          <img src={PRDIMG_5} alt="PRDIMG_5" className="prd-home-image" />
          <img src={PRDIMG_6} alt="PRDIMG_6" className="prd-home-image" />
        </div>
      </div>
    </div>
  );
}
