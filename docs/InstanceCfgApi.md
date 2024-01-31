# TestOpensvcAgentApi.InstanceCfgApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstance**](InstanceCfgApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
[**getInstanceLogs**](InstanceCfgApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
[**postInstanceActionDelete**](InstanceCfgApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
[**postInstanceClear**](InstanceCfgApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 



## getInstance

> InstanceItem getInstance(nodename, namespace, kind, name)



### Example

```javascript
import TestOpensvcAgentApi from 'test_opensvc_agent_api';
let defaultClient = TestOpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TestOpensvcAgentApi.InstanceCfgApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.getInstance(nodename, namespace, kind, name, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 

### Return type

[**InstanceItem**](InstanceItem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInstanceLogs

> File getInstanceLogs(nodename, namespace, kind, name, opts)



Serve new logs 

### Example

```javascript
import TestOpensvcAgentApi from 'test_opensvc_agent_api';
let defaultClient = TestOpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TestOpensvcAgentApi.InstanceCfgApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'filter': ["sid=9a8e04e6-bc12-43e6-83d1-fe10d5363ea7"], // [String] | list of log filter
  'follow': true, // Boolean | follow the logs
  'lines': 56 // Number | report this number of past last log entries
};
apiInstance.getInstanceLogs(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
 **filter** | [**[String]**](String.md)| list of log filter | [optional] 
 **follow** | **Boolean**| follow the logs | [optional] 
 **lines** | **Number**| report this number of past last log entries | [optional] 

### Return type

**File**

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/event-stream, application/json


## postInstanceActionDelete

> InstanceActionAccepted postInstanceActionDelete(nodename, namespace, kind, name, opts)



Delete the object instance.

### Example

```javascript
import TestOpensvcAgentApi from 'test_opensvc_agent_api';
let defaultClient = TestOpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TestOpensvcAgentApi.InstanceCfgApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postInstanceActionDelete(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
 **requesterSid** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceClear

> postInstanceClear(nodename, namespace, kind, name)



Clear an error (\&quot;start failed\&quot; for example) in the instance monitor state. 

### Example

```javascript
import TestOpensvcAgentApi from 'test_opensvc_agent_api';
let defaultClient = TestOpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new TestOpensvcAgentApi.InstanceCfgApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postInstanceClear(nodename, namespace, kind, name, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

