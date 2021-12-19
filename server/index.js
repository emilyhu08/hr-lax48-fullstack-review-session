const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("./router");

const server = express();
const port = 3001;

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);

server.use(express.static(path.join(__dirname, "../client/dist")));

server.listen(port, () => console.log(`listening on ${port}`));
