using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace edtalk.Hubs
{
    public class ChatHub : Hub
    {
        //****************************************************
        public async Task Connect(string username, string room)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, room);
            await Clients.Group(room).SendAsync("NewUser", $"{username} has joined the group chat");
        }
        public async Task Disconnect(string username, string room)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, room);
            await Clients.Group(room).SendAsync("GoneUser", $"{username} has left the group chat");
        }
        //****************************************************


        //****************************************************
        public async Task Active(string username, string room)
        {
            await Clients.Group(room).SendAsync("ActiveUser", $"{username} has become active");
        }
        public async Task Inactive(string username, string room)
        {
            await Clients.Group(room).SendAsync("InactiveUser", $"{username} has become inactive");
        }
        //****************************************************


        //****************************************************
        public async Task SendMessage(string username, string message, string room)
        {
            await Clients.Group(room).SendAsync("ReceiveMessage", username, message);
        }
        //****************************************************
    }
}