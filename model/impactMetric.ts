/**
 * Residential Electrification Model API
 * An API for REM, the Residential Electrification Model.
 *  The other Rewiring America APIs and methodology for REM are [here](https://api.rewiringamerica.org/).
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricStatistics } from './metricStatistics';

/**
* Represents a collection of impacts associated with a fuel.
* Attributes
* ----------
* energy: Energy statistics
* emissions: Emissions statistics
* cost: Cost statistics
*/
export class ImpactMetric {
    'energy': MetricStatistics;
    'emissions': MetricStatistics;
    'cost': MetricStatistics;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "energy",
            "baseName": "energy",
            "type": "MetricStatistics"
        },
        {
            "name": "emissions",
            "baseName": "emissions",
            "type": "MetricStatistics"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "MetricStatistics"
        }    ];

    static getAttributeTypeMap() {
        return ImpactMetric.attributeTypeMap;
    }
}

