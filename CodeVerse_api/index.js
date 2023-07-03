//IMPORTS
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//CONFIGS
dotenv.config(); // environment variables
const app = express(); //mainserver
connectDB(); //database connection
port = process.env.PORT || 8800; //connection port

//MIDDLEWARES
app.use(express.json()); //bodyparser
app.use(helmet());
app.use(morgan("common"));

//API ROUTES
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send({ Api: "CodeVerse", version: "1.0.1" });
});

app.listen(port, () => {
  console.log(`backend server running on http://localhost:${port}`);
});
