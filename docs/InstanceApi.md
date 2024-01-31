# TestOpensvcAgentApi.InstanceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInstances**](InstanceApi.md#getInstances) | **GET** /instance | 



## getInstances

> InstanceList getInstances(opts)



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

let apiInstance = new TestOpensvcAgentApi.InstanceApi();
let opts = {
  'path': db1,web*, // String | object selector expression.
  'node': n2,az=eu1 // String | node selector expression.
};
apiInstance.getInstances(opts, (error, data, response) => {
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

### Return type

[**InstanceList**](InstanceList.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

