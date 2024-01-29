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
import KeywordData from './KeywordData';
import KeywordMeta from './KeywordMeta';

/**
 * The KeywordItem model module.
 * @module model/KeywordItem
 * @version 3.12.2
 */
class KeywordItem {
    /**
     * Constructs a new <code>KeywordItem</code>.
     * @alias module:model/KeywordItem
     * @param kind {module:model/KeywordItem.KindEnum} 
     * @param meta {module:model/KeywordMeta} 
     * @param data {module:model/KeywordData} 
     */
    constructor(kind, meta, data) { 
        
        KeywordItem.initialize(this, kind, meta, data);
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
     * Constructs a <code>KeywordItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KeywordItem} obj Optional instance to populate.
     * @return {module:model/KeywordItem} The populated <code>KeywordItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeywordItem();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = KeywordMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = KeywordData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KeywordItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KeywordItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of KeywordItem.RequiredProperties) {
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
          KeywordMeta.validateJSON(data['meta']);
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          KeywordData.validateJSON(data['data']);
        }

        return true;
    }


}

KeywordItem.RequiredProperties = ["kind", "meta", "data"];

/**
 * @member {module:model/KeywordItem.KindEnum} kind
 */
KeywordItem.prototype['kind'] = undefined;

/**
 * @member {module:model/KeywordMeta} meta
 */
KeywordItem.prototype['meta'] = undefined;

/**
 * @member {module:model/KeywordData} data
 */
KeywordItem.prototype['data'] = undefined;





/**
 * Allowed values for the <code>kind</code> property.
 * @enum {String}
 * @readonly
 */
KeywordItem['KindEnum'] = {

    /**
     * value: "KeywordItem"
     * @const
     */
    "KeywordItem": "KeywordItem"
};



export default KeywordItem;

