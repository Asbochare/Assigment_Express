const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.get("/",(req,res)=>{
res.send("Hi")
})

app.post("/student/add",(req,res)=>{
const data = req.body;
if(data.studentFirstName && data.collegeName && data.location){
res.send({"result":"Success"})
}else{
res.send({"message":"Some fields are missing"})
}
})

app.listen(3000,()=>{console.log("Server is runnig on port 3000")})