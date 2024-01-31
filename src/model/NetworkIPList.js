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
import NetworkIP from './NetworkIP';

/**
 * The NetworkIPList model module.
 * @module model/NetworkIPList
 * @version 3.12.19
 */
class NetworkIPList {
    /**
     * Constructs a new <code>NetworkIPList</code>.
     * @alias module:model/NetworkIPList
     * @param kind {module:model/NetworkIPList.KindEnum} 
     * @param items {Array.<module:model/NetworkIP>} 
     */
    constructor(kind, items) { 
        
        NetworkIPList.initialize(this, kind, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind, items) { 
        obj['kind'] = kind;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>NetworkIPList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkIPList} obj Optional instance to populate.
     * @return {module:model/NetworkIPList} The populated <code>NetworkIPList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkIPList();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [NetworkIP]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NetworkIPList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NetworkIPList</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NetworkIPList.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                NetworkIP.validateJSON(item);
            };
        }

        return true;
    }


}

NetworkIPList.RequiredProperties = ["kind", "items"];

/**
 * @member {module:model/NetworkIPList.KindEnum} kind
 */
NetworkIPList.prototype['kind'] = undefined;

/**
 * @member {Array.<module:model/NetworkIP>} items
 */
NetworkIPList.prototype['items'] = undefined;





/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
NetworkIPList['KindEnum'] = {

    /**
     * value: "NetworkIPList"
     * @const
     */
    "NetworkIPList": "NetworkIPList"
};



export default NetworkIPList;

