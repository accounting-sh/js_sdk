# Accountingsh.ExpenseReportsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                              | HTTP request                                     | Description                                             |
| ----------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| [**addExpenseReport**](ExpenseReportsApi.md#addExpenseReport)                       | **POST** /expenses/expense-reports               | Add an expense report                                   |
| [**deleteExpenseReport**](ExpenseReportsApi.md#deleteExpenseReport)                 | **DELETE** /expenses/expense-reports/{uuid}      | Delete an expense report                                |
| [**expenseReportOAuthLogin**](ExpenseReportsApi.md#expenseReportOAuthLogin)         | **GET** /expenses/expense-reports/login/{method} | OAuth Login                                             |
| [**getExpenseReport**](ExpenseReportsApi.md#getExpenseReport)                       | **GET** /expenses/expense-reports/{uuid}         | Get an expense report                                   |
| [**getExpenseReportAccount**](ExpenseReportsApi.md#getExpenseReportAccount)         | **GET** /expenses/expense-reports/me             | Get the currently connected expense report user details |
| [**getExpenseReportUser**](ExpenseReportsApi.md#getExpenseReportUser)               | **GET** /expenses/expense-reports/users/{uuid}   | Get an user details                                     |
| [**listExpenseReports**](ExpenseReportsApi.md#listExpenseReports)                   | **GET** /expenses/expense-reports                | List company&#39;s expense reports.                     |
| [**sendExpenseReportLoginEmail**](ExpenseReportsApi.md#sendExpenseReportLoginEmail) | **POST** /expenses/expense-reports/login         | Request login email                                     |
| [**updateExpenseReport**](ExpenseReportsApi.md#updateExpenseReport)                 | **PUT** /expenses/expense-reports/{uuid}         | Update an expense report                                |
| [**updateExpenseReportAccount**](ExpenseReportsApi.md#updateExpenseReportAccount)   | **PUT** /expenses/expense-reports/me             | Update the currently connected expense report user      |
| [**updateExpenseReportSettings**](ExpenseReportsApi.md#updateExpenseReportSettings) | **POST** /expenses/expense-reports/settings      | Retrieve company settings for expense reports           |
| [**verifyExpenseReportSettings**](ExpenseReportsApi.md#verifyExpenseReportSettings) | **POST** /expenses/expense-reports/verify        | Verify expense reports settings                         |

## addExpenseReport

> addExpenseReport(addExpenseReportRequest)

Add an expense report

Add an expense report. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;expense_report.add&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addExpenseReportRequest = {}; // AddExpenseReportRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports.addExpenseReport(addExpenseReportRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                        | Type                                                      | Description                                                                        | Notes |
| --------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addExpenseReportRequest** | [**AddExpenseReportRequest**](AddExpenseReportRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteExpenseReport

> deleteExpenseReport(uuid)

Delete an expense report

Delete an expense report. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;expense_report.delete&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid

accounting.expenseReports.deleteExpenseReport(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description             | Notes |
| -------- | ---------- | ----------------------- | ----- |
| **uuid** | **String** | The expense report uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## expenseReportOAuthLogin

> expenseReportOAuthLogin(method)

OAuth Login

OAuth Login. Use the parameters and response fields below for this operation.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let method = "method_example"; // String | The OAuth Provider to use

accounting.expenseReports.expenseReportOAuthLogin(method).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name       | Type       | Description               | Notes |
| ---------- | ---------- | ------------------------- | ----- |
| **method** | **String** | The OAuth Provider to use |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getExpenseReport

> getExpenseReport(uuid)

Get an expense report

Get an expense report. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;expense_report.view&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid

accounting.expenseReports.getExpenseReport(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description             | Notes |
| -------- | ---------- | ----------------------- | ----- |
| **uuid** | **String** | The expense report uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getExpenseReportAccount

> getExpenseReportAccount()

Get the currently connected expense report user details

Get the currently connected expense report user details. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;expense_report.view.account&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.expenseReports.getExpenseReportAccount().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

This endpoint does not need any parameter.

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getExpenseReportUser

> getExpenseReportUser(uuid)

Get an user details

Get an user details. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;expense_report.view.user&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report user uuid

accounting.expenseReports.getExpenseReportUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                  | Notes |
| -------- | ---------- | ---------------------------- | ----- |
| **uuid** | **String** | The expense report user uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listExpenseReports

> listExpenseReports(fields, page, perPage, orderBy)

List company&#39;s expense reports.

List company&#39;s expense reports. Retrieve records using the query parameters below. Requires at least one permission: &#x60;expense_report.list&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,user,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, user, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.expenseReports
  .listExpenseReports(fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );
```

### Parameters

| Name        | Type       | Description                                                                           | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, user, status. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                          | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.  | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.               | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## sendExpenseReportLoginEmail

> sendExpenseReportLoginEmail(sendExpenseReportLoginEmailRequest)

Request login email

Request a sign-in email for an expense report user. This action sends an email; avoid automatic retries.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let sendExpenseReportLoginEmailRequest = {}; // SendExpenseReportLoginEmailRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .sendExpenseReportLoginEmail(sendExpenseReportLoginEmailRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );
```

### Parameters

| Name                                   | Type                                                                            | Description                                                                        | Notes |
| -------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **sendExpenseReportLoginEmailRequest** | [**SendExpenseReportLoginEmailRequest**](SendExpenseReportLoginEmailRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateExpenseReport

> updateExpenseReport(uuid, addExpenseReportRequest)

Update an expense report

Update an expense report. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;expense_report.edit&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid
let addExpenseReportRequest = {}; // AddExpenseReportRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .updateExpenseReport(uuid, addExpenseReportRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );
```

### Parameters

| Name                        | Type                                                      | Description                                                                        | Notes |
| --------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                    | **String**                                                | The expense report uuid                                                            |
| **addExpenseReportRequest** | [**AddExpenseReportRequest**](AddExpenseReportRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateExpenseReportAccount

> updateExpenseReportAccount(updateExpenseReportAccountRequest)

Update the currently connected expense report user

Update the currently connected expense report user. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;expense_report.edit.account&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let updateExpenseReportAccountRequest = {}; // UpdateExpenseReportAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .updateExpenseReportAccount(updateExpenseReportAccountRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );
```

### Parameters

| Name                                  | Type                                                                          | Description                                                                        | Notes |
| ------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **updateExpenseReportAccountRequest** | [**UpdateExpenseReportAccountRequest**](UpdateExpenseReportAccountRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateExpenseReportSettings

> updateExpenseReportSettings(updateExpenseReportSettingsRequest)

Retrieve company settings for expense reports

Retrieve company settings for expense reports. Use the parameters and response fields below for this operation.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let updateExpenseReportSettingsRequest = {}; // UpdateExpenseReportSettingsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .updateExpenseReportSettings(updateExpenseReportSettingsRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );
```

### Parameters

| Name                                   | Type                                                                            | Description                                                                        | Notes |
| -------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **updateExpenseReportSettingsRequest** | [**UpdateExpenseReportSettingsRequest**](UpdateExpenseReportSettingsRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## verifyExpenseReportSettings

> verifyExpenseReportSettings(verifyExpenseReportSettingsRequest)

Verify expense reports settings

Verify expense reports settings. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;edit.company.settings&#x60;. Requires company feature(s): &#x60;expense_report&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let verifyExpenseReportSettingsRequest = {}; // VerifyExpenseReportSettingsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .verifyExpenseReportSettings(verifyExpenseReportSettingsRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );
```

### Parameters

| Name                                   | Type                                                                            | Description                                                                        | Notes |
| -------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **verifyExpenseReportSettingsRequest** | [**VerifyExpenseReportSettingsRequest**](VerifyExpenseReportSettingsRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
