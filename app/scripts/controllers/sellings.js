'use strict';

/**
 * @ngdoc function
 * @name zelloApp.controller:SellingsCtrl
 * @description
 * # SellingsCtrl
 * Controller of the zelloApp
 */
angular.module('zelloApp')
  .controller('SellingsCtrl', function ($scope, ApiService) {
    $scope.sellings = [];
    $scope.currentSelling;

    $scope.getTotal = function() {
        var total = 0;
        for(var i = 0; i < $scope.sellings.length; i++){
            var product = $scope.sellings[i];
            total += product.sum;
        }
        return total;
    };
    $scope.getSellings = function() {
      ApiService.sellings().query().$promise.then(function(response){
        $scope.sellings = response;
      });
    };
    $scope.getSelling = function(selling) {
      if (selling === undefined) { return; }
      $scope.currentSelling = ApiService.sellings().get({selling: selling.id});
    };
    $scope.addSelling = function() {
      $scope.sellings.push(ApiService.new().selling());
    };
    $scope.saveSelling = function(selling) {
      ApiService.sellings().save({code: selling.code, sum: selling.sum})
        .$promise.then(function() {
          selling.new = undefined;
          $scope.getSellings();
        });
    };
    $scope.getSellings();
  });
