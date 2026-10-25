# Accountingsh.ReceiptsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                      | HTTP request                      | Description                 |
| ----------------------------------------------------------- | --------------------------------- | --------------------------- |
| [**addReceipt**](ReceiptsApi.md#addReceipt)                 | **POST** /receipts                | Add a receipt               |
| [**deleteReceipt**](ReceiptsApi.md#deleteReceipt)           | **DELETE** /receipts/{uuid}       | Delete a receipt            |
| [**getReceipt**](ReceiptsApi.md#getReceipt)                 | **GET** /receipts/{uuid}          | Get a receipt               |
| [**getReceiptDocument**](ReceiptsApi.md#getReceiptDocument) | **GET** /receipts/{uuid}/document | Get a receipt in PDF        |
| [**listReceipts**](ReceiptsApi.md#listReceipts)             | **GET** /receipts                 | List company&#39;s receipts |
| [**updateReceipt**](ReceiptsApi.md#updateReceipt)           | **PUT** /receipts/{uuid}          | Update a receipt            |

## addReceipt

> addReceipt(addReceiptRequest)

Add a receipt

Add a receipt. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.receipt&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addReceiptRequest = {}; // AddReceiptRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.receipts.addReceipt(addReceiptRequest).then(
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
| **addReceiptRequest** | [**AddReceiptRequest**](AddReceiptRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteReceipt

> deleteReceipt(uuid)

Delete a receipt

Delete a receipt. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;receipt.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid

accounting.receipts.deleteReceipt(uuid).then(
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
| **uuid** | **String** | The receipt uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getReceipt

> getReceipt(uuid)

Get a receipt

Get a receipt. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.receipt&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid

accounting.receipts.getReceipt(uuid).then(
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
| **uuid** | **String** | The receipt uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getReceiptDocument

> getReceiptDocument(uuid)

Get a receipt in PDF

Retrieve the generated PDF for this record. HTTP 200 returns application/pdf. If generation is still pending, HTTP 202 returns JSON with success&#x3D;false and an explanation; retry later. Requires at least one permission: &#x60;regenerate.receipt&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid

accounting.receipts.getReceiptDocument(uuid).then(
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
| **uuid** | **String** | The receipt uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

## listReceipts

> listReceipts(fields, page, perPage, orderBy)

List company&#39;s receipts

List company&#39;s receipts. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.receipts&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,for,from,receipt_number"; // String | Comma-separated fields to include in each record. Default fields: uuid, for, from, receipt_number.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.receipts.listReceipts(fields, page, perPage, orderBy).then(
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
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, for, from, receipt_number. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                       | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.               | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                            | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateReceipt

> updateReceipt(uuid, updateReceiptRequest)

Update a receipt

Update a receipt. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.receipt&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid
let updateReceiptRequest = {}; // UpdateReceiptRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.receipts.updateReceipt(uuid, updateReceiptRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                     | Type                                                | Description                                                                        | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                 | **String**                                          | The receipt uuid                                                                   |
| **updateReceiptRequest** | [**UpdateReceiptRequest**](UpdateReceiptRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
