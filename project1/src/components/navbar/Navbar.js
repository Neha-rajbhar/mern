import React, { useState } from "react";
import navbar from "./Navbar.module.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../Logo 1.png";

import { NavLink } from "react-router-dom";

function Navbar() {
  let [show, setShow] = useState(true);

  return (
    <nav className={navbar.nav}>
      <div className={navbar.logo}>
        <img src={logo} />
      </div>
      <div className={show ? navbar.list : navbar.navlist}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#properties">Properties</a>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>

            <ul className={navbar.ulService}>
              <li>
                <NavLink className={navbar.navlink} to="/services/buy">
                  Buy
                </NavLink>
              </li>
              <li>
                <NavLink className={navbar.navlink} to="/services/rent">
                  Rent
                </NavLink>
              </li>
              <li>
                <NavLink className={navbar.navlink} to="/services/sell">
                  Sell
                </NavLink>
              </li>
            </ul>
          </li>
          <button className={navbar.contactBtn}>
            <a href="#contact">Contact Us</a>
          </button>
        </ul>
      </div>

      <div className={navbar.hamberg}>
        {show ? (
          <button className={navbar.bar} onClick={() => setShow(false)}>
            <FaBars />
          </button>
        ) : (
          <button className={navbar.cross} onClick={() => setShow(true)}>
            <ImCross />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
