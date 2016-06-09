var DemoApp;
(function (DemoApp) {
    var Controllers;
    (function (Controllers) {
        var BaseController = (function () {
            function BaseController() {
            }
            return BaseController;
        })();
        Controllers.BaseController = BaseController;
        angular.module("demoApp").controller("DemoApp.Controllers.BaseController", BaseController);
    })(Controllers = DemoApp.Controllers || (DemoApp.Controllers = {}));
})(DemoApp || (DemoApp = {}));
