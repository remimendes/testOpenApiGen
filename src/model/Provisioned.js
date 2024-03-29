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
* Enum class Provisioned.
* @enum {}
* @readonly
*/
export default class Provisioned {
    
        /**
         * value: "false"
         * @const
         */
        "false" = "false";

    
        /**
         * value: "mixed"
         * @const
         */
        "mixed" = "mixed";

    
        /**
         * value: "n/a"
         * @const
         */
        "n/a" = "n/a";

    
        /**
         * value: "true"
         * @const
         */
        "true" = "true";

    

    /**
    * Returns a <code>Provisioned</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/Provisioned} The enum <code>Provisioned</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

