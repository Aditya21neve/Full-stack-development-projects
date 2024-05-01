import express from "express";
const app = express();
const port = 3000;


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

function logger(req , res, next){
  console.log("This is req:  ",req.method);
  console.log("This is url: " , req.url);
  next();
} 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
 