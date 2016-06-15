(function(){
  'use strict';
  var module = angular.module('zelloApp');

  function controller(SellingService, ProductService) {
    var model = this;

    model.$routerOnActivate = function(next) {
      model.id = next.params.id;
      model.getSelling(model.id);
    };

    model.updateRecord = function() {
      
    };

    model.$onInit = function() {

    };
    
    model.getSelling = function(id) {
      if (id === undefined) { return; }
      SellingService.sellings().get({selling: id})
        .$promise.then(function(response){
          model.selling = response.selling;
          model.products = model.selling.products;
          model.total = model.getTotal(model.selling.products);
      });
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
      model.products.push(ProductService.build());
    };

    model.saveProduct = function(product) {
      ProductService.products().save({
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        selling_id: model.selling.id,
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        name: product.name,
        quantity: product.quantity,
        price: product.price
      }).$promise.then(function(){
        model.updateRecord();
        product.new = undefined;
      });
    };

    model.removeProduct = function(product) {
      var result = ProductService.products().delete({product: product.id});
      result.$promise.then(function(){
        model.updateRecord();
      });
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
