import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Satyam@10",
  port: 5432.
});
 db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  //Write your code here.-
  const result = await db.query("SELECT country_code from visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  })
  // console.log("Let' see : ",result.rows)
  // console.log("countries : ",countries);
  // console.log("**result.rows** : ",result.rows)
  res.render("index.ejs",{
    countries: countries,
    total: countries.length
  });
});

app.post("/add", async (req,res) => {
  let input = req.body["country"];
  const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1",[input]);
  if(result.rows.length != 0){
    let code = result.rows[0]["country_code"];
    db.query("INSERT INTO visited_countries (country_code) VALUES($1)",[code]);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
