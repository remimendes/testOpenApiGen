# OpensvcAgentApi.DaemonApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDaemonEvents**](DaemonApi.md#getDaemonEvents) | **GET** /node/name/{nodename}/daemon/event | 
[**getDaemonRunning**](DaemonApi.md#getDaemonRunning) | **GET** /daemon/running | 
[**getDaemonStatus**](DaemonApi.md#getDaemonStatus) | **GET** /daemon/status | 
[**postDaemonLogsControl**](DaemonApi.md#postDaemonLogsControl) | **POST** /daemon/log/control | 
[**postDaemonRestart**](DaemonApi.md#postDaemonRestart) | **POST** /node/name/{nodename}/daemon/action/restart | 
[**postDaemonShutdown**](DaemonApi.md#postDaemonShutdown) | **POST** /node/name/{nodename}/daemon/action/shutdown | 
[**postDaemonStop**](DaemonApi.md#postDaemonStop) | **POST** /node/name/{nodename}/daemon/action/stop | 
[**postDaemonSubAction**](DaemonApi.md#postDaemonSubAction) | **POST** /daemon/sub/action | 



## getDaemonEvents

> File getDaemonEvents(nodename, opts)



Listen node daemon events 

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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let nodename = localhost; // String | 
let opts = {
  'duration': 5s, // String | max duration
  'limit': 1, // Number | limit items count
  'filter': ["ObjectStatusUpdated,path=foo"], // [String] | list of event filter
  'selector': "selector_example" // String | selector
};
apiInstance.getDaemonEvents(nodename, opts, (error, data, response) => {
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
 **duration** | **String**| max duration | [optional] 
 **limit** | **Number**| limit items count | [optional] 
 **filter** | [**[String]**](String.md)| list of event filter | [optional] 
 **selector** | **String**| selector | [optional] 

### Return type

**File**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json


## getDaemonRunning

> Boolean getDaemonRunning()



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

let apiInstance = new OpensvcAgentApi.DaemonApi();
apiInstance.getDaemonRunning((error, data, response) => {
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

**Boolean**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDaemonStatus

> DaemonStatus getDaemonStatus(opts)



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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let opts = {
  'namespace': "namespace_example", // String | namespace
  'selector': "selector_example" // String | selector
};
apiInstance.getDaemonStatus(opts, (error, data, response) => {
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
 **namespace** | **String**| namespace | [optional] 
 **selector** | **String**| selector | [optional] 

### Return type

[**DaemonStatus**](DaemonStatus.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDaemonLogsControl

> Problem postDaemonLogsControl(postDaemonLogsControl)



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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let postDaemonLogsControl = new OpensvcAgentApi.PostDaemonLogsControl(); // PostDaemonLogsControl | set daemon log level
apiInstance.postDaemonLogsControl(postDaemonLogsControl, (error, data, response) => {
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
 **postDaemonLogsControl** | [**PostDaemonLogsControl**](PostDaemonLogsControl.md)| set daemon log level | 

### Return type

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postDaemonRestart

> Problem postDaemonRestart(nodename)



Restart the daemon on this node.  The node svc and vol instances do not change state.  The peer nodes are notified of our maintenance state so they will not try to takeover services during the restart. 

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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let nodename = localhost; // String | 
apiInstance.postDaemonRestart(nodename, (error, data, response) => {
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

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDaemonShutdown

> Problem postDaemonShutdown(nodename, opts)



Shut down all the node svc and vol instances, then stop the daemon.  Peer nodes are not notified of a maintenance period, so they will try to takeover services as soon as their instance on the shutdown daemon&#39;s node is down. 

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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let nodename = localhost; // String | 
let opts = {
  'duration': 5s // String | max duration
};
apiInstance.postDaemonShutdown(nodename, opts, (error, data, response) => {
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
 **duration** | **String**| max duration | [optional] 

### Return type

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDaemonStop

> Problem postDaemonStop(nodename)



Stop the daemon.  The node svc and vol instances do not change state. The peer nodes are notified of our maintenance state so they will not takeover services until the maintenance_grace_period is expired. 

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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let nodename = localhost; // String | 
apiInstance.postDaemonStop(nodename, (error, data, response) => {
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

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDaemonSubAction

> Problem postDaemonSubAction(postDaemonSubAction)



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

let apiInstance = new OpensvcAgentApi.DaemonApi();
let postDaemonSubAction = new OpensvcAgentApi.PostDaemonSubAction(); // PostDaemonSubAction | action on daemon sub components
apiInstance.postDaemonSubAction(postDaemonSubAction, (error, data, response) => {
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
 **postDaemonSubAction** | [**PostDaemonSubAction**](PostDaemonSubAction.md)| action on daemon sub components | 

### Return type

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

