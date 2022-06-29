// required libraries
const express = require("express");

const router = express.Router();
const homeController = require("../../controllers/homeController");

console.log("API Express Router Loaded");

// home page routing
router.get("/", homeController.apiHome);

// album routing
router.use("/album", require("./album"));

module.exports = router;
