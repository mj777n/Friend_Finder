var express = require("express");
var path = require("path");

module.exports=function(app) {
  app.get("/survey" ,function(req, res) {
    console.log("survey button clicked");
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // app.use(function(req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/home.html"));
  // });
}