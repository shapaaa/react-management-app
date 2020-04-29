import React from "react";
import "./Footer.css";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
import f from "../icon-facebook.svg";
import i from "../icon-instagram.svg";
import t from "../icon-twitter.svg";
import p from "../icon-pinterest.svg";
import y from "../icon-youtube.svg";
const Footer = () => {
  return (
    <footer className="ft-container">
      <div>
        <img src={logo} className="ft-img" />
        <ul id="ful">
          <li>
            <img src={f} className="icon" />
          </li>
          <li>
            <img src={y} className="icon" />
          </li>
          <li>
            <img src={t} className="icon" />
          </li>
          <li>
            <img src={p} className="icon" />
          </li>
          <li>
            <img src={i} className="icon" />
          </li>
        </ul>
      </div>
      <ul className="ft-ul">
        <li className="ft-li">Home</li>
        <li className="ft-li">Pricing</li>
        <li className="ft-li">Products</li>
        <li className="ft-li">About Us</li>
      </ul>
      <ul className="ft-ul">
        <li className="ft-li">Careers</li>
        <li className="ft-li">Community</li>
        <li className="ft-li">Privacy</li>
      </ul>
      <div className="input-container">
        <input className="ft-input" />
        <div id="ft-small" className="small-container">
          <p className="small-btn">Go</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
