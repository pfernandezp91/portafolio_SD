const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user:{
      type:String,
      require:true
  },
  email:{
  type:String,
  require:true
  }
});

// Crear el modelo
const User = mongoose.model('User', userSchema);

module.exports = User;