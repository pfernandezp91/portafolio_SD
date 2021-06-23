require('dotenv/config');
//-----------Dependencias-----------------------------
var app=require("express")();
var http=require("http").Server(app);
const bodyParser=require('body-parser');
var io=require("socket.io")(http);
//-----------------------------------------------------
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//------Modelos exportados ----------------------------
var User=require("./models/user")
var Message=require("./models/message")
//-----------------------------------------------------
//----------Conexion a la base de datos de mongo-------
require('./database');
//------------------------------------------------------

//-----Obtener datos de sus collections----------------
app.get("/users",async(req,res)=>{
    var arrayUser=await User.find()
   res.jsonp(arrayUser); 
});
app.post("/message",async(req,res)=>{
    try{
        var messages= new Message();
        messages.photo=req.body.photo;
        messages.user=req.body.user;
        messages.message=req.body.message;
    
    messages.save((error,commentStored)=>{
        if(error)res.status(500).send({Mensaje: "hubo un error al guardar los datos"});
        res.status(200).send({messages: commentStored});
    });
}
catch (error){
    console.log(error);
            }  
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})
//avisar de una nueva conexion
io.on("connection",async(socket)=>{

//Carga todos los mensajes al iniciar
    var arrayMessages=await Message.find()
    for(var i=0 ; i <=arrayMessages.length -1 ; i++) {
        var printmensaje =`<strong>${arrayMessages[i].user}</strong><BR>${arrayMessages[i].message}`;
        io.emit("nuevo_mensaje",printmensaje); }
        var bot=`<strong>BOT</strong><BR>BIENVENIDO`
        io.emit("nuevo_mensaje",bot); 
    console.log("Nueva conexion");

//toma el objeto mensaje lo crea y lo imprime en el chat 
    socket.on("nuevo_mensaje",function(mensaje){
        console.log(mensaje);
        Message.create(
            {
                photo:'oscar.jpg',
                user:mensaje.user,
                message:mensaje.mensaje
            })
        var printmensaje =`<strong>${mensaje.user}</strong><BR>${mensaje.mensaje}`;
        io.emit("nuevo_mensaje",printmensaje);
    });

    socket.on("disconect", function(){
        console.log("desconexion");
    });
    
});
//Leer el puerto 3000 
http.listen(process.env.PORT||3000,function(){
    console.log("listen in 3000");
}); 