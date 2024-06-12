const {Pool, Client} = require("pg");
const config = require('./db-config');
let connection = new Client(config);
module.exports = connection;