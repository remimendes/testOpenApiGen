/**
 * test opensvc agent api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.12.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PoolVolume model module.
 * @module model/PoolVolume
 * @version 3.12.9
 */
class PoolVolume {
    /**
     * Constructs a new <code>PoolVolume</code>.
     * @alias module:model/PoolVolume
     * @param pool {String} 
     * @param path {String} 
     * @param children {Array.<String>} 
     * @param isOrphan {Boolean} 
     * @param size {Number} 
     */
    constructor(pool, path, children, isOrphan, size) { 
        
        PoolVolume.initialize(this, pool, path, children, isOrphan, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool, path, children, isOrphan, size) { 
        obj['pool'] = pool;
        obj['path'] = path;
        obj['children'] = children;
        obj['is_orphan'] = isOrphan;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>PoolVolume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolVolume} obj Optional instance to populate.
     * @return {module:model/PoolVolume} The populated <code>PoolVolume</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PoolVolume();

            if (data.hasOwnProperty('pool')) {
                obj['pool'] = ApiClient.convertToType(data['pool'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], ['String']);
            }
            if (data.hasOwnProperty('is_orphan')) {
                obj['is_orphan'] = ApiClient.convertToType(data['is_orphan'], 'Boolean');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PoolVolume</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PoolVolume</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PoolVolume.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['pool'] && !(typeof data['pool'] === 'string' || data['pool'] instanceof String)) {
            throw new Error("Expected the field `pool` to be a primitive type in the JSON string but got " + data['pool']);
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['children'])) {
            throw new Error("Expected the field `children` to be an array in the JSON data but got " + data['children']);
        }

        return true;
    }


}

PoolVolume.RequiredProperties = ["pool", "path", "children", "is_orphan", "size"];

/**
 * @member {String} pool
 */
PoolVolume.prototype['pool'] = undefined;

/**
 * @member {String} path
 */
PoolVolume.prototype['path'] = undefined;

/**
 * @member {Array.<String>} children
 */
PoolVolume.prototype['children'] = undefined;

/**
 * @member {Boolean} is_orphan
 */
PoolVolume.prototype['is_orphan'] = undefined;

/**
 * @member {Number} size
 */
PoolVolume.prototype['size'] = undefined;






export default PoolVolume;

