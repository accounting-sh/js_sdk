/**
 * Accounting API
 *
 * The version of the OpenAPI document: 8.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class AccountConnectionsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  deleteAccountConnection(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteAccountConnection",
      );
    }

    let path = "/accounts/{uuid}/connect";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  listAccountConnections(uuid, fields = null, page = null, perPage = null) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling listAccountConnections",
      );
    }

    let path = "/accounts/{uuid}/connect";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {
        fields: fields,
        page: page,
        per_page: perPage,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listBanks(uuid, country = null) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling listBanks",
      );
    }

    let path = "/accounts/{uuid}/connect/banks";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {
        country: country,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }
}
