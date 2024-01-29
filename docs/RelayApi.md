# OpensvcAgentApi.RelayApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRelayMessage**](RelayApi.md#getRelayMessage) | **GET** /relay/message | 
[**postRelayMessage**](RelayApi.md#postRelayMessage) | **POST** /relay/message | 



## getRelayMessage

> RelayMessages getRelayMessage(opts)



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

let apiInstance = new OpensvcAgentApi.RelayApi();
let opts = {
  'nodename': "nodename_example", // String | the nodename component of the slot id on the relay
  'clusterId': "clusterId_example" // String | the cluster id component of the slot id on the relay
};
apiInstance.getRelayMessage(opts, (error, data, response) => {
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
 **nodename** | **String**| the nodename component of the slot id on the relay | [optional] 
 **clusterId** | **String**| the cluster id component of the slot id on the relay | [optional] 

### Return type

[**RelayMessages**](RelayMessages.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postRelayMessage

> Problem postRelayMessage(postRelayMessage)



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

let apiInstance = new OpensvcAgentApi.RelayApi();
let postRelayMessage = new OpensvcAgentApi.PostRelayMessage(); // PostRelayMessage | post a node dataset from a relay heartbeat
apiInstance.postRelayMessage(postRelayMessage, (error, data, response) => {
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
 **postRelayMessage** | [**PostRelayMessage**](PostRelayMessage.md)| post a node dataset from a relay heartbeat | 

### Return type

[**Problem**](Problem.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

