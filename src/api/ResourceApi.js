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
import Problem from '../model/Problem';
import ResourceList from '../model/ResourceList';

/**
* Resource service.
* @module api/ResourceApi
* @version 3.12.19
*/
export default class ResourceApi {

    /**
    * Constructs a new ResourceApi. 
    * @alias module:api/ResourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getResources operation.
     * @callback module:api/ResourceApi~getResourcesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResourceList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [path] object selector expression.
     * @param {String} [node] node selector expression.
     * @param {String} [resource] resource selector expression.
     * @param {module:api/ResourceApi~getResourcesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResourceList}
     */
    getResources(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'path': opts['path'],
        'node': opts['node'],
        'resource': opts['resource']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResourceList;
      return this.apiClient.callApi(
        '/resource', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
