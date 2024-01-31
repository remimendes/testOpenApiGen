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
 * The DRBDConfig model module.
 * @module model/DRBDConfig
 * @version 3.12.9
 */
class DRBDConfig {
    /**
     * Constructs a new <code>DRBDConfig</code>.
     * @alias module:model/DRBDConfig
     * @param data {Blob} 
     */
    constructor(data) { 
        
        DRBDConfig.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>DRBDConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DRBDConfig} obj Optional instance to populate.
     * @return {module:model/DRBDConfig} The populated <code>DRBDConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DRBDConfig();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'Blob');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DRBDConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DRBDConfig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DRBDConfig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DRBDConfig.RequiredProperties = ["data"];

/**
 * @member {Blob} data
 */
DRBDConfig.prototype['data'] = undefined;






export default DRBDConfig;

