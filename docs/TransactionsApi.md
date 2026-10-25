# Accountingsh.TransactionsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                        | HTTP request                                            | Description                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------- |
| [**addLink**](TransactionsApi.md#addLink)                                     | **POST** /transactions/{uuid}/links                     | Add a new transaction link                                |
| [**addTransaction**](TransactionsApi.md#addTransaction)                       | **POST** /transactions                                  | Add a transaction                                         |
| [**addTransactionCode**](TransactionsApi.md#addTransactionCode)               | **POST** /transactions/{uuid}/codes                     | Add a transaction&#39;s code                              |
| [**deleteLink**](TransactionsApi.md#deleteLink)                               | **DELETE** /transactions/{uuid}/links/{link_uuid}       | Delete a transaction link                                 |
| [**deleteTransaction**](TransactionsApi.md#deleteTransaction)                 | **DELETE** /transactions/{uuid}                         | Delete a transaction                                      |
| [**deleteTransactionCode**](TransactionsApi.md#deleteTransactionCode)         | **DELETE** /transactions/{uuid}/codes/{code}            | Delete a transaction&#39;s code                           |
| [**getTransaction**](TransactionsApi.md#getTransaction)                       | **GET** /transactions/{uuid}                            | Get a transaction                                         |
| [**importTransactions**](TransactionsApi.md#importTransactions)               | **POST** /transactions/import                           | Import transactions - INTERNAL                            |
| [**ledger**](TransactionsApi.md#ledger)                                       | **GET** /transactions/ledger                            | List company&#39;s transactions and transfers             |
| [**listLinks**](TransactionsApi.md#listLinks)                                 | **GET** /transactions/{uuid}/links                      | List a transaction links                                  |
| [**listTransactionCodes**](TransactionsApi.md#listTransactionCodes)           | **GET** /transactions/{uuid}/codes                      | List transaction&#39;s codes                              |
| [**listTransactions**](TransactionsApi.md#listTransactions)                   | **GET** /transactions                                   | List company&#39;s transactions                           |
| [**reconciliationReject**](TransactionsApi.md#reconciliationReject)           | **POST** /transactions/{uuid}/reconciliation/rejections | Remember a rejected transaction/document candidate        |
| [**reconciliationRun**](TransactionsApi.md#reconciliationRun)                 | **POST** /transactions/{uuid}/reconciliation            | Schedule background matching for human review             |
| [**reconciliationSuggestions**](TransactionsApi.md#reconciliationSuggestions) | **GET** /transactions/{uuid}/reconciliation/suggestions | Rank document and payment matches without creating links  |
| [**reverseTransactionLink**](TransactionsApi.md#reverseTransactionLink)       | **POST** /transactions/{uuid}/links/{link_uuid}/reverse | Reverse a human-confirmed match and its generated payment |
| [**updateLink**](TransactionsApi.md#updateLink)                               | **PUT** /transactions/{uuid}/links/{link_uuid}          | Update a transaction link                                 |
| [**updateTransaction**](TransactionsApi.md#updateTransaction)                 | **PUT** /transactions/{uuid}                            | Update a transaction                                      |
| [**updateTransactionCode**](TransactionsApi.md#updateTransactionCode)         | **PUT** /transactions/{uuid}/codes/{code}               | Update a transaction&#39;s code                           |
| [**viewLink**](TransactionsApi.md#viewLink)                                   | **GET** /transactions/{uuid}/links/{link_uuid}          | View a transaction link                                   |

## addLink

> addLink(uuid, addLinkRequest)

Add a new transaction link

Add a new transaction link. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;transaction_link.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let addLinkRequest = {}; // AddLinkRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.addLink(uuid, addLinkRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name               | Type                                    | Description                                                                        | Notes |
| ------------------ | --------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**           | **String**                              | A transaction uuid                                                                 |
| **addLinkRequest** | [**AddLinkRequest**](AddLinkRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addTransaction

> addTransaction(addTransactionRequest)

Add a transaction

Add a transaction. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;transaction.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransactionRequest = {}; // AddTransactionRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addTransactionRequest** | [**AddTransactionRequest**](AddTransactionRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addTransactionCode

> addTransactionCode(uuid, addTransactionCodeRequest)

Add a transaction&#39;s code

Add a transaction&#39;s code. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;transaction_code.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let addTransactionCodeRequest = {}; // AddTransactionCodeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions
  .addTransactionCode(uuid, addTransactionCodeRequest)
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

| Name                          | Type                                                          | Description                                                                        | Notes |
| ----------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                      | **String**                                                    | The transaction uuid                                                               |
| **addTransactionCodeRequest** | [**AddTransactionCodeRequest**](AddTransactionCodeRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteLink

> deleteLink(uuid, linkUuid)

Delete a transaction link

Delete a transaction link. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;transaction_link.delete&#x60;.

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

| Name         | Type       | Description                                | Notes |
| ------------ | ---------- | ------------------------------------------ | ----- |
| **uuid**     | **String** | A transaction uuid                         |
| **linkUuid** | **String** | A transaction link uuid OR the target uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## deleteTransaction

> deleteTransaction(uuid)

Delete a transaction

Delete a transaction. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;transaction.delete&#x60;.

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

Delete a transaction&#39;s code. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;transaction_code.delete&#x60;.

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

Get a transaction. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;transaction.view&#x60;.

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

Import transaction records using the internal import payload. This operation is intended for the application import workflow. Requires at least one permission: &#x60;transaction.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let importTransactionsRequest = {}; // ImportTransactionsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                          | Type                                                          | Description                                                                        | Notes |
| ----------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **importTransactionsRequest** | [**ImportTransactionsRequest**](ImportTransactionsRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## ledger

> ledger(fields, page, perPage, account, orderBy)

List company&#39;s transactions and transfers

Retrieve ledger entries combining transactions and transfers. Optionally filter by the account query parameter. Requires at least one permission: &#x60;transaction.list&#x60;, &#x60;list.transfers&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,account,amount,event_date"; // String | Comma-separated fields to include in each record. Default fields: uuid, account, amount, event_date.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let account = "account_example"; // String | An account uuid to filter results
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions.ledger(fields, page, perPage, account, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                          | Notes                      |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, account, amount, event_date. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                         | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                 | [optional] [default to 10] |
| **account** | **String** | An account uuid to filter results                                                                    | [optional]                 |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                              | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listLinks

> listLinks(uuid, fields, page, perPage, orderBy)

List a transaction links

List a transaction links. Retrieve records using the query parameters below. Requires at least one permission: &#x60;transaction_link.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let fields = "target_type,target,link_status"; // String | Comma-separated fields to include in each record. Default fields: target_type, target, link_status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions.listLinks(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                         | Notes                      |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------- | -------------------------- |
| **uuid**    | **String** | A transaction uuid                                                                                  |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: target_type, target, link_status. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                        | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                             | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTransactionCodes

> listTransactionCodes(uuid, fields, page, perPage, account, orderBy)

List transaction&#39;s codes

List transaction&#39;s codes. Retrieve records using the query parameters below. Requires at least one permission: &#x60;transaction_code.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let fields = "uuid,code,description,amount"; // String | Comma-separated fields to include in each record. Default fields: uuid, code, description, amount.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let account = "account_example"; // String | List to the specified account
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions
  .listTransactionCodes(uuid, fields, page, perPage, account, orderBy)
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

| Name        | Type       | Description                                                                                        | Notes                      |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| **uuid**    | **String** | The transaction uuid                                                                               |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, code, description, amount. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                       | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.               | [optional] [default to 10] |
| **account** | **String** | List to the specified account                                                                      | [optional]                 |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                            | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTransactions

> listTransactions(fields, page, perPage, account, orderBy)

List company&#39;s transactions

List company&#39;s transactions. Retrieve records using the query parameters below. Requires at least one permission: &#x60;transaction.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,account,amount,transaction_date"; // String | Comma-separated fields to include in each record. Default fields: uuid, account, amount, transaction_date.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let account = "account_example"; // String | List to the specified account
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions
  .listTransactions(fields, page, perPage, account, orderBy)
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

| Name        | Type       | Description                                                                                                | Notes                      |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, account, amount, transaction_date. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                               | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                       | [optional] [default to 10] |
| **account** | **String** | List to the specified account                                                                              | [optional]                 |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                    | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## reconciliationReject

> reconciliationReject(uuid, reconciliationRejectRequest)

Remember a rejected transaction/document candidate

Exclude a bill or invoice candidate from subsequent automatic matching. Confirmed financial links cannot be rejected through this operation. Requires &#x60;transaction_link.delete&#x60;, &#x60;transaction.view&#x60;, &#x60;view.bill&#x60; and &#x60;view.invoice&#x60; permissions.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let reconciliationRejectRequest = {}; // ReconciliationRejectRequest |

accounting.transactions
  .reconciliationReject(uuid, reconciliationRejectRequest)
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

| Name                            | Type                                                              | Description | Notes |
| ------------------------------- | ----------------------------------------------------------------- | ----------- | ----- |
| **uuid**                        | **String**                                                        |             |
| **reconciliationRejectRequest** | [**ReconciliationRejectRequest**](ReconciliationRejectRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## reconciliationRun

> reconciliationRun(uuid)

Schedule background matching for human review

Queue transaction matching in the background. Inspect transaction links after processing; suggestions have no financial effects until human confirmation. Requires &#x60;transaction_link.add&#x60;, &#x60;transaction.view&#x60;, &#x60;view.bill&#x60; and &#x60;view.invoice&#x60; permissions.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.transactions.reconciliationRun(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **uuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## reconciliationSuggestions

> reconciliationSuggestions(uuid)

Rank document and payment matches without creating links

Rank candidate documents and existing payments for review without creating links or payments. Requires &#x60;transaction.view&#x60;, &#x60;view.bill&#x60; and &#x60;view.invoice&#x60; permissions.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.transactions.reconciliationSuggestions(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **uuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## reverseTransactionLink

> reverseTransactionLink(uuid, linkUuid)

Reverse a human-confirmed match and its generated payment

Reverse a confirmed match and its generated payment while preserving a reused payment. Requires &#x60;transaction_link.edit&#x60;, &#x60;edit.invoice.revenues&#x60; and the target document viewing permission (&#x60;view.bill&#x60; or &#x60;view.invoice&#x60;).

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let linkUuid = "linkUuid_example"; // String |

accounting.transactions.reverseTransactionLink(uuid, linkUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name         | Type       | Description | Notes |
| ------------ | ---------- | ----------- | ----- |
| **uuid**     | **String** |             |
| **linkUuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateLink

> updateLink(uuid, linkUuid, addLinkRequest)

Update a transaction link

Update a transaction link. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;transaction_link.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid
let addLinkRequest = {}; // AddLinkRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.updateLink(uuid, linkUuid, addLinkRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name               | Type                                    | Description                                                                        | Notes |
| ------------------ | --------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**           | **String**                              | A transaction uuid                                                                 |
| **linkUuid**       | **String**                              | A transaction link uuid OR the target uuid                                         |
| **addLinkRequest** | [**AddLinkRequest**](AddLinkRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTransaction

> updateTransaction(uuid, addTransactionRequest)

Update a transaction

Update a transaction. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;transaction.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let addTransactionRequest = {}; // AddTransactionRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The transaction uuid                                                               |
| **addTransactionRequest** | [**AddTransactionRequest**](AddTransactionRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateTransactionCode

> updateTransactionCode(uuid, code, addTransactionCodeRequest)

Update a transaction&#39;s code

Update a transaction&#39;s code. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;transaction_code.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let code = "code_example"; // String | Identifier of the code selected by this route.
let addTransactionCodeRequest = {}; // AddTransactionCodeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions
  .updateTransactionCode(uuid, code, addTransactionCodeRequest)
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

| Name                          | Type                                                          | Description                                                                        | Notes |
| ----------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                      | **String**                                                    | The transaction uuid                                                               |
| **code**                      | **String**                                                    | Identifier of the code selected by this route.                                     |
| **addTransactionCodeRequest** | [**AddTransactionCodeRequest**](AddTransactionCodeRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## viewLink

> viewLink(uuid, linkUuid)

View a transaction link

View a transaction link. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;transaction_link.view&#x60;.

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

| Name         | Type       | Description                                | Notes |
| ------------ | ---------- | ------------------------------------------ | ----- |
| **uuid**     | **String** | A transaction uuid                         |
| **linkUuid** | **String** | A transaction link uuid OR the target uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
