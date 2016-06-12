(function(){
  'use strict';

  var module = angular.module('zelloApp');

  module.component('app', {
    templateUrl: '/scripts/zello-app.component.html',
    $routeConfig: [
      { path: '/', component: 'home', name: 'Home', useAsDefault: true},
      { path: '/sellings', component: 'sellingsList', name: 'Sellings'},
      { path: '/sellings/:id', component: 'sellingDetails', name: 'Selling'},
    ]
  });

}());
