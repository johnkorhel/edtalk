using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace edtalk.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message, int room)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message, room);
        }
    }
}