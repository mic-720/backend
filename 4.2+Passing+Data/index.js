import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let head = "Enter Your Name Below";
app.get("/", (req, res) => {
  res.render("index.ejs",{
    header: head,
  });
});

app.post("/submit", (req, res) => {
  let length = req.body["fName"].length+req.body["lName"].length;
  if(length === 0){
    res.render("index.ejs",{
      header: head,
    });
  }
  else{
    head = `There are ${length} letters in your name`;
    res.render("index.ejs",{
      header: head,
    })
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
