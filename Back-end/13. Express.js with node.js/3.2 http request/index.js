import express from "express";
const app = express();
const port = 3000;

 app.get("/", (req, res) =>{
      res.send("Hello");
    
 })

app.get("/contact", (req, res) =>{
      res.send("This is contact page");
    
 })
 app.get("/about", (req, res) =>{
      res.send("This is about page");
    
 })

app.listen(port, portrequest);



function portrequest(){
    console.log(`Server is running on ${3000}.`);
}