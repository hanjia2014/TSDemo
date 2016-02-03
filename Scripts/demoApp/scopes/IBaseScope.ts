module DemoApp.Scopes {
    import Models = DemoApp.Models;

    export interface IBaseScope extends ng.IScope {
        Message: string;
    }
}