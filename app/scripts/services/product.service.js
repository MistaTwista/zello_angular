'use strict';

/**
 * @ngdoc service
 * @name zelloApp.ProductService
 * @description
 * # ProductService
 * Factory in the zelloApp.
 */
angular.module('zelloApp')
  .factory('ProductService', function ($resource) {

    function products() {
      return $resource('http://127.0.0.1:6543/sellings/:product', {product: '@product'});
    }

    function newProduct() {
      return {
        name: '',
        quantity: '',
        price: '',
        new: true
      };
    }

    return {
      products: products,
      build: newProduct,
    };
  });
