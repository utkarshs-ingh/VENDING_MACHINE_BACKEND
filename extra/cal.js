//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("a", function(req, res){
    res.sendFile(__dirname + "/ind.html");
});
app.post("a", function(req, res){
    var n1 = parseInt(req.body.n1, 10);
    var n2 = parseInt(req.body.n2, 10);
    var result = n1 + n2;
    res.send("sum is: " + result);
});
app.listen(3000, function() {
    console.log("server running on port 3000");
});


