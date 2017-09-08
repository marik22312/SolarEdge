  /**
  * Simple Video selector
  * Version: 1.0
  * Developed By Marik Sh & Asaf Hadad
  * Main Controller
  */

var app = angular.module('solarEdge', ['ngRoute','youtube-embed','ngSanitize']);
// Router Config
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "player.html",
        controller: "improveCtrl", //Category Controller
    })
    .when("/improve", {
        templateUrl : "player.html",
        controller: "improveCtrl", //Category Controller
    })
    .when("/increase", {
        templateUrl : "player.html",
        controller: "increaseCtrl", //Category Controller
    })
    .when("/speed", {
        templateUrl : "player.html",
        controller: "speedCtrl", //Category Controller
    })
    .when("/save", {
        templateUrl : "player.html",
        controller: "saveCtrl", //Category Controller
    })
    .when("/manage", {
        templateUrl : "player.html",
        controller: "manageCtrl", //Category Controller
    })
    .otherwise({
      // default page
      redirectTo: '/'
  });

});
