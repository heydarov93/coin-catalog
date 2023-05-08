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
  connection.query("SELECT * FROM categories;", (err, result) => {
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
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/coins/columns", (req, res) => {
  const cols = req.query.data.split(",");
  const finalData = [{}];
  cols.forEach((colName, idx, arr) => {
    connection.query(
      `SELECT MIN(id) as id, ${colName} as value FROM coins GROUP BY ${colName}`,
      (err, result) => {
        if (err) {
          throw err;
        }
        finalData[0][colName] = result.map((data) => data);
        idx === arr.length - 1 && res.json(finalData);
      }
    );
  });
});

app.get("/coins/:id", (req, res) => {
  const coinId = req.params.id;

  connection.query(
    `SELECT * FROM coins WHERE id='${coinId}';`,
    (err, result) => {
      if (err) {
        throw err;
      }

      connection.query(
        `SELECT * FROM coin_descriptions WHERE desc_coinId='${coinId}';`,
        (err, result2) => {
          if (err) {
            throw err;
          }

          result = [{ ...result[0], descriptions: result2 }];
          res.json(result);
        }
      );
    }
  );
});

// {
//   searchInput: "",
//   coin_country: "",
//   coin_price_min: "",
//   coin_price_max: "",
//   coin_composition: "",
//   coin_year_min: "",
//   coin_year_max: "",
//   coin_quality: "",
// }
app.post("/search", (req, res) => {
  // destructure search details from requested body
  let {
    searchInput,
    coin_country,
    coin_price_min,
    coin_price_max,
    coin_composition,
    coin_year_min,
    coin_year_max,
    coin_quality,
  } = req.body;

  // Definening values if they are falsy
  coin_country = coin_country ? `coin_country='${coin_country}' AND ` : "";
  coin_composition = coin_composition
    ? `coin_composition='${coin_composition}' AND  `
    : "";
  coin_quality = coin_quality ? `coin_quality='${coin_quality}'  AND  ` : "";
  coin_price_min ||= 0;
  coin_price_max ||= 99999999;
  coin_year_min ||= 0;
  coin_year_max ||= 9999;

  // query statements based on search detail values
  const searchDetails = ` ${coin_country} ${coin_composition} ${coin_quality} coin_price BETWEEN ${coin_price_min} AND ${coin_price_max} AND coin_year BETWEEN ${coin_year_min} AND ${coin_year_max}`;

  const selectByName = `SELECT id FROM coins WHERE coin_name LIKE '%${searchInput}%' AND${searchDetails} ;`;

  const selectByShortDesc = `SELECT id FROM coins WHERE coin_shortDesc LIKE '%${searchInput}%' AND${searchDetails} ;`;

  const selectByLongDesc = `SELECT id FROM coins JOIN coin_descriptions ON desc_coinId=id WHERE desc_text LIKE '%${searchInput}%' AND${searchDetails} ;`;

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

    // if we have multiple same coins (ids) then we take only one
    const dataSet = new Set();
    data.forEach((obj) => dataSet.add(obj.id));

    const finalData = [];

    // creating array from unique coins data
    if (dataSet.size > 0) {
      Array.from(dataSet).forEach((id, idx, arr) => {
        connection.query(
          `SELECT * FROM coins WHERE id='${id}';`,
          (err, finalResult) => {
            if (err) {
              res.status(404).send();
            }
            finalData.push(...finalResult);
            if (idx === arr.length - 1) {
              res.json(finalData);
            }
          }
        );
      });
    } else {
      res.status(404).json(null);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) console.log("Error during listening port: ", err);
  console.log(`Listening PORT ${PORT}`);
});
