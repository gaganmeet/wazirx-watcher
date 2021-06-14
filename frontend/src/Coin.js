import React from "react";
import "./Coin.css";
const Coin = ({ name, image, symbol, price, volume }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <h1>{name}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-price">₹{price}</p>
          <div className="coin-volume">₹{volume}</div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
