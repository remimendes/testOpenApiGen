# TestOpensvcAgentApi.InstanceSvcApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstance**](InstanceSvcApi.md#getInstance) | **GET** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name} | 
[**getInstanceLogs**](InstanceSvcApi.md#getInstanceLogs) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/log | 
[**getObjectSchedule**](InstanceSvcApi.md#getObjectSchedule) | **GET** /node/name/{nodename}/object/path/{namespace}/{kind}/{name}/schedule | 
[**postInstanceActionBoot**](InstanceSvcApi.md#postInstanceActionBoot) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/boot | 
[**postInstanceActionDelete**](InstanceSvcApi.md#postInstanceActionDelete) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/delete | 
[**postInstanceActionFreeze**](InstanceSvcApi.md#postInstanceActionFreeze) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/freeze | 
[**postInstanceActionProvision**](InstanceSvcApi.md#postInstanceActionProvision) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/provision | 
[**postInstanceActionShutdown**](InstanceSvcApi.md#postInstanceActionShutdown) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/shutdown | 
[**postInstanceActionStart**](InstanceSvcApi.md#postInstanceActionStart) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/start | 
[**postInstanceActionStartStandby**](InstanceSvcApi.md#postInstanceActionStartStandby) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/startstandby | 
[**postInstanceActionStop**](InstanceSvcApi.md#postInstanceActionStop) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/stop | 
[**postInstanceActionUnfreeze**](InstanceSvcApi.md#postInstanceActionUnfreeze) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/unfreeze | 
[**postInstanceActionUnprovision**](InstanceSvcApi.md#postInstanceActionUnprovision) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/action/unprovision | 
[**postInstanceClear**](InstanceSvcApi.md#postInstanceClear) | **POST** /node/name/{nodename}/instance/path/{namespace}/{kind}/{name}/clear | 



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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
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


## getObjectSchedule

> ScheduleList getObjectSchedule(nodename, namespace, kind, name)



Return the schedule table of the object. 

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.getObjectSchedule(nodename, namespace, kind, name, (error, data, response) => {
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

[**ScheduleList**](ScheduleList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceActionBoot

> InstanceActionAccepted postInstanceActionBoot(nodename, namespace, kind, name, opts)



Boot the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionBoot(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
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


## postInstanceActionFreeze

> InstanceActionAccepted postInstanceActionFreeze(nodename, namespace, kind, name, opts)



Freeze the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postInstanceActionFreeze(nodename, namespace, kind, name, opts, (error, data, response) => {
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


## postInstanceActionProvision

> InstanceActionAccepted postInstanceActionProvision(nodename, namespace, kind, name, opts)



Provision the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'disableRollback': true, // Boolean | 
  'force': true, // Boolean | 
  'leader': true, // Boolean | 
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionProvision(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **disableRollback** | **Boolean**|  | [optional] 
 **force** | **Boolean**|  | [optional] 
 **leader** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceActionShutdown

> InstanceActionAccepted postInstanceActionShutdown(nodename, namespace, kind, name, opts)



Shutdown the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'force': true, // Boolean | 
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionShutdown(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **force** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceActionStart

> InstanceActionAccepted postInstanceActionStart(nodename, namespace, kind, name, opts)



Start the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'disableRollback': true, // Boolean | 
  'force': true, // Boolean | 
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionStart(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **disableRollback** | **Boolean**|  | [optional] 
 **force** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceActionStartStandby

> InstanceActionAccepted postInstanceActionStartStandby(nodename, namespace, kind, name, opts)



Start the object in stance in   standby mode.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'disableRollback': true, // Boolean | 
  'force': true, // Boolean | 
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionStartStandby(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **disableRollback** | **Boolean**|  | [optional] 
 **force** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceActionStop

> InstanceActionAccepted postInstanceActionStop(nodename, namespace, kind, name, opts)



Stop the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'force': true, // Boolean | 
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionStop(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **force** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

### Return type

[**InstanceActionAccepted**](InstanceActionAccepted.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceActionUnfreeze

> InstanceActionAccepted postInstanceActionUnfreeze(nodename, namespace, kind, name, opts)



Unfreeze the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'requesterSid': "requesterSid_example" // String | 
};
apiInstance.postInstanceActionUnfreeze(nodename, namespace, kind, name, opts, (error, data, response) => {
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


## postInstanceActionUnprovision

> InstanceActionAccepted postInstanceActionUnprovision(nodename, namespace, kind, name, opts)



Unprovision the object instance.

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
let nodename = localhost; // String | 
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'force': true, // Boolean | 
  'leader': true, // Boolean | 
  'requesterSid': "requesterSid_example", // String | 
  'rid': "rid_example", // String | 
  'subset': "subset_example", // String | 
  'tag': "tag_example", // String | 
  'to': "to_example" // String | 
};
apiInstance.postInstanceActionUnprovision(nodename, namespace, kind, name, opts, (error, data, response) => {
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
 **force** | **Boolean**|  | [optional] 
 **leader** | **Boolean**|  | [optional] 
 **requesterSid** | **String**|  | [optional] 
 **rid** | **String**|  | [optional] 
 **subset** | **String**|  | [optional] 
 **tag** | **String**|  | [optional] 
 **to** | **String**|  | [optional] 

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

let apiInstance = new TestOpensvcAgentApi.InstanceSvcApi();
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

