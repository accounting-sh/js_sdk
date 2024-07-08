/**
 * Accounting API
 *
 * The version of the OpenAPI document: 7.5.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class BillsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addBill(addBillRequest) {
    // verify the required parameter 'addBillRequest' is set
    if (addBillRequest === undefined || addBillRequest === null) {
      throw new Error(
        "Missing the required parameter 'addBillRequest' when calling addBill",
      );
    }

    let path = "/expenses/bills";

    let options = {
      params: {},
      data: addBillRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  addBillPayment(uuid, addBillPaymentRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling addBillPayment",
      );
    }

    // verify the required parameter 'addBillPaymentRequest' is set
    if (addBillPaymentRequest === undefined || addBillPaymentRequest === null) {
      throw new Error(
        "Missing the required parameter 'addBillPaymentRequest' when calling addBillPayment",
      );
    }

    let path = "/expenses/bills/{uuid}/payments";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addBillPaymentRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteBill(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteBill",
      );
    }

    let path = "/expenses/bills/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getBill(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getBill",
      );
    }

    let path = "/expenses/bills/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getBillDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getBillDocument",
      );
    }

    let path = "/expenses/bills/{uuid}/document";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listBills(fields = null, page = null, perPage = null) {
    let path = "/expenses/bills";

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

  updateBill(uuid, addBillRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateBill",
      );
    }

    // verify the required parameter 'addBillRequest' is set
    if (addBillRequest === undefined || addBillRequest === null) {
      throw new Error(
        "Missing the required parameter 'addBillRequest' when calling updateBill",
      );
    }

    let path = "/expenses/bills/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addBillRequest,
    };

    return this.accounting.request("PUT", path, options);
  }

  updateBillPayment(uuid, payment, addBillPaymentRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateBillPayment",
      );
    }

    // verify the required parameter 'payment' is set
    if (payment === undefined || payment === null) {
      throw new Error(
        "Missing the required parameter 'payment' when calling updateBillPayment",
      );
    }

    // verify the required parameter 'addBillPaymentRequest' is set
    if (addBillPaymentRequest === undefined || addBillPaymentRequest === null) {
      throw new Error(
        "Missing the required parameter 'addBillPaymentRequest' when calling updateBillPayment",
      );
    }

    let path = "/expenses/bills/{uuid}/payments/{payment}";
    path = path.replace("{uuid}", uuid);
    path = path.replace("{payment}", payment);

    let options = {
      params: {},
      data: addBillPaymentRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
