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
import DaemonSubsystemAlert from './DaemonSubsystemAlert';
import DaemonSubsystemStatus from './DaemonSubsystemStatus';

/**
 * The DaemonMonitor model module.
 * @module model/DaemonMonitor
 * @version 3.12.2
 */
class DaemonMonitor {
    /**
     * Constructs a new <code>DaemonMonitor</code>.
     * @alias module:model/DaemonMonitor
     * @implements module:model/DaemonSubsystemStatus
     * @param alerts {Array.<module:model/DaemonSubsystemAlert>} 
     * @param configured {Date} 
     * @param createdAt {Date} 
     * @param id {String} 
     * @param state {String} 
     */
    constructor(alerts, configured, createdAt, id, state) { 
        DaemonSubsystemStatus.initialize(this, alerts, configured, createdAt, id, state);
        DaemonMonitor.initialize(this, alerts, configured, createdAt, id, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alerts, configured, createdAt, id, state) { 
        obj['alerts'] = alerts;
        obj['configured'] = configured;
        obj['created_at'] = createdAt;
        obj['id'] = id;
        obj['state'] = state;
    }

    /**
     * Constructs a <code>DaemonMonitor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DaemonMonitor} obj Optional instance to populate.
     * @return {module:model/DaemonMonitor} The populated <code>DaemonMonitor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DaemonMonitor();
            DaemonSubsystemStatus.constructFromObject(data, obj);

            if (data.hasOwnProperty('alerts')) {
                obj['alerts'] = ApiClient.convertToType(data['alerts'], [DaemonSubsystemAlert]);
            }
            if (data.hasOwnProperty('configured')) {
                obj['configured'] = ApiClient.convertToType(data['configured'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DaemonMonitor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DaemonMonitor</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DaemonMonitor.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['alerts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['alerts'])) {
                throw new Error("Expected the field `alerts` to be an array in the JSON data but got " + data['alerts']);
            }
            // validate the optional field `alerts` (array)
            for (const item of data['alerts']) {
                DaemonSubsystemAlert.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}

DaemonMonitor.RequiredProperties = ["alerts", "configured", "created_at", "id", "state"];

/**
 * @member {Array.<module:model/DaemonSubsystemAlert>} alerts
 */
DaemonMonitor.prototype['alerts'] = undefined;

/**
 * @member {Date} configured
 */
DaemonMonitor.prototype['configured'] = undefined;

/**
 * @member {Date} created_at
 */
DaemonMonitor.prototype['created_at'] = undefined;

/**
 * @member {String} id
 */
DaemonMonitor.prototype['id'] = undefined;

/**
 * @member {String} state
 */
DaemonMonitor.prototype['state'] = undefined;


// Implement DaemonSubsystemStatus interface:
/**
 * @member {Array.<module:model/DaemonSubsystemAlert>} alerts
 */
DaemonSubsystemStatus.prototype['alerts'] = undefined;
/**
 * @member {Date} configured
 */
DaemonSubsystemStatus.prototype['configured'] = undefined;
/**
 * @member {Date} created_at
 */
DaemonSubsystemStatus.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */
DaemonSubsystemStatus.prototype['id'] = undefined;
/**
 * @member {String} state
 */
DaemonSubsystemStatus.prototype['state'] = undefined;




export default DaemonMonitor;

