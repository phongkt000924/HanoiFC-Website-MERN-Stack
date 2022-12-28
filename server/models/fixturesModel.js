const mongoose = require("mongoose");

const fixureSchema = new mongoose.Schema(
  {
    tournaments_year: {
      type: Number,
      required: true,
    },
    tournaments_match: {
      type: Number,
      required: true,
    },
    tournaments_name: {
      type: String,
      required: true,
    },
    datetimes: {
      type: String,
      required: true,
    },
    stadium: {
      type: String,
      required: true,
    },
    nameclubhome: {
      type: String,
      required: true,
    },
    imageclubhome: {
      type: String,
      default:
        "https://www.fotmob.com/_next/static/media/team_fallback.3ae01170.png",
    },
    scorehome: {
      type: Number,
      required: true,
    },
    scoreaway: {
      type: Number,
      required: true,
    },
    imageclubaway: {
      type: String,
      default:
        "https://www.fotmob.com/_next/static/media/team_fallback.3ae01170.png",
    },
    nameclubaway: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("fixture", fixureSchema);
