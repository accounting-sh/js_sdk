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

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransferRequest = {}; // AddTransferRequest |

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

| Name                   | Type                                            | Description | Notes |
| ---------------------- | ----------------------------------------------- | ----------- | ----- |
| **addTransferRequest** | [**AddTransferRequest**](AddTransferRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteTransfer

> deleteTransfer(uuid)

Delete a transfer

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

> listTransfers(fields, page, perPage)

List company&#39;s transfers

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.transfers.listTransfers(fields, page, perPage).then(
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

## updateTransfer

> updateTransfer(uuid, addTransferRequest)

Update a transfer

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid
let addTransferRequest = {}; // AddTransferRequest |

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

| Name                   | Type                                            | Description       | Notes |
| ---------------------- | ----------------------------------------------- | ----------------- | ----- |
| **uuid**               | **String**                                      | The transfer uuid |
| **addTransferRequest** | [**AddTransferRequest**](AddTransferRequest.md) |                   |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
