const express=require('express');
const app=express();
const usuarios=require('usuarios')

app.use(express.static(__dirname +'/public/'),function(req,res){
const user=usuarios.getRamdonmUser();
res.send(`Hola ${user.name} tu numero de cuenta es ${user.acount} y correo es ${user.email}`)
});
app.listen('3000');
    console.log('servidor levantado');