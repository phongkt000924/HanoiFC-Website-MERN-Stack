const mongoose = require("mongoose");

const standingSchema = new mongoose.Schema(
  {
    rating_year: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    imageclub: {
      type: String,
      default:
        "https://www.fotmob.com/_next/static/media/team_fallback.3ae01170.png",
    },
    nameclub: {
      type: String,
      required: true,
    },
    matches: {
      type: Number,
      required: true,
    },
    win: {
      type: Number,
      required: true,
    },
    draw: {
      type: Number,
      required: true,
    },
    lose: {
      type: Number,
      required: true,
    },
    numberofgoal: {
      type: Number,
      required: true,
    },
    point: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("standing", standingSchema);
