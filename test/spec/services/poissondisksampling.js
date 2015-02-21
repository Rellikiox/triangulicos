'use strict';

describe('Service: Poissondisksampling', function () {

  // load the service's module
  beforeEach(module('trianglesApp'));

  // instantiate service
  var Poissondisksampling;
  beforeEach(inject(function (_Poissondisksampling_) {
    Poissondisksampling = _Poissondisksampling_;
  }));

  it('should do something', function () {
    expect(!!Poissondisksampling).toBe(true);
  });

});
