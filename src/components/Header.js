import React from "react";
import "./Header.css";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
const Header = (props) => (
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
        <button className="button" id="btn2">
          Get Started
        </button>
      </div>
      <img src={logo2} className="logo2" />
    </div>
    <div className="content-container">
      <div className="quest-container">
        <p className="quest">What's different about Manage?</p>
        <p className="info">
          Manage provides all the functionality your team needs,without the
          complexity. Our software id tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="items">
        <div className="small-container">
          <p className="small-btn">01</p>
        </div>
        <div className="main-head">
          <p className="head">Track company wide-progress</p>
          <p className="info">
            See how your day-to-day tasks fit into wider vision. Go from
            tracking progress at the milestone level all the way done to
            smallest of details.Never loose sight of bigger picture again
          </p>
        </div>
        <div className="small-container">
          <p className="small-btn">02</p>
        </div>
        <div className="main-head">
          <p className="head">Track company wide-progress</p>
          <p className="info">
            See how your day-to-day tasks fit into wider vision. Go from
            tracking progress at the milestone level all the way done to
            smallest of details.Never loose sight of bigger picture again
          </p>
        </div>
        <div className="small-container">
          <p className="small-btn">03</p>
        </div>
        <div className="main-head">
          <p className="head">Track company wide-progress</p>
          <p className="info">
            See how your day-to-day tasks fit into wider vision. Go from
            tracking progress at the milestone level all the way done to
            smallest of details.Never loose sight of bigger picture again
          </p>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
