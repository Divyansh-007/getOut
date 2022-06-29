// required libarary
const mongoose = require("mongoose");

// album schema
const albumSchema = mongoose.Schema({
  name: String,
  title: String,
  artist: String,
  category: String,
  rights: String,
  link: String,
  price: {
    amount: Number,
    currency: String,
  },
  releaseDate: {
    type: Date,
    default: new Date(),
  },
});

// creating and exporting Album model
const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
