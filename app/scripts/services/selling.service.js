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
    var selectedSelling;

    function sellings() {
      return $resource('http://localhost:3000/sellings/:selling', {selling: '@selling'});
    }

    function getSelectedSelling() {
      return selectedSelling;
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
