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
    instance = new OpensvcAgentApi.NodeStatus();
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

  describe('NodeStatus', function() {
    it('should create an instance of NodeStatus', function() {
      // uncomment below and update the code to test NodeStatus
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be.a(OpensvcAgentApi.NodeStatus);
    });

    it('should have the property agent (base name: "agent")', function() {
      // uncomment below and update the code to test the property agent
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property api (base name: "api")', function() {
      // uncomment below and update the code to test the property api
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property arbitrators (base name: "arbitrators")', function() {
      // uncomment below and update the code to test the property arbitrators
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property compat (base name: "compat")', function() {
      // uncomment below and update the code to test the property compat
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property frozenAt (base name: "frozen_at")', function() {
      // uncomment below and update the code to test the property frozenAt
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property gen (base name: "gen")', function() {
      // uncomment below and update the code to test the property gen
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property minAvailMem (base name: "min_avail_mem")', function() {
      // uncomment below and update the code to test the property minAvailMem
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property minAvailSwap (base name: "min_avail_swap")', function() {
      // uncomment below and update the code to test the property minAvailSwap
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property isSpeaker (base name: "is_speaker")', function() {
      // uncomment below and update the code to test the property isSpeaker
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new OpensvcAgentApi.NodeStatus();
      //expect(instance).to.be();
    });

  });

}));
