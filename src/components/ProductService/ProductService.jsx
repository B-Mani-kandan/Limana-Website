import React, { useEffect } from "react";
import image1 from "../../assets/PrdSer-1.webp";
import image2 from "../../assets/PrdSer-2.webp";
import image3 from "../../assets/PrdSer-3.webp";
import image4 from "../../assets/PrdSer-4.webp";
import "../ProductService/ProductService.css";
import Service from "../Home/Service/Service";
const ProductService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h3 data-aos="fade-up" className="section-heading">
        What We Do
      </h3>
      <div data-aos="fade-up" className="we-do">
        <div className="we-do-left">
          <p>
            Limana helps you to scale your business with a team of experts, at a
            fraction of the price!
          </p>
          <p>
            We’re here to empower our clients to take back control of their
            business. Our mission keeps us focused and accountable, our vision
            drives us and our values dictate how we succeed. 
          </p>
          <button className="btn" style={{ marginTop: "30px" }}>
            Explore Services
          </button>
        </div>
        <div className="we-do-right">
          <p>
            To best understand how we are different and what we are offering,
            Limana offers unique set of services to cater our clients needs
            which includes
          </p>
          <p>- VMC (Vertical Machine Centre)</p>
          <p>- CNC Router</p>
          <p>- CNC-Turning Lathe</p>
          <p>- Milling Machine</p>
          <p>- Lathe Machine</p>
          <p>- Web Services</p>
          <p>- Surface Grinding</p>
          <p>- Cutting Machine</p>
        </div>
      </div>
      <div className="about-us-container">
        <div className="about-us-left">
          <h5>SMT Fixtures & Carriers</h5>
          <p>
            Engineered for precision, our SMT fixtures and carriers optimize
            performance, ensuring accurate component assembly in high-demand
            environments.
          </p>
          <h6>SMT Fixtures & Carriers</h6>
          <p>
            Secures components during the SMT process, ensuring accurate
            placement and consistent results for efficient production.
          </p>
          <h6>Imitating Fixture</h6>
          <p>
            Replicates component geometry for precise testing, reducing errors
            and improving assembly quality.
          </p>
          <h6>Manual Fixture</h6>
          <p>
            Allows precise manual positioning of components, offering
            flexibility and reliability in low to medium-volume production.
          </p>
          <h6>Jig</h6>
          <p>
            Holds and guides components for accurate alignment, improving
            efficiency and consistency in electronics manufacturing.
          </p>
        </div>
        <div className="about-us-right">
          <div className="image-container">
            <div className="image-column">
              <img src={image1} alt="First" className="image-large" />
              <img src={image3} alt="First" className="image-small" />
            </div>
            <div className="image-column">
              <img src={image4} alt="First" className="image-small" />
              <img src={image2} alt="First" className="image-large" />
            </div>
          </div>
        </div>
      </div>
      <div className="whole-sea-container">
        <div className="seaFrieght-Left" data-aos="slide-right">
          <h2 style={{ fontSize: "35px", lineHeight: 1.5 }}>
            Comprehensive Strength In India Factory.
          </h2>
        </div>
        <div className="seaFrieght-Right">
          <p data-aos="fade-up">
            Our India workshop is equipped with state-of-the-art technology and
            a highly skilled workforce, ensuring the highest standards of
            precision and quality in every product. With a focus on innovation
            and efficiency, we are able to meet diverse production needs while
            maintaining consistency and reliability.
          </p>
          <p data-aos="fade-up">
            We are committed to providing scalable solutions that adapt to
            various industry requirements. By continuously improving our
            processes and investing in cutting-edge equipment, we ensure
            exceptional results and contribute to the success of our clients.
          </p>
        </div>
      </div>
      <Service />
    </>
  );
};
export default ProductService;
