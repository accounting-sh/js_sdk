# Accountingsh.TransactionsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                | HTTP request                                      | Description                                   |
| --------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| [**addLink**](TransactionsApi.md#addLink)                             | **POST** /transactions/{uuid}/links               | Add a new transaction link                    |
| [**addTransaction**](TransactionsApi.md#addTransaction)               | **POST** /transactions                            | Add a transaction                             |
| [**addTransactionCode**](TransactionsApi.md#addTransactionCode)       | **POST** /transactions/{uuid}/codes               | Add a transaction&#39;s code                  |
| [**deleteLink**](TransactionsApi.md#deleteLink)                       | **DELETE** /transactions/{uuid}/links/{link_uuid} | Delete a transaction link                     |
| [**deleteTransaction**](TransactionsApi.md#deleteTransaction)         | **DELETE** /transactions/{uuid}                   | Delete a transaction                          |
| [**deleteTransactionCode**](TransactionsApi.md#deleteTransactionCode) | **DELETE** /transactions/{uuid}/codes/{code}      | Delete a transaction&#39;s code               |
| [**getTransaction**](TransactionsApi.md#getTransaction)               | **GET** /transactions/{uuid}                      | Get a transaction                             |
| [**importTransactions**](TransactionsApi.md#importTransactions)       | **POST** /transactions/import                     | Import transactions - INTERNAL                |
| [**ledger**](TransactionsApi.md#ledger)                               | **GET** /transactions/ledger                      | List company&#39;s transactions and transfers |
| [**listLinks**](TransactionsApi.md#listLinks)                         | **GET** /transactions/{uuid}/links                | List a transaction links                      |
| [**listTransactionCodes**](TransactionsApi.md#listTransactionCodes)   | **GET** /transactions/{uuid}/codes                | List transaction&#39;s codes                  |
| [**listTransactions**](TransactionsApi.md#listTransactions)           | **GET** /transactions                             | List company&#39;s transactions               |
| [**updateLink**](TransactionsApi.md#updateLink)                       | **PUT** /transactions/{uuid}/links/{link_uuid}    | Update a transaction link                     |
| [**updateTransaction**](TransactionsApi.md#updateTransaction)         | **PUT** /transactions/{uuid}                      | Update a transaction                          |
| [**updateTransactionCode**](TransactionsApi.md#updateTransactionCode) | **PUT** /transactions/{uuid}/codes                | Update a transaction&#39;s code               |
| [**viewLink**](TransactionsApi.md#viewLink)                           | **GET** /transactions/{uuid}/links/{link_uuid}    | View a transaction link                       |

## addLink

> addLink(listLinks200ResponseLinksInner, uuid)

Add a new transaction link

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let listLinks200ResponseLinksInner = {}; // ListLinks200ResponseLinksInner |
let uuid = "uuid_example"; // String | A transaction uuid

accounting.transactions.addLink(listLinks200ResponseLinksInner, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                               | Type                                                                    | Description        | Notes      |
| ---------------------------------- | ----------------------------------------------------------------------- | ------------------ | ---------- |
| **listLinks200ResponseLinksInner** | [**ListLinks200ResponseLinksInner**](ListLinks200ResponseLinksInner.md) |                    |
| **uuid**                           | **String**                                                              | A transaction uuid | [optional] |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addTransaction

> addTransaction(addTransactionRequest)

Add a transaction

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransactionRequest = {}; // AddTransactionRequest |

accounting.transactions.addTransaction(addTransactionRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description | Notes |
| ------------------------- | ----------------------------------------------------- | ----------- | ----- |
| **addTransactionRequest** | [**AddTransactionRequest**](AddTransactionRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addTransactionCode

> addTransactionCode(uuid, updateTransactionCodeRequest)

Add a transaction&#39;s code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let updateTransactionCodeRequest = {}; // UpdateTransactionCodeRequest |

accounting.transactions
  .addTransactionCode(uuid, updateTransactionCodeRequest)
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

| Name                             | Type                                                                | Description          | Notes |
| -------------------------------- | ------------------------------------------------------------------- | -------------------- | ----- |
| **uuid**                         | **String**                                                          | The transaction uuid |
| **updateTransactionCodeRequest** | [**UpdateTransactionCodeRequest**](UpdateTransactionCodeRequest.md) |                      |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteLink

> deleteLink(uuid, linkUuid)

Delete a transaction link

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid

accounting.transactions.deleteLink(uuid, linkUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name         | Type       | Description                                | Notes      |
| ------------ | ---------- | ------------------------------------------ | ---------- |
| **uuid**     | **String** | A transaction uuid                         | [optional] |
| **linkUuid** | **String** | A transaction link uuid OR the target uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteTransaction

> deleteTransaction(uuid)

Delete a transaction

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid

accounting.transactions.deleteTransaction(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description          | Notes |
| -------- | ---------- | -------------------- | ----- |
| **uuid** | **String** | The transaction uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteTransactionCode

> deleteTransactionCode(uuid, code)

Delete a transaction&#39;s code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let code = "code_example"; // String | The transaction's code uuid

accounting.transactions.deleteTransactionCode(uuid, code).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                     | Notes |
| -------- | ---------- | ------------------------------- | ----- |
| **uuid** | **String** | The transaction uuid            |
| **code** | **String** | The transaction&#39;s code uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTransaction

> getTransaction(uuid)

Get a transaction

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid

accounting.transactions.getTransaction(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description          | Notes |
| -------- | ---------- | -------------------- | ----- |
| **uuid** | **String** | The transaction uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## importTransactions

> importTransactions(importTransactionsRequest)

Import transactions - INTERNAL

Import transaction from a file or directly from extracted details

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let importTransactionsRequest = {}; // ImportTransactionsRequest |

accounting.transactions.importTransactions(importTransactionsRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                          | Type                                                          | Description | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------- | ----- |
| **importTransactionsRequest** | [**ImportTransactionsRequest**](ImportTransactionsRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## ledger

> ledger(fields, page, perPage, account)

List company&#39;s transactions and transfers

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let account = "account_example"; // String | An account uuid to filter results

accounting.transactions.ledger(fields, page, perPage, account).then(
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
| **account** | **String** | An account uuid to filter results                          | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLinks

> listLinks(fields, page, perPage, uuid)

List a transaction links

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let uuid = "uuid_example"; // String | A transaction uuid

accounting.transactions.listLinks(fields, page, perPage, uuid).then(
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
| **uuid**    | **String** | A transaction uuid                                         | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTransactionCodes

> listTransactionCodes(uuid, fields, page, perPage, account)

List transaction&#39;s codes

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let account = "account_example"; // String | List to the specified account

accounting.transactions
  .listTransactionCodes(uuid, fields, page, perPage, account)
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

| Name        | Type       | Description                                                | Notes      |
| ----------- | ---------- | ---------------------------------------------------------- | ---------- |
| **uuid**    | **String** | The transaction uuid                                       |
| **fields**  | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**    | **String** | The response page                                          | [optional] |
| **perPage** | **String** | The number of items per page                               | [optional] |
| **account** | **String** | List to the specified account                              | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTransactions

> listTransactions(fields, page, perPage, account)

List company&#39;s transactions

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let account = "account_example"; // String | List to the specified account

accounting.transactions.listTransactions(fields, page, perPage, account).then(
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
| **account** | **String** | List to the specified account                              | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateLink

> updateLink(listLinks200ResponseLinksInner, uuid, linkUuid)

Update a transaction link

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let listLinks200ResponseLinksInner = {}; // ListLinks200ResponseLinksInner |
let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid

accounting.transactions
  .updateLink(listLinks200ResponseLinksInner, uuid, linkUuid)
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

| Name                               | Type                                                                    | Description                                | Notes      |
| ---------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------ | ---------- |
| **listLinks200ResponseLinksInner** | [**ListLinks200ResponseLinksInner**](ListLinks200ResponseLinksInner.md) |                                            |
| **uuid**                           | **String**                                                              | A transaction uuid                         | [optional] |
| **linkUuid**                       | **String**                                                              | A transaction link uuid OR the target uuid | [optional] |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTransaction

> updateTransaction(uuid, addTransactionRequest)

Update a transaction

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let addTransactionRequest = {}; // AddTransactionRequest |

accounting.transactions.updateTransaction(uuid, addTransactionRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description          | Notes |
| ------------------------- | ----------------------------------------------------- | -------------------- | ----- |
| **uuid**                  | **String**                                            | The transaction uuid |
| **addTransactionRequest** | [**AddTransactionRequest**](AddTransactionRequest.md) |                      |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTransactionCode

> updateTransactionCode(uuid, updateTransactionCodeRequest)

Update a transaction&#39;s code

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let updateTransactionCodeRequest = {}; // UpdateTransactionCodeRequest |

accounting.transactions
  .updateTransactionCode(uuid, updateTransactionCodeRequest)
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

| Name                             | Type                                                                | Description          | Notes |
| -------------------------------- | ------------------------------------------------------------------- | -------------------- | ----- |
| **uuid**                         | **String**                                                          | The transaction uuid |
| **updateTransactionCodeRequest** | [**UpdateTransactionCodeRequest**](UpdateTransactionCodeRequest.md) |                      |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## viewLink

> viewLink(uuid, linkUuid)

View a transaction link

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid

accounting.transactions.viewLink(uuid, linkUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name         | Type       | Description                                | Notes      |
| ------------ | ---------- | ------------------------------------------ | ---------- |
| **uuid**     | **String** | A transaction uuid                         | [optional] |
| **linkUuid** | **String** | A transaction link uuid OR the target uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
