(function(){
  'use strict';
  var module = angular.module('zelloApp');

  function fetchSellings($http) {
    return $http.get('http://localhost:3000/sellings')
      .then(function(response) {
        return response.data;
      });
  }

  function controller($http, SellingService) {
    var model = this;

    model.$onInit = function() {
      fetchSellings($http).then(function(sellings){
        model.sellings = sellings;
        model.total = model.getTotal();
      });
    }

    model.getTotal = function() {
      var total = 0;
      for(var i = 0; i < model.sellings.length; i++){
          var product = model.sellings[i];
          total += product.sum;
      }
      return total;
    };

    model.getSellings = function() {
      SellingService.sellings().query().$promise.then(function(response){
        model.sellings = response;
      });
    };

    model.getSelling = function(selling) {
      if (selling === undefined) { return; }
      model.currentSelling = SellingService.sellings().get({selling: selling.id});
    };

    model.addSelling = function() {
      model.sellings.push(SellingService.build());
    };

    model.saveSelling = function(selling) {
      SellingService.sellings().save({code: selling.code, sum: selling.sum})
        .$promise.then(function() {
          selling.new = undefined;
          model.getSellings();
        });
    };
  }

  module.component('sellingsList', {
    templateUrl: '/scripts/sellings/sellings-list.component.html',
    controllerAs: 'model',
    controller: ['$http', 'SellingService', controller]
  });

}())
