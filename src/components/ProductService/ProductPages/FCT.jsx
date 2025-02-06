import "../ProductPages.css";
import { useEffect } from "react";
import HOLDER from "../../../assets/FCTFIXTURES/HOLDERFIXTURE.webp";
import TESTASSY from "../../../assets/FCTFIXTURES/TESTASSY.webp";
import TESTJIGS from "../../../assets/FCTFIXTURES/TESTJIGS.webp";
import LINEARGLUE from "../../../assets/FCTFIXTURES/LINEARGLUE.webp";
import GLUEDISPENSER from "../../../assets/FCTFIXTURES/GLUEDISPENSER.webp";
import PRESSFIT from "../../../assets/FCTFIXTURES/PRESSFIT.webp";
import MOBILEASSY from "../../../assets/FCTFIXTURES/MOBILEASSY.webp";
import SETUPBOX from "../../../assets/FCTFIXTURES/SETUPBOX.webp";

const cardData = [
  {
    id: 1,
    title: "HOLDER FIXTURE",
    description: "It secures components for precise manufacturing or testing.",
    imageUrl: `${HOLDER}`,
  },
  {
    id: 2,
    title: "TEST ASSY FIXTURE",
    description: "It holds components during testing for accurate evaluation.",
    imageUrl: `${TESTASSY}`,
  },
  {
    id: 3,
    title: "TEST JIGS",
    description: "Test Jigs hold components for functionality testing.",
    imageUrl: `${TESTJIGS}`,
  },
  {
    id: 4,
    title: "LINEAR GLUE FIXTURE",
    description:
      "Is used to apply glue in a precise, linear pattern during assembly.",
    imageUrl: `${LINEARGLUE}`,
  },
  {
    id: 5,
    title: "GLUE DISPENSER",
    description: "Glue Dispenser applies adhesive precisely in assembly.",
    imageUrl: `${GLUEDISPENSER}`,
  },
  {
    id: 6,
    title: "PRESS FIT FIXTURE",
    description: "It aligns components during the press fitting process.",
    imageUrl: `${PRESSFIT}`,
  },
  {
    id: 7,
    title: "MOBILE ASSY FIXTURE",
    description: "Is used to hold and align mobile components during assembly.",
    imageUrl: `${MOBILEASSY}`,
  },
  {
    id: 8,
    title: "SETUP BOX ASSY FIXTURE",
    description: "It holds and aligns components during setup box assembly.",
    imageUrl: `${SETUPBOX}`,
  },
];

export default function FCT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={{ marginTop: "9%", paddingLeft: "2rem" }}>
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title">FCT FIXTURES</h2>
      </div>
      <div className="Prd-cards-container">
        {cardData.map((card) => (
          <div key={card.id} className="Prd-card-container inter-var">
            <div className="Prd-card-body">
              <div className="Prd-card-item Prd-card-image-container">
                <img
                  src={card.imageUrl}
                  height="1000"
                  width="1000"
                  className="Prd-card-image"
                  alt="thumbnail"
                />
              </div>
              <div className="Prd-card-item Prd-card-title">{card.title}</div>
              <p className="Prd-card-item Prd-card-description">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
