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
import NodeLabel from './NodeLabel';
import SANPath from './SANPath';

/**
 * The NodeInfo model module.
 * @module model/NodeInfo
 * @version 3.12.19
 */
class NodeInfo {
    /**
     * Constructs a new <code>NodeInfo</code>.
     * @alias module:model/NodeInfo
     * @param labels {Array.<module:model/NodeLabel>} labels is the list of node labels.
     * @param nodename {String} nodename is the name of the node where the labels and paths are coming from.
     * @param paths {Array.<module:model/SANPath>} paths is the list of node to storage array san paths.
     */
    constructor(labels, nodename, paths) { 
        
        NodeInfo.initialize(this, labels, nodename, paths);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, labels, nodename, paths) { 
        obj['labels'] = labels;
        obj['nodename'] = nodename;
        obj['paths'] = paths;
    }

    /**
     * Constructs a <code>NodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeInfo} obj Optional instance to populate.
     * @return {module:model/NodeInfo} The populated <code>NodeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeInfo();

            if (data.hasOwnProperty('labels')) {
                obj['labels'] = ApiClient.convertToType(data['labels'], [NodeLabel]);
            }
            if (data.hasOwnProperty('nodename')) {
                obj['nodename'] = ApiClient.convertToType(data['nodename'], 'String');
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], [SANPath]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NodeInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NodeInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NodeInfo.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['labels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['labels'])) {
                throw new Error("Expected the field `labels` to be an array in the JSON data but got " + data['labels']);
            }
            // validate the optional field `labels` (array)
            for (const item of data['labels']) {
                NodeLabel.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['nodename'] && !(typeof data['nodename'] === 'string' || data['nodename'] instanceof String)) {
            throw new Error("Expected the field `nodename` to be a primitive type in the JSON string but got " + data['nodename']);
        }
        if (data['paths']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['paths'])) {
                throw new Error("Expected the field `paths` to be an array in the JSON data but got " + data['paths']);
            }
            // validate the optional field `paths` (array)
            for (const item of data['paths']) {
                SANPath.validateJSON(item);
            };
        }

        return true;
    }


}

NodeInfo.RequiredProperties = ["labels", "nodename", "paths"];

/**
 * labels is the list of node labels.
 * @member {Array.<module:model/NodeLabel>} labels
 */
NodeInfo.prototype['labels'] = undefined;

/**
 * nodename is the name of the node where the labels and paths are coming from.
 * @member {String} nodename
 */
NodeInfo.prototype['nodename'] = undefined;

/**
 * paths is the list of node to storage array san paths.
 * @member {Array.<module:model/SANPath>} paths
 */
NodeInfo.prototype['paths'] = undefined;






export default NodeInfo;

