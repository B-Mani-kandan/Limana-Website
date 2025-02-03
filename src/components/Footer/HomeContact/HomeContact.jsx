import React from "react";
import "../HomeContact/HomeContact.css";
import { Link } from "react-router-dom";

const HomeContact = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Discuss Your Business Needs Today</h1>
        <h2 className="home-subtitle">
          Strategic solutions to drive business success.
        </h2>
        <p className="home-description">
          Every business is unique, and we provide customized solutions to help
          you grow. Streamline operations, enhance efficiency, and stay ahead of
          the competition. Let’s connect today! 🚀
        </p>
        <Link to="/Contact-Us">
          <button className="home-button">Get In Touch With Us !</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContact;
