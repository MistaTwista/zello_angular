(function(){
  'use strict';
  var module = angular.module('zelloApp');

  function controller(SellingService, ProductService) {
    var model = this;

    model.$routerOnActivate = function(next) {
      model.id = next.params.id;
      model.getSelling(model.id);
    };
    
    model.getSelling = function(id) {
      if (id === undefined) { return; }
      SellingService.sellings().get({selling: id})
        .$promise.then(function(response){
          model.selling = response.selling;
          model.updateTotal();
      });
    };
    
    model.updateTotal = function() {
      model.total = model.getTotal(model.selling.products);
    };

    model.goBack = function() {
      model.$router.navigate(['Sellings']);
    };

    model.getTotal = function(data) {
        var total = 0;
        for(var i = 0; i < data.length; i++){
            var product = data[i];
            total += product.price * product.quantity;
        }
        return total;
    };

    model.addProduct = function() {
      model.selling.products.push(ProductService.build());
    };

    model.saveProduct = function(product) {
      SellingService.sellings().addProduct({
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        selling_id: model.id,
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        name: product.name,
        quantity: product.quantity,
        price: product.price
      }).$promise.then(function(response){
        model.selling = response.selling;
        model.updateTotal();
        product.new = undefined;
      });
    };

    model.removeProduct = function(product) {
      var result = ProductService.products().delete({product: product.id});
      result.$promise.then(function(){});
    };
  }

  module.component('sellingDetails', {
    templateUrl: '/scripts/sellings/selling-details.component.html',
    controllerAs: 'model',
    controller: ['SellingService', 'ProductService', controller],
    bindings: {
      '$router': '<'
    }
  });

}());
