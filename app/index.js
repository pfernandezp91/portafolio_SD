const express = require('express');
const usuario = require('usuarios');
const app =express();

app.use(express.static(__dirname + '/public/'), function (req, res){
    const userx=usuario.getRandomUser();
    res.send(`Hola`)
    res.send(`Hola ${userx.names}, tu numero de cuenta es ${userx.acount} y
     tu correo universitario es ${userx.email}`)
});

app.listen('3000');

console.log('esta app esta corriendo por el puerto 3000');