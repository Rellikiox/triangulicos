'use strict';

describe('Service: Triangulation', function () {

  // load the service's module
  beforeEach(module('trianglesApp'));

  // instantiate service
  var Triangulation;
  beforeEach(inject(function (_Triangulation_) {
    Triangulation = _Triangulation_;
  }));

  it('should do something', function () {
    expect(!!Triangulation).toBe(true);
  });

});
