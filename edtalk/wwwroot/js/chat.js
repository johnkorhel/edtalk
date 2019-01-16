"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("ReceiveMessage", function (user, message, room) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + ": " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    if (room = document.getElementById("roomId").value)
        {
            document.getElementById("messagesList").appendChild(li);
        }
});

connection.start().catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    var room = document.getElementById("roomId").value;
    connection.invoke("SendMessage", user, message, room).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});