/**
 * test opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import NetworkIPList from '../model/NetworkIPList';
import NetworkList from '../model/NetworkList';
import Problem from '../model/Problem';

/**
* Network service.
* @module api/NetworkApi
* @version 3.12.9
*/
export default class NetworkApi {

    /**
    * Constructs a new NetworkApi. 
    * @alias module:api/NetworkApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getNetworkIP operation.
     * @callback module:api/NetworkApi~getNetworkIPCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkIPList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [name] the name of a cluster backend network
     * @param {module:api/NetworkApi~getNetworkIPCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkIPList}
     */
    getNetworkIP(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NetworkIPList;
      return this.apiClient.callApi(
        '/network/ip', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNetworks operation.
     * @callback module:api/NetworkApi~getNetworksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [name] the name of a cluster backend network
     * @param {module:api/NetworkApi~getNetworksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkList}
     */
    getNetworks(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NetworkList;
      return this.apiClient.callApi(
        '/network', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
