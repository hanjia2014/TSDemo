using System.Collections.Generic;
using System.Web.Http;
using TSDemo.Models;

namespace TSDemo.Controllers
{
    public class CompanyController : ApiController
    {
        public IEnumerable<Company> Get()
        {
            var datacomEmployees = new List<Employee> { new Employee { Id = 1, Name = "John Doe 1", CompanyId = 1 }, new Employee { Id = 2, Name = "John Doe 2", CompanyId = 1 }, new Employee { Id = 3, Name = "John Doe 3", CompanyId = 1 } };
            var trademeEmployees = new List<Employee> { new Employee { Id = 1, Name = "John Doe 4", CompanyId = 2 }, new Employee { Id = 2, Name = "John Doe 5", CompanyId = 2 }, new Employee { Id = 3, Name = "John Doe 6", CompanyId = 2 } };
            return new List<Company> { new Company { Id = 1, Name = "Datacom", Address = "Wellington", Employees = datacomEmployees }, new Company { Id = 2, Name = "Trade Me", Address = "Auckland", Employees = trademeEmployees } };
        }
    }
}
