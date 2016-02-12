module DemoApp.Services {
    import Models = DemoApp.Models;
    import Interfaces = DemoApp.Interfaces;
    export class RepositoryService implements Interfaces.IRepositoryService {
        static $inject = ['$http', '$q', '$location'];
        constructor(private $http: ng.IHttpService, private $q: ng.IQService, private $location: ng.ILocationService) {

        }
        FetchCompaniesPromiseAsync = () => {
            var deferred = this.$q.defer();
            this.$http.get('/api/company').then(function (result) {
                deferred.resolve(result);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        }
    }
    angular.module("demoApp").service("DemoApp.Services.RepositoryService", RepositoryService);
}