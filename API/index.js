const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const path = require("path");
const connection = require('./config/db');

// Connection to DB
connection.connect()
.then((res) => res)
.then(() => console.log("Connected to the Postgres...."))
.catch(error => {console.log(error)});

// Custom Routes
const ProductRouter = require("./routes/product-route");

// Middleware plugins 
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routing 
app.use('/api/products', ProductRouter);

app.listen(process.env.CONPORT, () => {
    console.log(`You are connnected to the server http://localhost:${process.env.PORT}`);

})