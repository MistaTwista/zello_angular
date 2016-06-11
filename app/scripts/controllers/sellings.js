'use strict';

/**
 * @ngdoc function
 * @name zelloApp.controller:SellingsCtrl
 * @description
 * # SellingsCtrl
 * Controller of the zelloApp
 */
angular.module('zelloApp')
  .controller('SellingsCtrl', function ($scope, SellingService) {
    $scope.sellings = [];

    $scope.getTotal = function() {
        var total = 0;
        for(var i = 0; i < $scope.sellings.length; i++){
            var product = $scope.sellings[i];
            total += product.sum;
        }
        return total;
    };

    $scope.getSellings = function() {
      SellingService.sellings().query().$promise.then(function(response){
        $scope.sellings = response;
      });
    };

    $scope.getSelling = function(selling) {
      if (selling === undefined) { return; }
      $scope.currentSelling = SellingService.sellings().get({selling: selling.id});
    };

    $scope.addSelling = function() {
      $scope.sellings.push(SellingService.build());
    };

    $scope.saveSelling = function(selling) {
      SellingService.sellings().save({code: selling.code, sum: selling.sum})
        .$promise.then(function() {
          selling.new = undefined;
          $scope.getSellings();
        });
    };
    $scope.getSellings();
  });
