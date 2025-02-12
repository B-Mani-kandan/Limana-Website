import React, { useState, useEffect } from "react";
import "./NavBar.css";
import "remixicon/fonts/remixicon.css";
import Logo from "../../assets/Logo_Limana.webp";
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
            {/* <Dropdown
              title="Assistance"
              items={discoverItems}
              closeMenu={closeMenu}
            /> */}
            <li>
              <Link
                to="/Product-Service"
                className="nav__link"
                onClick={closeMenu}
              >
                Product & Services
              </Link>
            </li>
            {/* <Dropdown title="Menu" items={companyItems} closeMenu={closeMenu} /> */}

            <li>
              <Link to="/Contact-Us" className="nav__link" onClick={closeMenu}>
                Contact
              </Link>
            </li>

            {/* <li className="last-li">
              <a
                className="btn-Home"
                href="http://client.airsteamlogistics.com/"
              >
                Client Login
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

// const Dropdown = ({ title, items, closeMenu }) => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(min-width: 1118px)");
//     const handleMediaChange = (event) => {
//       if (event.matches) {
//         setShowDropdown(false);
//       }
//     };
//     mediaQuery.addListener(handleMediaChange);
//     return () => mediaQuery.removeListener(handleMediaChange);
//   }, []);

//   return (
//     <li
//       className="dropdown__item"
//       onMouseEnter={() => window.innerWidth >= 1118 && setShowDropdown(true)}
//       onMouseLeave={() => window.innerWidth >= 1118 && setShowDropdown(false)}
//     >
//       <div
//         className="nav__link dropdown__button"
//         onClick={() =>
//           window.innerWidth < 1118 && setShowDropdown(!showDropdown)
//         }
//       >
//         {title}{" "}
//         <i
//           className={`ri-arrow-down-s-line dropdown__arrow ${
//             showDropdown ? "rotate" : ""
//           }`}
//         ></i>
//       </div>
//       <div
//         className={`dropdown__container ${showDropdown ? "show-dropdown" : ""}`}
//       >
//         <div className="dropdown__content">
//           {items.map((group, index) => (
//             <div className="dropdown__group" key={index}>
//               <ul className="dropdown__list">
//                 {group.links.map((link, idx) => (
//                   <li key={idx}>
//                     <Link
//                       to={link.href}
//                       className="dropdown__link"
//                       onClick={closeMenu}
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </li>
//   );
// };

// const discoverItems = [
//   {
//     links: [
//       { href: "/Sea-Frieght", label: "Sea Freight" },
//       { href: "/Air-Frieght", label: "Air Freight" },
//       { href: "/WareHousing", label: "Warehousing" },
//       { href: "/Labelling", label: "Labelling" },
//       { href: "/DG-Shipping", label: "DG Shipping" },
//       { href: "/Customs-Clearence", label: "Customs Clearance" },
//     ],
//   },
// ];

// const companyItems = [
//   {
//     links: [
//       { href: "/", label: "Home" },
//       { href: "/OurStory", label: "About us" },
//       { href: "/Sea-Frieght", label: "Sea Freight" },
//       { href: "/Air-Frieght", label: "Air Freight" },
//       { href: "/WareHousing", label: "Warehousing" },
//       { href: "/Labelling", label: "Labelling" },
//       { href: "/Custom-Clearence", label: "Customs Clearance" },
//       { href: "/ContactUs", label: "Contact Us" },
//     ],
//   },
// ];

export default NavBar;
