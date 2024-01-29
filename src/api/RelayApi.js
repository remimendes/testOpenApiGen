/**
 * opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PostRelayMessage from '../model/PostRelayMessage';
import Problem from '../model/Problem';
import RelayMessages from '../model/RelayMessages';

/**
* Relay service.
* @module api/RelayApi
* @version 3.12.2
*/
export default class RelayApi {

    /**
    * Constructs a new RelayApi. 
    * @alias module:api/RelayApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getRelayMessage operation.
     * @callback module:api/RelayApi~getRelayMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelayMessages} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [nodename] the nodename component of the slot id on the relay
     * @param {String} [clusterId] the cluster id component of the slot id on the relay
     * @param {module:api/RelayApi~getRelayMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RelayMessages}
     */
    getRelayMessage(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'nodename': opts['nodename'],
        'cluster_id': opts['clusterId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RelayMessages;
      return this.apiClient.callApi(
        '/relay/message', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postRelayMessage operation.
     * @callback module:api/RelayApi~postRelayMessageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Problem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/PostRelayMessage} postRelayMessage post a node dataset from a relay heartbeat
     * @param {module:api/RelayApi~postRelayMessageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Problem}
     */
    postRelayMessage(postRelayMessage, callback) {
      let postBody = postRelayMessage;
      // verify the required parameter 'postRelayMessage' is set
      if (postRelayMessage === undefined || postRelayMessage === null) {
        throw new Error("Missing the required parameter 'postRelayMessage' when calling postRelayMessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Problem;
      return this.apiClient.callApi(
        '/relay/message', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
