module DemoApp.Controllers {
    export class HomeController {
        static $inject = ['$scope'];
        constructor(private $scope: DemoApp.Scopes.IHomeScope) {
            this.$scope.Message = "Hello from scope";
            this.Message = "Hello from home controller";
        }

        public Message: string;
    }

    angular.module("demoApp").controller("DemoApp.Controllers.HomeController", HomeController);
}