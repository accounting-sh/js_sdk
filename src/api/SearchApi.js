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

export class SearchApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  search(q, excluse = null, only = null) {
    // verify the required parameter 'q' is set
    if (q === undefined || q === null) {
      throw new Error("Missing the required parameter 'q' when calling search");
    }

    let path = "/search";

    let options = {
      params: {
        q: q,
        excluse: excluse,
        only: only,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }
}
