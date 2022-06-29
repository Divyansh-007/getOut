const axios = require("axios"); // to ftech JSON data from the api endpoint provided.
const Album = require("../models/album"); // calling album model to be used.

// load the JSON data to the database in album schema
module.exports.loadData = async (req, res) => {
  try {
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((response) => {
        response.data.feed.entry.map(async (item) => {
          let newAlbum = await Album.create({
            name: item["im:name"].label,
            title: item.title.label,
            artist: item["im:artist"].label,
            category: item.category.attributes.label,
            rights: item.rights.label,
            link: item.link.attributes.href,
            releaseDate: new Date(item["im:releaseDate"].label),
            price: {
              amount: item["im:price"].attributes.amount,
              currency: item["im:price"].attributes.currency,
            },
          });
        });
      })
      .catch((err) => console.log(err));

    return res.status(200).json({
      message: "Data Loaded Successfully...",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// get the list of all albums filtered by page and order
module.exports.getAlbums = async (req, res) => {
  const { order, page } = req.query;
  if (!page) {
    if (!order) {
      try {
        const albums = await Album.find();

        return res.status(200).json({
          message: "Albums...",
          albums: albums,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      if (order == "newToOld") {
        try {
          const albums = await Album.find().sort({ releaseDate: -1 });

          return res.status(200).json({
            message: "Albums...",
            albums: albums,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
      } else {
        try {
          const albums = await Album.find().sort({ releaseDate: 1 });

          return res.status(200).json({
            message: "Albums...",
            albums: albums,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
  } else {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await Album.countDocuments({});

    if (!order) {
      try {
        const albums = await Album.find().limit(LIMIT).skip(startIndex);
        res.status(200).json({
          message: "Albums...",
          currentPage: Number(page),
          numberOfPages: Math.ceil(total / LIMIT),
          albums: albums,
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      if (order === "newToOld") {
        try {
          const albums = await Album.find()
            .sort({ releaseDate: -1 })
            .limit(LIMIT)
            .skip(startIndex);
          res.status(200).json({
            message: "Albums...",
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
            albums: albums,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
      } else {
        try {
          const albums = await Album.find()
            .sort({ releaseDate: 1 })
            .limit(LIMIT)
            .skip(startIndex);
          res.status(200).json({
            message: "Albums...",
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
            albums: albums,
          });
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
      }
    }
  }
};

// get the list of albums by name
module.exports.getAlbumsByName = async (req, res) => {
  const { name, price } = req.query;

  try {
    const albums = await Album.find({ name: { $regex: name } });
    return res.status(200).json({ message: "Albums...", albums: albums });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// get the list of albums by artist
module.exports.getAlbumsByArtist = async (req, res) => {
  const { artist } = req.query;

  try {
    const albums = await Album.find({ artist: { $regex: artist } });
    return res.status(200).json({ message: "Albums...", albums: albums });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// get the list of albums by category
module.exports.getAlbumsByCategory = async (req, res) => {
  const { category } = req.query;

  try {
    const albums = await Album.find({ category: { $regex: category } });
    return res.status(200).json({ message: "Albums...", albums: albums });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
