import React, { useState, useEffect, useRef, useCallback } from "react";
import "../ImageSlider/ImageSlider.css";
import Image1 from "../../../assets/IMAGE_CAROSEL/Electronic.webp";
import Image2 from "../../../assets/IMAGE_CAROSEL/ESD.webp";
import Image3 from "../../../assets/IMAGE_CAROSEL/Machines.webp";
import Image4 from "../../../assets/IMAGE_CAROSEL/PANASONIC.webp";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      img: Image1,
      title: "ELECTRONIC ",
      topic: "ASSEMBLY",
      desc: "Electronic Assembly Equipment enables efficient assembly.",
      link: "/Electronic-Assembly",
    },
    {
      id: 2,
      img: Image2,
      title: "ESD ",
      topic: "CONSUMABLES",
      desc: "ESD Consumables prevent electrostatic discharge.",
      link: "/ESD-Consumables",
    },
    {
      id: 3,
      img: Image3,
      title: "SMT ",
      topic: "SOLUTIONS",
      desc: "Machines streamline production and enhance efficiency.",
      link: "/Machines",
    },
    {
      id: 4,
      img: Image4,
      title: "PANASONIC MOUNTER",
      topic: "SPARES",
      desc: "High-quality parts for improved mounter performance.",
      link: "/Panasonic-MounterSpares",
    },
  ]);

  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  const nextSlide = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
    triggerAnimation("next");
  };

  const prevSlide = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    triggerAnimation("prev");
  };

  const triggerAnimation = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.classList.add(direction);
      setTimeout(() => {
        carouselRef.current.classList.remove("next", "prev");
      }, timeRunning);
    }
    resetAutoNext();
  };

  const resetAutoNext = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, timeAutoNext);
  }, [nextSlide, timeAutoNext]);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(timeoutRef.current);
  }, [nextSlide, timeAutoNext]);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list">
        {items.map((item, idx) => (
          <div key={item.id} className={`item ${idx === 0 ? "active" : ""}`}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="author">PRODUCTS</div>
              <div className="image-title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.desc}</div>
              <div className="buttons">
                <div className="contribute">
                  <Link className="contribute__c2a" to={item.link}>
                    <div className="contribute__c2a-contents">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="contribute__c2a-icon"
                      >
                        <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
                      </svg>
                      <span className="contribute__c2a-label">View More</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="image-title">{item.title}</div>
              <div className="description">{item.topic}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button id="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default ImageSlider;
