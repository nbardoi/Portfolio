// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");

var router = express.Router();

// Routes
// =============================================================

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html


  // cms route loads cms.html
//   app.get("/restaurants", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/display.html"));
//   });

//   // login page to add new restaurants
//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/add.html"));
//   });

//   app.get("/contact", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/contact.html"));
//   });

module.exports = routes;