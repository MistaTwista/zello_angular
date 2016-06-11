'use strict';

describe('Service: ApiService', function () {

  // load the service's module
  beforeEach(module('zelloApp'));

  // instantiate service
  var ApiService;
  beforeEach(inject(function (_ApiService_) {
    ApiService = _ApiService_;
  }));

  it('should do something', function () {
    expect(!!ApiService).toBe(true);
  });

});
