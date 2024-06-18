const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
const path = require("path");
const connection = require('./config/db');
// let {decodeTheSecret} = require("./services/singin-singnup");

// Connection to DB
connection.connect()
.then((res) => res)
.then(() => console.log("Connected to the Postgres...."))
.catch(error => {console.log(error)});

// Custom Routes
const ProductRouter = require("./routes/product-route");
const LoginRouter = require("./routes/login-route");
const RegisterRouter = require("./routes/register-route");
const cookieParser = require("cookie-parser");

// Middleware plugins 
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routing 
app.use('/api/products', ProductRouter);
app.use('/api/registeruser' , RegisterRouter);
app.use('/api/loginuser', LoginRouter);

app.listen(process.env.CONPORT, () => {
    console.log(`You are connnected to the server http://localhost:${process.env.CONPORT}`);    
})