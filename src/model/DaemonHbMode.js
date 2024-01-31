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

import ApiClient from '../ApiClient';

/**
 * The DaemonHbMode model module.
 * @module model/DaemonHbMode
 * @version 3.12.9
 */
class DaemonHbMode {
    /**
     * Constructs a new <code>DaemonHbMode</code>.
     * @alias module:model/DaemonHbMode
     * @param node {String} a cluster node
     * @param mode {String} the type of hb message used by node except when Type is patch where it is the patch queue length
     * @param type {String} the heartbeat message type used by node
     */
    constructor(node, mode, type) { 
        
        DaemonHbMode.initialize(this, node, mode, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, node, mode, type) { 
        obj['node'] = node;
        obj['mode'] = mode;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>DaemonHbMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DaemonHbMode} obj Optional instance to populate.
     * @return {module:model/DaemonHbMode} The populated <code>DaemonHbMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DaemonHbMode();

            if (data.hasOwnProperty('node')) {
                obj['node'] = ApiClient.convertToType(data['node'], 'String');
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DaemonHbMode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DaemonHbMode</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DaemonHbMode.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['node'] && !(typeof data['node'] === 'string' || data['node'] instanceof String)) {
            throw new Error("Expected the field `node` to be a primitive type in the JSON string but got " + data['node']);
        }
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

DaemonHbMode.RequiredProperties = ["node", "mode", "type"];

/**
 * a cluster node
 * @member {String} node
 */
DaemonHbMode.prototype['node'] = undefined;

/**
 * the type of hb message used by node except when Type is patch where it is the patch queue length
 * @member {String} mode
 */
DaemonHbMode.prototype['mode'] = undefined;

/**
 * the heartbeat message type used by node
 * @member {String} type
 */
DaemonHbMode.prototype['type'] = undefined;






export default DaemonHbMode;

