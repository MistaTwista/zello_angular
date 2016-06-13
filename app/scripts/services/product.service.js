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
      return $resource('http://localhost:3000/products/:product', {product: '@product'});
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
