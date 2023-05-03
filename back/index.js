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

app.get("/coins", (req, res) => {
  const categoryId = req.query.cat;
  connection.query(
    `SELECT * from coins WHERE coin_category='${categoryId}';`,
    (err, result) => {
      if (err) {
        throw err;
      }
      res.json(result);
    }
  );
});

app.get("/coins/:id", (req, res) => {
  const coinId = req.params.id;

  connection.query(`SELECT * FROM coins WHERE id='${coinId}';`, (err, result) => {
    if (err) {
      throw err;
    }

    connection.query(
      `SELECT * FROM coin_descriptions WHERE desc_coinId=${coinId}`,
      (err, result2) => {
        if (err) {
          throw err;
        }

        result = [{ ...result[0], descriptions: result2 }];
        res.json(result);
      }
    );
  });
});

app.get("/", (req, res) => {
  const { s, price, year, country, metal, quality } = req.query;
  const selectByName = `SELECT id FROM coins WHERE coin_name LIKE '%${s}%';`;
  const selectByShortDesc = `SELECT id FROM coins WHERE coin_shortDesc LIKE '%${s}%';`;
  const selectByLongDesc = `SELECT id FROM coins JOIN coin_descriptions ON desc_coinId=id WHERE desc_text LIKE '%${s}%';`;

  const data = [];

  connection.query(selectByName, (err, result) => {
    if (err) {
      res.status(404).send();
    }
    data.push(...result);
  });

  connection.query(selectByShortDesc, (err, result) => {
    if (err) {
      res.status(404).send();
    }
    data.push(...result);
  });

  connection.query(selectByLongDesc, (err, result) => {
    if (err) {
      res.status(404).send();
    }
    data.push(...result);

    const dataSet = new Set();
    data.forEach((obj) => dataSet.add(obj.id));
    const finalData = [];

    Array.from(dataSet).forEach((id, idx, arr) => {
      connection.query(
        `SELECT * FROM coins WHERE id=${id}`,
        (err, finalResult) => {
          if (err) {
            res.status(404).send();
          }
          finalData.push(...finalResult);
          idx === arr.length - 1 && res.json(finalData);
        }
      );
    });
  });
});

app.listen(PORT, (err) => {
  if (err) console.log("Error during listening port: ", err);
  console.log(`Listening PORT ${PORT}`);
});
