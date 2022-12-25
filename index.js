import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res)=>{
    
    res.render("index");

    // const __dirname = dirname(fileURLToPath(import.meta.url));

    // res.sendFile(__dirname + "/public/index.html");
    // res.send("Hello World return again!");
    // console.log("trying");
    console.log("trying");
});

app.listen(4000, ()=>{
    console.log("app is running at 4000");
});