const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const usersRouter = require("./routes/users.route")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//users page Route
app.use("/users", usersRouter);


//Home page Route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


//Route not Found error
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
})

//Server error
app.use((err, req, res, next) => {
    res.status(500).json({ message: "Something Broke" });
})


module.exports = app;