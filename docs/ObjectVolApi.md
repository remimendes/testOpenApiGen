# OpensvcAgentApi.ObjectVolApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getObject**](ObjectVolApi.md#getObject) | **GET** /object/path/{namespace}/{kind}/{name} | 
[**getObjectConfig**](ObjectVolApi.md#getObjectConfig) | **GET** /object/path/{namespace}/{kind}/{name}/config | 
[**getObjectConfigFile**](ObjectVolApi.md#getObjectConfigFile) | **GET** /object/path/{namespace}/{kind}/{name}/config/file | 
[**getObjectConfigGet**](ObjectVolApi.md#getObjectConfigGet) | **GET** /object/path/{namespace}/{kind}/{name}/config/get | 
[**postObjectActionAbort**](ObjectVolApi.md#postObjectActionAbort) | **POST** /object/path/{namespace}/{kind}/{name}/action/abort | 
[**postObjectActionDelete**](ObjectVolApi.md#postObjectActionDelete) | **POST** /object/path/{namespace}/{kind}/{name}/action/delete | 
[**postObjectActionFreeze**](ObjectVolApi.md#postObjectActionFreeze) | **POST** /object/path/{namespace}/{kind}/{name}/action/freeze | 
[**postObjectActionProvision**](ObjectVolApi.md#postObjectActionProvision) | **POST** /object/path/{namespace}/{kind}/{name}/action/provision | 
[**postObjectActionPurge**](ObjectVolApi.md#postObjectActionPurge) | **POST** /object/path/{namespace}/{kind}/{name}/action/purge | 
[**postObjectActionUnfreeze**](ObjectVolApi.md#postObjectActionUnfreeze) | **POST** /object/path/{namespace}/{kind}/{name}/action/unfreeze | 
[**postObjectActionUnprovision**](ObjectVolApi.md#postObjectActionUnprovision) | **POST** /object/path/{namespace}/{kind}/{name}/action/unprovision | 
[**postObjectConfigFile**](ObjectVolApi.md#postObjectConfigFile) | **POST** /object/path/{namespace}/{kind}/{name}/config/file | 
[**postObjectConfigUpdate**](ObjectVolApi.md#postObjectConfigUpdate) | **POST** /object/path/{namespace}/{kind}/{name}/config/update | 
[**putObjectConfigFile**](ObjectVolApi.md#putObjectConfigFile) | **PUT** /object/path/{namespace}/{kind}/{name}/config/file | 



## getObject

> ObjectItem getObject(namespace, kind, name)



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

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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


## postObjectActionFreeze

> OrchestrationQueued postObjectActionFreeze(namespace, kind, name)



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

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionFreeze(namespace, kind, name, (error, data, response) => {
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


## postObjectActionProvision

> OrchestrationQueued postObjectActionProvision(namespace, kind, name)



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

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionProvision(namespace, kind, name, (error, data, response) => {
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


## postObjectActionPurge

> OrchestrationQueued postObjectActionPurge(namespace, kind, name)



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

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionPurge(namespace, kind, name, (error, data, response) => {
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


## postObjectActionUnfreeze

> OrchestrationQueued postObjectActionUnfreeze(namespace, kind, name)



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

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionUnfreeze(namespace, kind, name, (error, data, response) => {
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


## postObjectActionUnprovision

> OrchestrationQueued postObjectActionUnprovision(namespace, kind, name)



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

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
apiInstance.postObjectActionUnprovision(namespace, kind, name, (error, data, response) => {
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'objectConfigFile': new OpensvcAgentApi.ObjectConfigFile() // ObjectConfigFile | OK
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
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
import OpensvcAgentApi from 'opensvc_agent_api';
let defaultClient = OpensvcAgentApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpensvcAgentApi.ObjectVolApi();
let namespace = test; // String | 
let kind = new OpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let opts = {
  'objectConfigFile': new OpensvcAgentApi.ObjectConfigFile() // ObjectConfigFile | OK
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

