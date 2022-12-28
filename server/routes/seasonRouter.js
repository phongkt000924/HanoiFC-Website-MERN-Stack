const router = require("express").Router();
const seasonCtrl = require("../controllers/seasonCtrl");

router.post("/newseason", seasonCtrl.createSeason);

module.exports = router;