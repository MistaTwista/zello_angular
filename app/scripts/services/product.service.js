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
      return $resource('http://127.0.0.1:6543/products/:product', {product: '@product_id'}, {
        addProduct: {
          method: 'POST',
          data: false,
          isArray: false,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: codeObjectToPOST,
        }
      });
    }
  
    function codeObjectToPOST(obj) {
      var str = [];
      for(var p in obj) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
      return str.join('&');
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
