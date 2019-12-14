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
});

//GET reservations
app.get("/new.html", function (req, res) {
    res.sendFile(path.join(__dirname, "new.html"));
});

//GET viewTables
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//GET reservations [JSON]
app.get("/api/reservations", function (req, res) {
    return res.json({ debug: "in process" })
})

//GET waitlist [JSON]
app.get("/api/waitlist", function (req, res) {
    return res.json({ debug: "in process" })
})

//POST makeReservation
app.post("/api/makeReservation", function (req, res) {

})

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
})