'use strict';

/**
 * @ngdoc function
 * @name zelloApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the zelloApp
 */
angular.module('zelloApp')
  .controller('ProductCtrl', function ($scope, ApiService) {
    $scope.products = [];

    $scope.getTotal = function() {
        var total = 0;
        for(var i = 0; i < $scope.products.length; i++){
            var product = $scope.products[i];
            total += product.sum;
        }
        return total;
    };

    $scope.addProduct = function(selling) {
      selling.products.push(ApiService.new().product());
    };
    $scope.saveProduct = function(product) {
      ApiService.products().save({
        selling_id: $scope.currentSelling.id,
        name: product.name,
        quantity: product.quantity,
        price: product.price
      }).$promise.then(function(){
        // $scope.getSelling($scope.currentSelling);
        product.new = undefined;
      });
    };
    $scope.removeProduct = function(product) {
      var result = ApiService.products().delete({product: product.id});
      result.$promise.then(function(){
        $scope.getSelling($scope.currentSelling);
      });
    };
  });

