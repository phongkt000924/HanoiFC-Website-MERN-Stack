const Seasons = require("../models/seasonModel");

const seasonCtrl = {
  createSeason: async (req, res) => {
    try {
      const {
        season_year,
      } = req.body;

      const newSeason = new Seasons({
        season_year,
      });

      await newSeason.save();

      res.json({
        msg: "Tạo mùa giải thành công!",
        newSeason: {
          ...newSeason._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = seasonCtrl;
