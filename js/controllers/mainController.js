var app = angular.module('solarEdge', ['ngRoute','youtube-embed']);
// Router Config
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/improve.html",
        controller: "improveCtrl",
    })
    .when("/improve", {
        templateUrl : "./templates/improve.html",
        controller: "improveCtrl",
    })
    .when("/increase", {
        templateUrl : "./templates/improve.html",
        controller: "increaseCtrl",
    })
    .when("/speed", {
        templateUrl : "./templates/improve.html",
        controller: "speedCtrl",
    })
    .when("/save", {
        templateUrl : "./templates/improve.html",
        controller: "saveCtrl",
    })
    .when("/manage", {
        templateUrl : "./templates/improve.html",
        controller: "manageCtrl",
    })
    .otherwise({
      // default page
      redirectTo: '/'
  });

});
