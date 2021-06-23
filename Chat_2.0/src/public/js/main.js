$(function () {
    const socket = io.connect();
    const $messageForm = $('#message-form');
    const $commentForm = $('#comment-form');
    const $messageBox = $('#message');
    const $commentBox = $('#comment-box');
    const $chat = $('#chat');
    const $chatc = $('#chatcomment');
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');
    const $users = $('#usernames');
/********************************************************/
    //LOGIN
    $nickForm.submit(e => {
      e.preventDefault();
      socket.emit('new user', $nickname.val(), data => {
        if(data) {
          $('#nickWrap').hide();         //esconder tabla de login 
          $('#contentWrap').show();      //mostrar tabla de chat, comentarios y usuarios
          $('#message').focus();         //prioridad de envio de mensajes al mongodb
        } else {
          $nickError.html(`
            <div class="alert alert-danger">
              NOMBRE INVALIDO
            </div>
          `);
        }
      });
      $nickname.val('');                //no mostrar mensaje anterior en la caja de comentarios y chat
    });
    
    /************************************************************ */
    //COMENTARIOS
    $commentForm.submit( e => {      
      e.preventDefault();
      socket.emit('send comment', $commentBox.val(), data => {
        $chatc.append(`<p class="error">${data}</p>`)
      });
      $commentBox.val('');
    });
socket.on('new comment', function(data){
      $chatc.append(`<p style="padding-left:10px;padding-top: 4px:"><i class="fas fa-comment-dots"></i> ${data}</p>`)
    })

/**********************************************************************************/
    //MENSAJES_CHAT
    $messageForm.submit( e => {
      e.preventDefault();
      socket.emit('send message', $messageBox.val(), data => {
        $chat.append(`<p class="error">${data}</p>`)
      });
      $messageBox.val('');
    });
    
    socket.on('new message', data => {
      displayMsg(data);
    });

/****************************************************************************/
    //USUARIOS
    socket.on('usernames', data => {
      let html = '';
      for(i = 0; i < data.length; i++) {
        html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`; 
      }
      $users.html(html);
    });
    
    socket.on('load old msgs', msgs => {
      for(let i = msgs.length -1; i >=0 ; i--) {
        displayMsg(msgs[i]);
      }
    });

    socket.on('load comments', cmts => {
      for(let i = cmts.length -1; i >=0 ; i--) {
        displayCmt(cmts[i]);
      }
    });

    function displayMsg(data) {
      $chat.append(`<p class="msg"><b>${data.nick}</b>: ${data.msg}</p>`);
    }
    function displayCmt(data) {
      $chatc.append(`<p class="msg">${data.comment}</p>`);
    }

});


//recolectar inf de socket.js hacia el servidor (mongodb)