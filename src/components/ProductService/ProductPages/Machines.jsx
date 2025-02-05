import React, { useEffect } from "react";
import "../ProductPages.css";
import MachinesCard from "./MachinesCard";

const products = [
  {
    id: 1,
    name: "EOL TESTER",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color:
      "An EOL (End-of-Line) Tester checks product functionality at the final production stage, identifying defects to ensure only fully functional items are shipped.",
  },
  {
    id: 2,
    name: "ACTUATOR TESTER",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 3,
    name: "STI STATION",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 4,
    name: "PCB CONNECTOR ASSY STATION",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 5,
    name: "EOL TESTER",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color:
      "An EOL (End-of-Line) Tester checks product functionality at the final production stage, identifying defects to ensure only fully functional items are shipped.",
  },
  {
    id: 6,
    name: "ACTUATOR TESTER",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 7,
    name: "STI STATION",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
  {
    id: 8,
    name: "PCB CONNECTOR ASSY STATION",
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    color: "Black",
  },
];

export default function Machines() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="product-list-container">
        <div className="product-list-wrapper">
          <h2 className="title">Product & Services</h2>
          <h2 className="product-list-title">MACHINES</h2>

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="product-image"
                />
                <div className="product-info">
                  <div>
                    <h3 className="product-name">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute-inset" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="product-color">{product.color}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MachinesCard />
    </>
  );
}
