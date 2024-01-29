# OpensvcAgentApi.NodeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodeCapabilities**](NodeApi.md#getNodeCapabilities) | **GET** /node/name/{nodename}/capabilities | 
[**getNodeConfigGet**](NodeApi.md#getNodeConfigGet) | **GET** /node/name/{nodename}/config/get | 
[**getNodeDRBDAllocation**](NodeApi.md#getNodeDRBDAllocation) | **GET** /node/name/{nodename}/drbd/allocation | 
[**getNodeDRBDConfig**](NodeApi.md#getNodeDRBDConfig) | **GET** /node/name/{nodename}/drbd/config | 
[**getNodeLogs**](NodeApi.md#getNodeLogs) | **GET** /node/name/{nodename}/log | 
[**getNodeSchedule**](NodeApi.md#getNodeSchedule) | **GET** /node/name/{nodename}/schedule | 
[**getNodes**](NodeApi.md#getNodes) | **GET** /node | 
[**getNodesInfo**](NodeApi.md#getNodesInfo) | **GET** /node/info | 
[**postNodeActionPushAsset**](NodeApi.md#postNodeActionPushAsset) | **POST** /node/name/{nodename}/action/push/asset | 
[**postNodeActionPushDisk**](NodeApi.md#postNodeActionPushDisk) | **POST** /node/name/{nodename}/action/push/disk | 
[**postNodeActionPushPatch**](NodeApi.md#postNodeActionPushPatch) | **POST** /node/name/{nodename}/action/push/patch | 
[**postNodeActionPushPkg**](NodeApi.md#postNodeActionPushPkg) | **POST** /node/name/{nodename}/action/push/pkg | 
[**postNodeActionScanCapabilities**](NodeApi.md#postNodeActionScanCapabilities) | **POST** /node/name/{nodename}/action/scan/capabilities | 
[**postNodeActionSysreport**](NodeApi.md#postNodeActionSysreport) | **POST** /node/name/{nodename}/action/sysreport | 
[**postNodeClear**](NodeApi.md#postNodeClear) | **POST** /node/clear | 
[**postNodeConfigUpdate**](NodeApi.md#postNodeConfigUpdate) | **POST** /node/name/{nodename}/config/update | 
[**postNodeDRBDConfig**](NodeApi.md#postNodeDRBDConfig) | **POST** /node/name/{nodename}/drbd/config | 
[**postPeerActionAbort**](NodeApi.md#postPeerActionAbort) | **POST** /node/name/{nodename}/action/abort | 
[**postPeerActionDrain**](NodeApi.md#postPeerActionDrain) | **POST** /node/name/{nodename}/action/drain | 
[**postPeerActionFreeze**](NodeApi.md#postPeerActionFreeze) | **POST** /node/name/{nodename}/action/freeze | 
[**postPeerActionUnfreeze**](NodeApi.md#postPeerActionUnfreeze) | **POST** /node/name/{nodename}/action/unfreeze | 



## getNodeCapabilities

> CapabilityList getNodeCapabilities(nodename)



Return the capabilities of the node. Capability scanners are provided by the core agent and by every resource driver. Capabalities are used to enable or disable features based on the current operating system state. 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
apiInstance.getNodeCapabilities(nodename, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 

### Return type

[**CapabilityList**](CapabilityList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeConfigGet

> KeywordList getNodeConfigGet(nodename, opts)



Get or evaluate a keyword in the node configuration file.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'kw': ["env.unwanted"], // [String] | 
  'evaluate': true, // Boolean | 
  'impersonate': "impersonate_example" // String | 
};
apiInstance.getNodeConfigGet(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **kw** | [**[String]**](String.md)|  | [optional] 
 **evaluate** | **Boolean**|  | [optional] 
 **impersonate** | **String**|  | [optional] 

### Return type

[**KeywordList**](KeywordList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeDRBDAllocation

> DRBDAllocation getNodeDRBDAllocation(nodename)



Get the drbd driver minor numbers and ports already allocated on the node. 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
apiInstance.getNodeDRBDAllocation(nodename, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 

### Return type

[**DRBDAllocation**](DRBDAllocation.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeDRBDConfig

> DRBDConfig getNodeDRBDConfig(nodename, name)



Fetch from a node a drbd configuration file fragment. 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let name = "name_example"; // String | the full path of the file is deduced from the name
apiInstance.getNodeDRBDConfig(nodename, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **name** | **String**| the full path of the file is deduced from the name | 

### Return type

[**DRBDConfig**](DRBDConfig.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeLogs

> File getNodeLogs(nodename, opts)



Serve new logs 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'filter': ["sid=9a8e04e6-bc12-43e6-83d1-fe10d5363ea7"], // [String] | list of log filter
  'follow': true, // Boolean | follow the logs
  'lines': 56, // Number | report this number of past last log entries
  'paths': ["svc1, svc2"] // [String] | list of object paths to send logs for
};
apiInstance.getNodeLogs(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **filter** | [**[String]**](String.md)| list of log filter | [optional] 
 **follow** | **Boolean**| follow the logs | [optional] 
 **lines** | **Number**| report this number of past last log entries | [optional] 
 **paths** | [**[String]**](String.md)| list of object paths to send logs for | [optional] 

### Return type

**File**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json


## getNodeSchedule

> ScheduleList getNodeSchedule(nodename)



Return the schedule table of the node. 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
apiInstance.getNodeSchedule(nodename, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 

### Return type

[**ScheduleList**](ScheduleList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodes

> NodeList getNodes(opts)



### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let opts = {
  'node': n2,az=eu1 // String | node selector expression.
};
apiInstance.getNodes(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node** | **String**| node selector expression. | [optional] 

### Return type

[**NodeList**](NodeList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodesInfo

> [NodeInfo] getNodesInfo()



### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
apiInstance.getNodesInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[NodeInfo]**](NodeInfo.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeActionPushAsset

> NodeActionAccepted postNodeActionPushAsset(nodename, opts)



Refresh and send to the collector the asset discovery.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postNodeActionPushAsset(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeActionPushDisk

> NodeActionAccepted postNodeActionPushDisk(nodename, opts)



Refresh and send to the collector the disk discovery.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postNodeActionPushDisk(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeActionPushPatch

> NodeActionAccepted postNodeActionPushPatch(nodename, opts)



Refresh and send to the collector the package discovery.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postNodeActionPushPatch(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeActionPushPkg

> NodeActionAccepted postNodeActionPushPkg(nodename, opts)



Refresh and send to the collector the package discovery.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postNodeActionPushPkg(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeActionScanCapabilities

> NodeActionAccepted postNodeActionScanCapabilities(nodename, opts)



Refresh the node capabilities cache. Capability scanners are provided by the core agent and by every resource driver. Capabalities are used to enable or disable features based on the current operating system state. 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postNodeActionScanCapabilities(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeActionSysreport

> NodeActionAccepted postNodeActionSysreport(nodename, opts)



Collect and send a new sysreport.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'force': true, // Boolean | 
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postNodeActionSysreport(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **force** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeClear

> Problem postNodeClear()



Clears errors (for example, failed) in the node monitor state.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
apiInstance.postNodeClear((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeConfigUpdate

> Problem postNodeConfigUpdate(nodename, opts)



Delete sections, unset and set keywords in the node configuration file.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  '_delete': ["task#unwanted"], // [String] | 
  'unset': ["task#unwanted"], // [String] | 
  'set': ["env.eat=fruits"] // [String] | 
};
apiInstance.postNodeConfigUpdate(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **_delete** | [**[String]**](String.md)|  | [optional] 
 **unset** | [**[String]**](String.md)|  | [optional] 
 **set** | [**[String]**](String.md)|  | [optional] 

### Return type

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeDRBDConfig

> postNodeDRBDConfig(nodename, name, postNodeDRBDConfigRequest)



Send to a node a drbd configuration file fragment to install. 

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let name = "name_example"; // String | the full path of the file is deduced from the name
let postNodeDRBDConfigRequest = new OpensvcAgentApi.PostNodeDRBDConfigRequest(); // PostNodeDRBDConfigRequest | monitor
apiInstance.postNodeDRBDConfig(nodename, name, postNodeDRBDConfigRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **name** | **String**| the full path of the file is deduced from the name | 
 **postNodeDRBDConfigRequest** | [**PostNodeDRBDConfigRequest**](PostNodeDRBDConfigRequest.md)| monitor | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postPeerActionAbort

> OrchestrationQueued postPeerActionAbort(nodename)



### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
apiInstance.postPeerActionAbort(nodename, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 

### Return type

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPeerActionDrain

> OrchestrationQueued postPeerActionDrain(nodename)



### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
apiInstance.postPeerActionDrain(nodename, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 

### Return type

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPeerActionFreeze

> NodeActionAccepted postPeerActionFreeze(nodename, opts)



Freeze the node.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postPeerActionFreeze(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postPeerActionUnfreeze

> NodeActionAccepted postPeerActionUnfreeze(nodename, opts)



Unfreeze the node.

### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.NodeApi();
let nodename = localhost; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postPeerActionUnfreeze(nodename, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodename** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**NodeActionAccepted**](NodeActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

