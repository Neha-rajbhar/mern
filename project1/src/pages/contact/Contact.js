import React, { useEffect, useState } from "react";
import axios from "axios";
import con from "./Contact.module.css";
import backgroundImage from "../../back.jpg";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("https://mern-wheat.vercel.app/contact", {
      name,
      email,
      phone,
      msg,
    });
    if (data.status == false) {
      alert(data.message);
    } else {
      // Check if toast has been displayed
      // if (!isToastDisplayed) {
      //   toast.success("Submitted Successfully", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      //   setIsToastDisplayed(true);
      // }
      alert("Submitted successfully");
    }
    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
  };

  useEffect(() => {
    return () => {
      setIsToastDisplayed(false);
    };
  }, []);

  return (
    <div
      className={con.mainSection}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={con.overlay}>
        <h1>Contact Us!</h1>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your Phone"
          />
          <input
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Enter your Message"
          />
          <button onClick={handleSubmit}>Send Message</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
