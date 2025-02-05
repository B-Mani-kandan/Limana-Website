import "../ProductPages.css";
import { useEffect } from "react";
import JIG from "../../../assets/JIG.webp";
import Holder from "../../../assets/HolderFixture.webp";
import Imitating from "../../../assets/Imitating.webp";
const FCT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product-container">
      <div className="content">
        <h2 className="title">Product & Services</h2>
        <p className="subtitle">FCT FIXTURES </p>
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
              <img src={Holder} alt="Mobile friendly" />
              <img src={Holder} alt="Mobile friendly" />
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <p className="card-title">TEST & ASSY FIXTURE</p>
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
              <p className="card-title">TEST JIGS</p>
              <p className="card-text">
                An Imitating Fixture replicates a workpiece’s shape for accurate
                alignment and assembly.
              </p>
            </div>
            <div className="card-image">
              <img src={Imitating} alt="Security" />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">LINEAR GLUE FIXTURE</p>
              <p className="card-text">
                A manual fixture is a tool used to hold and position a workpiece
                manually during machining or assembly, ensuring stability and
                accuracy without automated assistance.
              </p>
            </div>
            <div className="card-image">
              <img
                src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                alt="Powerful APIs"
              />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">GLUE DISPENSER</p>
              <p className="card-text">
                A holder fixture is a tool used to securely hold a workpiece in
                place during machining or assembly, ensuring stability and
                precision.
              </p>
            </div>
            <div className="card-image">
              <img
                src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                alt="Powerful APIs"
              />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">PRESS FIT FIXTURE</p>
              <p className="card-text">
                A holder fixture is a tool used to securely hold a workpiece in
                place during machining or assembly, ensuring stability and
                precision.
              </p>
            </div>
            <div className="card-image">
              <img
                src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                alt="Powerful APIs"
              />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">MOBILE ASSY FIXTURE</p>
              <p className="card-text">
                A holder fixture is a tool used to securely hold a workpiece in
                place during machining or assembly, ensuring stability and
                precision.
              </p>
            </div>
            <div className="card-image">
              <img
                src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                alt="Powerful APIs"
              />
            </div>
          </div>
          <div className="card large">
            <div className="card-content">
              <p className="card-title">SETUP BOX ASSY FIXTURE</p>
              <p className="card-text">
                A holder fixture is a tool used to securely hold a workpiece in
                place during machining or assembly, ensuring stability and
                precision.
              </p>
            </div>
            <div className="card-image">
              <img
                src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                alt="Powerful APIs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FCT;
