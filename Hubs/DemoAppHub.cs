using Microsoft.AspNet.SignalR;
using TSDemo.Models;

namespace TSDemo.Hubs
{
    public class DemoAppHub : Hub<IDemoAppHub>
    {
        public void CreateEmployee(Employee employee)
        {
            Clients.All.UpdateEmployeeList (employee);
        }
    }

    public interface IDemoAppHub
    {
        void UpdateEmployeeList(Employee employee);
    }
}
