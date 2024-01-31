# TestOpensvcAgentApi.ObjectSecApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getObject**](ObjectSecApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
[**getObjectConfig**](ObjectSecApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
[**getObjectConfigFile**](ObjectSecApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
[**getObjectConfigGet**](ObjectSecApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
[**postObjectActionAbort**](ObjectSecApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
[**postObjectActionDelete**](ObjectSecApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
[**postObjectConfigFile**](ObjectSecApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
[**postObjectConfigUpdate**](ObjectSecApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
[**putObjectConfigFile**](ObjectSecApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 



## getObject

> ObjectItem getObject(namespace, kind, name)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.getObject(namespace, kind, name, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 

### Return type

[**ObjectItem**](ObjectItem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObjectConfig

> ObjectConfig getObjectConfig(namespace, kind, name, opts)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'evaluate': true, // Boolean | evaluate
  'impersonate': "impersonate_example" // String | impersonate the evaluation as node
};
apiInstance.getObjectConfig(namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
 **evaluate** | **Boolean**| evaluate | [optional] 
 **impersonate** | **String**| impersonate the evaluation as node | [optional] 

### Return type

[**ObjectConfig**](ObjectConfig.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObjectConfigFile

> ObjectConfigFile getObjectConfigFile(namespace, kind, name)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.getObjectConfigFile(namespace, kind, name, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 

### Return type

[**ObjectConfigFile**](ObjectConfigFile.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObjectConfigGet

> KeywordList getObjectConfigGet(namespace, kind, name, opts)



Get or evaluate a keyword in the object configuration file.

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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'kw': ["env.unwanted"], // [String] | 
  'evaluate': true, // Boolean | 
  'impersonate': "impersonate_example" // String | 
};
apiInstance.getObjectConfigGet(namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
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


## postObjectActionAbort

> OrchestrationQueued postObjectActionAbort(namespace, kind, name)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionAbort(namespace, kind, name, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 

### Return type

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postObjectActionDelete

> OrchestrationQueued postObjectActionDelete(namespace, kind, name)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionDelete(namespace, kind, name, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 

### Return type

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postObjectConfigFile

> postObjectConfigFile(namespace, kind, name, opts)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'objectConfigFile': new TestOpensvcAgentApi.ObjectConfigFile() // ObjectConfigFile | OK
};
apiInstance.postObjectConfigFile(namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
 **objectConfigFile** | [**ObjectConfigFile**](ObjectConfigFile.md)| OK | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postObjectConfigUpdate

> Problem postObjectConfigUpdate(namespace, kind, name, opts)



Delete sections, unset and set keywords in the object configuration file.

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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  '_delete': ["task#unwanted"], // [String] | 
  'unset': ["task#unwanted"], // [String] | 
  'set': ["env.eat=fruits"] // [String] | 
};
apiInstance.postObjectConfigUpdate(namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
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


## putObjectConfigFile

> putObjectConfigFile(namespace, kind, name, opts)



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

let apiInstance = new TestOpensvcAgentApi.ObjectSecApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'objectConfigFile': new TestOpensvcAgentApi.ObjectConfigFile() // ObjectConfigFile | OK
};
apiInstance.putObjectConfigFile(namespace, kind, name, opts, (error, data, response) => {
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
 **namespace** | **String**|  | 
 **kind** | [**Kind**](.md)|  | 
 **name** | **String**|  | 
 **objectConfigFile** | [**ObjectConfigFile**](ObjectConfigFile.md)| OK | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

