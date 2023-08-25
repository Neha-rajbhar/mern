import React, { useEffect, useState } from "react";
import all from "./AllDataFiltered.module.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function AllDataFiltered() {
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    axios.get("https://mern-wheat.vercel.app/getData").then((response) => {
      const fetchedData = response.data;
      setInitialData(fetchedData);
      setSortedData(fetchedData);
    });
  }, []);

  useEffect(() => {
    setSortedData([...initialData]);
  }, [initialData]);

  //   useEffect(() => {
  //     setSortedData(initialData.slice(0, displayCount));
  //   }, [initialData, displayCount]);

  const sortPriceLTH = () => {
    const sortedDataLTH = [...sortedData].sort((a, b) => a.price - b.price);
    setSortedData(sortedDataLTH);
  };

  const sortPriceHTL = () => {
    const sortedDataHTL = [...sortedData].sort((a, b) => b.price - a.price);
    setSortedData(sortedDataHTL);
  };

  const handleForward = () => {
    navigate("/contact");
  };

  return (
    <div className={all.mainSection}>
      <div className={all.textSection}>
        <h1 className={all.text}>Latest Properties</h1>
        <div className={all.sort}>
          <button onClick={sortPriceLTH}>Lowest To Highest</button>
          <button onClick={sortPriceHTL}>Highest To Lowest</button>
        </div>
      </div>

      <div className={all.cardSection}>
        {sortedData.map((item) => {
          return (
            <div key={item._id} className={all.card}>
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

export default AllDataFiltered;
