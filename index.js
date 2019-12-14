var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//6 routes

//GET home

//GET reservations

//GET viewTables

//GET reservations [JSON]

//GET waitlist [JSON]

//POST makeReservation

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
})