const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "db", // nama service MySQL di docker-compose
  user: "root",
  password: "password",
  database: "mydb",
});

app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.use(express.json());

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "User added", id: result.insertId });
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
