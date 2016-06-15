(function(){
  'use strict';
  var module = angular.module('zelloApp');

  function controller(SellingService) {
    var model = this;

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
  }

  module.component('home', {
    templateUrl: '/scripts/home/home.component.html',
    controllerAs: 'model',
    controller: ['SellingService', controller]
  });

}());
