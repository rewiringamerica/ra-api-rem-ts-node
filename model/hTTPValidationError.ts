/**
 * Residential Electrification Model API
 * An API for REM, the Residential Electrification Model.
 *
 * The version of the OpenAPI document: 0.4.6
 * Contact: datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValidationError } from './validationError';

export class HTTPValidationError {
    'detail'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "detail",
            "baseName": "detail",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return HTTPValidationError.attributeTypeMap;
    }
}

