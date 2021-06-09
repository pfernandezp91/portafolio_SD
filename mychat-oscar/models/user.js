const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user:  String,
  email: String
});

// Crear el modelo
const User = mongoose.model('User', userSchema);

module.exports = User;