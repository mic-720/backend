import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { url } from "inspector";

inquirer
  .prompt([
    {
        message: "Enter Your URL here : ",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url =answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt",url,(err) =>{
        if(err) throw err;
        console.log("File created Successfully");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });