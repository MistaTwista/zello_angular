(function(){
  'use strict';
  var module = angular.module('zelloApp');

//  function fetchSelling($http, id) {
//    return $http.get('http://127.0.0.1:6543/sellings/' + id)
//      .then(function(response) {
//        console.log(response);
//        return response.data.selling;
//      });
//  }

  function controller($http, SellingService, ProductService) {
    var model = this;

    model.$routerOnActivate = function(next) {
      model.id = next.params.id;
      model.getSelling(model.id);
//      fetchSelling($http, next.params.id).then(function(selling){
//        model.selling = selling;
//        model.products = model.selling.products;
//        model.total = model.getTotal(model.selling.products);
//      });
    };

    model.updateRecord = function() {
//      fetchSelling($http, model.selling.id).then(function(selling){
//        model.selling = selling;
//        model.total = model.getTotal(model.selling.products);
//      });
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
        selling_id: model.selling.id,
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
    controller: ['$http', 'SellingService', 'ProductService', controller],
    bindings: {
      '$router': '<'
    }
  });

}());
