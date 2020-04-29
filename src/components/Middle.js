import React from "react";
import Reviews from "./Reviews";
import "./Middle.css";
const Middle = () => {
  return (
    <div className="middle-container">
      <h1 className="title">What they’ve said </h1>
      <Reviews />
      <button className="button" id="middle-btn">
        Get Started
      </button>
    </div>
  );
};
export default Middle;
