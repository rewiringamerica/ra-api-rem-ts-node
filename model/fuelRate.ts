/**
 * Residential Electrification Model API
 * An API for REM, the Residential Electrification Model.
 * The other Rewiring America APIs and methodology for REM are [here](https://api.rewiringamerica.org/).
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
* Represents a rate.  It is a `Quantity` with the addition of a rate type.
* Attributes
* ----------
* rate_type (str): The type of rate. Values can be \"fixed\" or \"volumetric\".
*/
export class FuelRate {
    'value'?: number = 0.0;
    'units': string;
    'rateType'?: string = 'volumetric';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        },
        {
            "name": "units",
            "baseName": "units",
            "type": "string"
        },
        {
            "name": "rateType",
            "baseName": "rate_type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FuelRate.attributeTypeMap;
    }
}
