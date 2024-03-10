import express from "express";

const app = express();
let port = 3000;

let d = new Date();
let day = d.getDay();

let type = "a weekday";
let adv = "it's time to work hard!";
if(day==0 || day==6){
    type="the weekend";
    adv = "it's time to have fun!";
};
app.get("/",(req,res) => {
    res.render("index.ejs",
    {
       dayType : type,
       advice: adv,
    });
});
app.listen(port,() => {
    console.log(`Your port is successfully running at port ${port}`)
});