# opensvc_agent_api

OpensvcAgentApi - JavaScript client for opensvc_agent_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.12.2
- Package version: 3.12.2
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install opensvc_agent_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your opensvc_agent_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpensvcAgentApi = require('opensvc_agent_api');

var defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'
// Configure Bearer (JWT) access token for authorization: bearerAuth
var bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new OpensvcAgentApi.AuthApi()
var opts = {
  'role': [new OpensvcAgentApi.Role()], // {[Role]} list of api role
  'duration': 10m // {String} max token duration, maximum value 24h
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.postAuthToken(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpensvcAgentApi.AuthApi* | [**postAuthToken**](docs/AuthApi.md#postAuthToken) | **POST** /auth/token | 
*OpensvcAgentApi.ClusterApi* | [**postClusterActionAbort**](docs/ClusterApi.md#postClusterActionAbort) | **POST** /cluster/action/abort | 
*OpensvcAgentApi.ClusterApi* | [**postClusterActionFreeze**](docs/ClusterApi.md#postClusterActionFreeze) | **POST** /cluster/action/freeze | 
*OpensvcAgentApi.ClusterApi* | [**postClusterActionUnfreeze**](docs/ClusterApi.md#postClusterActionUnfreeze) | **POST** /cluster/action/unfreeze | 
*OpensvcAgentApi.DaemonApi* | [**getDaemonEvents**](docs/DaemonApi.md#getDaemonEvents) | **GET** /node/name/{nodename}/daemon/event | 
*OpensvcAgentApi.DaemonApi* | [**getDaemonRunning**](docs/DaemonApi.md#getDaemonRunning) | **GET** /daemon/running | 
*OpensvcAgentApi.DaemonApi* | [**getDaemonStatus**](docs/DaemonApi.md#getDaemonStatus) | **GET** /daemon/status | 
*OpensvcAgentApi.DaemonApi* | [**postDaemonLogsControl**](docs/DaemonApi.md#postDaemonLogsControl) | **POST** /daemon/log/control | 
*OpensvcAgentApi.DaemonApi* | [**postDaemonRestart**](docs/DaemonApi.md#postDaemonRestart) | **POST** /node/name/{nodename}/daemon/action/restart | 
*OpensvcAgentApi.DaemonApi* | [**postDaemonShutdown**](docs/DaemonApi.md#postDaemonShutdown) | **POST** /node/name/{nodename}/daemon/action/shutdown | 
*OpensvcAgentApi.DaemonApi* | [**postDaemonStop**](docs/DaemonApi.md#postDaemonStop) | **POST** /node/name/{nodename}/daemon/action/stop | 
*OpensvcAgentApi.DaemonApi* | [**postDaemonSubAction**](docs/DaemonApi.md#postDaemonSubAction) | **POST** /daemon/sub/action | 
*OpensvcAgentApi.DnsApi* | [**getDNSDump**](docs/DnsApi.md#getDNSDump) | **GET** /dns/dump | 
*OpensvcAgentApi.InstanceApi* | [**getInstances**](docs/InstanceApi.md#getInstances) | **GET** /instance | 
*OpensvcAgentApi.InstanceCfgApi* | [**getInstance**](docs/InstanceCfgApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.InstanceCfgApi* | [**getInstanceLogs**](docs/InstanceCfgApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
*OpensvcAgentApi.InstanceCfgApi* | [**postInstanceActionDelete**](docs/InstanceCfgApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.InstanceCfgApi* | [**postInstanceClear**](docs/InstanceCfgApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 
*OpensvcAgentApi.InstanceSecApi* | [**getInstance**](docs/InstanceSecApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.InstanceSecApi* | [**getInstanceLogs**](docs/InstanceSecApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
*OpensvcAgentApi.InstanceSecApi* | [**postInstanceActionDelete**](docs/InstanceSecApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.InstanceSecApi* | [**postInstanceClear**](docs/InstanceSecApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 
*OpensvcAgentApi.InstanceSvcApi* | [**getInstance**](docs/InstanceSvcApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.InstanceSvcApi* | [**getInstanceLogs**](docs/InstanceSvcApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
*OpensvcAgentApi.InstanceSvcApi* | [**getObjectSchedule**](docs/InstanceSvcApi.md#getObjectSchedule) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/schedule | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionBoot**](docs/InstanceSvcApi.md#postInstanceActionBoot) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/boot | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionDelete**](docs/InstanceSvcApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionFreeze**](docs/InstanceSvcApi.md#postInstanceActionFreeze) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/freeze | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionProvision**](docs/InstanceSvcApi.md#postInstanceActionProvision) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/provision | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionShutdown**](docs/InstanceSvcApi.md#postInstanceActionShutdown) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/shutdown | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionStart**](docs/InstanceSvcApi.md#postInstanceActionStart) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/start | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionStartStandby**](docs/InstanceSvcApi.md#postInstanceActionStartStandby) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/startstandby | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionStop**](docs/InstanceSvcApi.md#postInstanceActionStop) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/stop | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionUnfreeze**](docs/InstanceSvcApi.md#postInstanceActionUnfreeze) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/unfreeze | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceActionUnprovision**](docs/InstanceSvcApi.md#postInstanceActionUnprovision) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/unprovision | 
*OpensvcAgentApi.InstanceSvcApi* | [**postInstanceClear**](docs/InstanceSvcApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 
*OpensvcAgentApi.InstanceUsrApi* | [**getInstance**](docs/InstanceUsrApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.InstanceUsrApi* | [**getInstanceLogs**](docs/InstanceUsrApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
*OpensvcAgentApi.InstanceUsrApi* | [**postInstanceActionDelete**](docs/InstanceUsrApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.InstanceUsrApi* | [**postInstanceClear**](docs/InstanceUsrApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 
*OpensvcAgentApi.InstanceVolApi* | [**getInstance**](docs/InstanceVolApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.InstanceVolApi* | [**getInstanceLogs**](docs/InstanceVolApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
*OpensvcAgentApi.InstanceVolApi* | [**getObjectSchedule**](docs/InstanceVolApi.md#getObjectSchedule) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/schedule | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionBoot**](docs/InstanceVolApi.md#postInstanceActionBoot) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/boot | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionDelete**](docs/InstanceVolApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionFreeze**](docs/InstanceVolApi.md#postInstanceActionFreeze) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/freeze | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionProvision**](docs/InstanceVolApi.md#postInstanceActionProvision) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/provision | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionShutdown**](docs/InstanceVolApi.md#postInstanceActionShutdown) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/shutdown | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionStart**](docs/InstanceVolApi.md#postInstanceActionStart) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/start | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionStartStandby**](docs/InstanceVolApi.md#postInstanceActionStartStandby) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/startstandby | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionStop**](docs/InstanceVolApi.md#postInstanceActionStop) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/stop | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionUnfreeze**](docs/InstanceVolApi.md#postInstanceActionUnfreeze) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/unfreeze | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceActionUnprovision**](docs/InstanceVolApi.md#postInstanceActionUnprovision) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/unprovision | 
*OpensvcAgentApi.InstanceVolApi* | [**postInstanceClear**](docs/InstanceVolApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 
*OpensvcAgentApi.InternalApi* | [**postDaemonJoin**](docs/InternalApi.md#postDaemonJoin) | **POST** /daemon/action/join | 
*OpensvcAgentApi.InternalApi* | [**postDaemonLeave**](docs/InternalApi.md#postDaemonLeave) | **POST** /daemon/action/leave | 
*OpensvcAgentApi.InternalApi* | [**postInstanceProgress**](docs/InternalApi.md#postInstanceProgress) | **POST** /instance/path/{namespace}/{kind}/{name}/progress | 
*OpensvcAgentApi.InternalApi* | [**postInstanceStatus**](docs/InternalApi.md#postInstanceStatus) | **POST** /instance/path/{namespace}/{kind}/{name}/status | 
*OpensvcAgentApi.NetworkApi* | [**getNetworkIP**](docs/NetworkApi.md#getNetworkIP) | **GET** /network/ip | 
*OpensvcAgentApi.NetworkApi* | [**getNetworks**](docs/NetworkApi.md#getNetworks) | **GET** /network | 
*OpensvcAgentApi.NodeApi* | [**getNodeCapabilities**](docs/NodeApi.md#getNodeCapabilities) | **GET** /node/name/{nodename}/capabilities | 
*OpensvcAgentApi.NodeApi* | [**getNodeConfigGet**](docs/NodeApi.md#getNodeConfigGet) | **GET** /node/name/{nodename}/config/get | 
*OpensvcAgentApi.NodeApi* | [**getNodeDRBDAllocation**](docs/NodeApi.md#getNodeDRBDAllocation) | **GET** /node/name/{nodename}/drbd/allocation | 
*OpensvcAgentApi.NodeApi* | [**getNodeDRBDConfig**](docs/NodeApi.md#getNodeDRBDConfig) | **GET** /node/name/{nodename}/drbd/config | 
*OpensvcAgentApi.NodeApi* | [**getNodeLogs**](docs/NodeApi.md#getNodeLogs) | **GET** /node/name/{nodename}/log | 
*OpensvcAgentApi.NodeApi* | [**getNodeSchedule**](docs/NodeApi.md#getNodeSchedule) | **GET** /node/name/{nodename}/schedule | 
*OpensvcAgentApi.NodeApi* | [**getNodes**](docs/NodeApi.md#getNodes) | **GET** /node | 
*OpensvcAgentApi.NodeApi* | [**getNodesInfo**](docs/NodeApi.md#getNodesInfo) | **GET** /node/info | 
*OpensvcAgentApi.NodeApi* | [**postNodeActionPushAsset**](docs/NodeApi.md#postNodeActionPushAsset) | **POST** /node/name/{nodename}/action/push/asset | 
*OpensvcAgentApi.NodeApi* | [**postNodeActionPushDisk**](docs/NodeApi.md#postNodeActionPushDisk) | **POST** /node/name/{nodename}/action/push/disk | 
*OpensvcAgentApi.NodeApi* | [**postNodeActionPushPatch**](docs/NodeApi.md#postNodeActionPushPatch) | **POST** /node/name/{nodename}/action/push/patch | 
*OpensvcAgentApi.NodeApi* | [**postNodeActionPushPkg**](docs/NodeApi.md#postNodeActionPushPkg) | **POST** /node/name/{nodename}/action/push/pkg | 
*OpensvcAgentApi.NodeApi* | [**postNodeActionScanCapabilities**](docs/NodeApi.md#postNodeActionScanCapabilities) | **POST** /node/name/{nodename}/action/scan/capabilities | 
*OpensvcAgentApi.NodeApi* | [**postNodeActionSysreport**](docs/NodeApi.md#postNodeActionSysreport) | **POST** /node/name/{nodename}/action/sysreport | 
*OpensvcAgentApi.NodeApi* | [**postNodeClear**](docs/NodeApi.md#postNodeClear) | **POST** /node/clear | 
*OpensvcAgentApi.NodeApi* | [**postNodeConfigUpdate**](docs/NodeApi.md#postNodeConfigUpdate) | **POST** /node/name/{nodename}/config/update | 
*OpensvcAgentApi.NodeApi* | [**postNodeDRBDConfig**](docs/NodeApi.md#postNodeDRBDConfig) | **POST** /node/name/{nodename}/drbd/config | 
*OpensvcAgentApi.NodeApi* | [**postPeerActionAbort**](docs/NodeApi.md#postPeerActionAbort) | **POST** /node/name/{nodename}/action/abort | 
*OpensvcAgentApi.NodeApi* | [**postPeerActionDrain**](docs/NodeApi.md#postPeerActionDrain) | **POST** /node/name/{nodename}/action/drain | 
*OpensvcAgentApi.NodeApi* | [**postPeerActionFreeze**](docs/NodeApi.md#postPeerActionFreeze) | **POST** /node/name/{nodename}/action/freeze | 
*OpensvcAgentApi.NodeApi* | [**postPeerActionUnfreeze**](docs/NodeApi.md#postPeerActionUnfreeze) | **POST** /node/name/{nodename}/action/unfreeze | 
*OpensvcAgentApi.ObjectApi* | [**getObjectPaths**](docs/ObjectApi.md#getObjectPaths) | **GET** /object/path | 
*OpensvcAgentApi.ObjectApi* | [**getObjects**](docs/ObjectApi.md#getObjects) | **GET** /object | 
*OpensvcAgentApi.ObjectCfgApi* | [**getObject**](docs/ObjectCfgApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.ObjectCfgApi* | [**getObjectConfig**](docs/ObjectCfgApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
*OpensvcAgentApi.ObjectCfgApi* | [**getObjectConfigFile**](docs/ObjectCfgApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectCfgApi* | [**getObjectConfigGet**](docs/ObjectCfgApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
*OpensvcAgentApi.ObjectCfgApi* | [**postObjectActionAbort**](docs/ObjectCfgApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
*OpensvcAgentApi.ObjectCfgApi* | [**postObjectActionDelete**](docs/ObjectCfgApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.ObjectCfgApi* | [**postObjectConfigFile**](docs/ObjectCfgApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectCfgApi* | [**postObjectConfigUpdate**](docs/ObjectCfgApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
*OpensvcAgentApi.ObjectCfgApi* | [**putObjectConfigFile**](docs/ObjectCfgApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectSecApi* | [**getObject**](docs/ObjectSecApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.ObjectSecApi* | [**getObjectConfig**](docs/ObjectSecApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
*OpensvcAgentApi.ObjectSecApi* | [**getObjectConfigFile**](docs/ObjectSecApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectSecApi* | [**getObjectConfigGet**](docs/ObjectSecApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
*OpensvcAgentApi.ObjectSecApi* | [**postObjectActionAbort**](docs/ObjectSecApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
*OpensvcAgentApi.ObjectSecApi* | [**postObjectActionDelete**](docs/ObjectSecApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.ObjectSecApi* | [**postObjectConfigFile**](docs/ObjectSecApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectSecApi* | [**postObjectConfigUpdate**](docs/ObjectSecApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
*OpensvcAgentApi.ObjectSecApi* | [**putObjectConfigFile**](docs/ObjectSecApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectSvcApi* | [**getObject**](docs/ObjectSvcApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.ObjectSvcApi* | [**getObjectConfig**](docs/ObjectSvcApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
*OpensvcAgentApi.ObjectSvcApi* | [**getObjectConfigFile**](docs/ObjectSvcApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectSvcApi* | [**getObjectConfigGet**](docs/ObjectSvcApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionAbort**](docs/ObjectSvcApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionDelete**](docs/ObjectSvcApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionFreeze**](docs/ObjectSvcApi.md#postObjectActionFreeze) | **POST** /object/path/{namespace}/{kind}/{name}/action/freeze | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionGiveback**](docs/ObjectSvcApi.md#postObjectActionGiveback) | **POST** /object/path/{namespace}/{kind}/{name}/action/giveback | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionProvision**](docs/ObjectSvcApi.md#postObjectActionProvision) | **POST** /object/path/{namespace}/{kind}/{name}/action/provision | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionPurge**](docs/ObjectSvcApi.md#postObjectActionPurge) | **POST** /object/path/{namespace}/{kind}/{name}/action/purge | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionStart**](docs/ObjectSvcApi.md#postObjectActionStart) | **POST** /object/path/{namespace}/{kind}/{name}/action/start | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionStop**](docs/ObjectSvcApi.md#postObjectActionStop) | **POST** /object/path/{namespace}/{kind}/{name}/action/stop | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionSwitch**](docs/ObjectSvcApi.md#postObjectActionSwitch) | **POST** /object/path/{namespace}/{kind}/{name}/action/switch | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionUnfreeze**](docs/ObjectSvcApi.md#postObjectActionUnfreeze) | **POST** /object/path/{namespace}/{kind}/{name}/action/unfreeze | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectActionUnprovision**](docs/ObjectSvcApi.md#postObjectActionUnprovision) | **POST** /object/path/{namespace}/{kind}/{name}/action/unprovision | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectConfigFile**](docs/ObjectSvcApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectSvcApi* | [**postObjectConfigUpdate**](docs/ObjectSvcApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
*OpensvcAgentApi.ObjectSvcApi* | [**putObjectConfigFile**](docs/ObjectSvcApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectUsrApi* | [**getObject**](docs/ObjectUsrApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.ObjectUsrApi* | [**getObjectConfig**](docs/ObjectUsrApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
*OpensvcAgentApi.ObjectUsrApi* | [**getObjectConfigFile**](docs/ObjectUsrApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectUsrApi* | [**getObjectConfigGet**](docs/ObjectUsrApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
*OpensvcAgentApi.ObjectUsrApi* | [**postObjectActionAbort**](docs/ObjectUsrApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
*OpensvcAgentApi.ObjectUsrApi* | [**postObjectActionDelete**](docs/ObjectUsrApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.ObjectUsrApi* | [**postObjectConfigFile**](docs/ObjectUsrApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectUsrApi* | [**postObjectConfigUpdate**](docs/ObjectUsrApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
*OpensvcAgentApi.ObjectUsrApi* | [**putObjectConfigFile**](docs/ObjectUsrApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectVolApi* | [**getObject**](docs/ObjectVolApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
*OpensvcAgentApi.ObjectVolApi* | [**getObjectConfig**](docs/ObjectVolApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
*OpensvcAgentApi.ObjectVolApi* | [**getObjectConfigFile**](docs/ObjectVolApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectVolApi* | [**getObjectConfigGet**](docs/ObjectVolApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionAbort**](docs/ObjectVolApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionDelete**](docs/ObjectVolApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionFreeze**](docs/ObjectVolApi.md#postObjectActionFreeze) | **POST** /object/path/{namespace}/{kind}/{name}/action/freeze | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionProvision**](docs/ObjectVolApi.md#postObjectActionProvision) | **POST** /object/path/{namespace}/{kind}/{name}/action/provision | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionPurge**](docs/ObjectVolApi.md#postObjectActionPurge) | **POST** /object/path/{namespace}/{kind}/{name}/action/purge | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionUnfreeze**](docs/ObjectVolApi.md#postObjectActionUnfreeze) | **POST** /object/path/{namespace}/{kind}/{name}/action/unfreeze | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectActionUnprovision**](docs/ObjectVolApi.md#postObjectActionUnprovision) | **POST** /object/path/{namespace}/{kind}/{name}/action/unprovision | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectConfigFile**](docs/ObjectVolApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.ObjectVolApi* | [**postObjectConfigUpdate**](docs/ObjectVolApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
*OpensvcAgentApi.ObjectVolApi* | [**putObjectConfigFile**](docs/ObjectVolApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 
*OpensvcAgentApi.PoolApi* | [**getPoolVolumes**](docs/PoolApi.md#getPoolVolumes) | **GET** /pool/volume | 
*OpensvcAgentApi.PoolApi* | [**getPools**](docs/PoolApi.md#getPools) | **GET** /pool | 
*OpensvcAgentApi.PublicApi* | [**getSwagger**](docs/PublicApi.md#getSwagger) | **GET** /public/openapi | 
*OpensvcAgentApi.RelayApi* | [**getRelayMessage**](docs/RelayApi.md#getRelayMessage) | **GET** /relay/message | 
*OpensvcAgentApi.RelayApi* | [**postRelayMessage**](docs/RelayApi.md#postRelayMessage) | **POST** /relay/message | 
*OpensvcAgentApi.ResourceApi* | [**getResources**](docs/ResourceApi.md#getResources) | **GET** /resource | 


## Documentation for Models

 - [OpensvcAgentApi.ArbitratorStatus](docs/ArbitratorStatus.md)
 - [OpensvcAgentApi.AuthToken](docs/AuthToken.md)
 - [OpensvcAgentApi.Capability](docs/Capability.md)
 - [OpensvcAgentApi.CapabilityItem](docs/CapabilityItem.md)
 - [OpensvcAgentApi.CapabilityList](docs/CapabilityList.md)
 - [OpensvcAgentApi.Cluster](docs/Cluster.md)
 - [OpensvcAgentApi.DNSRecord](docs/DNSRecord.md)
 - [OpensvcAgentApi.DRBDAllocation](docs/DRBDAllocation.md)
 - [OpensvcAgentApi.DRBDConfig](docs/DRBDConfig.md)
 - [OpensvcAgentApi.Daemon](docs/Daemon.md)
 - [OpensvcAgentApi.DaemonCollector](docs/DaemonCollector.md)
 - [OpensvcAgentApi.DaemonDNS](docs/DaemonDNS.md)
 - [OpensvcAgentApi.DaemonHb](docs/DaemonHb.md)
 - [OpensvcAgentApi.DaemonHbMode](docs/DaemonHbMode.md)
 - [OpensvcAgentApi.DaemonHbStream](docs/DaemonHbStream.md)
 - [OpensvcAgentApi.DaemonHbStreamPeer](docs/DaemonHbStreamPeer.md)
 - [OpensvcAgentApi.DaemonHbStreamType](docs/DaemonHbStreamType.md)
 - [OpensvcAgentApi.DaemonListener](docs/DaemonListener.md)
 - [OpensvcAgentApi.DaemonMonitor](docs/DaemonMonitor.md)
 - [OpensvcAgentApi.DaemonScheduler](docs/DaemonScheduler.md)
 - [OpensvcAgentApi.DaemonStatus](docs/DaemonStatus.md)
 - [OpensvcAgentApi.DaemonSubsystemAlert](docs/DaemonSubsystemAlert.md)
 - [OpensvcAgentApi.DaemonSubsystemStatus](docs/DaemonSubsystemStatus.md)
 - [OpensvcAgentApi.Instance](docs/Instance.md)
 - [OpensvcAgentApi.InstanceActionAccepted](docs/InstanceActionAccepted.md)
 - [OpensvcAgentApi.InstanceConfig](docs/InstanceConfig.md)
 - [OpensvcAgentApi.InstanceItem](docs/InstanceItem.md)
 - [OpensvcAgentApi.InstanceList](docs/InstanceList.md)
 - [OpensvcAgentApi.InstanceMeta](docs/InstanceMeta.md)
 - [OpensvcAgentApi.InstanceMonitor](docs/InstanceMonitor.md)
 - [OpensvcAgentApi.InstanceStatus](docs/InstanceStatus.md)
 - [OpensvcAgentApi.KeywordData](docs/KeywordData.md)
 - [OpensvcAgentApi.KeywordItem](docs/KeywordItem.md)
 - [OpensvcAgentApi.KeywordList](docs/KeywordList.md)
 - [OpensvcAgentApi.KeywordMeta](docs/KeywordMeta.md)
 - [OpensvcAgentApi.Kind](docs/Kind.md)
 - [OpensvcAgentApi.Network](docs/Network.md)
 - [OpensvcAgentApi.NetworkIP](docs/NetworkIP.md)
 - [OpensvcAgentApi.NetworkIPList](docs/NetworkIPList.md)
 - [OpensvcAgentApi.NetworkIPNetwork](docs/NetworkIPNetwork.md)
 - [OpensvcAgentApi.NetworkList](docs/NetworkList.md)
 - [OpensvcAgentApi.Node](docs/Node.md)
 - [OpensvcAgentApi.NodeActionAccepted](docs/NodeActionAccepted.md)
 - [OpensvcAgentApi.NodeConfig](docs/NodeConfig.md)
 - [OpensvcAgentApi.NodeInfo](docs/NodeInfo.md)
 - [OpensvcAgentApi.NodeItem](docs/NodeItem.md)
 - [OpensvcAgentApi.NodeLabel](docs/NodeLabel.md)
 - [OpensvcAgentApi.NodeList](docs/NodeList.md)
 - [OpensvcAgentApi.NodeMeta](docs/NodeMeta.md)
 - [OpensvcAgentApi.NodeMonitor](docs/NodeMonitor.md)
 - [OpensvcAgentApi.NodeStatus](docs/NodeStatus.md)
 - [OpensvcAgentApi.ObjectConfig](docs/ObjectConfig.md)
 - [OpensvcAgentApi.ObjectConfigFile](docs/ObjectConfigFile.md)
 - [OpensvcAgentApi.ObjectData](docs/ObjectData.md)
 - [OpensvcAgentApi.ObjectItem](docs/ObjectItem.md)
 - [OpensvcAgentApi.ObjectList](docs/ObjectList.md)
 - [OpensvcAgentApi.ObjectMeta](docs/ObjectMeta.md)
 - [OpensvcAgentApi.Orchestrate](docs/Orchestrate.md)
 - [OpensvcAgentApi.OrchestrationQueued](docs/OrchestrationQueued.md)
 - [OpensvcAgentApi.PlacementPolicy](docs/PlacementPolicy.md)
 - [OpensvcAgentApi.PlacementState](docs/PlacementState.md)
 - [OpensvcAgentApi.Pool](docs/Pool.md)
 - [OpensvcAgentApi.PoolList](docs/PoolList.md)
 - [OpensvcAgentApi.PoolVolume](docs/PoolVolume.md)
 - [OpensvcAgentApi.PoolVolumeList](docs/PoolVolumeList.md)
 - [OpensvcAgentApi.PostDaemonLogsControl](docs/PostDaemonLogsControl.md)
 - [OpensvcAgentApi.PostDaemonSubAction](docs/PostDaemonSubAction.md)
 - [OpensvcAgentApi.PostInstanceProgress](docs/PostInstanceProgress.md)
 - [OpensvcAgentApi.PostNodeDRBDConfigRequest](docs/PostNodeDRBDConfigRequest.md)
 - [OpensvcAgentApi.PostObjectActionSwitch](docs/PostObjectActionSwitch.md)
 - [OpensvcAgentApi.PostRelayMessage](docs/PostRelayMessage.md)
 - [OpensvcAgentApi.Problem](docs/Problem.md)
 - [OpensvcAgentApi.Provisioned](docs/Provisioned.md)
 - [OpensvcAgentApi.RelayMessage](docs/RelayMessage.md)
 - [OpensvcAgentApi.RelayMessages](docs/RelayMessages.md)
 - [OpensvcAgentApi.Resource](docs/Resource.md)
 - [OpensvcAgentApi.ResourceConfig](docs/ResourceConfig.md)
 - [OpensvcAgentApi.ResourceItem](docs/ResourceItem.md)
 - [OpensvcAgentApi.ResourceList](docs/ResourceList.md)
 - [OpensvcAgentApi.ResourceLogEntry](docs/ResourceLogEntry.md)
 - [OpensvcAgentApi.ResourceMeta](docs/ResourceMeta.md)
 - [OpensvcAgentApi.ResourceMonitor](docs/ResourceMonitor.md)
 - [OpensvcAgentApi.ResourceMonitorRestart](docs/ResourceMonitorRestart.md)
 - [OpensvcAgentApi.ResourceProvisionStatus](docs/ResourceProvisionStatus.md)
 - [OpensvcAgentApi.ResourceStatus](docs/ResourceStatus.md)
 - [OpensvcAgentApi.Role](docs/Role.md)
 - [OpensvcAgentApi.SANPath](docs/SANPath.md)
 - [OpensvcAgentApi.SANPathInitiator](docs/SANPathInitiator.md)
 - [OpensvcAgentApi.SANPathTarget](docs/SANPathTarget.md)
 - [OpensvcAgentApi.Schedule](docs/Schedule.md)
 - [OpensvcAgentApi.ScheduleItem](docs/ScheduleItem.md)
 - [OpensvcAgentApi.ScheduleList](docs/ScheduleList.md)
 - [OpensvcAgentApi.Status](docs/Status.md)
 - [OpensvcAgentApi.SubsetConfig](docs/SubsetConfig.md)
 - [OpensvcAgentApi.Topology](docs/Topology.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### basicAuth

- **Type**: HTTP basic authentication

### bearerAuth

- **Type**: Bearer authentication (JWT)

Wed Jan 31 10:00:25 UTC 2024
