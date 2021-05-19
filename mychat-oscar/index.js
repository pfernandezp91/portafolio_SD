var app=require("express")();
var http=require("http").Server(app);
var io=require("socket.io")(http);

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


http.listen(3000,function(){
    console.log("listen in 3000");
});