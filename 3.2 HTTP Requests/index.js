import express from "express";

let app = express();
let port = 3000;
app.listen(port,() => {
    console.log(`Our Server is Running at Port : ${port}`);
});
app.get("/",(req,res) => {
    res.send("<h1>Hello brother</h1>");
});
app.get("/about",(req,res) => {
    res.send("This is The about page");
});
app.get("/contact",(req,res) => {
    res.send("This is the contact page");
});