const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const path = require("path");
const connection = require('./config/db');

// Connection to DB


// Custom Routes
const ProductRouter = require("./routes/product-route");

// Middleware plugins 
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routing 
app.use('/api/products', ProductRouter);

app.listen(process.env.PORT, () => {
    console.log(`You are connnected to the server http://localhost:${process.env.PORT}`);

})