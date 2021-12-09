const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/User-Data";
var db;
MongoClient.connect(url, { useunifiedTopology: true }, function (err, dbo) {
    if (err) throw err;
    console.log("Connected");
    // var dbo = dbo.db();
    db = dbo.db();
    // console.log(db);
    module.exports = { db };

});

