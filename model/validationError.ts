/**
 * Residential Electrification Model API
 * An API for REM, the Residential Electrification Model.
 *
 * The version of the OpenAPI document: 0.4.2
 * Contact: datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValidationErrorLocInner } from './validationErrorLocInner';

export class ValidationError {
    'loc': Array<ValidationErrorLocInner>;
    'msg': string;
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loc",
            "baseName": "loc",
            "type": "Array<ValidationErrorLocInner>"
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ValidationError.attributeTypeMap;
    }
}

