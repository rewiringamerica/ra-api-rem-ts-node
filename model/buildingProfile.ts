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

import { BuildingFeatures } from './buildingFeatures';

/**
* A class representing the known geographic features and building characteristics for a given residence.
* Attributes
* ----------
* county (str): The county where a residence is located (in GISJOIN format).
* puma (str): The Public Use Microdata Area (PUMA) where a residence is located (in GISJOIN format).
* ashrae_iecc_climate_zone_2004 (str): The IECC Climate Zone where a residence is located.
* weather_file_city (str): The location of the ResStock Weather File used for the area where the residence is located.
* state (str): The 2 letter postal code of the state where the residence is located.
* building_features(BuildingFeatures): The building characteristics found for the residence. See BuildingFeatures
*   documentation for full details about possible characteristics and their meanings.
*/
export class BuildingProfile {
    'county': string;
    'puma': string;
    'ashraeIeccClimateZone2004': string;
    'weatherFileCity': string;
    'state': string;
    'buildingFeatures'?: BuildingFeatures;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "county",
            "baseName": "county",
            "type": "string"
        },
        {
            "name": "puma",
            "baseName": "puma",
            "type": "string"
        },
        {
            "name": "ashraeIeccClimateZone2004",
            "baseName": "ashrae_iecc_climate_zone_2004",
            "type": "string"
        },
        {
            "name": "weatherFileCity",
            "baseName": "weather_file_city",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "buildingFeatures",
            "baseName": "building_features",
            "type": "BuildingFeatures"
        }    ];

    static getAttributeTypeMap() {
        return BuildingProfile.attributeTypeMap;
    }
}

