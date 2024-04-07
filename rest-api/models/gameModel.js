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
  releaseYear: {
    type: Date,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
