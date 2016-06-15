'use strict';

/**
 * @ngdoc service
 * @name zelloApp.SellingService
 * @description
 * # SellingService
 * Factory in the zelloApp.
 */
angular.module('zelloApp')
  .factory('SellingService', function ($resource) {

    function sellings() {
      return $resource('http://127.0.0.1:6543/sellings/:selling', {selling: '@selling_id'}, {
        addProduct: {
          method: "POST",
          data: false,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: codeObjectToPOST,
        },
        save: {
          method: "POST",
          data: false,
          isArray: true,
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

    function newSelling() {
      return {
        date: new Date(),
        code: '',
        summ: 0,
        new: true
      };
    }

    return {
      sellings: sellings,
      build: newSelling
    };
  });
