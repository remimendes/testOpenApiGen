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
    instance = new TestOpensvcAgentApi.NodeApi();
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

  describe('NodeApi', function() {
    describe('getNodeCapabilities', function() {
      it('should call getNodeCapabilities successfully', function(done) {
        //uncomment below and update the code to test getNodeCapabilities
        //instance.getNodeCapabilities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeConfigGet', function() {
      it('should call getNodeConfigGet successfully', function(done) {
        //uncomment below and update the code to test getNodeConfigGet
        //instance.getNodeConfigGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeDRBDAllocation', function() {
      it('should call getNodeDRBDAllocation successfully', function(done) {
        //uncomment below and update the code to test getNodeDRBDAllocation
        //instance.getNodeDRBDAllocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeDRBDConfig', function() {
      it('should call getNodeDRBDConfig successfully', function(done) {
        //uncomment below and update the code to test getNodeDRBDConfig
        //instance.getNodeDRBDConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeLogs', function() {
      it('should call getNodeLogs successfully', function(done) {
        //uncomment below and update the code to test getNodeLogs
        //instance.getNodeLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodeSchedule', function() {
      it('should call getNodeSchedule successfully', function(done) {
        //uncomment below and update the code to test getNodeSchedule
        //instance.getNodeSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodes', function() {
      it('should call getNodes successfully', function(done) {
        //uncomment below and update the code to test getNodes
        //instance.getNodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNodesInfo', function() {
      it('should call getNodesInfo successfully', function(done) {
        //uncomment below and update the code to test getNodesInfo
        //instance.getNodesInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeActionPushAsset', function() {
      it('should call postNodeActionPushAsset successfully', function(done) {
        //uncomment below and update the code to test postNodeActionPushAsset
        //instance.postNodeActionPushAsset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeActionPushDisk', function() {
      it('should call postNodeActionPushDisk successfully', function(done) {
        //uncomment below and update the code to test postNodeActionPushDisk
        //instance.postNodeActionPushDisk(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeActionPushPatch', function() {
      it('should call postNodeActionPushPatch successfully', function(done) {
        //uncomment below and update the code to test postNodeActionPushPatch
        //instance.postNodeActionPushPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeActionPushPkg', function() {
      it('should call postNodeActionPushPkg successfully', function(done) {
        //uncomment below and update the code to test postNodeActionPushPkg
        //instance.postNodeActionPushPkg(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeActionScanCapabilities', function() {
      it('should call postNodeActionScanCapabilities successfully', function(done) {
        //uncomment below and update the code to test postNodeActionScanCapabilities
        //instance.postNodeActionScanCapabilities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeActionSysreport', function() {
      it('should call postNodeActionSysreport successfully', function(done) {
        //uncomment below and update the code to test postNodeActionSysreport
        //instance.postNodeActionSysreport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeClear', function() {
      it('should call postNodeClear successfully', function(done) {
        //uncomment below and update the code to test postNodeClear
        //instance.postNodeClear(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeConfigUpdate', function() {
      it('should call postNodeConfigUpdate successfully', function(done) {
        //uncomment below and update the code to test postNodeConfigUpdate
        //instance.postNodeConfigUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postNodeDRBDConfig', function() {
      it('should call postNodeDRBDConfig successfully', function(done) {
        //uncomment below and update the code to test postNodeDRBDConfig
        //instance.postNodeDRBDConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPeerActionAbort', function() {
      it('should call postPeerActionAbort successfully', function(done) {
        //uncomment below and update the code to test postPeerActionAbort
        //instance.postPeerActionAbort(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPeerActionDrain', function() {
      it('should call postPeerActionDrain successfully', function(done) {
        //uncomment below and update the code to test postPeerActionDrain
        //instance.postPeerActionDrain(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPeerActionFreeze', function() {
      it('should call postPeerActionFreeze successfully', function(done) {
        //uncomment below and update the code to test postPeerActionFreeze
        //instance.postPeerActionFreeze(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPeerActionUnfreeze', function() {
      it('should call postPeerActionUnfreeze successfully', function(done) {
        //uncomment below and update the code to test postPeerActionUnfreeze
        //instance.postPeerActionUnfreeze(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
