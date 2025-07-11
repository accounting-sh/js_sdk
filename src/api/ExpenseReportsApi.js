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

export class ExpenseReportsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addExpenseReport(addExpenseReportRequest) {
    // verify the required parameter 'addExpenseReportRequest' is set
    if (
      addExpenseReportRequest === undefined ||
      addExpenseReportRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addExpenseReportRequest' when calling addExpenseReport",
      );
    }

    let path = "/expenses/expense-reports";

    let options = {
      params: {},
      data: addExpenseReportRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteExpenseReport(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteExpenseReport",
      );
    }

    let path = "/expenses/expense-reports/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  expenseReportOAuthLogin(method) {
    // verify the required parameter 'method' is set
    if (method === undefined || method === null) {
      throw new Error(
        "Missing the required parameter 'method' when calling expenseReportOAuthLogin",
      );
    }

    let path = "/expenses/expense-reports/login/{method}";
    path = path.replace("{method}", method);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getExpenseReport(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getExpenseReport",
      );
    }

    let path = "/expenses/expense-reports/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getExpenseReportAccount() {
    let path = "/expenses/expense-reports/me";

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getExpenseReportUser(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getExpenseReportUser",
      );
    }

    let path = "/expenses/expense-reports/users/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listExpenseReports(fields = null, page = null, perPage = null) {
    let path = "/expenses/expense-reports";

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

  sendExpenseReportLoginEmail(sendExpenseReportLoginEmailRequest) {
    // verify the required parameter 'sendExpenseReportLoginEmailRequest' is set
    if (
      sendExpenseReportLoginEmailRequest === undefined ||
      sendExpenseReportLoginEmailRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'sendExpenseReportLoginEmailRequest' when calling sendExpenseReportLoginEmail",
      );
    }

    let path = "/expenses/expense-reports/login";

    let options = {
      params: {},
      data: sendExpenseReportLoginEmailRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  updateExpenseReport(uuid, addExpenseReportRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateExpenseReport",
      );
    }

    // verify the required parameter 'addExpenseReportRequest' is set
    if (
      addExpenseReportRequest === undefined ||
      addExpenseReportRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addExpenseReportRequest' when calling updateExpenseReport",
      );
    }

    let path = "/expenses/expense-reports/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addExpenseReportRequest,
    };

    return this.accounting.request("PUT", path, options);
  }

  updateExpenseReportAccount(updateExpenseReportAccountRequest) {
    // verify the required parameter 'updateExpenseReportAccountRequest' is set
    if (
      updateExpenseReportAccountRequest === undefined ||
      updateExpenseReportAccountRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'updateExpenseReportAccountRequest' when calling updateExpenseReportAccount",
      );
    }

    let path = "/expenses/expense-reports/me";

    let options = {
      params: {},
      data: updateExpenseReportAccountRequest,
    };

    return this.accounting.request("PUT", path, options);
  }

  updateExpenseReportSettings(updateExpenseReportSettingsRequest) {
    // verify the required parameter 'updateExpenseReportSettingsRequest' is set
    if (
      updateExpenseReportSettingsRequest === undefined ||
      updateExpenseReportSettingsRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'updateExpenseReportSettingsRequest' when calling updateExpenseReportSettings",
      );
    }

    let path = "/expenses/expense-reports/settings";

    let options = {
      params: {},
      data: updateExpenseReportSettingsRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  verifyExpenseReportSettings(verifyExpenseReportSettingsRequest) {
    // verify the required parameter 'verifyExpenseReportSettingsRequest' is set
    if (
      verifyExpenseReportSettingsRequest === undefined ||
      verifyExpenseReportSettingsRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'verifyExpenseReportSettingsRequest' when calling verifyExpenseReportSettings",
      );
    }

    let path = "/expenses/expense-reports/verify";

    let options = {
      params: {},
      data: verifyExpenseReportSettingsRequest,
    };

    return this.accounting.request("POST", path, options);
  }
}
