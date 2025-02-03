import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx/NavBar";
import "./App.css";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Contact from "./components/ContactUs/Contact";
import ProductService from "./components/ProductService/ProductService";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Contact-Us" element={<Contact />} />
          <Route exact path="/Product-Service" element={<ProductService />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
