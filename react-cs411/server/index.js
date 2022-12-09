const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require ("cookie-parser");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({
    // name of cookie we are going to create
    key: "userId",
    secret: "cs411",
    resave: false,
    saveUninitialized: false,
    // cookie will expire in 24 hours
    cookie:{
        expires: 60 * 60 * 24, 
    },
})
);

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

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({loggedIn: true, user: req.session.user});
    } else {
        res.send({loggedIn: false});
    }
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
            req.session.user = result;
            console.log(req.session.user);
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