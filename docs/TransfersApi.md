# Accountingsh.TransfersApi

All URIs are relative to *https://api.accounting.sh*

| Method                                               | HTTP request                 | Description                  |
| ---------------------------------------------------- | ---------------------------- | ---------------------------- |
| [**addTransfer**](TransfersApi.md#addTransfer)       | **POST** /transfers          | Add a transfer               |
| [**deleteTransfer**](TransfersApi.md#deleteTransfer) | **DELETE** /transfers/{uuid} | Delete a transfer            |
| [**getTransfer**](TransfersApi.md#getTransfer)       | **GET** /transfers/{uuid}    | Get a transfer               |
| [**listTransfers**](TransfersApi.md#listTransfers)   | **GET** /transfers           | List company&#39;s transfers |
| [**updateTransfer**](TransfersApi.md#updateTransfer) | **PUT** /transfers/{uuid}    | Update a transfer            |

## addTransfer

> addTransfer(addTransferRequest)

Add a transfer

Add a transfer. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.transfer&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransferRequest = {}; // AddTransferRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transfers.addTransfer(addTransferRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                   | Type                                            | Description                                                                        | Notes |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addTransferRequest** | [**AddTransferRequest**](AddTransferRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteTransfer

> deleteTransfer(uuid)

Delete a transfer

Delete a transfer. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.transfer&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid

accounting.transfers.deleteTransfer(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description       | Notes |
| -------- | ---------- | ----------------- | ----- |
| **uuid** | **String** | The transfer uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTransfer

> getTransfer(uuid)

Get a transfer

Get a transfer. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.transfer&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid

accounting.transfers.getTransfer(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description       | Notes |
| -------- | ---------- | ----------------- | ----- |
| **uuid** | **String** | The transfer uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTransfers

> listTransfers(fields, page, perPage, orderBy)

List company&#39;s transfers

List company&#39;s transfers. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.transfers&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,from,to,amount"; // String | Comma-separated fields to include in each record. Default fields: uuid, from, to, amount.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transfers.listTransfers(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                               | Notes                      |
| ----------- | ---------- | ----------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, from, to, amount. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                              | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.      | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                   | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateTransfer

> updateTransfer(uuid, addTransferRequest)

Update a transfer

Update a transfer. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.transfer&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid
let addTransferRequest = {}; // AddTransferRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transfers.updateTransfer(uuid, addTransferRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                   | Type                                            | Description                                                                        | Notes |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**               | **String**                                      | The transfer uuid                                                                  |
| **addTransferRequest** | [**AddTransferRequest**](AddTransferRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
