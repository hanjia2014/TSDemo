module DemoApp {
    var demoAppHub = $.connection.demoAppHub;
    $(function () {
        $.connection.hub.logging = true;
        $.connection.hub.start();
    });

    var app = angular.module("demoApp", []);
    app.value("demoAppHub", demoAppHub);
}