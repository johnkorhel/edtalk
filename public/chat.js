// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
  btn = document.getElementById('send'),
  output = document.getElementById('output'),
  username = document.getElementById('username'),
  userBtn = document.getElementById('usernameButton'),
  titleBar = document.getElementById('chatUserTitle');

//Listen for click on username prompt and populate username value
userBtn.addEventListener('click', function() {
  while (document.getElementById("username").value == "") {
    return false;
  };
  username = document.getElementById("username").value;
  $('#usernameModal').modal('hide');
  titleBar.innerHTML += '<h2 class="animated fadeIn chatTitle">' + document.getElementById("username").value + '| Socratic Seminar</h2>';
  output.innerHTML += '<h1 class="textFaded">' + document.getElementById("username").value + ', welcome to the discussion!</h1><hr class="animated fadeIn"></hr>';
});

//Listen for enter keypress on username prompt and populate username value
username.addEventListener('keypress', function(e) {
  while (document.getElementById("username").value == "") {
    return false;
  };
  var key = e.which || e.keyCode;
  if (key === 13) {
    event.preventDefault();
    username = document.getElementById("username").value;
    $('#usernameModal').modal('hide');
    titleBar.innerHTML += '<h2 class="animated fadeIn chatTitle">' + document.getElementById("username").value + '| Socratic Seminar</h2>';
    output.innerHTML += '<h1 class="animated fadeIn textFaded">' + document.getElementById("username").value + ', welcome to the discussion!</h1><hr class="animated fadeIn"></hr>';
  }
});

//Listen for click on message prompt and emit chat value to other sockets
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

//Listen for enter key on message prompt and emit chat value to other sockets
message.addEventListener('keypress', function(e) {
  while (document.getElementById("message").value == "") {
    return false;
  };
  var key = e.which || e.keyCode;
  if (key === 13) {
    event.preventDefault();
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
    data.username + '</span>: ' + data.message + '</h2>' + '<hr class="animated fadeIn"></hr>';
});
