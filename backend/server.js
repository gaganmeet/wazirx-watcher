const express = require("express");
const axios = require("axios");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
};

const requestEndpoint = "https://api.wazirx.com/api/v2/tickers/";

app.get("/getData", cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: "GET",
  };
  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.get("/getData/:currency", cors(corsOptions), async (req, res) => {
  const fetchOptions = {
    method: "GET",
  };
  const cur = req.params.currency;
  //console.log(cur);
  const response = await fetch(requestEndpoint + cur, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
});

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);
});
