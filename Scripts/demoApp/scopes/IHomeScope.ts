module DemoApp.Scopes {
    import Models = DemoApp.Models;

    export interface IHomeScope extends IBaseScope {
        companies: Array<Models.Company>;
    }
}