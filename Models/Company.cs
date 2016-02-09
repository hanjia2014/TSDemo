using System.Collections.Generic;

namespace TSDemo.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public List<Employee> Employees { get; set; }
    }
}