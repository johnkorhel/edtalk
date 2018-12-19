// Make connection
var socket = io.connect('http://10.83.23.13:4000');

// Query DOM
var message = document.getElementById('message'),
  btn = document.getElementById('send'),
  output = document.getElementById('output'),
  username = document.getElementById('username'),
  userBtn = document.getElementById('usernameButton');


userBtn.addEventListener('click', function() {
  while (document.getElementById("username").value == "") {
    return false;
  };
  username = document.getElementById("username").value;
  $('#usernameModal').modal('hide');
});

username.addEventListener('keypress', function(e) {
  while (document.getElementById("username").value == "") {
    return false;
  };
  var key = e.which || e.keyCode;
  if (key === 13) {
    username = document.getElementById("username").value;
    $('#usernameModal').modal('hide');
  }
});


btn.addEventListener('click', function() {
  while (document.getElementById("message").value == "") {
    return false;
  };
  socket.emit('chat', {
    message: message.value,
    username: username
  });
  document.getElementById('message').value = '';
});

message.addEventListener('keypress', function(e) {
  while (document.getElementById("message").value == "") {
    return false;
  };
  var key = e.which || e.keyCode;
  if (key === 13) {
    socket.emit('chat', {
      message: message.value,
      username: username
    });
    document.getElementById('message').value = '';
  }
});
// Listen for events
socket.on('chat', function(data) {
  output.innerHTML +=
    '<h2 class="animated fadeIn userText" id="userText"> <span id="user">' +
    data.username + '</span>: ' + data.message + '</h2>' + '<hr></hr>';
});
