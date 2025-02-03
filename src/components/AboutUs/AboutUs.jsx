import React from "react";
import "./AboutUs.css";
import Image from "../../assets/cta-wave-white.webp";
import CompanyImg from "../../assets/AboutImg-1.webp";
import CompanyImgs from "../../assets/AboutImg-2.webp";

const AboutUs = () => {
  return (
    <>
      <div className="About-us">
        <div className="portfolio-curve">
          <img src={Image} alt="" />
        </div>
        <div className="about-container">
          <div className="about-content">
            <h2>Reliable Automation Solutions</h2>
            <p>
              Founded in 2022, Limana Technologies Pvt Ltd is based in Chennai,
              India.
            </p>
            <p>
              We specialize in SMT carrier semiconductor sealing tooling and
              custom automation solutions.
            </p>
            <p>
              Our offerings include assembly lines, packing lines, and tooling
              clamps (fixtures).
            </p>
            <p>
              We also provide consulting, system design, and turnkey engineering
              services.
            </p>
            <p>
              Our solutions cater to consumer electronics, automotive, medical,
              and home appliances industries.
            </p>
            <p>At Limana, we focus on efficiency, reliability, and quality.</p>
          </div>
          <div className="about-image-container">
            <div className="about-image">
              <img src={CompanyImg} alt="About Us" />
            </div>
            <div className="overlay-image">
              <img
                src={CompanyImgs}
                className="object-fit"
                alt="Company Overlay"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
