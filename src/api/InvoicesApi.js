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

export class InvoicesApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addInvoice(addInvoiceRequest) {
    // verify the required parameter 'addInvoiceRequest' is set
    if (addInvoiceRequest === undefined || addInvoiceRequest === null) {
      throw new Error(
        "Missing the required parameter 'addInvoiceRequest' when calling addInvoice",
      );
    }

    let path = "/incomes/invoices";

    let options = {
      params: {},
      data: addInvoiceRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  addInvoicePayment(uuid, addBillPaymentRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling addInvoicePayment",
      );
    }

    // verify the required parameter 'addBillPaymentRequest' is set
    if (addBillPaymentRequest === undefined || addBillPaymentRequest === null) {
      throw new Error(
        "Missing the required parameter 'addBillPaymentRequest' when calling addInvoicePayment",
      );
    }

    let path = "/incomes/invoices/{uuid}/payments";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addBillPaymentRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteInvoice(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteInvoice",
      );
    }

    let path = "/incomes/invoices/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getInvoice(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getInvoice",
      );
    }

    let path = "/incomes/invoices/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getInvoiceDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getInvoiceDocument",
      );
    }

    let path = "/incomes/invoices/{uuid}/document";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listInvoices(fields = null, page = null, perPage = null) {
    let path = "/incomes/invoices";

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

  listUnpaidInvoices() {
    let path = "/incomes/invoices/unpaid";

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  updateInvoice(uuid, addInvoiceRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateInvoice",
      );
    }

    // verify the required parameter 'addInvoiceRequest' is set
    if (addInvoiceRequest === undefined || addInvoiceRequest === null) {
      throw new Error(
        "Missing the required parameter 'addInvoiceRequest' when calling updateInvoice",
      );
    }

    let path = "/incomes/invoices/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addInvoiceRequest,
    };

    return this.accounting.request("PUT", path, options);
  }

  updateInvoicePayment(uuid, payment, addBillPaymentRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateInvoicePayment",
      );
    }

    // verify the required parameter 'payment' is set
    if (payment === undefined || payment === null) {
      throw new Error(
        "Missing the required parameter 'payment' when calling updateInvoicePayment",
      );
    }

    // verify the required parameter 'addBillPaymentRequest' is set
    if (addBillPaymentRequest === undefined || addBillPaymentRequest === null) {
      throw new Error(
        "Missing the required parameter 'addBillPaymentRequest' when calling updateInvoicePayment",
      );
    }

    let path = "/incomes/invoices/{uuid}/payments/{payment}";
    path = path.replace("{uuid}", uuid);
    path = path.replace("{payment}", payment);

    let options = {
      params: {},
      data: addBillPaymentRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
