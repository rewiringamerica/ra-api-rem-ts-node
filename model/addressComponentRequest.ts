/**
 * Residential Electrification Model API An API for REM, the Residential
 * Electrification Model.
 *
 * The version of the OpenAPI document: 1.3.0 Contact:
 * datascience@rewiringamerica.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator
 * (https://openapi-generator.tech). https://openapi-generator.tech Do not edit
 * the class manually.
 */

/**
 * A class representing the request body to retrieve a building profile by
 * address components.
 */
export class AddressComponentRequest {
  /** The full mailing address of the home. */
  "fullAddress": string;
  /** The street number in the home's mailing address. */
  "streetNumber": string;
  /**
   * The all-caps street name in the home's mailing address including
   * directions that may occur before or after the name and the abbreviate
   * street type like ST or BLVD
   */
  "streetName": string;
  /** The all-caps city in the home's mailing address. */
  "city": string;
  /**
   * The two-letter state abbreviation of the state in the home's mailing
   * address.
   */
  "stateAbbr": string;
  /** The five digit zip code in the home's mailing address. */
  "zip": string;
  /**
   * The geocoded latitude of the home's location, specified to at least 5
   * significant digits after the decimal.
   */
  "latitude": number;
  /**
   * The geocoded longitude of the home's location, specified to at least 5
   * significant digits after the decimal.
   */
  "longitude": number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "fullAddress",
      baseName: "full_address",
      type: "string",
    },
    {
      name: "streetNumber",
      baseName: "street_number",
      type: "string",
    },
    {
      name: "streetName",
      baseName: "street_name",
      type: "string",
    },
    {
      name: "city",
      baseName: "city",
      type: "string",
    },
    {
      name: "stateAbbr",
      baseName: "state_abbr",
      type: "string",
    },
    {
      name: "zip",
      baseName: "zip",
      type: "string",
    },
    {
      name: "latitude",
      baseName: "latitude",
      type: "number",
    },
    {
      name: "longitude",
      baseName: "longitude",
      type: "number",
    },
  ];

  static getAttributeTypeMap() {
    return AddressComponentRequest.attributeTypeMap;
  }
}
