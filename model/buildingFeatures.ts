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


/**
* A class representing the set of possible building characteristics.  All values default to None, indicating that the given characteristic is unknown for the represented residence. If a characteristic has the string value of \"None\" it indicates that the characteristic, like Air Conditioning or a Pool, is not present at the represented residence.
*/
export class BuildingFeatures {
    /**
    * The square footage of the residence.
    */
    'geometryFloorArea'?: number;
    /**
    * The number of stories in the residence.
    */
    'geometryStories'?: number;
    /**
    * The number of bedrooms contained in the residence.
    */
    'bedrooms'?: number;
    /**
    * The number of bathrooms contained in the residence.
    */
    'bathrooms'?: number;
    /**
    * The year in which the residence was built.
    */
    'vintage'?: number;
    /**
    * The type of attic.
    */
    'geometryAtticType'?: Array<string>;
    /**
    * The type of cooling system present in the residence.
    */
    'hvacCoolingType'?: Array<string>;
    /**
    * The type of ductwork used for heating in the residence.
    */
    'hvacHeatingType'?: Array<string>;
    /**
    * The heating appliance type and fuel in the residence.
    */
    'hvacHeatingTypeAndFuel'?: Array<string>;
    /**
    * The size of the garage as measured in the number of cars that can be placed within the garage.
    */
    'geometryGarage'?: Array<string>;
    /**
    * A string indicating the presence of a pool at the residence.
    */
    'miscPool'?: Array<string>;
    /**
    * The fuel type used to heat a hot tub if one is present at the residence.
    */
    'miscHotTubSpa'?: Array<string>;
    /**
    * The efficiency of a well pump if one is located at the residence.
    */
    'miscWellPump'?: Array<string>;
    /**
    * The presence and fuel type of a pool heater.
    */
    'miscPoolHeater'?: Array<string>;
    /**
    * The material of the exterior walls on the residence.
    */
    'geometryWallType'?: Array<string>;
    /**
    * The finish and color of exterior walls on the residence.
    */
    'geometryWallExteriorFinish'?: Array<string>;
    /**
    * The material of the roof on the residence
    */
    'roofMaterial'?: Array<string>;
    /**
    * The American Community Survey building type of the residence.
    */
    'geometryBuildingTypeAcs'?: Array<string>;
    /**
    * The number of units in a single-family attached building.
    */
    'geometryBuildingNumberUnitsSfa'?: number;
    /**
    * The number of units in a multifamily building.
    */
    'geometryBuildingNumberUnitsMf'?: number;
    /**
    * The primary fuel used for heating the residence.
    */
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
            "name": "hvacHeatingTypeAndFuel",
            "baseName": "hvac_heating_type_and_fuel",
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

