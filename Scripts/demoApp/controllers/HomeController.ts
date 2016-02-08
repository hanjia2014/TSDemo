﻿module DemoApp.Controllers {
    export class HomeController {
        static $inject = ['$scope', 'DemoApp.Services.RepositoryService', '$q', 'demoAppHub'];
        constructor(private $scope: DemoApp.Scopes.IHomeScope, private repositoryService: DemoApp.Services.RepositoryService, private $q: ng.IQService, private demoAppHub) {
            this.$scope.Message = "Hello from scope";
            this.Message = "Hello from home controller";

            this.$q.all([this.repositoryService.FetchCompaniesPromise().then((result: any) => {
                this.$scope.Companies = result.data;
            })]);

            this.demoAppHub.client.createEmployee = (employee: Models.Employee) => {
                
                this.$scope.$apply(() => {
                    
                });
            };
        }

        public Message: string;
    }

    angular.module("demoApp").controller("DemoApp.Controllers.HomeController", HomeController);
}