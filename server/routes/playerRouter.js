const router = require("express").Router();
const playerCtrl = require("../controllers/playerCtrl");

router.post("/newplayer", playerCtrl.createPlayer);
router.post("/allplayers", playerCtrl.getPlayers);
router.post("/getplayer", playerCtrl.getPlayer);

module.exports = router;