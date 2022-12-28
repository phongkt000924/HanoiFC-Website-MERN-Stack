const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema(
  {
    season_year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("season", seasonSchema);
