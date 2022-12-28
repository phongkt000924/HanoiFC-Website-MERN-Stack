const Players = require("../models/playersModel");

const playerCtrl = {
  createPlayer: async (req, res) => {
    try {
      const {
        fullname,
        position,
        number,
        image,
        born,
        height,
        weight,
        address,
        season,
        news,
      } = req.body;

      const newPlayer = new Players({
        fullname,
        position,
        number,
        image,
        born,
        height,
        weight,
        address,
        season,
        news,
      });

      await newPlayer.save();

      res.json({
        msg: "Tạo player thành công!",
        newPlayer: {
          ...newPlayer._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getPlayers: async (req, res) => {
    try {
      const player = await Players.find({season: req.body.year}).sort("number")

      res.json({ msg: "Success!", result: player.length, player });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getPlayer: async (req, res) => {
    try {
      const player = await Players.find({_id: req.body.id})

      res.json({ msg: "Success!", result: player.length, player });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = playerCtrl;
