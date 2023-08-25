import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Search.module.css";
import { filteredState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function About() {
  let [search, setSearch] = useState("");
  let [searchType, setSearchType] = useState(null);
  let [datas, setData] = useState([]);
  let [newD, setNewData] = useState(null);
  let [curr, setCur] = useState("");

  const [filteredData, setFilteredData] = useRecoilState(filteredState);

  useEffect(() => {
    axios.get("https://mern-wheat.vercel.app/getData").then((data) => {
      setData(data.data);

      localStorage.setItem("datas", JSON.stringify(data.data));
    });
  }, []);

  const handleSearchData = (event) => {
    event.preventDefault();

    if (!searchType) {
      // toast.error("Please select a property type first.", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      // return;
      alert("Please select a property type first.");
    }

    let newData = datas
      .filter((item) => item.type === searchType)
      .filter((item) => item.location === search || item.place === search);

    console.log(newData, "new");
    localStorage.setItem("filtered", JSON.stringify(newData));
    setFilteredData(newData);

    if (newData.length === 0) {
      setFilteredData([]);
    }
    setSearch("");
  };

  const handleSearchFilter = (cur) => {
    setCur(cur);

    setSearchType(cur);
    setNewData(null);
  };
  return (
    <div>
      <h2 className={style.h2}>{curr ? curr.toUpperCase() : ""} Propeties </h2>
      <div className={style.searchs}>
        <button className={style.btn} onClick={() => handleSearchFilter("buy")}>
          Buy
        </button>
        <button
          className={style.btn}
          onClick={() => handleSearchFilter("rent")}
        >
          Rent
        </button>
        <button className={style.btn} onClick={() => handleSearchFilter("pg")}>
          Pg
        </button>
        <button
          className={style.btn}
          onClick={() => handleSearchFilter("sell")}
        >
          Sell
        </button>
        <form>
          <input
            className={style.searchInput}
            type="text"
            placeholder="Enter location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className={style.searchBtn} onClick={handleSearchData}>
            Search
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default About;
