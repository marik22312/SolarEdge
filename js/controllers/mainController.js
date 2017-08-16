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
        templateUrl : "./templates/increase.html",
        controller: "increaseCtrl"
    })
    .when("/speed", {
        templateUrl : "./templates/speed.html",
        controller: "speedCtrl"
    })
    .when("/save", {
        templateUrl : "./templates/save.html",
        controller: "saveCtrl"
    })
    .when("/manage", {
        templateUrl : "./templates/manage.html",
        controller: "manageCtrl"
    })
    .otherwise({
      // default page
      redirectTo: '/'
  });

});
