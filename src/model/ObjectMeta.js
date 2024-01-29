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
 * The ObjectMeta model module.
 * @module model/ObjectMeta
 * @version 3.12.2
 */
class ObjectMeta {
    /**
     * Constructs a new <code>ObjectMeta</code>.
     * @alias module:model/ObjectMeta
     * @param object {String} 
     */
    constructor(object) { 
        
        ObjectMeta.initialize(this, object);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, object) { 
        obj['object'] = object;
    }

    /**
     * Constructs a <code>ObjectMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ObjectMeta} obj Optional instance to populate.
     * @return {module:model/ObjectMeta} The populated <code>ObjectMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ObjectMeta();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ObjectMeta</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ObjectMeta</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ObjectMeta.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }

        return true;
    }


}

ObjectMeta.RequiredProperties = ["object"];

/**
 * @member {String} object
 */
ObjectMeta.prototype['object'] = undefined;






export default ObjectMeta;

