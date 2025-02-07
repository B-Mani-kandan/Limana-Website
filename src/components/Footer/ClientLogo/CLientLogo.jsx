import React from "react";
import "./ClientLogo.css";
import CLIENTLOGO1 from "../../../assets/CLIENTLOGO/CLIENT2-Logo.webp";
import CLIENTLOGO2 from "../../../assets/CLIENTLOGO/CLIENT3-Logo.webp";
import CLIENTLOGO3 from "../../../assets/CLIENTLOGO/CLIENT4-Logo.webp";
import CLIENTLOGO4 from "../../../assets/CLIENTLOGO/CLIENT5-Logo.webp";
import CLIENTLOGO5 from "../../../assets/CLIENTLOGO/CLIENT6-Logo.webp";
import CLIENTLOGO6 from "../../../assets/CLIENTLOGO/CLIENT7-Logo.webp";
const CLientLogo = () => {
  return (
    <div className="logo-carousel">
      <div className="carousel-track">
        <img src={CLIENTLOGO1} alt="Logo 2" className="carousel-logo" />
        <img src={CLIENTLOGO2} alt="Logo 3" className="carousel-logo" />
        <img src={CLIENTLOGO3} alt="Logo 1" className="carousel-logo" />
        <img src={CLIENTLOGO4} alt="Logo 2" className="carousel-logo" />
        <img src={CLIENTLOGO5} alt="Logo 3" className="carousel-logo" />
        <img src={CLIENTLOGO6} alt="Logo 3" className="carousel-logo" />
      </div>
    </div>
  );
};

export default CLientLogo;
