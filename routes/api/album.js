// required libraries
const express = require("express");

const router = express.Router();
const albumController = require("../../controllers/albumController");

console.log("Album API Express Router Loaded");

// load data
router.get("/loadData", albumController.loadData);

// get all albums
router.get("/getAlbums", albumController.getAlbums);

// search albums with matching name
router.get("/searchByName", albumController.getAlbumsByName);

// search albums with matching artist
router.get("/searchByArtist", albumController.getAlbumsByArtist);

// search albums with matching category
router.get("/searchByCategory", albumController.getAlbumsByCategory);

module.exports = router;
