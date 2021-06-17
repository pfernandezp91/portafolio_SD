const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  photo:{
    type:String,
    default:"https://librosostenibilidad.files.wordpress.com/2017/03/paisaje-cultura-sostenibilidad.jpg"
  },
    user:  String,
  message: String
});

// Crear el modelo
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;