var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function Reservation(id, name, phone, email) {
  this.id = id;
  this.name = name;
  this.phone = phone;
  this.email = email;
}

//6 routes
var tables = [];
var waitlist = [];
const MAX_TABLES = 5;

//GET home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//GET reservations
app.get("/new.html", function(req, res) {
  res.sendFile(path.join(__dirname, "new.html"));
});

//GET viewTables
app.get("/tables.html", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

//GET reservations [JSON]
app.get("/api/tables", function(req, res) {
  // tables.push(new Reservation(1, "Test", "555-5555", "nobody@email.com"));
  return res.json(tables);
});

//GET waitlist [JSON]
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

//POST makeReservation
app.post("/api/makeReservation", function (req, res) {
    let reservation = new Reservation(
        req.body.uniqueid,
        req.body.name,
        req.body.phoneno,
        req.body.emailid
    );
    if (tables.length < MAX_TABLES) {
        tables.push(reservation);
        res.send(true);
    } else {
        waitlist.push(reservation);
        res.send(false);
    }
});

app.listen(PORT, function() {
  console.log("Server listening on port " + PORT);
});
