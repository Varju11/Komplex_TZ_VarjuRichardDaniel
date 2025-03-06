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




app.get("/adatok",(req,res)=>{
  const sql ="SELECT diakok.nev AS 'Tanuló neve', tagozatok.agazat AS 'Ágazat',  SUM(diakok.hozott+ diakok.kpmagy+diakok.kpmat) AS 'Összes pontszám' FROM tagozatok INNER JOIN jelentkezesek ON jelentkezesek.tag = tagozatok.akod INNER JOIN diakok ON jelentkezesek.diak = diakok.oktazon WHERE tagozatok.nyek = 1 GROUP BY tagozatok.nyek;"

  db.query(sql, (err,res)=>{
    if(err) return(res.json(err))
    return res.json(result)
  })
})
app.post("")

app.listen(3308, ()=>{
    console.log("Fut a szerver a 3308-es porton");
});
