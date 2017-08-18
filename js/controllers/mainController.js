  /**
  * Simple Video selector
  * Version: 1.0
  * Developed By Marik Sh & Asaf Hadad
  * Main Controller
  */

var app = angular.module('solarEdge', ['ngRoute','youtube-embed']);
// Router Config
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./templates/player.html",
        controller: "improveCtrl", //Category Controller
    })
    .when("/improve", {
        templateUrl : "./templates/player.html",
        controller: "improveCtrl", //Category Controller
    })
    .when("/increase", {
        templateUrl : "./templates/player.html",
        controller: "increaseCtrl", //Category Controller
    })
    .when("/speed", {
        templateUrl : "./templates/player.html",
        controller: "speedCtrl", //Category Controller
    })
    .when("/save", {
        templateUrl : "./templates/player.html",
        controller: "saveCtrl", //Category Controller
    })
    .when("/manage", {
        templateUrl : "./templates/player.html",
        controller: "manageCtrl", //Category Controller
    })
    .otherwise({
      // default page
      redirectTo: '/'
  });

});
