'use strict';

/**
 * @ngdoc function
 * @name zelloApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the zelloApp
 */
angular.module('zelloApp')
  .controller('ProductCtrl', function ($scope, ProductService) {
    $scope.products = [];

    $scope.getTotal = function(data) {
      console.log(data);
        var total = 0;
        for(var i = 0; i < data.length; i++){
            var product = data[i];
            total += product.price * product.quantity;
        }
        return total;
    };

    $scope.addProduct = function(selling) {
      selling.products.push(ProductService.build());
    };

    $scope.saveProduct = function(product) {
      ProductService.products().save({
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
      var result = ProductService.products().delete({product: product.id});
      result.$promise.then(function(){
        $scope.getSelling($scope.currentSelling);
      });
    };
  });

