const Standing = require("../models/standingsModel");

const standingCtrl = {
  createStading: async (req, res) => {
    try {
      const {
        rating_year,
        rating,
        imageclub,
        nameclub,
        matches,
        win,
        draw,
        lose,
        numberofgoal,
        point,
      } = req.body;

      const newStanding = new Standing({
        rating_year,
        rating,
        imageclub,
        nameclub,
        matches,
        win,
        draw,
        lose,
        numberofgoal,
        point,
      });

      await newStanding.save();

      res.json({
        msg: "Tạo bảng xếp hạng thành công!",
        newStanding: {
          ...newStanding._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getStandings: async (req, res) => {
    try {
      const standing = await Standing.find({rating_year: req.body.year}).sort("rating")

      res.json({ msg: "Success!", result: standing.length, standing });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = standingCtrl;