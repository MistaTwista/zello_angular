(function(){
  'use strict';

/**
 * @ngdoc overview
 * @name zelloApp
 * @description
 * # zelloApp
 *
 * Main module of the application.
 */
angular
  .module('zelloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sellings', {
        templateUrl: 'views/sellings.html',
        controller: 'SellingsCtrl',
        controllerAs: 'sellings'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

}());
