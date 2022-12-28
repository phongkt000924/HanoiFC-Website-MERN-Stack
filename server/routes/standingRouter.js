const router = require("express").Router();
const standingCtrl = require("../controllers/standingCtrl");

router.post("/newstanding", standingCtrl.createStading);
router.post("/allstanding", standingCtrl.getStandings);

module.exports = router;