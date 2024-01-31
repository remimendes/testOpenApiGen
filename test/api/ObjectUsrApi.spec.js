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
    instance = new TestOpensvcAgentApi.ObjectUsrApi();
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

  describe('ObjectUsrApi', function() {
    describe('getObject', function() {
      it('should call getObject successfully', function(done) {
        //uncomment below and update the code to test getObject
        //instance.getObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectConfig', function() {
      it('should call getObjectConfig successfully', function(done) {
        //uncomment below and update the code to test getObjectConfig
        //instance.getObjectConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectConfigFile', function() {
      it('should call getObjectConfigFile successfully', function(done) {
        //uncomment below and update the code to test getObjectConfigFile
        //instance.getObjectConfigFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObjectConfigGet', function() {
      it('should call getObjectConfigGet successfully', function(done) {
        //uncomment below and update the code to test getObjectConfigGet
        //instance.getObjectConfigGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postObjectActionAbort', function() {
      it('should call postObjectActionAbort successfully', function(done) {
        //uncomment below and update the code to test postObjectActionAbort
        //instance.postObjectActionAbort(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postObjectActionDelete', function() {
      it('should call postObjectActionDelete successfully', function(done) {
        //uncomment below and update the code to test postObjectActionDelete
        //instance.postObjectActionDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postObjectConfigFile', function() {
      it('should call postObjectConfigFile successfully', function(done) {
        //uncomment below and update the code to test postObjectConfigFile
        //instance.postObjectConfigFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postObjectConfigUpdate', function() {
      it('should call postObjectConfigUpdate successfully', function(done) {
        //uncomment below and update the code to test postObjectConfigUpdate
        //instance.postObjectConfigUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putObjectConfigFile', function() {
      it('should call putObjectConfigFile successfully', function(done) {
        //uncomment below and update the code to test putObjectConfigFile
        //instance.putObjectConfigFile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
