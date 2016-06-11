'use strict';

describe('Controller: SellingsCtrl', function () {

  // load the controller's module
  beforeEach(module('zelloApp'));

  var SellingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SellingsCtrl = $controller('SellingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SellingsCtrl.awesomeThings.length).toBe(3);
  });
});
