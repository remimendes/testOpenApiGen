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
import DaemonHbStreamPeer from './DaemonHbStreamPeer';
import DaemonHbStreamType from './DaemonHbStreamType';
import DaemonSubsystemAlert from './DaemonSubsystemAlert';
import DaemonSubsystemStatus from './DaemonSubsystemStatus';

/**
 * The DaemonHbStream model module.
 * @module model/DaemonHbStream
 * @version 3.12.19
 */
class DaemonHbStream {
    /**
     * Constructs a new <code>DaemonHbStream</code>.
     * @alias module:model/DaemonHbStream
     * @implements module:model/DaemonSubsystemStatus
     * @implements module:model/DaemonHbStreamType
     * @implements module:model/DaemonHbStreamPeer
     * @param alerts {Array.<module:model/DaemonSubsystemAlert>} 
     * @param configured {Date} 
     * @param createdAt {Date} 
     * @param id {String} 
     * @param state {String} 
     * @param type {String} hb stream type
     * @param isBeating {Boolean} 
     * @param lastAt {Date} 
     */
    constructor(alerts, configured, createdAt, id, state, type, isBeating, lastAt) { 
        DaemonSubsystemStatus.initialize(this, alerts, configured, createdAt, id, state);DaemonHbStreamType.initialize(this, type);DaemonHbStreamPeer.initialize(this, isBeating, lastAt);
        DaemonHbStream.initialize(this, alerts, configured, createdAt, id, state, type, isBeating, lastAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, alerts, configured, createdAt, id, state, type, isBeating, lastAt) { 
        obj['alerts'] = alerts;
        obj['configured'] = configured;
        obj['created_at'] = createdAt;
        obj['id'] = id;
        obj['state'] = state;
        obj['type'] = type;
        obj['is_beating'] = isBeating;
        obj['last_at'] = lastAt;
    }

    /**
     * Constructs a <code>DaemonHbStream</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DaemonHbStream} obj Optional instance to populate.
     * @return {module:model/DaemonHbStream} The populated <code>DaemonHbStream</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DaemonHbStream();
            DaemonSubsystemStatus.constructFromObject(data, obj);
            DaemonHbStreamType.constructFromObject(data, obj);
            DaemonHbStreamPeer.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
     * Validates the JSON data with respect to <code>DaemonHbStream</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DaemonHbStream</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DaemonHbStream.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

DaemonHbStream.RequiredProperties = ["alerts", "configured", "created_at", "id", "state", "type", "is_beating", "last_at"];

/**
 * @member {Array.<module:model/DaemonSubsystemAlert>} alerts
 */
DaemonHbStream.prototype['alerts'] = undefined;

/**
 * @member {Date} configured
 */
DaemonHbStream.prototype['configured'] = undefined;

/**
 * @member {Date} created_at
 */
DaemonHbStream.prototype['created_at'] = undefined;

/**
 * @member {String} id
 */
DaemonHbStream.prototype['id'] = undefined;

/**
 * @member {String} state
 */
DaemonHbStream.prototype['state'] = undefined;

/**
 * hb stream type
 * @member {String} type
 */
DaemonHbStream.prototype['type'] = undefined;

/**
 * @member {Boolean} is_beating
 */
DaemonHbStream.prototype['is_beating'] = undefined;

/**
 * @member {Date} last_at
 */
DaemonHbStream.prototype['last_at'] = undefined;


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
// Implement DaemonHbStreamType interface:
/**
 * hb stream type
 * @member {String} type
 */
DaemonHbStreamType.prototype['type'] = undefined;
// Implement DaemonHbStreamPeer interface:
/**
 * @member {Boolean} is_beating
 */
DaemonHbStreamPeer.prototype['is_beating'] = undefined;
/**
 * @member {Date} last_at
 */
DaemonHbStreamPeer.prototype['last_at'] = undefined;




export default DaemonHbStream;

