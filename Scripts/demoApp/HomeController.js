var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DemoApp;
(function (DemoApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController($scope, $location, menuService, $q) {
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
            }
            HomeController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q'];
            return HomeController;
        })(Controllers.BaseController);
        Controllers.HomeController = HomeController;
        angular.module("demoApp").controller("DemoApp.Controllers.HomeController", HomeController);
    })(Controllers = DemoApp.Controllers || (DemoApp.Controllers = {}));
})(DemoApp || (DemoApp = {}));
