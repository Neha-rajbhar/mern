import React from "react";
import all from "./Services.module.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const handleBuy = () => {
    // console.log("buy");
    navigate("/services/buy");
  };

  const handleRent = () => {
    // console.log("buy");
    navigate("/services/rent");
  };

  const handleSell = () => {
    // console.log("buy");
    navigate("/services/sell");
  };
  return (
    <div className={all.serviceSection}>
      <div className={all.testSection}>
        <h1 className={all.text}>Services we Provide</h1>
      </div>
      <div className={all.serviceCard}>
        <div className={all.card}>
          <img
            className={all.image}
            src="https://wallpapercave.com/wp/wp4110653.jpg"
            alt="Service 1"
          />
          <h2>Buy</h2>
          <p>Some text content for Service 1</p>
          <button onClick={handleBuy} className={all.button}>
            Know More
          </button>
        </div>
        <div className={all.card}>
          <img
            className={all.image}
            src="https://tse3.mm.bing.net/th?id=OIP.fIMrRGpQAs9WN3PA9Q_SPAHaEK&pid=Api&P=0&h=180"
            alt="Service 2"
          />
          <h2>Sell</h2>
          <p>Some text content for Service 2</p>
          <button onClick={handleSell} className={all.button}>Know More</button>
        </div>
        <div className={all.card}>
          <img
            className={all.image}
            src="https://v.fastcdn.co/u/74655bc3/49958455-0-Virtuance-Real-Estat.jpg"
            alt="Service 3"
          />
          <h2>Rent</h2>
          <p>Some text content for Service 3</p>
          <button onClick={handleRent} className={all.button}>Know More</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
