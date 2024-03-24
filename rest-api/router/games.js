const express = require("express");
const { auth } = require('../utils');
const gameController = require("../controllers/gameController");

const router = express.Router();

router
  .route("/")
  .get(gameController.getAllGames)
  .post(auth(), gameController.createGame);

router
  .route("/:gameId")
  .get(gameController.getGame)
  .put(auth(), gameController.updateGame)
  .delete(auth(), gameController.deleteGame);

module.exports = router;
