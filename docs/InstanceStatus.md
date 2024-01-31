# TestOpensvcAgentApi.InstanceStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avail** | [**Status**](Status.md) |  | 
**constraints** | **Boolean** |  | 
**csum** | **String** |  | 
**frozenAt** | **Date** |  | 
**lastStartedAt** | **Date** |  | 
**optional** | [**Status**](Status.md) |  | 
**overall** | [**Status**](Status.md) |  | 
**isPreserved** | **Boolean** | preserve is true if this status has not been updated due to a heartbeat downtime covered by a maintenance period. when the maintenance period ends, the status should be unchanged, and preserve will be set to false.  | [default to false]
**provisioned** | [**Provisioned**](Provisioned.md) |  | 
**resources** | [**{String: ResourceStatus}**](ResourceStatus.md) |  | 
**running** | **[String]** |  | 
**scale** | **Number** |  | 
**updatedAt** | **Date** |  | 


