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
import InstanceMeta from './InstanceMeta';
import Schedule from './Schedule';

/**
 * The ScheduleItem model module.
 * @module model/ScheduleItem
 * @version 3.12.19
 */
class ScheduleItem {
    /**
     * Constructs a new <code>ScheduleItem</code>.
     * @alias module:model/ScheduleItem
     * @param kind {module:model/ScheduleItem.KindEnum} 
     * @param meta {module:model/InstanceMeta} 
     * @param data {module:model/Schedule} 
     */
    constructor(kind, meta, data) { 
        
        ScheduleItem.initialize(this, kind, meta, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, kind, meta, data) { 
        obj['kind'] = kind;
        obj['meta'] = meta;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>ScheduleItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduleItem} obj Optional instance to populate.
     * @return {module:model/ScheduleItem} The populated <code>ScheduleItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScheduleItem();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = InstanceMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = Schedule.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScheduleItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScheduleItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScheduleItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          InstanceMeta.validateJSON(data['meta']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          Schedule.validateJSON(data['data']);
        }

        return true;
    }


}

ScheduleItem.RequiredProperties = ["kind", "meta", "data"];

/**
 * @member {module:model/ScheduleItem.KindEnum} kind
 */
ScheduleItem.prototype['kind'] = undefined;

/**
 * @member {module:model/InstanceMeta} meta
 */
ScheduleItem.prototype['meta'] = undefined;

/**
 * @member {module:model/Schedule} data
 */
ScheduleItem.prototype['data'] = undefined;





/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
ScheduleItem['KindEnum'] = {

    /**
     * value: "ResourceItem"
     * @const
     */
    "ResourceItem": "ResourceItem"
};



export default ScheduleItem;

