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
import AuthToken from '../model/AuthToken';
import Problem from '../model/Problem';
import Role from '../model/Role';

/**
* Auth service.
* @module api/AuthApi
* @version 3.12.2
*/
export default class AuthApi {

    /**
    * Constructs a new AuthApi. 
    * @alias module:api/AuthApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postAuthToken operation.
     * @callback module:api/AuthApi~postAuthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create and return a JSON Web Token the client can use as a Authorization header in its following requests.  The requested roles are embedded as a 'grant' claim if matching the usr 'grant' keyword. 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Role>} [role] list of api role
     * @param {String} [duration] max token duration, maximum value 24h
     * @param {module:api/AuthApi~postAuthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthToken}
     */
    postAuthToken(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'role': this.apiClient.buildCollectionParam(opts['role'], 'multi'),
        'duration': opts['duration']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AuthToken;
      return this.apiClient.callApi(
        '/auth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
