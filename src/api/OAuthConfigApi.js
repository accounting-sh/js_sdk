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

export class OAuthConfigApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addOAuthConfiguration(addOAuthConfigurationRequest) {
    // verify the required parameter 'addOAuthConfigurationRequest' is set
    if (
      addOAuthConfigurationRequest === undefined ||
      addOAuthConfigurationRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addOAuthConfigurationRequest' when calling addOAuthConfiguration",
      );
    }

    let path = "/oauth";

    let options = {
      params: {},
      data: addOAuthConfigurationRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteOAuthConfiguration(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteOAuthConfiguration",
      );
    }

    let path = "/oauth/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getOAuthConfiguration(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getOAuthConfiguration",
      );
    }

    let path = "/oauth/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listOAuthConfigurations(fields = null, page = null, perPage = null) {
    let path = "/oauth";

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

  listProviders() {
    let path = "/oauth/providers";

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  updateOAuthConfiguration(uuid, addOAuthConfigurationRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateOAuthConfiguration",
      );
    }

    // verify the required parameter 'addOAuthConfigurationRequest' is set
    if (
      addOAuthConfigurationRequest === undefined ||
      addOAuthConfigurationRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addOAuthConfigurationRequest' when calling updateOAuthConfiguration",
      );
    }

    let path = "/oauth/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addOAuthConfigurationRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
