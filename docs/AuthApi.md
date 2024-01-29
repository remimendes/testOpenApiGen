# OpensvcAgentApi.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAuthToken**](AuthApi.md#postAuthToken) | **POST** /auth/token | 



## postAuthToken

> AuthToken postAuthToken(opts)



Create and return a JSON Web Token the client can use as a Authorization header in its following requests.  The requested roles are embedded as a &#39;grant&#39; claim if matching the usr &#39;grant&#39; keyword. 

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

let apiInstance = new OpensvcAgentApi.AuthApi();
let opts = {
  'role': [new OpensvcAgentApi.Role()], // [Role] | list of api role
  'duration': 10m // String | max token duration, maximum value 24h
};
apiInstance.postAuthToken(opts, (error, data, response) => {
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
 **role** | [**[Role]**](Role.md)| list of api role | [optional] 
 **duration** | **String**| max token duration, maximum value 24h | [optional] 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

