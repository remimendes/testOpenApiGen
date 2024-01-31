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
 * The SubsetConfig model module.
 * @module model/SubsetConfig
 * @version 3.12.19
 */
class SubsetConfig {
    /**
     * Constructs a new <code>SubsetConfig</code>.
     * @alias module:model/SubsetConfig
     * @param parallel {Boolean} 
     */
    constructor(parallel) { 
        
        SubsetConfig.initialize(this, parallel);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, parallel) { 
        obj['parallel'] = parallel;
    }

    /**
     * Constructs a <code>SubsetConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubsetConfig} obj Optional instance to populate.
     * @return {module:model/SubsetConfig} The populated <code>SubsetConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubsetConfig();

            if (data.hasOwnProperty('parallel')) {
                obj['parallel'] = ApiClient.convertToType(data['parallel'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubsetConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubsetConfig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubsetConfig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SubsetConfig.RequiredProperties = ["parallel"];

/**
 * @member {Boolean} parallel
 */
SubsetConfig.prototype['parallel'] = undefined;






export default SubsetConfig;

