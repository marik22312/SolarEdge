var app = angular.module("solarEdge", ["ngRoute","youtube-embed"]);
// Router Config
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/improve.html",
        controller: "improveCtrl"
    })
    .when("/improve", {
        templateUrl : "./templates/improve.html",
        controller: "improveCtrl"
    })
    .when("/increase", {
        templateUrl : "./templates/increase.html"
    })
    .when("/speed", {
        templateUrl : "./templates/speed.html"
    })
    .when("/save", {
        templateUrl : "./templates/save.html"
    })
    .when("/manage", {
        templateUrl : "./templates/manage.html"
    });

});
