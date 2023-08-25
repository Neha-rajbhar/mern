import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/aboutus/AboutUs";
import AllData from "./pages/allData/AllData";
import Contact from "./pages/contact/Contact";
import Filtered from "./pages/filtered/Filtered";
import Home from "./pages/home/Home";
import { Routes, Route, Router, Switch } from "react-router-dom";
import Services from "./pages/services/Services";
import Buy from "./pages/services/buy/Buy";
import Rent from "./pages/services/rent/Rent";
import Sell from "./pages/services/sell/Sell";
import AllDataFiltered from "./pages/allData/filteredDatas/AllDataFiltered";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/properties" element={<Filtered />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="/services/buy" element={<Buy />} />
        <Route path="/services/rent" element={<Rent />} />
        <Route path="/services/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allDataFiltered" element={<AllDataFiltered />} />
      </Routes>
    </div>
  );
}

export default App;
