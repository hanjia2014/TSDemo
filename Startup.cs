using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(TSDemo.Startup))]

namespace TSDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            app.MapSignalR();
        }
    }
}
