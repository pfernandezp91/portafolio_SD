const express = require('express');
const usuarios = require('usuarios');
const app = express();

//const user = usuarios.getRandomUser();


app.use(express.static(__dirname + '/public/'), function (req, res){
    
    const user = usuarios.getRandomUser();
    res.send(`hola ${user.name}, Tu numero de cuenta es : ${user.acount} , tu correo es : ${user.email}`);
});

app.listen('3000');

console.log('esta app esta corriendo por el puerto 3000')