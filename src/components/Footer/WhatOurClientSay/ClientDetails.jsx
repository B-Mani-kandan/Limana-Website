import React from "react";
import "./ClientDetails.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CustLogo1 from "../../../assets/1-Logo.png";
import CustLogo2 from "../../../assets/2-Logo.png";
import CustLogo3 from "../../../assets/3-Logo.png";
import CustLogo4 from "../../../assets/4-Logo.png";
import CustLogo5 from "../../../assets/5-Logo.png";
// import CustLogo6 from "../../../assets/6-Logo.png";

const testimonials = [
  {
    id: 1,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo1}`, // Replace with actual logo URL
  },
  {
    id: 2,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo2}`, // Replace with actual logo URL
  },
  {
    id: 3,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo3}`, // Replace with actual logo URL
  },
  {
    id: 4,
    name: "Charles Douglas",
    company: "Charles Douglas Solicitors LLP",
    review:
      "Charles Douglas Solicitors LLP have been using Lumina Technologies for a number of years now and continue to be impressed...",
    rating: 5,
    logo: `${CustLogo4}`, // Replace with actual logo URL
  },
  {
    id: 5,
    name: "Jane Doe",
    company: "Tech Solutions Inc.",
    review:
      "Tech Solutions Inc. has benefited greatly from Lumina Technologies' expertise and professionalism...",
    rating: 4,
    logo: `${CustLogo5}`, // Replace with actual logo URL
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
            clickable: true, // Makes bullets clickable
          }}
          modules={[Pagination, Autoplay]} // Corrected usage
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
