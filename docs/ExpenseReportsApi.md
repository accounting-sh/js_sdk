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

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addExpenseReportRequest = {}; // AddExpenseReportRequest |

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

| Name                        | Type                                                      | Description | Notes |
| --------------------------- | --------------------------------------------------------- | ----------- | ----- |
| **addExpenseReportRequest** | [**AddExpenseReportRequest**](AddExpenseReportRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteExpenseReport

> deleteExpenseReport(uuid)

Delete an expense report

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

> listExpenseReports(fields, page, perPage)

List company&#39;s expense reports.

List company&#39;s expense reports. If the token used has the &#x60;expense_report.limited_to_self&#x60; permission, this will only list the user&#39;s expense reports

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.expenseReports.listExpenseReports(fields, page, perPage).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                | Notes      |
| ----------- | ---------- | ---------------------------------------------------------- | ---------- |
| **fields**  | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**    | **String** | The response page                                          | [optional] |
| **perPage** | **String** | The number of items per page                               | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## sendExpenseReportLoginEmail

> sendExpenseReportLoginEmail(sendExpenseReportLoginEmailRequest)

Request login email

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let sendExpenseReportLoginEmailRequest = {}; // SendExpenseReportLoginEmailRequest |

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

| Name                                   | Type                                                                            | Description | Notes |
| -------------------------------------- | ------------------------------------------------------------------------------- | ----------- | ----- |
| **sendExpenseReportLoginEmailRequest** | [**SendExpenseReportLoginEmailRequest**](SendExpenseReportLoginEmailRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateExpenseReport

> updateExpenseReport(uuid, addExpenseReportRequest)

Update an expense report

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid
let addExpenseReportRequest = {}; // AddExpenseReportRequest |

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

| Name                        | Type                                                      | Description             | Notes |
| --------------------------- | --------------------------------------------------------- | ----------------------- | ----- |
| **uuid**                    | **String**                                                | The expense report uuid |
| **addExpenseReportRequest** | [**AddExpenseReportRequest**](AddExpenseReportRequest.md) |                         |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateExpenseReportAccount

> updateExpenseReportAccount(updateExpenseReportAccountRequest)

Update the currently connected expense report user

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let updateExpenseReportAccountRequest = {}; // UpdateExpenseReportAccountRequest |

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

| Name                                  | Type                                                                          | Description | Notes |
| ------------------------------------- | ----------------------------------------------------------------------------- | ----------- | ----- |
| **updateExpenseReportAccountRequest** | [**UpdateExpenseReportAccountRequest**](UpdateExpenseReportAccountRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateExpenseReportSettings

> updateExpenseReportSettings(updateExpenseReportSettingsRequest)

Retrieve company settings for expense reports

At least an url or a company must be provided

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let updateExpenseReportSettingsRequest = {}; // UpdateExpenseReportSettingsRequest |

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

| Name                                   | Type                                                                            | Description | Notes |
| -------------------------------------- | ------------------------------------------------------------------------------- | ----------- | ----- |
| **updateExpenseReportSettingsRequest** | [**UpdateExpenseReportSettingsRequest**](UpdateExpenseReportSettingsRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## verifyExpenseReportSettings

> verifyExpenseReportSettings(verifyExpenseReportSettingsRequest)

Verify expense reports settings

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let verifyExpenseReportSettingsRequest = {}; // VerifyExpenseReportSettingsRequest |

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

| Name                                   | Type                                                                            | Description | Notes |
| -------------------------------------- | ------------------------------------------------------------------------------- | ----------- | ----- |
| **verifyExpenseReportSettingsRequest** | [**VerifyExpenseReportSettingsRequest**](VerifyExpenseReportSettingsRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
