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
 * The ObjectConfigFile model module.
 * @module model/ObjectConfigFile
 * @version 3.12.2
 */
class ObjectConfigFile {
    /**
     * Constructs a new <code>ObjectConfigFile</code>.
     * @alias module:model/ObjectConfigFile
     * @param data {Blob} 
     * @param mtime {Date} 
     */
    constructor(data, mtime) { 
        
        ObjectConfigFile.initialize(this, data, mtime);
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
     * Constructs a <code>ObjectConfigFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectConfigFile} obj Optional instance to populate.
     * @return {module:model/ObjectConfigFile} The populated <code>ObjectConfigFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectConfigFile();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'Blob');
            }
            if (data.hasOwnProperty('mtime')) {
                obj['mtime'] = ApiClient.convertToType(data['mtime'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ObjectConfigFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ObjectConfigFile</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ObjectConfigFile.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ObjectConfigFile.RequiredProperties = ["data", "mtime"];

/**
 * @member {Blob} data
 */
ObjectConfigFile.prototype['data'] = undefined;

/**
 * @member {Date} mtime
 */
ObjectConfigFile.prototype['mtime'] = undefined;






export default ObjectConfigFile;
