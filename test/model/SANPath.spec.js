/**
 * test opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.9
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
    instance = new TestOpensvcAgentApi.SANPath();
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

  describe('SANPath', function() {
    it('should create an instance of SANPath', function() {
      // uncomment below and update the code to test SANPath
      //var instance = new TestOpensvcAgentApi.SANPath();
      //expect(instance).to.be.a(TestOpensvcAgentApi.SANPath);
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new TestOpensvcAgentApi.SANPath();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instance = new TestOpensvcAgentApi.SANPath();
      //expect(instance).to.be();
    });

  });

}));
