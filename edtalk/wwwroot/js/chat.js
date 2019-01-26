"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + ": " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.on("NewUser", function (user) {
    var encodedMsg = user + " Has Joined the Chat Room";
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendMessageButton").addEventListener("click", function (event) {
    var user = document.getElementById("usernameInput").value;
    var message = document.getElementById("messageInput").value;
    var room = document.getElementById("roomInput").value;
    connection.invoke("SendMessage", user, message, room).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("loginButton").addEventListener("click", function (event) {
    var user = document.getElementById("usernameInput").value;
    var room = document.getElementById("roomInput").value;
    connection.invoke("Connect", user, room).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});