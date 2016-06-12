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
  var app = angular.module('zelloApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngComponentRouter',
      'ngSanitize',
      'ngTouch',
    ]);

  app.value('$routerRootComponent', 'app');

}());
