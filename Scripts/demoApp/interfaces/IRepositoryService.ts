module DemoApp.Interfaces {
    import Models = DemoApp.Models;
    export interface IRepositoryService {
        FetchCompaniesPromise: () => ng.IPromise<any>;
    }
}