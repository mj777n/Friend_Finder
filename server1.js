  // Dependencies
  // =============================================================
var express=require("express");
// var path = require("path");
// var nodemon = require("nodemon");
//   var bodyParser = require("body-parser");
    // Set up the Express App
    // =============================================================
var app = express();
var PORT = process.env.PORT || 8080;	  
  
    // Set up the Express app to handle data parsing
app.use(express.static("/app/public"));
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//   app.use(express.static(__dirname + "/app/public")); 
    // Routes
    // =============================================================
  require("./app/routing/htmlRoutes1")(app);
  require("./app/routing/apiRoutes1")(app);
  
    // Starts the server to begin listening
    // =============================================================
  app.listen(PORT, function() {
    console.log("Server Kat is listening on PORT: " + PORT);
  });
  