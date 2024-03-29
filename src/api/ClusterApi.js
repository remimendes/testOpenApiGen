/**
 * test opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import OrchestrationQueued from '../model/OrchestrationQueued';
import Problem from '../model/Problem';

/**
* Cluster service.
* @module api/ClusterApi
* @version 3.12.19
*/
export default class ClusterApi {

    /**
    * Constructs a new ClusterApi. 
    * @alias module:api/ClusterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postClusterActionAbort operation.
     * @callback module:api/ClusterApi~postClusterActionAbortCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrchestrationQueued} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Abort the running cluster-wide action orchestration.  Reset the node monitor global expect value on all nodes. 
     * @param {module:api/ClusterApi~postClusterActionAbortCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrchestrationQueued}
     */
    postClusterActionAbort(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrchestrationQueued;
      return this.apiClient.callApi(
        '/cluster/action/abort', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postClusterActionFreeze operation.
     * @callback module:api/ClusterApi~postClusterActionFreezeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrchestrationQueued} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Freeze all the cluster nodes.  Prevent all servic e monitors decisions, for example services takeover.  Nodes should be frozen before any maintenance operation on the system, the cluster ware or the managed applications. 
     * @param {module:api/ClusterApi~postClusterActionFreezeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrchestrationQueued}
     */
    postClusterActionFreeze(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrchestrationQueued;
      return this.apiClient.callApi(
        '/cluster/action/freeze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postClusterActionUnfreeze operation.
     * @callback module:api/ClusterApi~postClusterActionUnfreezeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrchestrationQueued} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unfreeze all the cluster nodes.  Restore service monitors decision taking capability, for example services takeover.  Nodes should be unfrozen before leaving the nodes after a maintenance operation on the system, the clusterware or the managed applications, so unattended failover is enabled again. 
     * @param {module:api/ClusterApi~postClusterActionUnfreezeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrchestrationQueued}
     */
    postClusterActionUnfreeze(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OrchestrationQueued;
      return this.apiClient.callApi(
        '/cluster/action/unfreeze', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
