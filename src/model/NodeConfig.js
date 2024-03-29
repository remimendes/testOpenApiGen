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
 * The NodeConfig model module.
 * @module model/NodeConfig
 * @version 3.12.19
 */
class NodeConfig {
    /**
     * Constructs a new <code>NodeConfig</code>.
     * @alias module:model/NodeConfig
     * @param env {String} 
     * @param maintenanceGracePeriod {String} 
     * @param readyPeriod {String} 
     * @param rejoinGracePeriod {String} 
     * @param splitAction {String} 
     */
    constructor(env, maintenanceGracePeriod, readyPeriod, rejoinGracePeriod, splitAction) { 
        
        NodeConfig.initialize(this, env, maintenanceGracePeriod, readyPeriod, rejoinGracePeriod, splitAction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, env, maintenanceGracePeriod, readyPeriod, rejoinGracePeriod, splitAction) { 
        obj['env'] = env;
        obj['maintenance_grace_period'] = maintenanceGracePeriod;
        obj['ready_period'] = readyPeriod;
        obj['rejoin_grace_period'] = rejoinGracePeriod;
        obj['split_action'] = splitAction;
    }

    /**
     * Constructs a <code>NodeConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeConfig} obj Optional instance to populate.
     * @return {module:model/NodeConfig} The populated <code>NodeConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeConfig();

            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], 'String');
            }
            if (data.hasOwnProperty('maintenance_grace_period')) {
                obj['maintenance_grace_period'] = ApiClient.convertToType(data['maintenance_grace_period'], 'String');
            }
            if (data.hasOwnProperty('ready_period')) {
                obj['ready_period'] = ApiClient.convertToType(data['ready_period'], 'String');
            }
            if (data.hasOwnProperty('rejoin_grace_period')) {
                obj['rejoin_grace_period'] = ApiClient.convertToType(data['rejoin_grace_period'], 'String');
            }
            if (data.hasOwnProperty('split_action')) {
                obj['split_action'] = ApiClient.convertToType(data['split_action'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NodeConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NodeConfig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NodeConfig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['env'] && !(typeof data['env'] === 'string' || data['env'] instanceof String)) {
            throw new Error("Expected the field `env` to be a primitive type in the JSON string but got " + data['env']);
        }
        // ensure the json data is a string
        if (data['maintenance_grace_period'] && !(typeof data['maintenance_grace_period'] === 'string' || data['maintenance_grace_period'] instanceof String)) {
            throw new Error("Expected the field `maintenance_grace_period` to be a primitive type in the JSON string but got " + data['maintenance_grace_period']);
        }
        // ensure the json data is a string
        if (data['ready_period'] && !(typeof data['ready_period'] === 'string' || data['ready_period'] instanceof String)) {
            throw new Error("Expected the field `ready_period` to be a primitive type in the JSON string but got " + data['ready_period']);
        }
        // ensure the json data is a string
        if (data['rejoin_grace_period'] && !(typeof data['rejoin_grace_period'] === 'string' || data['rejoin_grace_period'] instanceof String)) {
            throw new Error("Expected the field `rejoin_grace_period` to be a primitive type in the JSON string but got " + data['rejoin_grace_period']);
        }
        // ensure the json data is a string
        if (data['split_action'] && !(typeof data['split_action'] === 'string' || data['split_action'] instanceof String)) {
            throw new Error("Expected the field `split_action` to be a primitive type in the JSON string but got " + data['split_action']);
        }

        return true;
    }


}

NodeConfig.RequiredProperties = ["env", "maintenance_grace_period", "ready_period", "rejoin_grace_period", "split_action"];

/**
 * @member {String} env
 */
NodeConfig.prototype['env'] = undefined;

/**
 * @member {String} maintenance_grace_period
 */
NodeConfig.prototype['maintenance_grace_period'] = undefined;

/**
 * @member {String} ready_period
 */
NodeConfig.prototype['ready_period'] = undefined;

/**
 * @member {String} rejoin_grace_period
 */
NodeConfig.prototype['rejoin_grace_period'] = undefined;

/**
 * @member {String} split_action
 */
NodeConfig.prototype['split_action'] = undefined;






export default NodeConfig;

