/**
 * test opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TestOpensvcAgentApi);
  }
}(this, function(expect, TestOpensvcAgentApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TestOpensvcAgentApi.DRBDAllocation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DRBDAllocation', function() {
    it('should create an instance of DRBDAllocation', function() {
      // uncomment below and update the code to test DRBDAllocation
      //var instance = new TestOpensvcAgentApi.DRBDAllocation();
      //expect(instance).to.be.a(TestOpensvcAgentApi.DRBDAllocation);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TestOpensvcAgentApi.DRBDAllocation();
      //expect(instance).to.be();
    });

    it('should have the property port (base name: "port")', function() {
      // uncomment below and update the code to test the property port
      //var instance = new TestOpensvcAgentApi.DRBDAllocation();
      //expect(instance).to.be();
    });

    it('should have the property minor (base name: "minor")', function() {
      // uncomment below and update the code to test the property minor
      //var instance = new TestOpensvcAgentApi.DRBDAllocation();
      //expect(instance).to.be();
    });

    it('should have the property expiredAt (base name: "expired_at")', function() {
      // uncomment below and update the code to test the property expiredAt
      //var instance = new TestOpensvcAgentApi.DRBDAllocation();
      //expect(instance).to.be();
    });

  });

}));
