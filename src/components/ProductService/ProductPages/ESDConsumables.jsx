import React, { useEffect } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import "../ProductPages.css";

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
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam.
          </p>
        </div>
        <div className="image-container">
          <img
            alt="App screenshot"
            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
            className="image"
          />
        </div>
        <div className="info-section">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id.
          </p>
          <ul className="list">
            <li className="list-item">
              <CloudArrowUpIcon className="icon" />
              <span>
                <strong>Push to deploy.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit.
              </span>
            </li>
            <li className="list-item">
              <LockClosedIcon className="icon" />
              <span>
                <strong>SSL certificates.</strong> Anim aute id magna aliqua ad
                ad non deserunt sunt.
              </span>
            </li>
            <li className="list-item">
              <ServerIcon className="icon" />
              <span>
                <strong>Database backups.</strong> Ac tincidunt sapien vehicula
                erat auctor pellentesque rhoncus.
              </span>
            </li>
          </ul>
          <h2 className="ESD-subtitle">No server? No problem.</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
            in. Convallis arcu ipsum urna nibh.
          </p>
        </div>
      </div>
    </div>
  );
}
