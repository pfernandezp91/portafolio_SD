var app=require("express")();
var http=require("http").Server(app);
const MongoClient = require('mongodb').MongoClient;
var io=require("socket.io")(http);

const uri = "mongodb+srv://oramos6:12345@cluster0.onkyo.mongodb.net/chat?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get("/",function(req,res){
   res.sendFile(__dirname+"/index.html"); 
});

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