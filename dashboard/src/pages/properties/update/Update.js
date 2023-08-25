import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Update.css"

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");
  const [testImage, setTestImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  

  useEffect(() => {
    axios
      .get("http://localhost:5000/getDataById/" + id)
      .then((result) => {
        console.log(result.data);
        const data = result.data;
        if (data) {
          setType(data.type);
          setLocation(data.location);
          setPlace(data.place);
          setTestImage(data.img);
          setPrice(data.price);
          setName(data.name);
          setAddress(data.address);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  const handleData = async (e) => {
    e.preventDefault();
    console.log(type, location, place, testImage, price, name, address);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/updatProperties/" + id,
        {
          type,
          location,
          place,
          testImage,
          price,
          name,
          address,
        }
      );
      console.log(data);
      navigate("/dash");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Error updating data.");
    }

    setType("");
    setLocation("");
    setPlace("");
    setTestImage("");
    setPrice("");
    setName("");
    setAddress("");
  };


  return (
    <div className="mainBox">
         
   
    <div className="login">
        <h2 className="h2">Update Details</h2>
      <form className="form">
        <input className="input"
          type="text"
          value={type}
          placeholder="Enter Type"
          onChange={(e) => setType(e.target.value)}
        />
        <input className="input"
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input className="input"
          type="text"
          value={place}
          placeholder="Enter Place"
          onChange={(e) => setPlace(e.target.value)}
        />
        <input className="input"
          type="text"
          value={testImage}
          placeholder="Enter Image url"
          onChange={(e) => setTestImage(e.target.value)}
        />
        <input className="input"
          type="text"
          value={price}
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input className="input"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input className="input"
          type="text"
          value={address}
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="button" onClick={handleData}>Update</button>
      </form>
    </div>
    </div>
  );
}

export default Update;
