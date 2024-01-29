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

import ApiClient from '../ApiClient';

/**
 * The ResourceLogEntry model module.
 * @module model/ResourceLogEntry
 * @version 3.12.2
 */
class ResourceLogEntry {
    /**
     * Constructs a new <code>ResourceLogEntry</code>.
     * @alias module:model/ResourceLogEntry
     * @param level {String} 
     * @param message {String} 
     */
    constructor(level, message) { 
        
        ResourceLogEntry.initialize(this, level, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, level, message) { 
        obj['level'] = level;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>ResourceLogEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceLogEntry} obj Optional instance to populate.
     * @return {module:model/ResourceLogEntry} The populated <code>ResourceLogEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResourceLogEntry();

            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResourceLogEntry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResourceLogEntry</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ResourceLogEntry.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['level'] && !(typeof data['level'] === 'string' || data['level'] instanceof String)) {
            throw new Error("Expected the field `level` to be a primitive type in the JSON string but got " + data['level']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

ResourceLogEntry.RequiredProperties = ["level", "message"];

/**
 * @member {String} level
 */
ResourceLogEntry.prototype['level'] = undefined;

/**
 * @member {String} message
 */
ResourceLogEntry.prototype['message'] = undefined;






export default ResourceLogEntry;

