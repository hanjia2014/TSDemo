module DemoApp.Scopes {
    import Models = DemoApp.Models;

    export interface IHomeScope extends IBaseScope {
        Company: Models.Company;
    }
}