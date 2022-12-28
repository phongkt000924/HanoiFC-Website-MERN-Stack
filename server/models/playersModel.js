const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      maxlength: 70,
    },
    position: {
      type: String,
      required: true,
      maxlength: 25,
    },
    number: {
      type: Number,
    },
    image: {
      type: String,
      default:
        "https://drive.google.com/uc?id=1AWr8YLvShlrV8Aagm8o9FsmEor6VNCP4",
    },
    born: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    season: {
      type: Number,
      required: true,
    },
    news: {
      type: Array,
      default: [],
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("player", playerSchema);
