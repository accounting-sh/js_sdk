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

export class PaymentsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addPayment(addPaymentRequest) {
    // verify the required parameter 'addPaymentRequest' is set
    if (addPaymentRequest === undefined || addPaymentRequest === null) {
      throw new Error(
        "Missing the required parameter 'addPaymentRequest' when calling addPayment",
      );
    }

    let path = "/expenses/payments";

    let options = {
      params: {},
      data: addPaymentRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deletePayment(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deletePayment",
      );
    }

    let path = "/expenses/payments/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getPayment(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getPayment",
      );
    }

    let path = "/expenses/payments/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listPayments(fields = null, page = null, perPage = null) {
    let path = "/expenses/payments";

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

  updatePayment(uuid, addPaymentRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updatePayment",
      );
    }

    // verify the required parameter 'addPaymentRequest' is set
    if (addPaymentRequest === undefined || addPaymentRequest === null) {
      throw new Error(
        "Missing the required parameter 'addPaymentRequest' when calling updatePayment",
      );
    }

    let path = "/expenses/payments/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addPaymentRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
