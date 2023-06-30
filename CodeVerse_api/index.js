const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.send({"Api":"CodeVerse","version":"1.0.1"})
})

app.listen(8000, () => {
    console.log("backend server running....")
})