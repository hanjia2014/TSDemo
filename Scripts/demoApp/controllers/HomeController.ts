module DemoApp.Controllers {
    export class HomeController extends BaseController {
        static $inject = ['$scope', 'DemoApp.Services.RepositoryService', '$q', 'demoAppHub'];
        constructor(private $scope: DemoApp.Scopes.IHomeScope, private repositoryService: DemoApp.Services.RepositoryService, private $q: ng.IQService, private demoAppHub) {
            super();
            this.$scope.Message = "Hello from scope";
            this.Message = "Hello from home controller";
            this.$scope.companies = new Array<Models.Company>();
            this.$q.all([this.repositoryService.FetchCompaniesPromise().then((result: any) => {
                this.$scope.companies = result.data;
            })]);

            this.demoAppHub.client.updateEmployeeList = (employee: Models.Employee) => {
                this.$scope.$apply(() => {
                    this.$q.all([this.repositoryService.FetchCompaniesPromise().then((result: any) => {
                        var companies = result.data;
                        var company_name;
                        for (var i = 0; i < companies.length; i++) {
                            if (companies[i].id == employee.CompanyId)
                                company_name = companies[i].name;
                        }
                        var viewEmployee = new Models.ViewEntity<Models.Employee>(employee);
                        this.newEntityName = viewEmployee.getName() + " - " + company_name;
                    })]);
                });
            };
        };

        addEmployee = () => {
            var employee = new Models.Employee;
            employee.Name = this.E_Name;
            employee.CompanyId = this.E_CompanyId;
            this.demoAppHub.server.createEmployee(employee);
        };

        public Message: string;
        public E_Name: string;
        public E_CompanyId: number;
        public newEntityName: string;
    }

    angular.module("demoApp").controller("DemoApp.Controllers.HomeController", HomeController);
}