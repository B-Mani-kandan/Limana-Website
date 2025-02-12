import React, { useState, useEffect } from "react";
import "../ContactUs/Contact.css";
import ButtonPointer from "../../assets/button-pointing.png";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [result, setResult] = useState("");

  const notifySuccess = () => toast.success("File Submitted Successfully!");
  const notifySending = () => toast.warn("Submitting...");

  const handleSubmit = async (event) => {
    event.preventDefault();
    notifySending();

    const formData = new FormData(event.target);
    formData.append("access_key", "f8eb2580-122e-4d62-a5d8-c3efa367880e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();
        setResult("");
        notifySuccess();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Say something to start a live chat!</p>
        <div style={{ marginTop: "4%" }} className="info-item">
          <i className="ri-phone-fill"></i> +91-9840014479,+91-8072031913
        </div>
        <div className="info-item">
          <i className="ri-mail-send-line"></i> anandk@limanatech.com
        </div>
        <div className="info-item">
          <i className="ri-map-pin-line"></i> No-7/92,10th Street
          Poongavanapuram,Kaladipet,Thiruvottiyur,
          <br />
          Chennai - 600019,TamilNadu,India.
        </div>
        <div className="socials-icons">
          <span>
            <i className="ri-facebook-fill"></i>
          </span>{" "}
          <span>
            <i className="ri-instagram-line"></i>
          </span>{" "}
          <span>
            <i className="ri-whatsapp-line"></i>
          </span>
        </div>
        <div className="circle-big"></div>
        <div className="circle-small"></div>
      </div>
      <div className="contact-form">
        <h1 style={{ color: "#004449", fontSize: "30px" }}>Contact Us</h1>
        <p className="ptag">
          Any question or remarks? Just write us a message!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="phone"
              id="tel"
              placeholder="Phone Number"
              required
            />
          </div>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message.."
            required
          ></textarea>
          <div className="button-container">
            <button className="contribute__c2a" type="submit">
              Send Message
            </button>
            {result && <span className="error">{result}</span>}
            <ToastContainer />
          </div>
          <div className="pointing-img">
            <img src={ButtonPointer} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
