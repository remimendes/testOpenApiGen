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
import InstanceList from '../model/InstanceList';
import Problem from '../model/Problem';

/**
* Instance service.
* @module api/InstanceApi
* @version 3.12.19
*/
export default class InstanceApi {

    /**
    * Constructs a new InstanceApi. 
    * @alias module:api/InstanceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getInstances operation.
     * @callback module:api/InstanceApi~getInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InstanceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [path] object selector expression.
     * @param {String} [node] node selector expression.
     * @param {module:api/InstanceApi~getInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InstanceList}
     */
    getInstances(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'path': opts['path'],
        'node': opts['node']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InstanceList;
      return this.apiClient.callApi(
        '/instance', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
