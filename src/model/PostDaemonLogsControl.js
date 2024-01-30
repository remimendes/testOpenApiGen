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
 * The PostDaemonLogsControl model module.
 * @module model/PostDaemonLogsControl
 * @version 3.12.2
 */
class PostDaemonLogsControl {
    /**
     * Constructs a new <code>PostDaemonLogsControl</code>.
     * @alias module:model/PostDaemonLogsControl
     * @param level {module:model/PostDaemonLogsControl.LevelEnum} 
     */
    constructor(level) { 
        
        PostDaemonLogsControl.initialize(this, level);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, level) { 
        obj['level'] = level || 'info';
    }

    /**
     * Constructs a <code>PostDaemonLogsControl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostDaemonLogsControl} obj Optional instance to populate.
     * @return {module:model/PostDaemonLogsControl} The populated <code>PostDaemonLogsControl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostDaemonLogsControl();

            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostDaemonLogsControl</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostDaemonLogsControl</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PostDaemonLogsControl.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['level'] && !(typeof data['level'] === 'string' || data['level'] instanceof String)) {
            throw new Error("Expected the field `level` to be a primitive type in the JSON string but got " + data['level']);
        }

        return true;
    }


}

PostDaemonLogsControl.RequiredProperties = ["level"];

/**
 * @member {module:model/PostDaemonLogsControl.LevelEnum} level
 * @default 'info'
 */
PostDaemonLogsControl.prototype['level'] = 'info';





/**
 * Allowed values for the <code>level</code> property.
 * @enum {String}
 * @readonly
 */
PostDaemonLogsControl['LevelEnum'] = {

    /**
     * value: "debug"
     * @const
     */
    "debug": "debug",

    /**
     * value: "info"
     * @const
     */
    "info": "info",

    /**
     * value: "warn"
     * @const
     */
    "warn": "warn",

    /**
     * value: "error"
     * @const
     */
    "error": "error",

    /**
     * value: "fatal"
     * @const
     */
    "fatal": "fatal",

    /**
     * value: "panic"
     * @const
     */
    "panic": "panic",

    /**
     * value: "none"
     * @const
     */
    "none": "none"
};



export default PostDaemonLogsControl;
