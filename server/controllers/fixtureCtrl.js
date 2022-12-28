const Fixture = require("../models/fixturesModel");

const fixtureCtrl = {
  createFixture: async (req, res) => {
    try {
      const {
        tournaments_year,
        tournaments_match,
        tournaments_name,
        datetimes,
        stadium,
        nameclubhome,
        imageclubhome,
        scorehome,
        scoreaway,
        imageclubaway,
        nameclubaway,
      } = req.body;

      const newFixture = new Fixture({
        tournaments_year,
        tournaments_match,
        tournaments_name,
        datetimes,
        stadium,
        nameclubhome,
        imageclubhome,
        scorehome,
        scoreaway,
        imageclubaway,
        nameclubaway,
      });

      await newFixture.save();

      res.json({
        msg: "Tạo lịch thi đấu và kết quả thành công!",
        newFixture: {
          ...newFixture._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getFixture: async (req, res) => {
    try {
      const fixture = await (
        await Fixture.find({ tournaments_year: req.body.year }).sort(
          "tournaments_match"
        )
      ).reverse();

      res.json({ msg: "Success!", result: fixture.length, fixture });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = fixtureCtrl;
