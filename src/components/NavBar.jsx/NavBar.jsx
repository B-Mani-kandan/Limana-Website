import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../../assets/COMMON/Logo_Limana.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1118) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            <img src={Logo} alt="logo" />
            <div className="outlined-text">Limana</div>
          </Link>
          <div
            className={`nav__toggle ${showMenu ? "show-icon" : ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <i className="ri-menu-line nav__toggle-menu"></i>
            <i className="ri-close-line nav__toggle-close"></i>
          </div>
        </div>
        <div
          className={`nav__menu ${showMenu ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Product-Service"
                className="nav__link"
                onClick={closeMenu}
              >
                Product & Services
              </Link>
            </li>

            <li>
              <Link to="/Contact-Us" className="nav__link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
