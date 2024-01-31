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
 * The SANPathInitiator model module.
 * @module model/SANPathInitiator
 * @version 3.12.19
 */
class SANPathInitiator {
    /**
     * Constructs a new <code>SANPathInitiator</code>.
     * initiator is the host side san path endpoint.
     * @alias module:model/SANPathInitiator
     */
    constructor() { 
        
        SANPathInitiator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SANPathInitiator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SANPathInitiator} obj Optional instance to populate.
     * @return {module:model/SANPathInitiator} The populated <code>SANPathInitiator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SANPathInitiator();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SANPathInitiator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SANPathInitiator</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * name is a worldwide unique path endpoint identifier.
 * @member {String} name
 */
SANPathInitiator.prototype['name'] = undefined;

/**
 * type is the endpoint type.
 * @member {String} type
 */
SANPathInitiator.prototype['type'] = undefined;






export default SANPathInitiator;

