// server.js
const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 3000;
const upload = multer(); // For handling form data

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// DB Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Dakini02',
  database: 'farmerdb'
});

connection.connect(err => {
  if (err) {
    console.error('DB connection error:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.post('/signup', (req, res) => {
  const { name, phone, aadhar, password, lang } = req.body;

  const sql = 'INSERT INTO farmers (name, phone, aadhar, password, language) VALUES (?, ?, ?, ?, ?)';
  connection.query(sql, [name, phone, aadhar, password, lang], (err) => {
    if (err) {
      return res.send(`<script>alert("Signup failed"); window.history.back();</script>`);
    }
    res.send(`<script>alert("Signup successful!"); window.location.href = "/index.html";</script>`);
  });
});
app.post('/login', (req, res) => {
  const { phone, pass } = req.body;
  const query = `SELECT * FROM farmers WHERE phone = ? AND password = ?`;
  connection.query(query, [phone, pass], (err, results) => {
    if (err) return res.send("Error logging in");

    if (results.length > 0) {
  const farmerId = results[0].id;
  req.session.farmerId = farmerId;  // ✅ Add this line
  res.send({ success: true, farmerId });
}
  });
});





// Your static files serving after protected route
app.use(express.static('public'));

// Add logout route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log("Session destruction error:", err);
    }
    res.redirect('/index.html');  // Redirect to login page after logout
  });
});
app.post('/crop-details', (req, res) => {
  const farmerId = req.body.farmer_id;
  const { location = "Sivakasi", land_area, soil_type, sowing_date } = req.body;

  if (!farmerId || !land_area || !soil_type || !sowing_date) {
    return res.status(400).send("All fields are required.");
  }

  const query = `
    INSERT INTO crop_details (farmer_id, location, land_area, soil_type, sowing_date)
    VALUES (?, ?, ?, ?, ?)
  `;

  connection.query(query, [farmerId, location, land_area, soil_type, sowing_date], (err) => {
    if (err) return res.status(500).send("Database error");
    res.redirect("/home.html");
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
