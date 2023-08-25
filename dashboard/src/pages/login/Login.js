import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import all from "./Login.module.css";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/getAdmin").then((data) => {
      console.log(data.data, "useEffect");
      setData(data.data);
      localStorage.setItem("login", JSON.stringify(data.data));
    });
  }, []);

  const handleData = (e) => {
    e.preventDefault();
    console.log(userId, password);

    const newData = data.filter(
      (item) =>
        item.userId === userId.toLowerCase() && item.password === password
    );

    if (newData.length === 1) {
      alert("Login success");
      navigate("/dash");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className={all.mainBox}>
      <div className={all.login}>
        <h2 className={all.h2}>Login Here !!</h2>
        <form className={all.form}>
          <input
            className={all.input}
            type="text"
            value={userId}
            placeholder="Enter User Id"
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            className={all.input}
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={all.button} onClick={handleData}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
