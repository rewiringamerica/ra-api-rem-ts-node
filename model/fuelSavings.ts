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

import { ImpactMetric } from "./impactMetric";

/**
 * A class to represent baseline, upgrade and savings data for a particular
 * fuel.
 */
export class FuelSavings {
  /** The estimates under the baseline scenario. */
  "baseline": ImpactMetric;
  /** The estimates under the upgrade scenario if passed. */
  "upgrade"?: ImpactMetric;
  /**
   * The savings estimates (difference between baseline and upgrade) under the
   * upgrade scenario if passed.
   */
  "delta"?: ImpactMetric;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
  }> = [
    {
      name: "baseline",
      baseName: "baseline",
      type: "ImpactMetric",
    },
    {
      name: "upgrade",
      baseName: "upgrade",
      type: "ImpactMetric",
    },
    {
      name: "delta",
      baseName: "delta",
      type: "ImpactMetric",
    },
  ];

  static getAttributeTypeMap() {
    return FuelSavings.attributeTypeMap;
  }
}
