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
* Heating fuels supported by the API.  Note that we do not currently support \"Other Fuel\" or \"None\".
*/
export enum HeatingFuel {
    Electricity = <any> 'Electricity',
    FuelOil = <any> 'Fuel Oil',
    NaturalGas = <any> 'Natural Gas',
    Propane = <any> 'Propane'
}