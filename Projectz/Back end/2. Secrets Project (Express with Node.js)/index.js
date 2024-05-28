//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import  express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();
var passwerd = "ILoveProgramming";
app.use(express.urlencoded({extended: true}));
var auth = 0;
function chek (req, res, next){
    console.log(req.body);
    var newpass = req.body['password'];
    if(passwerd == newpass){
        auth =1;
    }

    next();

}



app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.use(chek);


    app.post('/check', (req, res) =>{
        if(auth){
            res.sendFile(__dirname + "/public/secret.html");
        }else{
            
            res.sendFile(__dirname + "/public/index.html");
        }
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



