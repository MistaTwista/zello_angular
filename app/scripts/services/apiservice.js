'use strict';

/**
 * @ngdoc service
 * @name zelloApp.ApiService
 * @description
 * # ApiService
 * Factory in the zelloApp.
 */
angular.module('zelloApp')
  .factory('ApiService', function ($resource) {
    var API = {
      sellings: function() {
        return $resource('http://localhost:3000/sellings/:selling', {selling: '@selling'});
      },
      products: function() {
        return $resource('http://localhost:3000/products/:product', {product: '@product'});
      },
      new: function() {
        return {
          product: function() {
            return {
              name: '',
              quantity: '',
              price: '',
              new: true
            }
          },
          selling: function() {
            return {
              date: Date.now(),
              code: '',
              sum: 0,
              new: true
            }
          }
        };
      }
    };
    return API;
  });
