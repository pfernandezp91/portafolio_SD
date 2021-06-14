require('dotenv/config');
var app=require("express")();
var http=require("http").Server(app);
const MongoClient = require('mongodb').MongoClient;
const bodyParser=require('body-parser');
var io=require("socket.io")(http);
const mongoose=require("mongoose");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var User=require("./models/user")
var Message=require("./models/message")
mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true }
) .then(()=>console.log('base de datos conectada'))
  .catch( error => console.log(error))

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
io.on("connection",function(socket){
    console.log("Nueva conexion");
    
    socket.on("nuevo_mensaje",function(mensaje){
        io.emit("nuevo_mensaje",mensaje);
    });

    socket.on("disconect", function(){
        console.log("desconexion");
    });
});


http.listen(process.env.PORT||3000,function(){
    console.log("listen in 3000");
}); 