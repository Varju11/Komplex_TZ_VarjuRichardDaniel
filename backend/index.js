const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql")
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  password:"",
  user:"root",
  port:3306,
  host:"127.0.0.1",
  database:"komplex"
})
app.get("/",(req,res)=>{
    res.send("Fut a backend!");
})

app.get("/",(req,res)=>{
  const sql ="Select * from valami"
  db.query(sql, (err,res)=>{
    if(err) return(res.json(err))
  })
})
app.post("")

app.listen(3308, ()=>{
    console.log("Fut a szerver a 3308-es porton");
});
