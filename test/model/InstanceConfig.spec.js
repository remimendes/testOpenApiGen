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
    instance = new OpensvcAgentApi.InstanceConfig();
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

  describe('InstanceConfig', function() {
    it('should create an instance of InstanceConfig', function() {
      // uncomment below and update the code to test InstanceConfig
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be.a(OpensvcAgentApi.InstanceConfig);
    });

    it('should have the property app (base name: "app")', function() {
      // uncomment below and update the code to test the property app
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property checksum (base name: "checksum")', function() {
      // uncomment below and update the code to test the property checksum
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "children")', function() {
      // uncomment below and update the code to test the property children
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property drp (base name: "drp")', function() {
      // uncomment below and update the code to test the property drp
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property env (base name: "env")', function() {
      // uncomment below and update the code to test the property env
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property flexMax (base name: "flex_max")', function() {
      // uncomment below and update the code to test the property flexMax
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property flexMin (base name: "flex_min")', function() {
      // uncomment below and update the code to test the property flexMin
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property flexTarget (base name: "flex_target")', function() {
      // uncomment below and update the code to test the property flexTarget
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property monitorAction (base name: "monitor_action")', function() {
      // uncomment below and update the code to test the property monitorAction
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property preMonitorAction (base name: "pre_monitor_action")', function() {
      // uncomment below and update the code to test the property preMonitorAction
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property nodename (base name: "nodename")', function() {
      // uncomment below and update the code to test the property nodename
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property orchestrate (base name: "orchestrate")', function() {
      // uncomment below and update the code to test the property orchestrate
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property parents (base name: "parents")', function() {
      // uncomment below and update the code to test the property parents
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property pool (base name: "pool")', function() {
      // uncomment below and update the code to test the property pool
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property placementPolicy (base name: "placement_policy")', function() {
      // uncomment below and update the code to test the property placementPolicy
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property subsets (base name: "subsets")', function() {
      // uncomment below and update the code to test the property subsets
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property topology (base name: "topology")', function() {
      // uncomment below and update the code to test the property topology
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new OpensvcAgentApi.InstanceConfig();
      //expect(instance).to.be();
    });

  });

}));
