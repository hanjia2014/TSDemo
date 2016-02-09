module DemoApp.Models {
    export class Company {
        public Id: number;
        public Name: string;
        public Address: string;
        public Employees: Array<Employee>;
    }
}