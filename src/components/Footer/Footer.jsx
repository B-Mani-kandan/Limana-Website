import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Footer.css";
// import CLientLogo from "./ClientLogo/CLientLogo";
import HomeContact from "./HomeContact/HomeContact";
import { useLocation } from "react-router-dom";
import ClientDetails from "./WhatOurClientSay/ClientDetails";
import ImageSlider from "./ImageSlider/ImageSlider";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <ClientDetails />
      {location.pathname !== "/Contact-Us" && <ImageSlider />}
      {location.pathname !== "/Contact-Us" && <HomeContact />}
      {/* <CLientLogo /> */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-group">
              <h3 className="footer-title">Quick Link</h3>
              <RouterLink to="/Contact-Us" className="footer-link">
                Home
              </RouterLink>
              <ScrollLink
                to="About-us"
                smooth={true}
                offset={-100}
                duration={500}
                href="#About"
                className="footer-link"
              >
                About Us
              </ScrollLink>
              <RouterLink to="/Product-Service" className="footer-link">
                Product & Services
              </RouterLink>
              <RouterLink to="/Contact-Us" className="footer-link">
                Contact Us
              </RouterLink>
            </div>

            <div className="footer-group">
              <h3 className="footer-title">Product & Services</h3>
              <RouterLink to="/SMT-Fixtures" className="footer-link">
                SMT fixtures & carriers
              </RouterLink>
              <RouterLink to="/FCT-Fixtures" className="footer-link">
                Fct fixtures
              </RouterLink>
              <RouterLink to="/TesterAssembly" className="footer-link">
                Tester & Assembly Machines
              </RouterLink>
              <RouterLink to="/Machines" className="footer-link">
                Machines
              </RouterLink>
              <RouterLink to="/ESD-Consumables" className="footer-link">
                ESD Consumables
              </RouterLink>
              <RouterLink to="/Electronic-Assembly" className="footer-link">
                Electronic assembly Equipment
              </RouterLink>
              <RouterLink to="/FUJI-MounterSpares" className="footer-link">
                Fuji Mounter Spares
              </RouterLink>
              <RouterLink to="/ASM-MounterSpares" className="footer-link">
                Asm mounter spares
              </RouterLink>
              <RouterLink to="/Panasonic-MounterSpares" className="footer-link">
                Panasonic mounter spares
              </RouterLink>
              <RouterLink to="/AI-SpareParts" className="footer-link">
                Ai spare parts
              </RouterLink>
              <RouterLink to="/Cleaning-Solutions" className="footer-link">
                Cleaning Solutions
              </RouterLink>
              <RouterLink to="/Cleaning-Machines" className="footer-link">
                Cleaning Machines
              </RouterLink>
            </div>
            <div className="footer-group">
              <h3 className="footer-title">Support</h3>
              <a href="/" className="footer-link">
                Help Center
              </a>
              <RouterLink to="/Contact-Us" className="footer-link">
                Contact Us
              </RouterLink>
            </div>

            <div className="footer-group social-media">
              <h3 className="footer-title">Follow Us</h3>
              <div className="social-icons">
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-instagram-line"></i>
                </a>
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-twitter-x-fill"></i>
                </a>
                <a className="icon" href="/" aria-label="Facebook">
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
              <div className="footer-group" style={{ marginTop: "25%" }}>
                <h3 className="footer-title">Developed By</h3>
                <div className="Inv-Logo">
                  <a
                    href="https://invosys.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Invoking System Pvt . Ltd
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="legalOuter">
        <div className="legal">
          <h6 className="headings">Limana</h6>
        </div>
        <div className="legalLinkGroup">
          <a href="/terms-of-use" className="legalLink">
            <span className="label">TERMS</span>
          </a>
          <a href="/privacy-policy" className="legalLink">
            <span className="label">Privacy</span>
          </a>
          <a href="/" className="legalLink">
            <span className="label">© Limana 2025</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
