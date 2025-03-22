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

export class ReceiptsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addReceipt(addReceiptRequest) {
    // verify the required parameter 'addReceiptRequest' is set
    if (addReceiptRequest === undefined || addReceiptRequest === null) {
      throw new Error(
        "Missing the required parameter 'addReceiptRequest' when calling addReceipt",
      );
    }

    let path = "/receipts";

    let options = {
      params: {},
      data: addReceiptRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteReceipt(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteReceipt",
      );
    }

    let path = "/receipts/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getReceipt(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getReceipt",
      );
    }

    let path = "/receipts/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getReceiptDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getReceiptDocument",
      );
    }

    let path = "/receipts/{uuid}/document";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listReceipts(fields = null, page = null, perPage = null) {
    let path = "/receipts";

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

  updateReceipt(uuid, addReceiptRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateReceipt",
      );
    }

    // verify the required parameter 'addReceiptRequest' is set
    if (addReceiptRequest === undefined || addReceiptRequest === null) {
      throw new Error(
        "Missing the required parameter 'addReceiptRequest' when calling updateReceipt",
      );
    }

    let path = "/receipts/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addReceiptRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
