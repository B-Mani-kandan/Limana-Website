import React, { useEffect } from "react";
import "../Home/Home.css";
import HomeFac1 from "../../assets/HomeFac-1.webp";
import HomeFac2 from "../../assets/HomeFac-2.webp";
import HomeFac3 from "../../assets/HomeFac-3.webp";
import HomeFac4 from "../../assets/HomeFac-4.webp";
import HomeFac5 from "../../assets/HomeFac-5.webp";
import Product from "./Product/Product";
import AboutUs from "../AboutUs/AboutUs";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contribute">
        <header className="contribute__hero">
          <div className="contribute__hero-content">
            <h1
              className="contribute__title"
              balance-text=""
              style={{ color: " #004449" }}
            >
              Precision in Motion,
              <br data-owner="balance-text" aria-hidden="true" />
              Innovation at Work
            </h1>
            <p className="contribute__subtitle" balance-text="" style={{}}>
              semiconductor sealing tooling and
              <br data-owner="balance-text" aria-hidden="true" />
              custom automation solutions.
            </p>
            <button className="contribute__c2a" type="button">
              <div className="contribute__c2a-contents">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="ember43"
                  className="ember-view contribute__c2a-icon"
                >
                  <path d="M23.944 2.038c-.369-.026-.729-.038-1.083-.038-7.671 0-12.038 5.848-13.627 10.554l4.216 4.215c4.842-1.734 10.55-5.939 10.55-13.528 0-.392-.024-.793-.056-1.203zm-10.058 12.645l-2.571-2.571c1.089-2.55 4.185-7.978 10.88-8.312-.224 5.149-3.604 8.856-8.309 10.883zm4.88 1.371c-.488.333-.973.633-1.452.901-.167.794-.591 1.643-1.205 2.366-.001-.514-.145-1.032-.396-1.55-.441.2-.86.373-1.261.524.589 1.524-.011 2.649-.816 3.705 1.156-.087 2.369-.653 3.324-1.609 1.032-1.031 1.755-2.518 1.806-4.337zm-10.542-5.77c-.517-.249-1.032-.39-1.545-.392.716-.607 1.556-1.029 2.343-1.2.28-.493.595-.979.926-1.457-1.819.049-3.307.774-4.34 1.805-.955.955-1.52 2.169-1.608 3.324 1.056-.806 2.183-1.406 3.706-.815.155-.42.326-.842.518-1.265zm6.901.591c-.35-.348-.35-.913 0-1.261.348-.348.912-.348 1.261 0 .349.349.349.914 0 1.262-.349.349-.913.349-1.261-.001zm4.414-4.414c-.696-.696-1.826-.696-2.522 0-.697.696-.697 1.827 0 2.523.696.697 1.826.697 2.523 0 .695-.696.695-1.827-.001-2.523zm-1.703 1.703c-.243-.244-.243-.64 0-.883.242-.244.64-.244.885 0 .242.243.241.639 0 .883-.245.243-.642.243-.885 0zm-6.492 9.024c-1.734 1.844-3.656 2.787-5.72 2.787-3.2 0-5.624-2.354-5.624-5.311 0-1.485.611-3.122 2.043-4.689-3.201 5.137 1.126 10.128 6.694 4.607l.765.765c-.91 1.061-1.661 1.977-2.971 2.638 1.344.057 2.87-.745 4.017-1.593l.796.796z"></path>
                </svg>
                <span className="contribute__c2a-label">Get In Touch</span>
              </div>
            </button>
          </div>
        </header>
        <section className="contribute__examples">
          <a
            href="/@yvo/how-ive-lived-the-4-hour-work-week-for-a-decade"
            className="contribute__example contribute__example--article contribute__example--yvo"
          >
            <img
              alt="How Ive Lived the 4-Hour Work Week for a Decade"
              className="contribute__example-image"
              src={HomeFac1}
            />
            <p className="contribute__example-title">
              We are driving the next major innovation in electronics
              manufacturing.
            </p>
            {/* <div className="contribute__example-pageviews">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="contribute__example-graph"
            >
              <path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002z" />
            </svg>
            <div className="firebase-counter">
              <span className="firebase-counter__num">4</span>
              <span className="firebase-counter__num">8</span>
              <span className="firebase-counter__comma">,</span>
              <span className="firebase-counter__num">8</span>
              <span className="firebase-counter__num">8</span>
              <span className="firebase-counter__num">0</span>
            </div>
            reads
          </div> */}
          </a>

          <a
            href="/businesses/logojoy"
            className="contribute__example contribute__example--business contribute__example--logojoy"
          >
            <img
              alt="Bringing visions to life,Building better products,Turning ideas into reality"
              className="contribute__example-image"
              src={HomeFac2}
            />
            <p className="contribute__example-title">
              Bringing visions to life, Building better products and Turning
              ideas into reality
            </p>
            {/* <div className="contribute__example-pageviews">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="contribute__example-graph"
            >
              <path d="M24 3.875l-6 1.221 1.716 1.708-5.351 5.358-3.001-3.002-7.336 7.242 1.41 1.418 5.922-5.834 2.991 2.993 6.781-6.762 1.667 1.66 1.201-6.002z" />
            </svg>
            <div className="firebase-counter">
              <span className="firebase-counter__num">1</span>
              <span className="firebase-counter__num">2</span>
              <span className="firebase-counter__num">8</span>
              <span className="firebase-counter__comma">,</span>
              <span className="firebase-counter__num">1</span>
              <span className="firebase-counter__num">0</span>
              <span className="firebase-counter__num">1</span>
            </div>
            reads
          </div> */}
          </a>

          <a
            href="/@patrics/i-was-excited-about-an-idea-and-now-its-dead"
            className="contribute__example contribute__example--article contribute__example--patrics"
          >
            <img
              alt="Stay connected with high-performance electronics."
              className="contribute__example-image"
              src={HomeFac4}
            />
            <p className="contribute__example-title">
              Stay connected with high-performance electronics.
            </p>
          </a>

          <a
            href="/businesses/discourse"
            className="contribute__example contribute__example--business contribute__example--discourse"
          >
            <img
              alt="Our products say it all Quality you can feel."
              className="contribute__example-image"
              src={HomeFac3}
            />
            <p className="contribute__example-title">
              Our products say it all and Quality you can feel.
            </p>
          </a>

          <a
            href="/businesses/baremetrics"
            className="contribute__example contribute__example--business contribute__example--baremetrics"
          >
            <img
              alt="Excellence at every step and Innovation at every turn."
              className="contribute__example-image"
              src={HomeFac5}
            />
            <p className="contribute__example-title">
              Excellence at every step and Innovation at every turn.
            </p>
          </a>
        </section>
        <section className="contribute__intro">
          <p>
            <strong>Your Trusted Partner in Automation Solutions.</strong>
          </p>
          <p>
            We specialize in SMT carrier semiconductor sealing tooling and
            custom automation solutions.
          </p>
          <p>
            Our offerings include assembly lines, packing lines, and tooling
            clamps (fixtures).
          </p>
          <p>At Limana, we focus on efficiency, reliability, and quality.</p>
        </section>
      </div>
      <AboutUs />
      <Product />
    </>
  );
};

export default Home;
