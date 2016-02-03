module DemoApp.Interfaces {
    import Models = DemoApp.Models;
    export interface IRepositoryService {
        Fetch: <T>() => Array<T>;
        FetchPromise: <T>() => ng.IPromise<T>;
        FetchCompany: (name: string) => Models.Company;
        FetchEmployee: (name: string) => Models.Employee;
    }
}