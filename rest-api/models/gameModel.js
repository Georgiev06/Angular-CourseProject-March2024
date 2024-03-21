const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  developer: {
    type: String,
    required: true
  },
  release_year: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
