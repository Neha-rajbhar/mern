import React, { useState } from "react";
import all from "./Filtered.module.css";
import { useRecoilValue } from "recoil";
import { filteredState } from "../../recoil/atom";
import { useNavigate } from "react-router-dom";

function Filtered() {
  const navigate=useNavigate()
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("filtered")) || []
  );

  let filteredData = useRecoilValue(filteredState);
  const handleForward = () => {
    navigate("/contact");
  };
  return (
    <div className={all.mainSection}>
      <div className={all.textSection}>
        <h1 className={all.text}>Search Result</h1>
      </div>

      <div className={all.cardSection}>
        {filteredData.map((item) => {
          return (
            <div className={all.card}>
              <img
                className={all.image}
                width="200px"
                height="200px"
                src={item.img}
              />
              <div>
                <button onClick={handleForward} className={all.type}>
                  {item.type}
                </button>
                <button onClick={handleForward} className={all.type}>
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
  );
}

export default Filtered;
