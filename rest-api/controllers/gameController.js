const Game = require('../models/gameModel');

// Create a new game
exports.createGame = async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        game: newGame
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Get all games
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json({
      status: 'success',
      data: {
        games
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Get a single game by ID
exports.getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({
        status: 'fail',
        message: 'Game not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        game
      }
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Update a game by ID
exports.updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!game) {
      return res.status(404).json({
        status: 'fail',
        message: 'Game not found'
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        game
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

// Delete a game by ID
exports.deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({
        status: 'fail',
        message: 'Game not found'
      });
    }
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};
