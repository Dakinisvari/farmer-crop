# 👩‍🌾 Farmer Crop Management System

This is a web-based application for managing farmer login, crop detail submission, and viewing recommended information based on crop and location. Built using **Node.js**, **Express**, and **MySQL**.

---

## 📂 Project Structure

farmer-crop/
│
├── public/ # Static HTML/CSS files
│ ├── crop-details.html
│ ├── login.html
│ ├── signup.html
│ └── style.css
│
├── database.sql # MySQL schema and initial table setup
├── server.js # Main server file using Node.js and Express
├── package.json # Project dependencies and scripts
└── README.md # Project documentation

yaml
Copy
Edit

---

## ⚙️ Features

- 👨‍🌾 Farmer registration and login system
- 🌾 Submit crop details (type, soil, area, date, etc.)
- 📊 Store data in MySQL with secure authentication
- 🔐 Session-based login management
- 🎯 Recommendations based on crop type (GSM value, etc.)

---

## 🧩 Prerequisites

Before running this project, ensure you have:

- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) installed and running

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Dakinisvari/farmer-crop.git
cd farmer-crop
2. Install Node.js Dependencies
bash
Copy
Edit
npm install
3. Import the MySQL Database
Open phpMyAdmin or any MySQL client

Create a database named farmerdb

Import the database.sql file provided in the root directory

4. Start the Server
bash
Copy
Edit
node server.js
Then open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
