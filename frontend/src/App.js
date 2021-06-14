import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import "./App.css";

const restEndpoint = "http://localhost:5000/getData/";

const callRestApi = async (curr = "") => {
  const response = await fetch(restEndpoint + curr);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return JSON.stringify(jsonResponse);
};

function App() {
  const [coins, setCoins] = useState([]);
  const [otherCurrency, setOtherCurrency] = useState("getting price");
  const [search, setSearch] = useState("");
  useEffect(() => {
    callRestApi()
      .then((result) => result)
      .then((result) => {
        const arrayOfObj = Object.entries(result).map((e) => ({
          [e[0]]: e[1],
        }));
        console.log("my result", arrayOfObj);
        setCoins(arrayOfObj);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    callRestApi("btcinr")
      .then((result) => setOtherCurrency(result))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(typeof coins);
  return (
    <div>
      <h1>React App</h1>
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={() => handleChange}
          />
        </form>
      </div>
      <div>
        {}
      </div>
    </div>
  );
}
export default App;
