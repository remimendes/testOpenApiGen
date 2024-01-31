# TestOpensvcAgentApi.InternalApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postDaemonJoin**](InternalApi.md#postDaemonJoin) | **POST** /daemon/action/join | 
[**postDaemonLeave**](InternalApi.md#postDaemonLeave) | **POST** /daemon/action/leave | 
[**postInstanceProgress**](InternalApi.md#postInstanceProgress) | **POST** /instance/path/{namespace}/{kind}/{name}/progress | 
[**postInstanceStatus**](InternalApi.md#postInstanceStatus) | **POST** /instance/path/{namespace}/{kind}/{name}/status | 



## postDaemonJoin

> postDaemonJoin(node)



Add a new node to the cluster of the requested api node.  The requester must be granted the &#39;root&#39; or &#39;join&#39; roles.  The processing of the join request is asynchronous.  The HTTP response is sent when the join request event has been published. This event is labeled node&#x3D;&lt;api_node&gt;.  To follow the processing of the join request, use the following event filters, - JoinSuccess,node&#x3D;&lt;api_node&gt;,added&#x3D;&lt;node&gt; (the new node has been added to cluster nodes) - JoinIgnored,node&#x3D;&lt;api_node&gt;,join-node&#x3D;&lt;node&gt; (the new node was already a cluster node) - JoinError,node&#x3D;&lt;api_node&gt;,join-node&#x3D;&lt;node&gt; (an error occur during update cluster node list) 

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

let apiInstance = new TestOpensvcAgentApi.InternalApi();
let node = new_node; // String | The node to add to cluster nodes
apiInstance.postDaemonJoin(node, (error, data, response) => {
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
 **node** | **String**| The node to add to cluster nodes | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postDaemonLeave

> postDaemonLeave(node)



Register a leave request to remove a cluster node member. The requester must be granted the &#39;root&#39; or &#39;Leave&#39; roles.  The processing of the leave request is asynchronous.  The HTTP response is sent when the leave request event has been published. This event is labeled node&#x3D;&lt;api_node&gt;.  To follow the processing of the leave request, use the following event filters, - LeaveSuccess,node&#x3D;&lt;api_node&gt;,removed&#x3D;&lt;node&gt; (node has been removed to cluster nodes) - LeaveIgnored,node&#x3D;&lt;api_node&gt;,leave-node&#x3D;&lt;node&gt; (node is not a cluster node) - LeaveError,node&#x3D;&lt;api_node&gt;,leave-node&#x3D;&lt;node&gt; (an error occur during update cluster node list) 

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

let apiInstance = new TestOpensvcAgentApi.InternalApi();
let node = node-wto-remove; // String | The leaving cluster node
apiInstance.postDaemonLeave(node, (error, data, response) => {
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
 **node** | **String**| The leaving cluster node | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postInstanceProgress

> postInstanceProgress(namespace, kind, name, postInstanceProgress)



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

let apiInstance = new TestOpensvcAgentApi.InternalApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let postInstanceProgress = new TestOpensvcAgentApi.PostInstanceProgress(); // PostInstanceProgress | Change the instance monitor state to reflect the progress of actions the daemon did not started.
apiInstance.postInstanceProgress(namespace, kind, name, postInstanceProgress, (error, data, response) => {
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
 **postInstanceProgress** | [**PostInstanceProgress**](PostInstanceProgress.md)| Change the instance monitor state to reflect the progress of actions the daemon did not started. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postInstanceStatus

> postInstanceStatus(namespace, kind, name, instanceStatus)



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

let apiInstance = new TestOpensvcAgentApi.InternalApi();
let namespace = test; // String | 
let kind = new TestOpensvcAgentApi.Kind(); // Kind | 
let name = "name_example"; // String | 
let instanceStatus = new TestOpensvcAgentApi.InstanceStatus(); // InstanceStatus | post object status
apiInstance.postInstanceStatus(namespace, kind, name, instanceStatus, (error, data, response) => {
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
 **instanceStatus** | [**InstanceStatus**](InstanceStatus.md)| post object status | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

