const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Mike_Ruiz:QtMm7r54cNvUCeL@cluster1.owsc4.mongodb.net/Midatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));