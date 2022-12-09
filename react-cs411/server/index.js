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

app.listen(3001, () => {
    console.log("running server");
});