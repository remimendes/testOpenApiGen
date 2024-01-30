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
 * The ObjectConfig model module.
 * @module model/ObjectConfig
 * @version 3.12.2
 */
class ObjectConfig {
    /**
     * Constructs a new <code>ObjectConfig</code>.
     * @alias module:model/ObjectConfig
     * @param data {Object} 
     * @param mtime {Date} 
     */
    constructor(data, mtime) { 
        
        ObjectConfig.initialize(this, data, mtime);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, mtime) { 
        obj['data'] = data;
        obj['mtime'] = mtime;
    }

    /**
     * Constructs a <code>ObjectConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectConfig} obj Optional instance to populate.
     * @return {module:model/ObjectConfig} The populated <code>ObjectConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectConfig();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
            if (data.hasOwnProperty('mtime')) {
                obj['mtime'] = ApiClient.convertToType(data['mtime'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ObjectConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ObjectConfig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ObjectConfig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ObjectConfig.RequiredProperties = ["data", "mtime"];

/**
 * @member {Object} data
 */
ObjectConfig.prototype['data'] = undefined;

/**
 * @member {Date} mtime
 */
ObjectConfig.prototype['mtime'] = undefined;






export default ObjectConfig;
