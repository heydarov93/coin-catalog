const express = require("express");
const multer = require("multer");
const mysql = require("mysql");
const cors = require("cors");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

// const fileUpload = require("express-fileupload");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(fileUpload());

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

/////////////////////////////////////////////////
// add new coin
app.post("/add-coin", (req, res) => {
  const {
    coin_name,
    coin_category,
    coin_denomination,
    denomination_unit,
    coin_year,
    coin_price,
    coin_country,
    coin_composition,
    coin_shortDesc,
    coin_longDesc,
    coin_quality,
    coin_weight,
    coin_img1,
    coin_img2,
  } = req.body;

  const sqlCoins = `INSERT INTO coins (coin_name, coin_category,coin_denomination, coin_year, coin_price, coin_country, coin_composition, coin_shortDesc, coin_quality, coin_weight, coin_img1, coin_img2) VALUES ?;`;

  const sqlLongDescription =
    "INSERT INTO coin_descriptions (desc_coinId, desc_text) VALUES ?;";

  const coinValues = [
    [
      coin_name,
      coin_category,
      `${coin_denomination} ${denomination_unit}`,
      coin_year,
      `${coin_price.trim() ? `${coin_price}$` : ""}`,
      coin_country,
      coin_composition,
      coin_shortDesc,
      coin_quality,
      `${coin_weight.trim() ? `${coin_weight} g` : ""}`,
      coin_img1,
      coin_img2,
    ],
  ];

  connection.query(sqlCoins, [coinValues], (err, result) => {
    if (err) {
      throw err;
    }
    // get last inserted id from coins table
    const lastInsertedId = result.insertId;

    // insert into coin descriptions table each text with last inserted coin id
    const longDescValues = coin_longDesc.map((descObj) => {
      return [lastInsertedId, descObj.text];
    });

    connection.query(sqlLongDescription, [longDescValues], (err, result2) => {
      if (err) {
        throw err;
      }

      res.status(200);
    });
  });
});

/////////////////////////////////////////////////
// update coin
app.post("/update-coin/:id", (req, res) => {
  const { id } = req.params;
  const {
    coin_name,
    coin_category,
    coin_denomination,
    denomination_unit,
    coin_year,
    coin_price,
    coin_country,
    coin_composition,
    coin_shortDesc,
    coin_longDesc,
    coin_quality,
    coin_weight,
    coin_img1,
    coin_img2,
  } = req.body;
  console.log(coin_longDesc);

  const sqlCoins = `UPDATE coins SET coin_name='${coin_name}', coin_category='${coin_category}', coin_denomination='${coin_denomination} ${denomination_unit}', coin_year='${coin_year}', coin_price='${
    coin_price.trim() ? `${coin_price}$` : ""
  }', coin_country='${coin_country}', coin_composition='${coin_composition}', coin_shortDesc='${coin_shortDesc}', coin_quality='${coin_quality}', coin_weight='${
    coin_weight.trim() ? `${coin_weight} g` : ""
  }', coin_img1='${coin_img1}', coin_img2='${coin_img2}' WHERE id=${id};`;

  const sqlLongDescription = `INSERT INTO coin_descriptions (desc_id, desc_coinId, desc_text) VALUES ? ON DUPLICATE KEY UPDATE desc_text=VALUES(desc_text);`;

  // insert into coin descriptions table each text with last inserted coin id
  const longDescValues = coin_longDesc.map((descObj) => {
    return [descObj.desc_id, descObj.desc_coinId, descObj.text];
  });

  connection.query(sqlCoins, (err, result) => {
    if (err) {
      throw err;
    }

    connection.query(sqlLongDescription, [longDescValues], (err, result2) => {
      if (err) {
        throw err;
      }

      res.status(200);
    });
  });
});

///////////////////////////////////////////////////////////
// delete coin
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  connection.query(`DELETE FROM coins WHERE id=?`, [id], (err, result) => {
    if (err) {
      throw err;
    }

    if (result.affectedRows === 0) {
      res.status(404).json({ id: null });
      return;
    }

    connection.query(
      `DELETE FROM coin_descriptions WHERE desc_coinId=?`,
      [id],
      (err, result) => {
        if (err) {
          throw err;
        }

        res.status(200).json({ id });
      }
    );
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

app.get("/coins/denomination/units", (req, res) => {
  const searchQuery = req.query.s;

  connection.query(
    `Select MIN(id) as id, coin_denomination FROM coins GROUP BY coin_denomination;`,
    (err, result) => {
      if (err) {
        throw err;
      }

      // we create an array of units of  denomination values by separating digit from each value
      const units = result.map(({ id, coin_denomination }) => {
        return {
          id,
          denomination_unit: coin_denomination.split(" ").slice(1).join(" "),
        };
      });

      // create an array from units that match search query
      const searchedUnits = units.filter(({ denomination_unit }) =>
        denomination_unit.startsWith(searchQuery)
      );

      // Create array of objects based unique unit value
      const uniqueUnits = [];

      for (const { id, denomination_unit } of searchedUnits) {
        const exists = uniqueUnits.some(
          (obj) => obj.denomination_unit === denomination_unit
        );

        if (!exists) {
          uniqueUnits.push({ id, denomination_unit });
        }
      }
      res.json(uniqueUnits);
    }
  );
});

app.get("/coins/:id", (req, res) => {
  const coinId = req.params.id;

  connection.query(
    `SELECT * FROM coins WHERE id='${coinId}';`,
    (err, result) => {
      if (err) {
        throw err;
      }
      const coin_denomination = result[0].coin_denomination.split(" ")[0];
      const denomination_unit = result[0].coin_denomination.split(" ")[1];

      connection.query(
        `SELECT * FROM coin_descriptions WHERE desc_coinId='${coinId}';`,
        (err, result2) => {
          if (err) {
            throw err;
          }

          result = [
            {
              ...result[0],
              coin_denomination,
              denomination_unit,
              descriptions: result2,
            },
          ];
          res.json(result);
        }
      );
    }
  );
});

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
