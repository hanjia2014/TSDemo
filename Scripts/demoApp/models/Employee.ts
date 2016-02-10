module DemoApp.Models {
    export class Employee extends BaseModel implements Interfaces.IHasName {
        public CompanyId: number;
        public getName = () => {
            return this.Name;
        };
    }
}