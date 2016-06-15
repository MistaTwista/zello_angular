(function(){
  'use strict';
  var module = angular.module('zelloApp');

  function controller(SellingService) {
    var model = this;

    model.$onInit = function() {
      model.getSellings();
    };

    model.getTotal = function() {
      var total = 0;
      for(var i = 0; i < model.sellings.length; i++){
          var product = model.sellings[i];
          total += product.summ;
      }
      return total;
    };

    model.getSellings = function() {
      SellingService.sellings().query().$promise.then(function(response){
        model.sellings = response;
      });
    };

    model.addSelling = function() {
      model.sellings.push(SellingService.build());
    };

    model.saveSelling = function(selling) {
      SellingService.sellings().save({
        code: selling.code
      }).$promise.then(function(response) {
          selling.new = undefined;
          model.sellings = response;
        });
    };
  }
  

  module.component('sellingsList', {
    templateUrl: '/scripts/sellings/sellings-list.component.html',
    controllerAs: 'model',
    controller: ['SellingService', controller]
  });

}());