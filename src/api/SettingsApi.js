/**
 * Accounting API
 *
 * The version of the OpenAPI document: 8.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class SettingsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  getSettings(uuid, key) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getSettings",
      );
    }

    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling getSettings",
      );
    }

    let path = "/companies/{uuid}/settings/{key}";
    path = path.replace("{uuid}", uuid);
    path = path.replace("{key}", key);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listSettings(fields = null, page = null, perPage = null, uuid = null) {
    let path = "/companies/{uuid}/settings";
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

  updateSettings(uuid, key, updateSettingsRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateSettings",
      );
    }

    // verify the required parameter 'key' is set
    if (key === undefined || key === null) {
      throw new Error(
        "Missing the required parameter 'key' when calling updateSettings",
      );
    }

    // verify the required parameter 'updateSettingsRequest' is set
    if (updateSettingsRequest === undefined || updateSettingsRequest === null) {
      throw new Error(
        "Missing the required parameter 'updateSettingsRequest' when calling updateSettings",
      );
    }

    let path = "/companies/{uuid}/settings/{key}";
    path = path.replace("{uuid}", uuid);
    path = path.replace("{key}", key);

    let options = {
      params: {},
      data: updateSettingsRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
