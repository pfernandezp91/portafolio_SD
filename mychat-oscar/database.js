const MongoClient = require('mongodb').MongoClient;
require('dotenv/config');
const mongoose = require('mongoose');
//----------Conexion a la base de datos de mongo-------
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true }
) .then(()=>console.log('base de datos conectada'))
  .catch( error => console.log(error))