# TestOpensvcAgentApi.ResourceStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable** | **Boolean** | hints the resource ignores all state transition actions | 
**encap** | **Boolean** | indicates that the resource is handled by the encapsulated agents, and ignored at the hypervisor level  | 
**info** | **Object** | key-value pairs providing interesting information to collect site-wide about this resource  | 
**label** | **String** |  | 
**log** | [**[ResourceLogEntry]**](ResourceLogEntry.md) |  | 
**monitor** | **Boolean** | tells the daemon if it should trigger a monitor action when the resource is not up  | 
**optional** | **Boolean** | is resource status aggregated into Overall instead of Avail instance status. Errors in optional resource don&#39;t stop a state transition action  | 
**provisioned** | [**ResourceProvisionStatus**](ResourceProvisionStatus.md) |  | 
**restart** | **Number** |  | 
**standby** | **Boolean** | resource should always be up, even after a stop state transition action  | 
**status** | [**Status**](Status.md) |  | 
**subset** | **String** | the name of the subset this resource is assigned to | 
**tags** | **[String]** |  | 
**type** | **String** |  | 


