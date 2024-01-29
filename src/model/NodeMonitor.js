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
 * The NodeMonitor model module.
 * @module model/NodeMonitor
 * @version 3.12.2
 */
class NodeMonitor {
    /**
     * Constructs a new <code>NodeMonitor</code>.
     * @alias module:model/NodeMonitor
     * @param globalExpect {String} 
     * @param globalExpectUpdatedAt {Date} 
     * @param localExpect {String} 
     * @param localExpectUpdatedAt {Date} 
     * @param orchestrationId {String} 
     * @param orchestrationIsDone {Boolean} 
     * @param sessionId {String} 
     * @param state {String} 
     * @param stateUpdatedAt {Date} 
     * @param updatedAt {Date} 
     */
    constructor(globalExpect, globalExpectUpdatedAt, localExpect, localExpectUpdatedAt, orchestrationId, orchestrationIsDone, sessionId, state, stateUpdatedAt, updatedAt) { 
        
        NodeMonitor.initialize(this, globalExpect, globalExpectUpdatedAt, localExpect, localExpectUpdatedAt, orchestrationId, orchestrationIsDone, sessionId, state, stateUpdatedAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, globalExpect, globalExpectUpdatedAt, localExpect, localExpectUpdatedAt, orchestrationId, orchestrationIsDone, sessionId, state, stateUpdatedAt, updatedAt) { 
        obj['global_expect'] = globalExpect;
        obj['global_expect_updated_at'] = globalExpectUpdatedAt;
        obj['local_expect'] = localExpect;
        obj['local_expect_updated_at'] = localExpectUpdatedAt;
        obj['orchestration_id'] = orchestrationId;
        obj['orchestration_is_done'] = orchestrationIsDone;
        obj['session_id'] = sessionId;
        obj['state'] = state;
        obj['state_updated_at'] = stateUpdatedAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>NodeMonitor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeMonitor} obj Optional instance to populate.
     * @return {module:model/NodeMonitor} The populated <code>NodeMonitor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeMonitor();

            if (data.hasOwnProperty('global_expect')) {
                obj['global_expect'] = ApiClient.convertToType(data['global_expect'], 'String');
            }
            if (data.hasOwnProperty('global_expect_updated_at')) {
                obj['global_expect_updated_at'] = ApiClient.convertToType(data['global_expect_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('local_expect')) {
                obj['local_expect'] = ApiClient.convertToType(data['local_expect'], 'String');
            }
            if (data.hasOwnProperty('local_expect_updated_at')) {
                obj['local_expect_updated_at'] = ApiClient.convertToType(data['local_expect_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('orchestration_id')) {
                obj['orchestration_id'] = ApiClient.convertToType(data['orchestration_id'], 'String');
            }
            if (data.hasOwnProperty('orchestration_is_done')) {
                obj['orchestration_is_done'] = ApiClient.convertToType(data['orchestration_is_done'], 'Boolean');
            }
            if (data.hasOwnProperty('session_id')) {
                obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('state_updated_at')) {
                obj['state_updated_at'] = ApiClient.convertToType(data['state_updated_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NodeMonitor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NodeMonitor</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NodeMonitor.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['global_expect'] && !(typeof data['global_expect'] === 'string' || data['global_expect'] instanceof String)) {
            throw new Error("Expected the field `global_expect` to be a primitive type in the JSON string but got " + data['global_expect']);
        }
        // ensure the json data is a string
        if (data['local_expect'] && !(typeof data['local_expect'] === 'string' || data['local_expect'] instanceof String)) {
            throw new Error("Expected the field `local_expect` to be a primitive type in the JSON string but got " + data['local_expect']);
        }
        // ensure the json data is a string
        if (data['orchestration_id'] && !(typeof data['orchestration_id'] === 'string' || data['orchestration_id'] instanceof String)) {
            throw new Error("Expected the field `orchestration_id` to be a primitive type in the JSON string but got " + data['orchestration_id']);
        }
        // ensure the json data is a string
        if (data['session_id'] && !(typeof data['session_id'] === 'string' || data['session_id'] instanceof String)) {
            throw new Error("Expected the field `session_id` to be a primitive type in the JSON string but got " + data['session_id']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}

NodeMonitor.RequiredProperties = ["global_expect", "global_expect_updated_at", "local_expect", "local_expect_updated_at", "orchestration_id", "orchestration_is_done", "session_id", "state", "state_updated_at", "updated_at"];

/**
 * @member {String} global_expect
 */
NodeMonitor.prototype['global_expect'] = undefined;

/**
 * @member {Date} global_expect_updated_at
 */
NodeMonitor.prototype['global_expect_updated_at'] = undefined;

/**
 * @member {String} local_expect
 */
NodeMonitor.prototype['local_expect'] = undefined;

/**
 * @member {Date} local_expect_updated_at
 */
NodeMonitor.prototype['local_expect_updated_at'] = undefined;

/**
 * @member {String} orchestration_id
 */
NodeMonitor.prototype['orchestration_id'] = undefined;

/**
 * @member {Boolean} orchestration_is_done
 */
NodeMonitor.prototype['orchestration_is_done'] = undefined;

/**
 * @member {String} session_id
 */
NodeMonitor.prototype['session_id'] = undefined;

/**
 * @member {String} state
 */
NodeMonitor.prototype['state'] = undefined;

/**
 * @member {Date} state_updated_at
 */
NodeMonitor.prototype['state_updated_at'] = undefined;

/**
 * @member {Date} updated_at
 */
NodeMonitor.prototype['updated_at'] = undefined;






export default NodeMonitor;

