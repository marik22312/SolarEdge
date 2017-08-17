var app = angular.module('solarEdge', ['ngRoute','youtube-embed']);
// Router Config
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/player.html",
        controller: "improveCtrl",
    })
    .when("/improve", {
        templateUrl : "./templates/player.html",
        controller: "improveCtrl",
    })
    .when("/increase", {
        templateUrl : "./templates/player.html",
        controller: "increaseCtrl",
    })
    .when("/speed", {
        templateUrl : "./templates/player.html",
        controller: "speedCtrl",
    })
    .when("/save", {
        templateUrl : "./templates/player.html",
        controller: "saveCtrl",
    })
    .when("/manage", {
        templateUrl : "./templates/player.html",
        controller: "manageCtrl",
    })
    .otherwise({
      // default page
      redirectTo: '/'
  });

});
