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
import DaemonHbMode from './DaemonHbMode';
import DaemonHbStream from './DaemonHbStream';

/**
 * The DaemonHb model module.
 * @module model/DaemonHb
 * @version 3.12.9
 */
class DaemonHb {
    /**
     * Constructs a new <code>DaemonHb</code>.
     * @alias module:model/DaemonHb
     * @param streams {Array.<module:model/DaemonHbStream>} 
     * @param modes {Array.<module:model/DaemonHbMode>} 
     */
    constructor(streams, modes) { 
        
        DaemonHb.initialize(this, streams, modes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, streams, modes) { 
        obj['streams'] = streams;
        obj['modes'] = modes;
    }

    /**
     * Constructs a <code>DaemonHb</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DaemonHb} obj Optional instance to populate.
     * @return {module:model/DaemonHb} The populated <code>DaemonHb</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DaemonHb();

            if (data.hasOwnProperty('streams')) {
                obj['streams'] = ApiClient.convertToType(data['streams'], [DaemonHbStream]);
            }
            if (data.hasOwnProperty('modes')) {
                obj['modes'] = ApiClient.convertToType(data['modes'], [DaemonHbMode]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DaemonHb</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DaemonHb</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DaemonHb.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['streams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['streams'])) {
                throw new Error("Expected the field `streams` to be an array in the JSON data but got " + data['streams']);
            }
            // validate the optional field `streams` (array)
            for (const item of data['streams']) {
                DaemonHbStream.validateJSON(item);
            };
        }
        if (data['modes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['modes'])) {
                throw new Error("Expected the field `modes` to be an array in the JSON data but got " + data['modes']);
            }
            // validate the optional field `modes` (array)
            for (const item of data['modes']) {
                DaemonHbMode.validateJSON(item);
            };
        }

        return true;
    }


}

DaemonHb.RequiredProperties = ["streams", "modes"];

/**
 * @member {Array.<module:model/DaemonHbStream>} streams
 */
DaemonHb.prototype['streams'] = undefined;

/**
 * @member {Array.<module:model/DaemonHbMode>} modes
 */
DaemonHb.prototype['modes'] = undefined;






export default DaemonHb;

