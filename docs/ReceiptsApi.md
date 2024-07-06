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

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addReceiptRequest = {}; // AddReceiptRequest |

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

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addReceiptRequest** | [**AddReceiptRequest**](AddReceiptRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteReceipt

> deleteReceipt(uuid)

Delete a receipt

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

> listReceipts(fields, page, perPage)

List company&#39;s receipts

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.receipts.listReceipts(fields, page, perPage).then(
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

## updateReceipt

> updateReceipt(uuid, addReceiptRequest)

Update a receipt

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid
let addReceiptRequest = {}; // AddReceiptRequest |

accounting.receipts.updateReceipt(uuid, addReceiptRequest).then(
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
| **uuid**              | **String**                                    | The receipt uuid |
| **addReceiptRequest** | [**AddReceiptRequest**](AddReceiptRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
