const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"hotdog1234",
    database:"SearchByTaste",
});

app.post('/register', (req, res) => {
    
    const username = req.body.username; 
    const password = req.body.password;
    db.query(
        "INSERT INTO Users (user_name, password) VALUES (?,?)",
        [username,password], 
        (err, result) => {
            console.log(err);
        
    });
});

app.post('/login', (req, res) => {
    
    const username = req.body.username; 
    const password = req.body.password;
    db.query(
        "SELECT * FROM Users WHERE user_name = ? AND password = ?",
        [username,password], 
        (err, result) => {
        if (err) {
            res.send({err:err})
        } 
        
        if (result.length > 0){
            res.send(result)
        } else {
            res.send({message:"Wrong username/password combination!"});
            }
        }
    );
});


app.listen(3001, () => {
    console.log("running server");
});