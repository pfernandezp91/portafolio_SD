const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('chatcomments', CommentSchema);
