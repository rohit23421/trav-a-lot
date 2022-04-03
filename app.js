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
const HotelBooking = require("./routes/HotelBooking");
const Blog = require("./routes/Blog");

//router middleware
app.use("/api/v1", Hotel);
app.use("/api/v1", HotelBooking);
app.use("/api/v1", Blog);

module.exports = app;
