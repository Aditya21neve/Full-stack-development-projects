import express from "express";
const app = express();
const port = 3000;




app.get('/', (req, res) =>{
    const d = new Date();
    let daay = d.getDay();
    console.log(daay);
if(daay==0){
    res.send("Hey Its Weekend,its time to have fun ");

}else{
    res.send("<h1>Hey Its weekday, Its time to work hard </h1>");
}
    
});

app.listen(port, ()=>{
    console.log(`Listen on port ${port}`);
});