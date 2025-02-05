import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx/NavBar";
import "./App.css";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Contact from "./components/ContactUs/Contact";
// import ProductService from "./components/ProductService/ProductService";
import ProductHome from "./components/ProductService/ProductHome/ProductHome";
import Smt from "./components/ProductService/ProductPages/Smt";
import FCT from "./components/ProductService/ProductPages/FCT";
import TesterAssembly from "./components/ProductService/ProductPages/TesterAssembly";
import Machines from "./components/ProductService/ProductPages/Machines";
import ESDConsumables from "./components/ProductService/ProductPages/ESDConsumables";
import ElecAssemblyEquip from "./components/ProductService/ProductPages/ElecAssemblyEquip";
import FUJI from "./components/ProductService/ProductPages/FUJI";
import ASM from "./components/ProductService/ProductPages/ASM";
import Panasonic from "./components/ProductService/ProductPages/Panasonic";
import AI from "./components/ProductService/ProductPages/AI";
import CleaningSolution from "./components/ProductService/ProductPages/CleaningSolution";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Contact-Us" element={<Contact />} />
          <Route exact path="/Product-Service" element={<ProductHome />} />
          <Route exact path="/SMT-Fixtures" element={<Smt />} />
          <Route exact path="/FCT-Fixtures" element={<FCT />} />
          <Route exact path="/TesterAssembly" element={<TesterAssembly />} />
          <Route exact path="/Machines" element={<Machines />} />
          <Route exact path="/ESD-Consumables" element={<ESDConsumables />} />
          <Route
            exact
            path="/Electronic-Assembly"
            element={<ElecAssemblyEquip />}
          />
          <Route exact path="/FUJI-MounterSpares" element={<FUJI />} />
          <Route exact path="/ASM-MounterSpares" element={<ASM />} />
          <Route
            exact
            path="/Panasonic-MounterSpares"
            element={<Panasonic />}
          />
          <Route exact path="/AI-SpareParts" element={<AI />} />
          <Route
            exact
            path="/Cleaning-Solutions"
            element={<CleaningSolution />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
