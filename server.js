  // Dependencies
  // =============================================================
var express=require("express");
var bodyParser = require("body-parser");
  // Set up the Express App
  // =============================================================
var app = express();
  // Set the initial port.
var PORT = process.env.PORT || 8080;	  

  // Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/app/public"));	

  // Routes
  // =============================================================
  // require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

  // Starts the server to begin listening
  // =============================================================
app.listen(PORT, function() {
  console.log("Friend Finder is listening on PORT: " + PORT);
});
