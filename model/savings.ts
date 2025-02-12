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

import { FuelRate } from './fuelRate';
import { FuelSavings } from './fuelSavings';
import { Quantity } from './quantity';

/**
* Represents the impacts of an upgrade and the rates and emissions factors used to compute these impacts.
*/
export class Savings {
    /**
    * A list of results, one for each fuel type.
    */
    'fuelResults': { [key: string]: FuelSavings; };
    /**
    * A list of rates used to compute the cost of consuming each fuel.
    */
    'rates': { [key: string]: Array<FuelRate>; };
    /**
    * A list of conversion factors used to compute the emissions from each fuel.
    */
    'emissionsFactors': { [key: string]: Quantity; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fuelResults",
            "baseName": "fuel_results",
            "type": "{ [key: string]: FuelSavings; }"
        },
        {
            "name": "rates",
            "baseName": "rates",
            "type": "{ [key: string]: Array<FuelRate>; }"
        },
        {
            "name": "emissionsFactors",
            "baseName": "emissions_factors",
            "type": "{ [key: string]: Quantity; }"
        }    ];

    static getAttributeTypeMap() {
        return Savings.attributeTypeMap;
    }
}

