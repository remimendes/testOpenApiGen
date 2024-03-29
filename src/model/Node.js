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
import NodeConfig from './NodeConfig';
import NodeMonitor from './NodeMonitor';
import NodeStatus from './NodeStatus';

/**
 * The Node model module.
 * @module model/Node
 * @version 3.12.19
 */
class Node {
    /**
     * Constructs a new <code>Node</code>.
     * @alias module:model/Node
     */
    constructor() { 
        
        Node.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Node</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Node} obj Optional instance to populate.
     * @return {module:model/Node} The populated <code>Node</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Node();

            if (data.hasOwnProperty('config')) {
                obj['config'] = NodeConfig.constructFromObject(data['config']);
            }
            if (data.hasOwnProperty('monitor')) {
                obj['monitor'] = NodeMonitor.constructFromObject(data['monitor']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = NodeStatus.constructFromObject(data['status']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Node</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Node</code>.
     */
    static validateJSON(data) {
        // validate the optional field `config`
        if (data['config']) { // data not null
          NodeConfig.validateJSON(data['config']);
        }
        // validate the optional field `monitor`
        if (data['monitor']) { // data not null
          NodeMonitor.validateJSON(data['monitor']);
        }
        // validate the optional field `status`
        if (data['status']) { // data not null
          NodeStatus.validateJSON(data['status']);
        }

        return true;
    }


}



/**
 * @member {module:model/NodeConfig} config
 */
Node.prototype['config'] = undefined;

/**
 * @member {module:model/NodeMonitor} monitor
 */
Node.prototype['monitor'] = undefined;

/**
 * @member {module:model/NodeStatus} status
 */
Node.prototype['status'] = undefined;






export default Node;

