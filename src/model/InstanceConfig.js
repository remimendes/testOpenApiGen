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
import Orchestrate from './Orchestrate';
import PlacementPolicy from './PlacementPolicy';
import ResourceConfig from './ResourceConfig';
import SubsetConfig from './SubsetConfig';
import Topology from './Topology';

/**
 * The InstanceConfig model module.
 * @module model/InstanceConfig
 * @version 3.12.19
 */
class InstanceConfig {
    /**
     * Constructs a new <code>InstanceConfig</code>.
     * @alias module:model/InstanceConfig
     * @param app {String} 
     * @param checksum {String} 
     * @param children {Array.<String>} 
     * @param drp {Boolean} 
     * @param env {String} 
     * @param flexMax {Number} 
     * @param flexMin {Number} 
     * @param flexTarget {Number} 
     * @param monitorAction {String} 
     * @param preMonitorAction {String} 
     * @param nodename {String} 
     * @param orchestrate {module:model/Orchestrate} 
     * @param path {String} 
     * @param parents {Array.<String>} 
     * @param placementPolicy {module:model/PlacementPolicy} 
     * @param priority {Number} 
     * @param resources {Object.<String, module:model/ResourceConfig>} 
     * @param scope {Array.<String>} 
     * @param subsets {Array.<module:model/SubsetConfig>} 
     * @param topology {module:model/Topology} 
     * @param updatedAt {Date} 
     */
    constructor(app, checksum, children, drp, env, flexMax, flexMin, flexTarget, monitorAction, preMonitorAction, nodename, orchestrate, path, parents, placementPolicy, priority, resources, scope, subsets, topology, updatedAt) { 
        
        InstanceConfig.initialize(this, app, checksum, children, drp, env, flexMax, flexMin, flexTarget, monitorAction, preMonitorAction, nodename, orchestrate, path, parents, placementPolicy, priority, resources, scope, subsets, topology, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, app, checksum, children, drp, env, flexMax, flexMin, flexTarget, monitorAction, preMonitorAction, nodename, orchestrate, path, parents, placementPolicy, priority, resources, scope, subsets, topology, updatedAt) { 
        obj['app'] = app;
        obj['checksum'] = checksum;
        obj['children'] = children;
        obj['drp'] = drp;
        obj['env'] = env;
        obj['flex_max'] = flexMax;
        obj['flex_min'] = flexMin;
        obj['flex_target'] = flexTarget;
        obj['monitor_action'] = monitorAction;
        obj['pre_monitor_action'] = preMonitorAction;
        obj['nodename'] = nodename;
        obj['orchestrate'] = orchestrate;
        obj['path'] = path;
        obj['parents'] = parents;
        obj['placement_policy'] = placementPolicy;
        obj['priority'] = priority;
        obj['resources'] = resources;
        obj['scope'] = scope;
        obj['subsets'] = subsets;
        obj['topology'] = topology;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>InstanceConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceConfig} obj Optional instance to populate.
     * @return {module:model/InstanceConfig} The populated <code>InstanceConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceConfig();

            if (data.hasOwnProperty('app')) {
                obj['app'] = ApiClient.convertToType(data['app'], 'String');
            }
            if (data.hasOwnProperty('checksum')) {
                obj['checksum'] = ApiClient.convertToType(data['checksum'], 'String');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], ['String']);
            }
            if (data.hasOwnProperty('drp')) {
                obj['drp'] = ApiClient.convertToType(data['drp'], 'Boolean');
            }
            if (data.hasOwnProperty('env')) {
                obj['env'] = ApiClient.convertToType(data['env'], 'String');
            }
            if (data.hasOwnProperty('flex_max')) {
                obj['flex_max'] = ApiClient.convertToType(data['flex_max'], 'Number');
            }
            if (data.hasOwnProperty('flex_min')) {
                obj['flex_min'] = ApiClient.convertToType(data['flex_min'], 'Number');
            }
            if (data.hasOwnProperty('flex_target')) {
                obj['flex_target'] = ApiClient.convertToType(data['flex_target'], 'Number');
            }
            if (data.hasOwnProperty('monitor_action')) {
                obj['monitor_action'] = ApiClient.convertToType(data['monitor_action'], 'String');
            }
            if (data.hasOwnProperty('pre_monitor_action')) {
                obj['pre_monitor_action'] = ApiClient.convertToType(data['pre_monitor_action'], 'String');
            }
            if (data.hasOwnProperty('nodename')) {
                obj['nodename'] = ApiClient.convertToType(data['nodename'], 'String');
            }
            if (data.hasOwnProperty('orchestrate')) {
                obj['orchestrate'] = Orchestrate.constructFromObject(data['orchestrate']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('parents')) {
                obj['parents'] = ApiClient.convertToType(data['parents'], ['String']);
            }
            if (data.hasOwnProperty('pool')) {
                obj['pool'] = ApiClient.convertToType(data['pool'], 'String');
            }
            if (data.hasOwnProperty('placement_policy')) {
                obj['placement_policy'] = PlacementPolicy.constructFromObject(data['placement_policy']);
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('resources')) {
                obj['resources'] = ApiClient.convertToType(data['resources'], {'String': ResourceConfig});
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], ['String']);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('subsets')) {
                obj['subsets'] = ApiClient.convertToType(data['subsets'], [SubsetConfig]);
            }
            if (data.hasOwnProperty('topology')) {
                obj['topology'] = Topology.constructFromObject(data['topology']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InstanceConfig</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InstanceConfig</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InstanceConfig.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['app'] && !(typeof data['app'] === 'string' || data['app'] instanceof String)) {
            throw new Error("Expected the field `app` to be a primitive type in the JSON string but got " + data['app']);
        }
        // ensure the json data is a string
        if (data['checksum'] && !(typeof data['checksum'] === 'string' || data['checksum'] instanceof String)) {
            throw new Error("Expected the field `checksum` to be a primitive type in the JSON string but got " + data['checksum']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['children'])) {
            throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
        }
        // ensure the json data is a string
        if (data['env'] && !(typeof data['env'] === 'string' || data['env'] instanceof String)) {
            throw new Error("Expected the field `env` to be a primitive type in the JSON string but got " + data['env']);
        }
        // ensure the json data is a string
        if (data['monitor_action'] && !(typeof data['monitor_action'] === 'string' || data['monitor_action'] instanceof String)) {
            throw new Error("Expected the field `monitor_action` to be a primitive type in the JSON string but got " + data['monitor_action']);
        }
        // ensure the json data is a string
        if (data['pre_monitor_action'] && !(typeof data['pre_monitor_action'] === 'string' || data['pre_monitor_action'] instanceof String)) {
            throw new Error("Expected the field `pre_monitor_action` to be a primitive type in the JSON string but got " + data['pre_monitor_action']);
        }
        // ensure the json data is a string
        if (data['nodename'] && !(typeof data['nodename'] === 'string' || data['nodename'] instanceof String)) {
            throw new Error("Expected the field `nodename` to be a primitive type in the JSON string but got " + data['nodename']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['parents'])) {
            throw new Error("Expected the field `parents` to be an array in the JSON data but got " + data['parents']);
        }
        // ensure the json data is a string
        if (data['pool'] && !(typeof data['pool'] === 'string' || data['pool'] instanceof String)) {
            throw new Error("Expected the field `pool` to be a primitive type in the JSON string but got " + data['pool']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['scope'])) {
            throw new Error("Expected the field `scope` to be an array in the JSON data but got " + data['scope']);
        }
        if (data['subsets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subsets'])) {
                throw new Error("Expected the field `subsets` to be an array in the JSON data but got " + data['subsets']);
            }
            // validate the optional field `subsets` (array)
            for (const item of data['subsets']) {
                SubsetConfig.validateJSON(item);
            };
        }

        return true;
    }


}

InstanceConfig.RequiredProperties = ["app", "checksum", "children", "drp", "env", "flex_max", "flex_min", "flex_target", "monitor_action", "pre_monitor_action", "nodename", "orchestrate", "path", "parents", "placement_policy", "priority", "resources", "scope", "subsets", "topology", "updated_at"];

/**
 * @member {String} app
 */
InstanceConfig.prototype['app'] = undefined;

/**
 * @member {String} checksum
 */
InstanceConfig.prototype['checksum'] = undefined;

/**
 * @member {Array.<String>} children
 */
InstanceConfig.prototype['children'] = undefined;

/**
 * @member {Boolean} drp
 */
InstanceConfig.prototype['drp'] = undefined;

/**
 * @member {String} env
 */
InstanceConfig.prototype['env'] = undefined;

/**
 * @member {Number} flex_max
 */
InstanceConfig.prototype['flex_max'] = undefined;

/**
 * @member {Number} flex_min
 */
InstanceConfig.prototype['flex_min'] = undefined;

/**
 * @member {Number} flex_target
 */
InstanceConfig.prototype['flex_target'] = undefined;

/**
 * @member {String} monitor_action
 */
InstanceConfig.prototype['monitor_action'] = undefined;

/**
 * @member {String} pre_monitor_action
 */
InstanceConfig.prototype['pre_monitor_action'] = undefined;

/**
 * @member {String} nodename
 */
InstanceConfig.prototype['nodename'] = undefined;

/**
 * @member {module:model/Orchestrate} orchestrate
 */
InstanceConfig.prototype['orchestrate'] = undefined;

/**
 * @member {String} path
 */
InstanceConfig.prototype['path'] = undefined;

/**
 * @member {Array.<String>} parents
 */
InstanceConfig.prototype['parents'] = undefined;

/**
 * @member {String} pool
 */
InstanceConfig.prototype['pool'] = undefined;

/**
 * @member {module:model/PlacementPolicy} placement_policy
 */
InstanceConfig.prototype['placement_policy'] = undefined;

/**
 * @member {Number} priority
 */
InstanceConfig.prototype['priority'] = undefined;

/**
 * @member {Object.<String, module:model/ResourceConfig>} resources
 */
InstanceConfig.prototype['resources'] = undefined;

/**
 * @member {Array.<String>} scope
 */
InstanceConfig.prototype['scope'] = undefined;

/**
 * @member {Number} size
 */
InstanceConfig.prototype['size'] = undefined;

/**
 * @member {Array.<module:model/SubsetConfig>} subsets
 */
InstanceConfig.prototype['subsets'] = undefined;

/**
 * @member {module:model/Topology} topology
 */
InstanceConfig.prototype['topology'] = undefined;

/**
 * @member {Date} updated_at
 */
InstanceConfig.prototype['updated_at'] = undefined;






export default InstanceConfig;

