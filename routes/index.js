// required libraries
const express = require("express");

const router = express.Router();
const homeController = require("../controllers/homeController");

console.log("Main Express Router Loaded");

// home page routing
router.get("/", homeController.home);

// other routing
router.use("/api", require("./api/index"));

module.exports = router;
