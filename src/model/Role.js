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
* Enum class Role.
* @enum {}
* @readonly
*/
export default class Role {
    
        /**
         * value: "admin"
         * @const
         */
        "admin" = "admin";

    
        /**
         * value: "blacklistadmin"
         * @const
         */
        "blacklistadmin" = "blacklistadmin";

    
        /**
         * value: "guest"
         * @const
         */
        "guest" = "guest";

    
        /**
         * value: "heartbeat"
         * @const
         */
        "heartbeat" = "heartbeat";

    
        /**
         * value: "join"
         * @const
         */
        "join" = "join";

    
        /**
         * value: "leave"
         * @const
         */
        "leave" = "leave";

    
        /**
         * value: "root"
         * @const
         */
        "root" = "root";

    
        /**
         * value: "squatter"
         * @const
         */
        "squatter" = "squatter";

    

    /**
    * Returns a <code>Role</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Role} The enum <code>Role</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

