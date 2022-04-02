require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookie middleware
app.use(cookieParser());

//importing routes here
const Hotel = require("./routes/Hotel");

//router middleware
app.use("/api/v1", Hotel);

module.exports = app;
