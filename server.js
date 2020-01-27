const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();



// ////////////////demo/////////////////------------
const expressHandlebars = require("express-handlebars");
// ////////////////demo/////////////////------------



const PORT = process.env.PORT || 8080;




// ////////////////demo/////////////////------------

// set up an Express Router
var router = express.Router();

// Require our routes file pass oir router object
require("./config/routes")(router);

// Designate our public folder as a static directory
app.use(express.static(__dirname + "/public"));

// connect handlebars to our Express app 
app.engine("handlebars",expressHandlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Have every request got trough our router middleware
app.use(router);

// ////////////////demo/////////////////------------



// ////////////////////original///////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

// app.use(express.static("public"));


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/newsScraper";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);

// ROUTES
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// /////////////////////original/////////////////////////////////


// ////////////////demo/////////////////------------
mongoose.connect(MONGODB_URI, function(error){
if (error){
    console.log(error);
}
else {
    console.log("mongoose connected successfully!");
}
});
// ////////////////demo/////////////////------------




app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`)
});