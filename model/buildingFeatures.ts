/**
 * Residential Electrification Model API
 * An API for REM, the Residential Electrification Model.         The other Rewiring America APIs and methodology for REM are [here](https://api.rewiringamerica.org/).
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A class representing the set of possible building characteristics.  All values default to None, indicating that the given characteristic is unknown for the represented residence. If a characteristic has the string value of \"None\" it indicates that the characteristic, like Air Conditioning or a Pool, is not present at the represented residence.  Attributes ----------     geometry_floor_area (float | None): The square footage of the residence.     geometry_stories (float | None): The number of stories in the residence..     bedrooms (float | None): The number of bedrooms contained in the residence.     bathrooms (float | None) : The number of bathrooms contained in the residence.     vintage (float | None): The year in which the residence was built.     geometry_attic_type (List[str] | None): The type of attic.     hvac_cooling_type (List[str] | None): The type of cooling system present in the residence.     hvac_heating_type (List[str] | None): The type of ductwork used for heating in the residence.     geometry_garage (List[str] | None): The size of the garage as measured in the number of cars         that can be placed within the garage.     misc_pool (List[str] | None): A string indicating the presence of a pool at the residence.     misc_hot_tub_spa (List[str] | None): The fuel type used to heat a hot tub if one is present         at the residence.     misc_well_pump (List[str] | None): The efficiency of a well pump if one is located at the residence.     misc_pool_heater (List[str] | None): The presence and fuel type of a pool heater.     geometry_wall_type (List[str] | None): The material of the exterior walls on the residence.     geometry_wall_exterior_finish (List[str] | None): The finish and color of exterior walls         on the residence.     roof_material (List[str] | None): The material of the roof on the residence.     geometry_building_type_acs (List[str] | None): The American Community Survey building type         of the residence.     geometry_building_number_units_sfa (float | None): The number of units in a single-family attached building.     geometry_building_number_units_mf (float | None): The number of units in a multifamily building.     heating_fuel (List[str] | None): The primary fuel used for heating the residence.
*/
export class BuildingFeatures {
    'geometryFloorArea'?: number;
    'geometryStories'?: number;
    'bedrooms'?: number;
    'bathrooms'?: number;
    'vintage'?: number;
    'geometryAtticType'?: Array<string>;
    'hvacCoolingType'?: Array<string>;
    'hvacHeatingType'?: Array<string>;
    'geometryGarage'?: Array<string>;
    'miscPool'?: Array<string>;
    'miscHotTubSpa'?: Array<string>;
    'miscWellPump'?: Array<string>;
    'miscPoolHeater'?: Array<string>;
    'geometryWallType'?: Array<string>;
    'geometryWallExteriorFinish'?: Array<string>;
    'roofMaterial'?: Array<string>;
    'geometryBuildingTypeAcs'?: Array<string>;
    'geometryBuildingNumberUnitsSfa'?: number;
    'geometryBuildingNumberUnitsMf'?: number;
    'heatingFuel'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "geometryFloorArea",
            "baseName": "geometry_floor_area",
            "type": "number"
        },
        {
            "name": "geometryStories",
            "baseName": "geometry_stories",
            "type": "number"
        },
        {
            "name": "bedrooms",
            "baseName": "bedrooms",
            "type": "number"
        },
        {
            "name": "bathrooms",
            "baseName": "bathrooms",
            "type": "number"
        },
        {
            "name": "vintage",
            "baseName": "vintage",
            "type": "number"
        },
        {
            "name": "geometryAtticType",
            "baseName": "geometry_attic_type",
            "type": "Array<string>"
        },
        {
            "name": "hvacCoolingType",
            "baseName": "hvac_cooling_type",
            "type": "Array<string>"
        },
        {
            "name": "hvacHeatingType",
            "baseName": "hvac_heating_type",
            "type": "Array<string>"
        },
        {
            "name": "geometryGarage",
            "baseName": "geometry_garage",
            "type": "Array<string>"
        },
        {
            "name": "miscPool",
            "baseName": "misc_pool",
            "type": "Array<string>"
        },
        {
            "name": "miscHotTubSpa",
            "baseName": "misc_hot_tub_spa",
            "type": "Array<string>"
        },
        {
            "name": "miscWellPump",
            "baseName": "misc_well_pump",
            "type": "Array<string>"
        },
        {
            "name": "miscPoolHeater",
            "baseName": "misc_pool_heater",
            "type": "Array<string>"
        },
        {
            "name": "geometryWallType",
            "baseName": "geometry_wall_type",
            "type": "Array<string>"
        },
        {
            "name": "geometryWallExteriorFinish",
            "baseName": "geometry_wall_exterior_finish",
            "type": "Array<string>"
        },
        {
            "name": "roofMaterial",
            "baseName": "roof_material",
            "type": "Array<string>"
        },
        {
            "name": "geometryBuildingTypeAcs",
            "baseName": "geometry_building_type_acs",
            "type": "Array<string>"
        },
        {
            "name": "geometryBuildingNumberUnitsSfa",
            "baseName": "geometry_building_number_units_sfa",
            "type": "number"
        },
        {
            "name": "geometryBuildingNumberUnitsMf",
            "baseName": "geometry_building_number_units_mf",
            "type": "number"
        },
        {
            "name": "heatingFuel",
            "baseName": "heating_fuel",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return BuildingFeatures.attributeTypeMap;
    }
}

