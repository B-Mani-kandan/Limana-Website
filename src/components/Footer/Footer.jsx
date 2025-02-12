import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Footer.css";
import CLientLogo from "./ClientLogo/CLientLogo";
import HomeContact from "./HomeContact/HomeContact";
import { useLocation } from "react-router-dom";
import ClientDetails from "./WhatOurClientSay/ClientDetails";

const Footer = () => {
  const location = useLocation();
  return (
    <>
      <ClientDetails />
      {location.pathname !== "/Contact-Us" && <HomeContact />}
      <CLientLogo />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-sections">
            <div className="footer-group">
              <h3 className="footer-title">Quick Link</h3>
              <a href="/" className="footer-link">
                Home
              </a>
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
              <a href="/SMT-Fixtures" className="footer-link">
                SMT fixtures & carriers
              </a>
              <a href="/FCT-Fixtures" className="footer-link">
                Fct fixtures
              </a>
              <a href="/TesterAssembly" className="footer-link">
                Tester & Assembly Machines
              </a>
              <a href="/Machines" className="footer-link">
                Machines
              </a>
              <a href="/ESD-Consumables" className="footer-link">
                Esd Consumables
              </a>
              <a href="/Electronic-Assembly" className="footer-link">
                Electronic assembly Equipment
              </a>
              <a href="/FUJI-MounterSpares" className="footer-link">
                Fuji Mounter Spares
              </a>
              <a href="/ASM-MounterSpares" className="footer-link">
                Asm mounter spares
              </a>
              <a href="/Panasonic-MounterSpares" className="footer-link">
                Panasonic mounter spares
              </a>
              <a href="/AI-SpareParts" className="footer-link">
                Ai spare parts
              </a>
              <a href="/Cleaning-Solutions" className="footer-link">
                Cleaning Solutions
              </a>
              <a href="/Cleaning-Machines" className="footer-link">
                Cleaning Machines
              </a>
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
