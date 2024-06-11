const {Pool} = require("pg");
const config = require('./db-config');
let connection = new Pool(config);
module.exports = connection;