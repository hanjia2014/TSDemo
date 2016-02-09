module DemoApp.Scopes {
    import Models = DemoApp.Models;

    export interface IHomeScope extends IBaseScope {
        Companies: Array<Models.Company>;
        Employees: Array<Models.Employee>;
    }
}