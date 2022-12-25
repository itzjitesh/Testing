import express from "express";
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import route from "./routes/route.js";
const app = express();

app.use("/home", route);


app.set("view engine", "ejs");

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', path.join(__dirname,  '/client/views'));

// console.log(__dirname);

app.use(express.static("public"));
// app.use(express.static(__dirname + "/client" + "public"));

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