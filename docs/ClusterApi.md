# OpensvcAgentApi.ClusterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postClusterActionAbort**](ClusterApi.md#postClusterActionAbort) | **POST** /cluster/action/abort | 
[**postClusterActionFreeze**](ClusterApi.md#postClusterActionFreeze) | **POST** /cluster/action/freeze | 
[**postClusterActionUnfreeze**](ClusterApi.md#postClusterActionUnfreeze) | **POST** /cluster/action/unfreeze | 



## postClusterActionAbort

> OrchestrationQueued postClusterActionAbort()



Abort the running cluster-wide action orchestration.  Reset the node monitor global expect value on all nodes. 

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

let apiInstance = new OpensvcAgentApi.ClusterApi();
apiInstance.postClusterActionAbort((error, data, response) => {
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

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postClusterActionFreeze

> OrchestrationQueued postClusterActionFreeze()



Freeze all the cluster nodes.  Prevent all service monitors decisions, for example services takeover.  Nodes should be frozen before any maintenance operation on the system, the clusterware or the managed applications. 

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

let apiInstance = new OpensvcAgentApi.ClusterApi();
apiInstance.postClusterActionFreeze((error, data, response) => {
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

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postClusterActionUnfreeze

> OrchestrationQueued postClusterActionUnfreeze()



Unfreeze all the cluster nodes.  Restore service monitors decision taking capability, for example services takeover.  Nodes should be unfrozen before leaving the nodes after a maintenance operation on the system, the clusterware or the managed applications, so unattended failover is enabled again. 

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

let apiInstance = new OpensvcAgentApi.ClusterApi();
apiInstance.postClusterActionUnfreeze((error, data, response) => {
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

[**OrchestrationQueued**](OrchestrationQueued.md)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

