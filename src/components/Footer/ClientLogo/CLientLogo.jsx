import React from "react";
import "./ClientLogo.css";
// import Logo1 from "../../../assets/1-Logo.png";
import Logo2 from "../../../assets/2-Logo.png";
import Logo3 from "../../../assets/3-Logo.png";
import Logo4 from "../../../assets/4-Logo.png";
import Logo5 from "../../../assets/5-Logo.png";
import Logo6 from "../../../assets/6-Logo.png";
import Logo7 from "../../../assets/7-Logo.png";
const CLientLogo = () => {
  return (
    <div className="logo-carousel">
      <div className="carousel-track">
        {/* <img src={Logo1} alt="Logo 1" className="carousel-logo" /> */}
        <img src={Logo2} alt="Logo 2" className="carousel-logo" />
        <img src={Logo3} alt="Logo 3" className="carousel-logo" />
        <img src={Logo4} alt="Logo 1" className="carousel-logo" />
        <img src={Logo5} alt="Logo 2" className="carousel-logo" />
        <img src={Logo6} alt="Logo 3" className="carousel-logo" />
        <img src={Logo7} alt="Logo 3" className="carousel-logo" />
      </div>
    </div>
  );
};

export default CLientLogo;
