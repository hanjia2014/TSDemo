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
                    for (var i = 0; i < this.$scope.companies.length; i++) {
                        var company: any;
                        company = this.$scope.companies[i];

                        if (company.id == employee.CompanyId) {
                            var viewEmployee = new Models.ViewEntity<Models.Employee>(employee);
                            this.newEntityName = viewEmployee.getName() + " - " + company.name;
                        }
                    }
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