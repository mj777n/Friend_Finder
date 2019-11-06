var express = require("express");
  // require "path" for GET routes
var path = require("path");


  // "display" routes for html 
module.exports=function(app) {
  app.get("/survey" ,function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}