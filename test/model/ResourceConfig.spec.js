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
    instance = new OpensvcAgentApi.ResourceConfig();
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

  describe('ResourceConfig', function() {
    it('should create an instance of ResourceConfig', function() {
      // uncomment below and update the code to test ResourceConfig
      //var instance = new OpensvcAgentApi.ResourceConfig();
      //expect(instance).to.be.a(OpensvcAgentApi.ResourceConfig);
    });

    it('should have the property isDisabled (base name: "is_disabled")', function() {
      // uncomment below and update the code to test the property isDisabled
      //var instance = new OpensvcAgentApi.ResourceConfig();
      //expect(instance).to.be();
    });

    it('should have the property isMonitored (base name: "is_monitored")', function() {
      // uncomment below and update the code to test the property isMonitored
      //var instance = new OpensvcAgentApi.ResourceConfig();
      //expect(instance).to.be();
    });

    it('should have the property isStandby (base name: "is_standby")', function() {
      // uncomment below and update the code to test the property isStandby
      //var instance = new OpensvcAgentApi.ResourceConfig();
      //expect(instance).to.be();
    });

    it('should have the property restart (base name: "restart")', function() {
      // uncomment below and update the code to test the property restart
      //var instance = new OpensvcAgentApi.ResourceConfig();
      //expect(instance).to.be();
    });

    it('should have the property restartDelay (base name: "restart_delay")', function() {
      // uncomment below and update the code to test the property restartDelay
      //var instance = new OpensvcAgentApi.ResourceConfig();
      //expect(instance).to.be();
    });

  });

}));