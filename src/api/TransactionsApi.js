/**
 * Accounting API
 *
 * The version of the OpenAPI document: VERSION_HERE
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class TransactionsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addTransaction(addTransactionRequest) {
    // verify the required parameter 'addTransactionRequest' is set
    if (addTransactionRequest === undefined || addTransactionRequest === null) {
      throw new Error(
        "Missing the required parameter 'addTransactionRequest' when calling addTransaction",
      );
    }

    let path = "/transactions";

    let options = {
      params: {},
      data: addTransactionRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  addTransactionCode(uuid, updateTransactionCodeRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling addTransactionCode",
      );
    }

    // verify the required parameter 'updateTransactionCodeRequest' is set
    if (
      updateTransactionCodeRequest === undefined ||
      updateTransactionCodeRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'updateTransactionCodeRequest' when calling addTransactionCode",
      );
    }

    let path = "/transactions/{uuid}/codes";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: updateTransactionCodeRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteTransaction(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteTransaction",
      );
    }

    let path = "/transactions/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  deleteTransactionCode(uuid, code) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteTransactionCode",
      );
    }

    // verify the required parameter 'code' is set
    if (code === undefined || code === null) {
      throw new Error(
        "Missing the required parameter 'code' when calling deleteTransactionCode",
      );
    }

    let path = "/transactions/{uuid}/codes/{code}";
    path = path.replace("{uuid}", uuid);
    path = path.replace("{code}", code);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getTransaction(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getTransaction",
      );
    }

    let path = "/transactions/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  importTransactions(importTransactionsRequest) {
    // verify the required parameter 'importTransactionsRequest' is set
    if (
      importTransactionsRequest === undefined ||
      importTransactionsRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'importTransactionsRequest' when calling importTransactions",
      );
    }

    let path = "/transactions/import";

    let options = {
      params: {},
      data: importTransactionsRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  listTransactionCodes(
    uuid,
    fields = null,
    page = null,
    perPage = null,
    account = null,
  ) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling listTransactionCodes",
      );
    }

    let path = "/transactions/{uuid}/codes";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {
        fields: fields,
        page: page,
        per_page: perPage,
        account: account,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listTransactions(fields = null, page = null, perPage = null, account = null) {
    let path = "/transactions";

    let options = {
      params: {
        fields: fields,
        page: page,
        per_page: perPage,
        account: account,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  updateTransaction(uuid, addTransactionRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateTransaction",
      );
    }

    // verify the required parameter 'addTransactionRequest' is set
    if (addTransactionRequest === undefined || addTransactionRequest === null) {
      throw new Error(
        "Missing the required parameter 'addTransactionRequest' when calling updateTransaction",
      );
    }

    let path = "/transactions/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addTransactionRequest,
    };

    return this.accounting.request("PUT", path, options);
  }

  updateTransactionCode(uuid, updateTransactionCodeRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateTransactionCode",
      );
    }

    // verify the required parameter 'updateTransactionCodeRequest' is set
    if (
      updateTransactionCodeRequest === undefined ||
      updateTransactionCodeRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'updateTransactionCodeRequest' when calling updateTransactionCode",
      );
    }

    let path = "/transactions/{uuid}/codes";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: updateTransactionCodeRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}