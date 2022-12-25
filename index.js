import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World!");
    console.log("trying");
});

app.listen(4000, ()=>{
    console.log("app is running at 4000");
});