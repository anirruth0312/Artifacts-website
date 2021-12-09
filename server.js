// const path = require('path');
const express = require('express');
const path = require('path');
//set public directory
const public_dir = path.join(__dirname, './Public');
const app = express()
const body_parser = require('body-parser');
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }))
//connection
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/User-Data";
var db;

MongoClient.connect(url, { useunifiedTopology: true }, function (err, dbo) {
    if (err) throw err;
    console.log("Connected");
    db = dbo.db();
    app.listen(8080, () => {
        console.log("Server is running");
    })
});

app.use(express.static(public_dir));
app.get('/', function (req, res) {
    res.sendfile('index.html');
})

app.post('/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var data1 = { 'email': email, 'password': password };
    db.collection('login-details').findOne(data1, function (err, data) {
        if (err) throw err;
        if (data !== null) { res.sendfile('Public/html/display.html'); }
        else {
            res.sendfile('Public/html/login_err.html')
        }
    })
})

// async function error_message() { }

app.post('/registration', function (req, res) {
    var new_username = req.body.email;
    var new_password = req.body.password;
    var check = { 'email': new_username };
    var new_data = { 'email': new_username, 'password': new_password };
    db.collection('login-details').findOne(check, function (err, data) {
        console.log("this is", data);
        if (err) throw err;
        if (data === null) {
            db.collection('login-details').insertOne(new_data, function (err, data) {
                if (err) throw err;
                res.redirect('/');
            });
        }
        else {
            res.sendfile('Public/html/signup_err.html');

        }
    })
})
app.get('/registration', function (req, res) {
    res.sendfile('public/html/signup.html');
})


