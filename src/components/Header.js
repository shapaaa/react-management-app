import React from "react";
import "./Header.css";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
const componentName = (props) => (
  <header id="backImg" className="container">
    <div className="nav-container">
      <img src={logo} />
      <ul>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Product</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        <li>
          <a>Careers</a>
        </li>
        <li>
          <a>Community</a>
        </li>
      </ul>
      <button className="button">Get Started</button>
    </div>
    <div className="content">
      <div className="center-container">
        <p className="header-text">
          Bring everyone together to build better products
        </p>
        <p className="header-text1">
          <em>Manage</em> makes it simple for software teams to plan day-to-day
          tasks while keeping the larger team goals in view
        </p>
        <button className="button">Get Started</button>
      </div>
      <img src={logo2} className="logo2" />
    </div>
  </header>
);
export default componentName;
