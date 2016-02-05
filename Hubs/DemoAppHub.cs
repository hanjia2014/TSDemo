using Microsoft.AspNet.SignalR;
using TSDemo.Models;

namespace TSDemo.Hubs
{
    public class DemoAppHub : Hub
    {
        public void CreateEmployee(Employee employee)
        {
            Clients.All.createEmployee(employee);
        }
    }
}
