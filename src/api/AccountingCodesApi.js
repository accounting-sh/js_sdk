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

export class AccountingCodesApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addAccountingCode(addAccountingCodeRequest) {
    // verify the required parameter 'addAccountingCodeRequest' is set
    if (
      addAccountingCodeRequest === undefined ||
      addAccountingCodeRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addAccountingCodeRequest' when calling addAccountingCode",
      );
    }

    let path = "/accounting/codes";

    let options = {
      params: {},
      data: addAccountingCodeRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteAccountingCode(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteAccountingCode",
      );
    }

    let path = "/accounting/codes/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getAccountingCode(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getAccountingCode",
      );
    }

    let path = "/accounting/codes/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listAccountingCodes() {
    let path = "/accounting/codes";

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  updateAccountingCode(uuid, addAccountingCodeRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateAccountingCode",
      );
    }

    // verify the required parameter 'addAccountingCodeRequest' is set
    if (
      addAccountingCodeRequest === undefined ||
      addAccountingCodeRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addAccountingCodeRequest' when calling updateAccountingCode",
      );
    }

    let path = "/accounting/codes/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addAccountingCodeRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
