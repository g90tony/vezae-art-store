import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";

const bodyParser = require("body-parser");

const server = express();
const PORT = process.env.PORT || 8000;
const jsdom = require("jsdom");
const JSDOM = jsdom.JSDOM;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(express.static(path.resolve(__dirname, "..", "build")));

server.use("*", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("There was a problem loading the server");
    }
    global.document = new JSDOM(
      path.resolve("./build/index.html")
    ).window.document;

    const context = {};

    return res.status(200).send(
      data.replace(
        "<div id='root'></div>",
        `<div id='root'>${ReactDOMServer.renderToString(
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
});

server.listen(PORT, () => {
  console.log(`App running on Port number ${PORT}`);
});
