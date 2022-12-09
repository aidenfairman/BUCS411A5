const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user:null,
    host:null,
    password:null,
    database:null,
});

app.listen(3001, () => {
    console.log("running server");
});