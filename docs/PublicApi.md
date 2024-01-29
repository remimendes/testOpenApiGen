# OpensvcAgentApi.PublicApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSwagger**](PublicApi.md#getSwagger) | **GET** /public/openapi | 



## getSwagger

> Object getSwagger()



### Example

```javascript
import OpensvcAgentApi from 'opensvc_agent_api';

let apiInstance = new OpensvcAgentApi.PublicApi();
apiInstance.getSwagger((error, data, response) => {
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

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

