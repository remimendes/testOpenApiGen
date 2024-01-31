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

import ApiClient from '../ApiClient';

/**
 * The PostRelayMessage model module.
 * @module model/PostRelayMessage
 * @version 3.12.19
 */
class PostRelayMessage {
    /**
     * Constructs a new <code>PostRelayMessage</code>.
     * @alias module:model/PostRelayMessage
     * @param clusterId {String} 
     * @param clusterName {String} 
     * @param nodename {String} 
     * @param msg {String} 
     */
    constructor(clusterId, clusterName, nodename, msg) { 
        
        PostRelayMessage.initialize(this, clusterId, clusterName, nodename, msg);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clusterId, clusterName, nodename, msg) { 
        obj['cluster_id'] = clusterId;
        obj['cluster_name'] = clusterName;
        obj['nodename'] = nodename;
        obj['msg'] = msg;
    }

    /**
     * Constructs a <code>PostRelayMessage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRelayMessage} obj Optional instance to populate.
     * @return {module:model/PostRelayMessage} The populated <code>PostRelayMessage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRelayMessage();

            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'String');
            }
            if (data.hasOwnProperty('cluster_name')) {
                obj['cluster_name'] = ApiClient.convertToType(data['cluster_name'], 'String');
            }
            if (data.hasOwnProperty('nodename')) {
                obj['nodename'] = ApiClient.convertToType(data['nodename'], 'String');
            }
            if (data.hasOwnProperty('msg')) {
                obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostRelayMessage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostRelayMessage</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PostRelayMessage.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['cluster_id'] && !(typeof data['cluster_id'] === 'string' || data['cluster_id'] instanceof String)) {
            throw new Error("Expected the field `cluster_id` to be a primitive type in the JSON string but got " + data['cluster_id']);
        }
        // ensure the json data is a string
        if (data['cluster_name'] && !(typeof data['cluster_name'] === 'string' || data['cluster_name'] instanceof String)) {
            throw new Error("Expected the field `cluster_name` to be a primitive type in the JSON string but got " + data['cluster_name']);
        }
        // ensure the json data is a string
        if (data['nodename'] && !(typeof data['nodename'] === 'string' || data['nodename'] instanceof String)) {
            throw new Error("Expected the field `nodename` to be a primitive type in the JSON string but got " + data['nodename']);
        }
        // ensure the json data is a string
        if (data['msg'] && !(typeof data['msg'] === 'string' || data['msg'] instanceof String)) {
            throw new Error("Expected the field `msg` to be a primitive type in the JSON string but got " + data['msg']);
        }

        return true;
    }


}

PostRelayMessage.RequiredProperties = ["cluster_id", "cluster_name", "nodename", "msg"];

/**
 * @member {String} cluster_id
 */
PostRelayMessage.prototype['cluster_id'] = undefined;

/**
 * @member {String} cluster_name
 */
PostRelayMessage.prototype['cluster_name'] = undefined;

/**
 * @member {String} nodename
 */
PostRelayMessage.prototype['nodename'] = undefined;

/**
 * @member {String} msg
 */
PostRelayMessage.prototype['msg'] = undefined;






export default PostRelayMessage;

