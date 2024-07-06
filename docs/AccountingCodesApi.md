# Accountingsh.AccountingCodesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                 | HTTP request                        | Description                        |
| ---------------------------------------------------------------------- | ----------------------------------- | ---------------------------------- |
| [**addAccountingCode**](AccountingCodesApi.md#addAccountingCode)       | **POST** /accounting/codes          | Add an accounting code             |
| [**deleteAccountingCode**](AccountingCodesApi.md#deleteAccountingCode) | **DELETE** /accounting/codes/{uuid} | Delete an accounting code          |
| [**getAccountingCode**](AccountingCodesApi.md#getAccountingCode)       | **GET** /accounting/codes/{uuid}    | Get an accounting code             |
| [**listAccountingCodes**](AccountingCodesApi.md#listAccountingCodes)   | **GET** /accounting/codes           | List company&#39;s accounting code |
| [**updateAccountingCode**](AccountingCodesApi.md#updateAccountingCode) | **PUT** /accounting/codes/{uuid}    | Update an accounting code          |

## addAccountingCode

> addAccountingCode(addAccountingCodeRequest)

Add an accounting code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAccountingCodeRequest = {}; // AddAccountingCodeRequest |

accounting.accountingCodes.addAccountingCode(addAccountingCodeRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                         | Type                                                        | Description | Notes |
| ---------------------------- | ----------------------------------------------------------- | ----------- | ----- |
| **addAccountingCodeRequest** | [**AddAccountingCodeRequest**](AddAccountingCodeRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAccountingCode

> deleteAccountingCode(uuid)

Delete an accounting code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The accounting code uuid

accounting.accountingCodes.deleteAccountingCode(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description              | Notes |
| -------- | ---------- | ------------------------ | ----- |
| **uuid** | **String** | The accounting code uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAccountingCode

> getAccountingCode(uuid)

Get an accounting code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The accounting code uuid

accounting.accountingCodes.getAccountingCode(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description              | Notes |
| -------- | ---------- | ------------------------ | ----- |
| **uuid** | **String** | The accounting code uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAccountingCodes

> listAccountingCodes()

List company&#39;s accounting code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.accountingCodes.listAccountingCodes().then(
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

## updateAccountingCode

> updateAccountingCode(uuid, addAccountingCodeRequest)

Update an accounting code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The accounting code uuid
let addAccountingCodeRequest = {}; // AddAccountingCodeRequest |

accounting.accountingCodes
  .updateAccountingCode(uuid, addAccountingCodeRequest)
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

| Name                         | Type                                                        | Description              | Notes |
| ---------------------------- | ----------------------------------------------------------- | ------------------------ | ----- |
| **uuid**                     | **String**                                                  | The accounting code uuid |
| **addAccountingCodeRequest** | [**AddAccountingCodeRequest**](AddAccountingCodeRequest.md) |                          |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
