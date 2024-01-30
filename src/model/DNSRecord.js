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
 * The DNSRecord model module.
 * @module model/DNSRecord
 * @version 3.12.2
 */
class DNSRecord {
    /**
     * Constructs a new <code>DNSRecord</code>.
     * @alias module:model/DNSRecord
     * @param name {String} 
     * @param type {String} 
     * @param _class {String} 
     * @param ttl {Number} 
     * @param data {String} 
     */
    constructor(name, type, _class, ttl, data) { 
        
        DNSRecord.initialize(this, name, type, _class, ttl, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, _class, ttl, data) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['class'] = _class;
        obj['ttl'] = ttl;
        obj['data'] = data;
    }

    /**
     * Constructs a <code>DNSRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DNSRecord} obj Optional instance to populate.
     * @return {module:model/DNSRecord} The populated <code>DNSRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DNSRecord();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('class')) {
                obj['class'] = ApiClient.convertToType(data['class'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DNSRecord</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DNSRecord</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DNSRecord.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['class'] && !(typeof data['class'] === 'string' || data['class'] instanceof String)) {
            throw new Error("Expected the field `class` to be a primitive type in the JSON string but got " + data['class']);
        }
        // ensure the json data is a string
        if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
            throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
        }

        return true;
    }


}

DNSRecord.RequiredProperties = ["name", "type", "class", "ttl", "data"];

/**
 * @member {String} name
 */
DNSRecord.prototype['name'] = undefined;

/**
 * @member {String} type
 */
DNSRecord.prototype['type'] = undefined;

/**
 * @member {String} class
 */
DNSRecord.prototype['class'] = undefined;

/**
 * @member {Number} ttl
 */
DNSRecord.prototype['ttl'] = undefined;

/**
 * @member {String} data
 */
DNSRecord.prototype['data'] = undefined;






export default DNSRecord;
