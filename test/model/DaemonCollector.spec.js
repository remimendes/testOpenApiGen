/**
 * opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.2
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
    factory(root.expect, root.OpensvcAgentApi);
  }
}(this, function(expect, OpensvcAgentApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpensvcAgentApi.DaemonCollector();
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

  describe('DaemonCollector', function() {
    it('should create an instance of DaemonCollector', function() {
      // uncomment below and update the code to test DaemonCollector
      //var instance = new OpensvcAgentApi.DaemonCollector();
      //expect(instance).to.be.a(OpensvcAgentApi.DaemonCollector);
    });

    it('should have the property alerts (base name: "alerts")', function() {
      // uncomment below and update the code to test the property alerts
      //var instance = new OpensvcAgentApi.DaemonCollector();
      //expect(instance).to.be();
    });

    it('should have the property configured (base name: "configured")', function() {
      // uncomment below and update the code to test the property configured
      //var instance = new OpensvcAgentApi.DaemonCollector();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new OpensvcAgentApi.DaemonCollector();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OpensvcAgentApi.DaemonCollector();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new OpensvcAgentApi.DaemonCollector();
      //expect(instance).to.be();
    });

  });

}));