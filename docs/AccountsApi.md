# Accountingsh.AccountsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                            | HTTP request                | Description                 |
| ------------------------------------------------- | --------------------------- | --------------------------- |
| [**addAccount**](AccountsApi.md#addAccount)       | **POST** /accounts          | Add an account              |
| [**deleteAccount**](AccountsApi.md#deleteAccount) | **DELETE** /accounts/{uuid} | Delete an account           |
| [**getAccount**](AccountsApi.md#getAccount)       | **GET** /accounts/{uuid}    | Get an account              |
| [**listAccounts**](AccountsApi.md#listAccounts)   | **GET** /accounts           | List company&#39;s accounts |
| [**updateAccount**](AccountsApi.md#updateAccount) | **PUT** /accounts/{uuid}    | Update an account           |

## addAccount

> addAccount(addAccountRequest)

Add an account

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAccountRequest = {}; // AddAccountRequest |

accounting.accounts.addAccount(addAccountRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addAccountRequest** | [**AddAccountRequest**](AddAccountRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAccount

> deleteAccount(uuid)

Delete an account

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid

accounting.accounts.deleteAccount(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The account uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAccount

> getAccount(uuid)

Get an account

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid

accounting.accounts.getAccount(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The account uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAccounts

> listAccounts(fields, page, perPage)

List company&#39;s accounts

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.accounts.listAccounts(fields, page, perPage).then(
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

## updateAccount

> updateAccount(uuid, addAccountRequest)

Update an account

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let addAccountRequest = {}; // AddAccountRequest |

accounting.accounts.updateAccount(uuid, addAccountRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                  | Type                                          | Description      | Notes |
| --------------------- | --------------------------------------------- | ---------------- | ----- |
| **uuid**              | **String**                                    | The account uuid |
| **addAccountRequest** | [**AddAccountRequest**](AddAccountRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
