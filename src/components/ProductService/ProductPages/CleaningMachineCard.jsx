import "../ProductPages.css";
import { useEffect } from "react";
import LINX_1039 from "../../../assets/CLEANING_MACHINE/LINX_1039.webp";
import MARKEM_A188 from "../../../assets/CLEANING_MACHINE/MARKEM_A188.webp";
import FD802 from "../../../assets/CLEANING_MACHINE/FD802.webp";
import ISOPROPHYL from "../../../assets/CLEANING_MACHINE/ISOPROPHYL.webp";
import LINX_0030 from "../../../assets/CLEANING_MACHINE/LINX_0030.webp";
import LINX_1059 from "../../../assets/CLEANING_MACHINE/LINX_1059.webp";
import LINX_1075 from "../../../assets/CLEANING_MACHINE/LINX_1075.webp";
import VMY_JET from "../../../assets/CLEANING_MACHINE/VMY_JET.webp";
import HYUAN1578 from "../../../assets/CLEANING_MACHINE/HYUAN1578.webp";

const cardData = [
  {
    id: 1,
    title: "LINX 1039",
    imageUrl: `${LINX_1039}`,
  },
  {
    id: 2,
    title: "MARKUM-A188",
    imageUrl: `${MARKEM_A188}`,
  },
  {
    id: 3,
    title: "FD-802",
    imageUrl: `${FD802}`,
  },
  {
    id: 4,
    title: "ISO PROPHYL ALCOHOL",
    imageUrl: `${ISOPROPHYL}`,
  },
  {
    id: 5,
    title: "LINX 0030",
    imageUrl: `${LINX_0030}`,
  },
  {
    id: 6,
    title: "LINX 1059",
    imageUrl: `${LINX_1059}`,
  },
  {
    id: 7,
    title: "LINX 1075",
    imageUrl: `${LINX_1075}`,
  },
  {
    id: 8,
    title: "VMY JET 0068",
    imageUrl: `${VMY_JET}`,
  },
  {
    id: 9,
    title: "HYUAN 1578",
    imageUrl: `${HYUAN1578}`,
  },
];

export default function CleaningMachineCard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="product-header">
        <h2 className="title">Product & Services</h2>
        <h2 className="product-list-title">CLEANING MACHINE</h2>
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
