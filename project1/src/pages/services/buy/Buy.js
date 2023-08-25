import React, { useEffect, useState } from "react";
import style from "./Buy.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import bg from "./bg1.jpg";
import Footer from "../../../components/footer/Footer";

function Buy() {
  const navigate=useNavigate();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("datas")) || []
  );

  let [buyData,setBuyData]=useState([])
  useEffect(() => {
    // console.log("data", data);
    const buy = data.filter((item) => item.type === "buy");
    // console.log("buy", buy);
    setBuyData(buy)
  }, []);

  const handleForward = () => {
    navigate("/contact");
  };

  return (
    <div>
    <div className={style.mainSection}>
      <div
        className={style.breadcrumb}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <span>
          <NavLink to="/">Home</NavLink> /{" "}
          <NavLink to="/services">Services</NavLink> / Buy
        </span>
      </div>

      <div className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      
    </div>
   <div className={style.cardSection}>
   <div className={style.cards}>
        {buyData.map((item) => {
          return (
            <div className={style.card}>
              <img
                className={style.image}
                width="200px"
                height="200px"
                src={item.img}
              />
              <div>
                <button onClick={handleForward} className={style.type}>
                  {item.type}
                </button>
                <button onClick={handleForward} className={style.type}>
                  Get In Touch
                </button>
              </div>
              <p>
                Location : {item.location} {item.place}
              </p>

              <p>Name : {item.name}</p>
              <p>Address : {item.address}</p>
              <p>Price : {item.price}</p>
            </div>
          );
        })}
      </div>
   </div>
<Footer/>
    </div>
  );
}

export default Buy;
