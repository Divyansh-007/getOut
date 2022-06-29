// home page
module.exports.home = (req, res) => {
  return res.status(200).json({
    message: "Welcome to GetOut Home",
  });
};

// api home page
module.exports.apiHome = (req, res) => {
  return res.status(200).json({
    message: "Welcome to GetOut API Home",
  });
};
