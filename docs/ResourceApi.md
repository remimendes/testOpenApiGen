# TestOpensvcAgentApi.ResourceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResources**](ResourceApi.md#getResources) | **GET** /resource | 



## getResources

> ResourceList getResources(opts)



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

let apiInstance = new TestOpensvcAgentApi.ResourceApi();
let opts = {
  'path': db1,web*, // String | object selector expression.
  'node': n2,az=eu1, // String | node selector expression.
  'resource': fs#1,ip // String | resource selector expression.
};
apiInstance.getResources(opts, (error, data, response) => {
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
 **path** | **String**| object selector expression. | [optional] 
 **node** | **String**| node selector expression. | [optional] 
 **resource** | **String**| resource selector expression. | [optional] 

### Return type

[**ResourceList**](ResourceList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

