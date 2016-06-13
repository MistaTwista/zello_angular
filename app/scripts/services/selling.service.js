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
      return $resource('http://127.0.0.1:6543/sellings/:selling', {selling: '@selling'});
    }

    function newSelling() {
      return {
        date: Date.now(),
        code: '',
        sum: 0,
        new: true
      };
    }

    return {
      sellings: sellings,
      build: newSelling
    };
  });
