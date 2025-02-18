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

import { Quantity } from './quantity';

/**
* Represents a statistic associated with a particular fuel and type of impact.
* These statistics are computed are over the set of sample homes in the Monte Carlo simulation.
*/
export class MetricStatistics {
    /**
    * The mean statistic.
    */
    'mean': Quantity;
    /**
    * The median statistic.
    */
    'median': Quantity;
    /**
    * The 20th percentile statistic.
    */
    'percentile20': Quantity;
    /**
    * The 80th percentile statistic.
    */
    'percentile80': Quantity;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mean",
            "baseName": "mean",
            "type": "Quantity"
        },
        {
            "name": "median",
            "baseName": "median",
            "type": "Quantity"
        },
        {
            "name": "percentile20",
            "baseName": "percentile_20",
            "type": "Quantity"
        },
        {
            "name": "percentile80",
            "baseName": "percentile_80",
            "type": "Quantity"
        }    ];

    static getAttributeTypeMap() {
        return MetricStatistics.attributeTypeMap;
    }
}

