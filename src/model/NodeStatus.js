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
import ArbitratorStatus from './ArbitratorStatus';

/**
 * The NodeStatus model module.
 * @module model/NodeStatus
 * @version 3.12.2
 */
class NodeStatus {
    /**
     * Constructs a new <code>NodeStatus</code>.
     * @alias module:model/NodeStatus
     * @param agent {String} 
     * @param api {String} 
     * @param arbitrators {Object.<String, module:model/ArbitratorStatus>} 
     * @param compat {Boolean} 
     * @param frozenAt {Date} 
     * @param gen {Object.<String, Number>} 
     * @param minAvailMem {Number} 
     * @param minAvailSwap {Number} 
     * @param isSpeaker {Boolean} 
     * @param labels {Object} 
     */
    constructor(agent, api, arbitrators, compat, frozenAt, gen, minAvailMem, minAvailSwap, isSpeaker, labels) { 
        
        NodeStatus.initialize(this, agent, api, arbitrators, compat, frozenAt, gen, minAvailMem, minAvailSwap, isSpeaker, labels);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, agent, api, arbitrators, compat, frozenAt, gen, minAvailMem, minAvailSwap, isSpeaker, labels) { 
        obj['agent'] = agent;
        obj['api'] = api;
        obj['arbitrators'] = arbitrators;
        obj['compat'] = compat;
        obj['frozen_at'] = frozenAt;
        obj['gen'] = gen;
        obj['min_avail_mem'] = minAvailMem;
        obj['min_avail_swap'] = minAvailSwap;
        obj['is_speaker'] = isSpeaker;
        obj['labels'] = labels;
    }

    /**
     * Constructs a <code>NodeStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeStatus} obj Optional instance to populate.
     * @return {module:model/NodeStatus} The populated <code>NodeStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeStatus();

            if (data.hasOwnProperty('agent')) {
                obj['agent'] = ApiClient.convertToType(data['agent'], 'String');
            }
            if (data.hasOwnProperty('api')) {
                obj['api'] = ApiClient.convertToType(data['api'], 'String');
            }
            if (data.hasOwnProperty('arbitrators')) {
                obj['arbitrators'] = ApiClient.convertToType(data['arbitrators'], {'String': ArbitratorStatus});
            }
            if (data.hasOwnProperty('compat')) {
                obj['compat'] = ApiClient.convertToType(data['compat'], 'Boolean');
            }
            if (data.hasOwnProperty('frozen_at')) {
                obj['frozen_at'] = ApiClient.convertToType(data['frozen_at'], 'Date');
            }
            if (data.hasOwnProperty('gen')) {
                obj['gen'] = ApiClient.convertToType(data['gen'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('min_avail_mem')) {
                obj['min_avail_mem'] = ApiClient.convertToType(data['min_avail_mem'], 'Number');
            }
            if (data.hasOwnProperty('min_avail_swap')) {
                obj['min_avail_swap'] = ApiClient.convertToType(data['min_avail_swap'], 'Number');
            }
            if (data.hasOwnProperty('is_speaker')) {
                obj['is_speaker'] = ApiClient.convertToType(data['is_speaker'], 'Boolean');
            }
            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NodeStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NodeStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NodeStatus.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['agent'] && !(typeof data['agent'] === 'string' || data['agent'] instanceof String)) {
            throw new Error("Expected the field `agent` to be a primitive type in the JSON string but got " + data['agent']);
        }
        // ensure the json data is a string
        if (data['api'] && !(typeof data['api'] === 'string' || data['api'] instanceof String)) {
            throw new Error("Expected the field `api` to be a primitive type in the JSON string but got " + data['api']);
        }

        return true;
    }


}

NodeStatus.RequiredProperties = ["agent", "api", "arbitrators", "compat", "frozen_at", "gen", "min_avail_mem", "min_avail_swap", "is_speaker", "labels"];

/**
 * @member {String} agent
 */
NodeStatus.prototype['agent'] = undefined;

/**
 * @member {String} api
 */
NodeStatus.prototype['api'] = undefined;

/**
 * @member {Object.<String, module:model/ArbitratorStatus>} arbitrators
 */
NodeStatus.prototype['arbitrators'] = undefined;

/**
 * @member {Boolean} compat
 */
NodeStatus.prototype['compat'] = undefined;

/**
 * @member {Date} frozen_at
 */
NodeStatus.prototype['frozen_at'] = undefined;

/**
 * @member {Object.<String, Number>} gen
 */
NodeStatus.prototype['gen'] = undefined;

/**
 * @member {Number} min_avail_mem
 */
NodeStatus.prototype['min_avail_mem'] = undefined;

/**
 * @member {Number} min_avail_swap
 */
NodeStatus.prototype['min_avail_swap'] = undefined;

/**
 * @member {Boolean} is_speaker
 */
NodeStatus.prototype['is_speaker'] = undefined;

/**
 * @member {Object} labels
 */
NodeStatus.prototype['labels'] = undefined;






export default NodeStatus;

