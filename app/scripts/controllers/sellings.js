'use strict';

/**
 * @ngdoc function
 * @name zelloApp.controller:SellingsCtrl
 * @description
 * # SellingsCtrl
 * Controller of the zelloApp
 */
angular.module('zelloApp')
  .controller('SellingsCtrl', function ($scope) {
    $scope.awesomeThings = sellingsData;
    $scope.getTotal = function(){
        var total = 0;
        for(var i = 0; i < $scope.awesomeThings.length; i++){
            console.log($scope.awesomeThings[i]);
            var product = $scope.awesomeThings[i];
            total += product.sum;
        }
        return total;
    }
  });

var sellingsData = [
  {
    "id": 1,
    "date": "March 19, 2016",
    "code": "GDN-0011",
    "sum": 19.95
  },
  {
    "id": 2,
    "date": "March 18, 2016",
    "code": "GDN-0023",
    "sum": 32.99
  },
  {
    "id": 5,
    "date": "May 21, 2016",
    "code": "TBX-0048",
    "sum": 8.9
  },
  {
    "id": 8,
    "date": "May 15, 2016",
    "code": "TBX-0022",
    "sum": 11.55
  },
  {
    "id": 10,
    "date": "October 15, 2015",
    "code": "GMG-0042",
    "sum": 35.95
  }
];
