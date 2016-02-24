module DemoApp.Models {
    export class Company extends BaseModel implements Interfaces.IHasName {
        public Address: string;
        public Employees: Array<Employee>;
        public Display = () => {
            return this.Name + " located at " + this.Address;
        };
    }
}