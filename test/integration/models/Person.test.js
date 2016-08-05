var request = require('supertest');

describe('PersonModel', function() {
  'use strict';

  describe('#find()', function() {
    it('should check find function', function (done) {
      Person.find()
      .then(function(results) {
        // some tests
        done();
      })
      .catch(done);
    });
  });

});
