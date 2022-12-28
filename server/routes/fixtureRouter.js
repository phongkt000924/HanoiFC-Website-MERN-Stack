const router = require("express").Router();
const fixtureCtrl = require("../controllers/fixtureCtrl");

router.post("/newfixture", fixtureCtrl.createFixture);
router.post("/allfixtures", fixtureCtrl.getFixture);

module.exports = router;