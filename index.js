const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require('path');

const connectDB = require('./server/database/connection');

dotenv.config({
    path: '.env'
});
const PORT = process.env.PORT||3000;

app.use(express.json());
//load routes
app.use('/',require('./server/routes/routes'));


// mongodb connection
connectDB();

app.listen(PORT, () => {
    console.log("Server is running");
})