const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "coin_catalog",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected");
});

app.get("/categories", (req, res) => {
  connection.query("SELECT * FROM categories", (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.listen(PORT, (err) => {
  if (err) console.log("Error during listening port: ", err);
  console.log(`Listening PORT ${PORT}`);
});
