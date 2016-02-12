module DemoApp.Interfaces {
    import Models = DemoApp.Models;
    export interface IRepositoryService {
        FetchCompaniesPromiseAsync: () => ng.IPromise<any>;
    }
}