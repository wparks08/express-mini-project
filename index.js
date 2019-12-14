var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//6 routes

//GET home
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})

//GET reservations
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

//GET viewTables
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

//GET reservations [JSON]

//GET waitlist [JSON]

//POST makeReservation

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
})