"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// my stuff:
const axios = require("axios");
const cors = require("cors");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  // adding my stuff below
  .use(cors())

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("/", (req, res) => res.status(200).json("Hello world"))
  // stuff below is mine

  .get("/screener", (req, res, next) => {
    axios
      .get(
        "https://old.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download"
      )
      .then((response) => {
        let nasdaqList = response.data.split("\r\n").map((stock) => {
          return stock
            .replace(/",/g, "")
            .replace(/\"/g, "|")
            .split("|")
            .splice(1);
        });
        nasdaqList.shift();
        nasdaqList.pop();

        let stocks = nasdaqList.map((stock) => {
          return {
            Ticker: stock[0],
            Name: stock[1],
            LastPrice: stock[2],
            //marketCap: stock[3],
            //ipoYear: stock[4],
            //sector: stock[5],
            Industry: stock[6],
            //summaryquote: stock[7],
          };
        });
        return res.send(stocks);
      });
  })

  //stuff below is not mine
  .get("/*", (req, res) => {
    res
      .status(404)
      .json({ message: "Node is working, need the proper thingies" });
  })
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
