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
 * The DaemonHbStreamPeer model module.
 * @module model/DaemonHbStreamPeer
 * @version 3.12.9
 */
class DaemonHbStreamPeer {
    /**
     * Constructs a new <code>DaemonHbStreamPeer</code>.
     * @alias module:model/DaemonHbStreamPeer
     * @param isBeating {Boolean} 
     * @param lastAt {Date} 
     */
    constructor(isBeating, lastAt) { 
        
        DaemonHbStreamPeer.initialize(this, isBeating, lastAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, isBeating, lastAt) { 
        obj['is_beating'] = isBeating;
        obj['last_at'] = lastAt;
    }

    /**
     * Constructs a <code>DaemonHbStreamPeer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DaemonHbStreamPeer} obj Optional instance to populate.
     * @return {module:model/DaemonHbStreamPeer} The populated <code>DaemonHbStreamPeer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DaemonHbStreamPeer();

            if (data.hasOwnProperty('is_beating')) {
                obj['is_beating'] = ApiClient.convertToType(data['is_beating'], 'Boolean');
            }
            if (data.hasOwnProperty('last_at')) {
                obj['last_at'] = ApiClient.convertToType(data['last_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DaemonHbStreamPeer</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DaemonHbStreamPeer</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DaemonHbStreamPeer.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

DaemonHbStreamPeer.RequiredProperties = ["is_beating", "last_at"];

/**
 * @member {Boolean} is_beating
 */
DaemonHbStreamPeer.prototype['is_beating'] = undefined;

/**
 * @member {Date} last_at
 */
DaemonHbStreamPeer.prototype['last_at'] = undefined;






export default DaemonHbStreamPeer;

