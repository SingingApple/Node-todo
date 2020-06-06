const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//controllers
const todoController = require("./controllers/todoController");

// template engine
app.set("view engine", "ejs");
//static files
app.use(express.static("./public"));

//fireControllers
todoController(app);

app.listen(3000);
console.log("Listening to port 3000");
