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
    instance = new TestOpensvcAgentApi.ObjectConfig();
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

  describe('ObjectConfig', function() {
    it('should create an instance of ObjectConfig', function() {
      // uncomment below and update the code to test ObjectConfig
      //var instance = new TestOpensvcAgentApi.ObjectConfig();
      //expect(instance).to.be.a(TestOpensvcAgentApi.ObjectConfig);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new TestOpensvcAgentApi.ObjectConfig();
      //expect(instance).to.be();
    });

    it('should have the property mtime (base name: "mtime")', function() {
      // uncomment below and update the code to test the property mtime
      //var instance = new TestOpensvcAgentApi.ObjectConfig();
      //expect(instance).to.be();
    });

  });

}));
