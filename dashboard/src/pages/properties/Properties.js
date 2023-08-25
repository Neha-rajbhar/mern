import React, { useState } from "react";
import axios from "axios";
import "./Properties.css";

function Properties() {
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [place, setPlace] = useState("");
  const [testImage, setTestImage] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleData = async (e) => {
    e.preventDefault();
    console.log(type, location, place, testImage, price, name, address);

    const { data } = await axios.post("http://localhost:5000/create", {
      type,
      location,
      place,
      testImage,
      price,
      name,
      address,
    });
    if (data.status == false) {
      alert(data.message);
    } else {
      //   toast.success("Submitted Sucessfully", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      alert("posted sucess");
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
    <h2 className="h2">Add Properties</h2>
      <form className="form">
        <input
          className="input"
          type="text"
          value={type}
          placeholder="Enter Type"
          onChange={(e) => setType(e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={location}
          placeholder="Enter Location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={place}
          placeholder="Enter Place"
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={testImage}
          placeholder="Enter Image url"
          onChange={(e) => setTestImage(e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={price}
          placeholder="Enter Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          value={address}
          placeholder="Enter Address"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="button" onClick={handleData}>
          Add
        </button>
      </form>
    </div>
    </div>
  );
}

export default Properties;
