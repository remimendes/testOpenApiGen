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
* Enum class Topology.
* @enum {}
* @readonly
*/
export default class Topology {
    
        /**
         * value: "failover"
         * @const
         */
        "failover" = "failover";

    
        /**
         * value: "flex"
         * @const
         */
        "flex" = "flex";

    

    /**
    * Returns a <code>Topology</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Topology} The enum <code>Topology</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

