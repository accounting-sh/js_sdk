/**
 * Accounting API
 *
 * The version of the OpenAPI document: 8.0.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class CompanyStatisticsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  getStatistics(uuid, start = null, end = null) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getStatistics",
      );
    }

    let path = "/companies/{uuid}/statistics/period";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {
        start: start,
        end: end,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }
}
