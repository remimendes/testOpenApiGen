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
import SANPathInitiator from './SANPathInitiator';
import SANPathTarget from './SANPathTarget';

/**
 * The SANPath model module.
 * @module model/SANPath
 * @version 3.12.2
 */
class SANPath {
    /**
     * Constructs a new <code>SANPath</code>.
     * @alias module:model/SANPath
     * @param initiator {module:model/SANPathInitiator} 
     * @param target {module:model/SANPathTarget} 
     */
    constructor(initiator, target) { 
        
        SANPath.initialize(this, initiator, target);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, initiator, target) { 
        obj['initiator'] = initiator;
        obj['target'] = target;
    }

    /**
     * Constructs a <code>SANPath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SANPath} obj Optional instance to populate.
     * @return {module:model/SANPath} The populated <code>SANPath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SANPath();

            if (data.hasOwnProperty('initiator')) {
                obj['initiator'] = SANPathInitiator.constructFromObject(data['initiator']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = SANPathTarget.constructFromObject(data['target']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SANPath</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SANPath</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SANPath.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `initiator`
        if (data['initiator']) { // data not null
          SANPathInitiator.validateJSON(data['initiator']);
        }
        // validate the optional field `target`
        if (data['target']) { // data not null
          SANPathTarget.validateJSON(data['target']);
        }

        return true;
    }


}

SANPath.RequiredProperties = ["initiator", "target"];

/**
 * @member {module:model/SANPathInitiator} initiator
 */
SANPath.prototype['initiator'] = undefined;

/**
 * @member {module:model/SANPathTarget} target
 */
SANPath.prototype['target'] = undefined;






export default SANPath;
