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
    instance = new OpensvcAgentApi.InternalApi();
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

  describe('InternalApi', function() {
    describe('postDaemonJoin', function() {
      it('should call postDaemonJoin successfully', function(done) {
        //uncomment below and update the code to test postDaemonJoin
        //instance.postDaemonJoin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postDaemonLeave', function() {
      it('should call postDaemonLeave successfully', function(done) {
        //uncomment below and update the code to test postDaemonLeave
        //instance.postDaemonLeave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInstanceProgress', function() {
      it('should call postInstanceProgress successfully', function(done) {
        //uncomment below and update the code to test postInstanceProgress
        //instance.postInstanceProgress(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postInstanceStatus', function() {
      it('should call postInstanceStatus successfully', function(done) {
        //uncomment below and update the code to test postInstanceStatus
        //instance.postInstanceStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
