# OpensvcAgentApi.DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthInfo**](DefaultApi.md#getAuthInfo) | **GET** /auth/info | 
[**getwhoami**](DefaultApi.md#getwhoami) | **GET** /whoami | 



## getAuthInfo

> AuthInfo getAuthInfo()



### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';

let apiInstance = new OpensvcAgentApi.DefaultApi();
apiInstance.getAuthInfo((error, data, response) => {
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

[**AuthInfo**](AuthInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getwhoami

> UserIdentity getwhoami()



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

let apiInstance = new OpensvcAgentApi.DefaultApi();
apiInstance.getwhoami((error, data, response) => {
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

[**UserIdentity**](UserIdentity.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

