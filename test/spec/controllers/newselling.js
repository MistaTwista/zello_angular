'use strict';

describe('Controller: NewSellingCtrl', function () {

  // load the controller's module
  beforeEach(module('zelloApp'));

  var NewSellingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewSellingCtrl = $controller('NewSellingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewSellingCtrl.awesomeThings.length).toBe(3);
  });
});
