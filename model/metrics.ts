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

import { FuelData } from './fuelData';

/**
* A class to represent metrics data.  Attributes ----------     samples (Dict[int, List[FuelData]]): A dictionary of sample IDs and their associated data for         energy, emissions, and cost.     mean (List[FuelData]): Mean data for energy, emissions, and cost.     median (List[FuelData]): Median data for energy, emissions, and cost.     percentile_20 (List[FuelData]): 20th percentile data for energy, emissions, and cost.     percentile_80 (List[FuelData]): 80th percentile data for energy, emissions, and cost.
*/
export class Metrics {
    'mean': Array<FuelData>;
    'median': Array<FuelData>;
    'percentile20': Array<FuelData>;
    'percentile80': Array<FuelData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mean",
            "baseName": "mean",
            "type": "Array<FuelData>"
        },
        {
            "name": "median",
            "baseName": "median",
            "type": "Array<FuelData>"
        },
        {
            "name": "percentile20",
            "baseName": "percentile_20",
            "type": "Array<FuelData>"
        },
        {
            "name": "percentile80",
            "baseName": "percentile_80",
            "type": "Array<FuelData>"
        }    ];

    static getAttributeTypeMap() {
        return Metrics.attributeTypeMap;
    }
}

