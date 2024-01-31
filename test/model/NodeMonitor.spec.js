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
    instance = new TestOpensvcAgentApi.NodeMonitor();
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

  describe('NodeMonitor', function() {
    it('should create an instance of NodeMonitor', function() {
      // uncomment below and update the code to test NodeMonitor
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be.a(TestOpensvcAgentApi.NodeMonitor);
    });

    it('should have the property globalExpect (base name: "global_expect")', function() {
      // uncomment below and update the code to test the property globalExpect
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property globalExpectUpdatedAt (base name: "global_expect_updated_at")', function() {
      // uncomment below and update the code to test the property globalExpectUpdatedAt
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property localExpect (base name: "local_expect")', function() {
      // uncomment below and update the code to test the property localExpect
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property localExpectUpdatedAt (base name: "local_expect_updated_at")', function() {
      // uncomment below and update the code to test the property localExpectUpdatedAt
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property orchestrationId (base name: "orchestration_id")', function() {
      // uncomment below and update the code to test the property orchestrationId
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property orchestrationIsDone (base name: "orchestration_is_done")', function() {
      // uncomment below and update the code to test the property orchestrationIsDone
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property sessionId (base name: "session_id")', function() {
      // uncomment below and update the code to test the property sessionId
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property stateUpdatedAt (base name: "state_updated_at")', function() {
      // uncomment below and update the code to test the property stateUpdatedAt
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new TestOpensvcAgentApi.NodeMonitor();
      //expect(instance).to.be();
    });

  });

}));
