const mongoose = require('mongoose');

var Recent = mongoose.model('Recent', {
  search: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = {Recent};