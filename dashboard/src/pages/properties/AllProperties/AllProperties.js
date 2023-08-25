import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllProperties.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
function AllProperties() {
  const [datas, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/getData").then((data) => {
      console.log(data.data, "useEffect");
      setData(data.data);
      localStorage.setItem("datas", JSON.stringify(data.data));
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/deleteProperties/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
    console.log("Delete item with id:", id);
  };
  const handleAdd = () => {
    navigate("/create");
  };

  return (
    <div>
      <button className="add" onClick={handleAdd}>
        Add Properties
      </button>
      <table className="data-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Type</th>
            <th>Location</th>
            <th>Name</th>
            <th>Address</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  width="100px"
                  height="100px"
                  src={item.img}
                  alt={item.name}
                />
              </td>
              <td>{item.type}</td>
              <td>
                {item.location} {item.place}
              </td>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.price}</td>
              <td>
                <NavLink className="edit" to={`/update/${item._id}`}>Edit</NavLink>
                {/* <button onClick={() => handleEdit(item.id)}>Edit</button> */}
                <button onClick={() => handleDelete(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProperties;
