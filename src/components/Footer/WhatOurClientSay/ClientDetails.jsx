import React from "react";
import "./ClientDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CustLogo1 from "../../../assets/CLIENTLOGO/COLORCYNET.webp";
import CustLogo2 from "../../../assets/CLIENTLOGO/COLORPANA.webp";
import CustLogo3 from "../../../assets/CLIENTLOGO/COLORTATA.webp";
import CustLogo4 from "../../../assets/CLIENTLOGO/COLORVELAKANI.webp";
import CustLogo5 from "../../../assets/CLIENTLOGO/CLIENT2-Logo.webp";

const testimonials = [
  {
    id: 1,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo1}`,
  },
  {
    id: 2,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo2}`,
  },
  {
    id: 3,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo3}`,
  },
  {
    id: 4,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo4}`,
  },
  {
    id: 5,
    name: "Jane Doe",
    company: "Tech Solutions Inc.",
    review:
      "Tech Solutions Inc. has benefited greatly from Lumina Technologies' expertise and professionalism...",
    rating: 4,
    logo: `${CustLogo5}`,
  },
];

const ClientDetails = () => {
  return (
    <>
      <h2 className="cust-head">What Our Customer Says</h2>
      <div className="CustSays">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                {/* Left Side - Client Details */}
                <div className="testimonial-left">
                  <img
                    src={testimonial.logo}
                    alt={testimonial.company}
                    className="client-logo"
                  />
                </div>
                {/* Right Side - Review & Stars */}
                <div className="testimonial-right">
                  <div className="testimonial-rating">
                    {Array.from({ length: testimonial.rating }, (_, index) => (
                      <span key={index}>
                        <i className="ri-star-s-fill"></i>
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">{testimonial.review}</p>
                  <p className="client-name">{testimonial.name}</p>
                  <p className="client-company">{testimonial.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ClientDetails;
