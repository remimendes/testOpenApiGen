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
    instance = new TestOpensvcAgentApi.RelayMessage();
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

  describe('RelayMessage', function() {
    it('should create an instance of RelayMessage', function() {
      // uncomment below and update the code to test RelayMessage
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be.a(TestOpensvcAgentApi.RelayMessage);
    });

    it('should have the property addr (base name: "addr")', function() {
      // uncomment below and update the code to test the property addr
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be();
    });

    it('should have the property clusterId (base name: "cluster_id")', function() {
      // uncomment below and update the code to test the property clusterId
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be();
    });

    it('should have the property clusterName (base name: "cluster_name")', function() {
      // uncomment below and update the code to test the property clusterName
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be();
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be();
    });

    it('should have the property nodename (base name: "nodename")', function() {
      // uncomment below and update the code to test the property nodename
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new TestOpensvcAgentApi.RelayMessage();
      //expect(instance).to.be();
    });

  });

}));
