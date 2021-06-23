const Chat = require('./models/Chat');
const chatcomments = require('./models/Comment');

module.exports = io => {

  let users = {};
  
 /*************************************COMENTARIOS***************************/
  
 io.on('connection', async socket => {
    let comments = await chatcomments.find({});
    socket.emit('load comments', comments);
    socket.on('send comment',  async (data)=>{
      io.sockets.emit('new comment', data)
      var newcmt = new chatcomments({
        comment: data
      });
      await newcmt.save();
    });

  /************************************CHAT*****************************/
    
    let messages = await Chat.find({}).limit(5).sort('-created');

    socket.emit('load old msgs', messages);

    socket.on('new user', (data, cb) => {
      if (data in users) {
        cb(false);
      } else {
        cb(true);
        socket.nickname = data;
        users[socket.nickname] = socket;
        updateNicknames();
      }
    });
    socket.on('send message', async (data, cb) => {
      var msg = data.trim();

      if (msg.substr(0, 3) === '/w ') {
        msg = msg.substr(3);
        var index = msg.indexOf(' ');
        if(index !== -1) {
          var name = msg.substring(0, index);
          var msg = msg.substring(index + 1);
          if (name in users) {
            users[name].emit('whisper', {
              msg,
              nick: socket.nickname 
            });
          } else {
            cb('Ingrese un usuario valido');
          }
        } else {
          cb('Escribe algo');
        }
      } else {
        var nmen = new Chat({
          msg,
          nick: socket.nickname
        });
        await nmen.save();
      
        io.sockets.emit('new message', {
          msg,
          nick: socket.nickname
        });
      }
    });

    socket.on('disconnect', data => {
      if(!socket.nickname) return;
      delete users[socket.nickname];
      updateNicknames();
    });

    function updateNicknames() {
      io.sockets.emit('usernames', Object.keys(users));
    }
  });

  }
//adquiere infor html 