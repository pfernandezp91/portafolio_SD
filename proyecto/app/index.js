const express = require('express');
const usuarios = require('usuarios');
const app = express();


app.use(express.static(__dirname + '/public/'), function(req, res){
        const User = usuarios.getRandomUser();
        res.send(`Hola ${User.name}, tu numero de cuenta es ${User.acount} y tu correo es ${User.email}`);
    });

app.listen('3000');

console.log('esta app esta corriendo por el puerto 3000')