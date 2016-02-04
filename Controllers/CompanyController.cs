using System.Collections.Generic;
using System.Web.Http;
using TSDemo.Models;

namespace TSDemo.Controllers
{
    public class CompanyController : ApiController
    {
        public IEnumerable<Company> Get()
        {
            var datacomEmployees = new List<Employee> { new Employee { Id = 1, Age = 20, Name = "John Doe 1" }, new Employee { Id = 2, Age = 30, Name = "John Doe 2" }, new Employee { Id = 3, Age = 40, Name = "John Doe 3" } };
            var trademeEmployees = new List<Employee> { new Employee { Id = 1, Age = 25, Name = "John Doe 4" }, new Employee { Id = 2, Age = 35, Name = "John Doe 5" }, new Employee { Id = 3, Age = 45, Name = "John Doe 6" } };
            return new List<Company> { new Company { Name = "Datacom", Address = "Wellington", Employees = datacomEmployees }, new Company { Name = "Trade Me", Address = "Auckland", Employees = trademeEmployees } };
        }
    }
}
