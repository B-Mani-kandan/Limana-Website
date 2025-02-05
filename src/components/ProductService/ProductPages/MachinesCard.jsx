import "../ProductPages.css";
import { useEffect } from "react";
import JIG from "../../../assets/JIG.webp";
// import Holder from "../../../assets/HolderFixture.webp";
import Imitating from "../../../assets/Imitating.webp";
const MachinesCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="content">
      <div className="grid">
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
      </div>
    </div>
  );
};

export default MachinesCard;
