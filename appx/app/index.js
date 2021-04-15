const express =require('express');
const usuarios =require('usuarios');
const app= express();

app.use(express.static(__dirname + '/'),function(req, res) {
    //console.log('app');
    const user=usuarios.getRandomUser();
    
    res.send(' hola '+ user.name +' tu numero de cuenta es ' 
    + user.acount + ' y tu correo ' + user.email);
    });

app.listen("3000");
