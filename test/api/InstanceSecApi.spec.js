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
    instance = new TestOpensvcAgentApi.InstanceSecApi();
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

  describe('InstanceSecApi', function() {
    describe('getInstance', function() {
      it('should call getInstance successfully', function(done) {
        //uncomment below and update the code to test getInstance
        //instance.getInstance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInstanceLogs', function() {
      it('should call getInstanceLogs successfully', function(done) {
        //uncomment below and update the code to test getInstanceLogs
        //instance.getInstanceLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInstanceActionDelete', function() {
      it('should call postInstanceActionDelete successfully', function(done) {
        //uncomment below and update the code to test postInstanceActionDelete
        //instance.postInstanceActionDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInstanceClear', function() {
      it('should call postInstanceClear successfully', function(done) {
        //uncomment below and update the code to test postInstanceClear
        //instance.postInstanceClear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
