module DemoApp.Interfaces {
    import Models = DemoApp.Models;
    export interface IHasName {
        getName: () => string;
    }
}