import "../ProductPages.css";
import { useEffect } from "react";
import JIG from "../../../assets/SMTCARRIER/JIG.webp";
import HOLDER_1 from "../../../assets/SMTCARRIER/HOLDER_1.webp";
import HOLDER_2 from "../../../assets/SMTCARRIER/HOLDER_2.webp";
import HOLDER_3 from "../../../assets/SMTCARRIER/HOLDER_3.webp";
import IMITATING from "../../../assets/SMTCARRIER/IMITATING.webp";
import MANUALFIXTURE from "../../../assets/SMTCARRIER/MANUALFIXTURE.webp";

const SMT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product-container">
      <div className="content">
        <h2 className="title">Product & Services</h2>
        <p className="subtitle">SMT FIXTURES & CARRIERS</p>
        <div className="grid">
          <div className="card large">
            <div className="card-content">
              <p className="card-title">HOLDER FIXTURE</p>
              <p className="card-text">
                A Holder Fixture securely holds and positions a workpiece for
                machining, soldering, or assembly, ensuring stability and
                precision in manufacturing.
              </p>
            </div>
            <div className="card-image">
              <img src={HOLDER_1} alt="Mobile friendly" />
              <img src={HOLDER_2} alt="Mobile friendly" />
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="card-title">JIG</p>
              <p className="card-text">
                A jig is a tool that holds a workpiece in place and guides tools
                for accurate cuts or assembly. It ensures precision and
                repeatability in manufacturing.
              </p>
            </div>
            <div className="card-image">
              <img src={JIG} alt="Performance" />
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="card-title">IMITATING FIXTURE</p>
              <p className="card-text">
                An Imitating Fixture replicates a workpiece’s shape for accurate
                alignment and assembly.
              </p>
            </div>
            <div className="card-image">
              <img src={IMITATING} alt="Security" />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">MANUAL FIXTURE</p>
              <p className="card-text">
                A manual fixture is a tool used to hold and position a workpiece
                manually during machining or assembly, ensuring stability and
                accuracy without automated assistance.
              </p>
            </div>
            <div className="card-image">
              <img src={MANUALFIXTURE} alt="MANUALFIXTURE" />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">HOLDER FIXTURE</p>
              <p className="card-text">
                A holder fixture is a tool used to securely hold a workpiece in
                place during machining or assembly, ensuring stability and
                precision.
              </p>
            </div>
            <div className="card-image">
              <img src={HOLDER_3} alt="HOLDER" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMT;
