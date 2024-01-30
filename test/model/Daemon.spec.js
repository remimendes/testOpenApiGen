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
    instance = new OpensvcAgentApi.Daemon();
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

  describe('Daemon', function() {
    it('should create an instance of Daemon', function() {
      // uncomment below and update the code to test Daemon
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be.a(OpensvcAgentApi.Daemon);
    });

    it('should have the property collector (base name: "collector")', function() {
      // uncomment below and update the code to test the property collector
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

    it('should have the property dns (base name: "dns")', function() {
      // uncomment below and update the code to test the property dns
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

    it('should have the property hb (base name: "hb")', function() {
      // uncomment below and update the code to test the property hb
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

    it('should have the property listener (base name: "listener")', function() {
      // uncomment below and update the code to test the property listener
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

    it('should have the property monitor (base name: "monitor")', function() {
      // uncomment below and update the code to test the property monitor
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

    it('should have the property routines (base name: "routines")', function() {
      // uncomment below and update the code to test the property routines
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

    it('should have the property scheduler (base name: "scheduler")', function() {
      // uncomment below and update the code to test the property scheduler
      //var instance = new OpensvcAgentApi.Daemon();
      //expect(instance).to.be();
    });

  });

}));