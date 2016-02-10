module DemoApp.Controllers {
    export class HomeController extends BaseController {
        static $inject = ['$scope', 'DemoApp.Services.RepositoryService', '$q', 'demoAppHub'];
        constructor(private $scope: DemoApp.Scopes.IHomeScope, private repositoryService: DemoApp.Services.RepositoryService, private $q: ng.IQService, private demoAppHub) {
            super();
            this.$scope.Message = "Hello from scope";
            this.Message = "Hello from home controller";
            this.$scope.Companies = new Array<Models.Company>();
            this.$q.all([this.repositoryService.FetchCompaniesPromise().then((result: any) => {
                this.$scope.Companies = result.data;
            })]);

            this.demoAppHub.client.updateEmployeeList = (employee: Models.Employee) => {
                this.$scope.$apply(() => {
                    this.NewEmployee = employee;
                    //for (var i = 0; i < this.$scope.Companies.length; i++) {
                    //    var company: any;
                    //    company = this.$scope.Companies[i];
                    //    if (company.id === employee.CompanyId) {
                    //        employee.Id = company.employees.length;
                    //        company.employees.push(employee);
                    //    }
                    //}
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
        public NewEmployee: Models.Employee;
    }

    angular.module("demoApp").controller("DemoApp.Controllers.HomeController", HomeController);
}