/**
 * Dohyo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
* A class to represent fuel data.  Attributes ----------     fuel_type (str): The type of fuel. Values can be \"electricity\", \"natural_gas\", \"propane\", \"fuel_oil\", or \"net\".     value (float): The numerical value of what the metric is.     units (str): The measurement.
*/
export class FuelData {
    'fuelType': string;
    'value'?: number = 0.0;
    'units': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fuelType",
            "baseName": "fuel_type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FuelData.attributeTypeMap;
    }
}
