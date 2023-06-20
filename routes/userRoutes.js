const express = require("express");

const { areIndrectFriends } = require("../controllers/userControllers");

const router = express.Router();

router.get("/areIndrectFriends", areIndrectFriends);

module.exports = router;