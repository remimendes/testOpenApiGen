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
 * The NetworkIPNetwork model module.
 * @module model/NetworkIPNetwork
 * @version 3.12.19
 */
class NetworkIPNetwork {
    /**
     * Constructs a new <code>NetworkIPNetwork</code>.
     * @alias module:model/NetworkIPNetwork
     * @param name {String} 
     * @param type {String} 
     * @param network {String} 
     */
    constructor(name, type, network) { 
        
        NetworkIPNetwork.initialize(this, name, type, network);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, network) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['network'] = network;
    }

    /**
     * Constructs a <code>NetworkIPNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkIPNetwork} obj Optional instance to populate.
     * @return {module:model/NetworkIPNetwork} The populated <code>NetworkIPNetwork</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkIPNetwork();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkIPNetwork</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkIPNetwork</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NetworkIPNetwork.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['network'] && !(typeof data['network'] === 'string' || data['network'] instanceof String)) {
            throw new Error("Expected the field `network` to be a primitive type in the JSON string but got " + data['network']);
        }

        return true;
    }


}

NetworkIPNetwork.RequiredProperties = ["name", "type", "network"];

/**
 * @member {String} name
 */
NetworkIPNetwork.prototype['name'] = undefined;

/**
 * @member {String} type
 */
NetworkIPNetwork.prototype['type'] = undefined;

/**
 * @member {String} network
 */
NetworkIPNetwork.prototype['network'] = undefined;






export default NetworkIPNetwork;

