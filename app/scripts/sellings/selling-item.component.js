(function(){
  'use strict';
  var module = angular.module('zelloApp');
    

  function controller() {
    var model = this;
    
    model.$onInit = function() {
      model.selling = model.selling;
    };

    model.$onChanges = function() {
      model.selling = model.selling;
    };

  }

  module.component('sellingItem', {
    templateUrl: '/scripts/sellings/selling-item.component.html',
    controllerAs: 'model',
    controller: [controller],
    bindings: {
      selling: '&'
    }
  });

}());