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

Add an account. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.account&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAccountRequest = {}; // AddAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                  | Type                                          | Description                                                                        | Notes |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addAccountRequest** | [**AddAccountRequest**](AddAccountRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAccount

> deleteAccount(uuid)

Delete an account

Delete an account. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.account&#x60;.

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

Get an account. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.account&#x60;.

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

> listAccounts(fields, page, perPage, orderBy)

List company&#39;s accounts

List company&#39;s accounts. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.accounts&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,bank,currency,journal_number"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, bank, currency, journal_number.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.accounts.listAccounts(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                                   | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, name, bank, currency, journal_number. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                                  | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                          | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                       | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAccount

> updateAccount(uuid, addAccountRequest)

Update an account

Update an account. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.account&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let addAccountRequest = {}; // AddAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                  | Type                                          | Description                                                                        | Notes |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**              | **String**                                    | The account uuid                                                                   |
| **addAccountRequest** | [**AddAccountRequest**](AddAccountRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
