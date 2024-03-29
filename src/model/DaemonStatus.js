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
import Cluster from './Cluster';
import Daemon from './Daemon';

/**
 * The DaemonStatus model module.
 * @module model/DaemonStatus
 * @version 3.12.19
 */
class DaemonStatus {
    /**
     * Constructs a new <code>DaemonStatus</code>.
     * @alias module:model/DaemonStatus
     * @param cluster {module:model/Cluster} 
     * @param daemon {module:model/Daemon} 
     */
    constructor(cluster, daemon) { 
        
        DaemonStatus.initialize(this, cluster, daemon);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cluster, daemon) { 
        obj['cluster'] = cluster;
        obj['daemon'] = daemon;
    }

    /**
     * Constructs a <code>DaemonStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DaemonStatus} obj Optional instance to populate.
     * @return {module:model/DaemonStatus} The populated <code>DaemonStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DaemonStatus();

            if (data.hasOwnProperty('cluster')) {
                obj['cluster'] = Cluster.constructFromObject(data['cluster']);
            }
            if (data.hasOwnProperty('daemon')) {
                obj['daemon'] = Daemon.constructFromObject(data['daemon']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DaemonStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DaemonStatus</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DaemonStatus.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cluster`
        if (data['cluster']) { // data not null
          Cluster.validateJSON(data['cluster']);
        }
        // validate the optional field `daemon`
        if (data['daemon']) { // data not null
          Daemon.validateJSON(data['daemon']);
        }

        return true;
    }


}

DaemonStatus.RequiredProperties = ["cluster", "daemon"];

/**
 * @member {module:model/Cluster} cluster
 */
DaemonStatus.prototype['cluster'] = undefined;

/**
 * @member {module:model/Daemon} daemon
 */
DaemonStatus.prototype['daemon'] = undefined;






export default DaemonStatus;

