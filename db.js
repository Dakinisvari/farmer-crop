// db.js
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dakini02', // your MySQL password
  database: 'farmerdb'
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

module.exports = connection;
