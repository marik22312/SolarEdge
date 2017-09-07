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
        templateUrl : "./templates/player1.html",
        controller: "improveCtrl", //Category Controller
    })
    .when("/increase", {
        templateUrl : "./templates/player2.html",
        controller: "increaseCtrl", //Category Controller
    })
    .when("/speed", {
        templateUrl : "./templates/player3.html",
        controller: "speedCtrl", //Category Controller
    })
    .when("/save", {
        templateUrl : "./templates/player4.html",
        controller: "saveCtrl", //Category Controller
    })
    .when("/manage", {
        templateUrl : "./templates/player5.html",
        controller: "manageCtrl", //Category Controller
    })
    .otherwise({
      // default page
      redirectTo: '/'
  });

});
