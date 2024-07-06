# Accountingsh.BillsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                 | HTTP request                                      | Description              |
| ------------------------------------------------------ | ------------------------------------------------- | ------------------------ |
| [**addBill**](BillsApi.md#addBill)                     | **POST** /expenses/bills                          | Add a bill               |
| [**addBillPayment**](BillsApi.md#addBillPayment)       | **POST** /expenses/bills/{uuid}/payments          | Add a bill payment       |
| [**deleteBill**](BillsApi.md#deleteBill)               | **DELETE** /expenses/bills/{uuid}                 | Delete a bill            |
| [**getBill**](BillsApi.md#getBill)                     | **GET** /expenses/bills/{uuid}                    | Get a bill               |
| [**getBillDocument**](BillsApi.md#getBillDocument)     | **GET** /expenses/bills/{uuid}/document           | Get a bill in PDF        |
| [**listBills**](BillsApi.md#listBills)                 | **GET** /expenses/bills                           | List company&#39;s bills |
| [**updateBill**](BillsApi.md#updateBill)               | **PUT** /expenses/bills/{uuid}                    | Update a bill            |
| [**updateBillPayment**](BillsApi.md#updateBillPayment) | **PUT** /expenses/bills/{uuid}/payments/{payment} | Update a bill payment    |

## addBill

> addBill(addBillRequest)

Add a bill

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addBillRequest = {}; // AddBillRequest |

accounting.bills.addBill(addBillRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name               | Type                                    | Description | Notes |
| ------------------ | --------------------------------------- | ----------- | ----- |
| **addBillRequest** | [**AddBillRequest**](AddBillRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addBillPayment

> addBillPayment(uuid, addBillPaymentRequest)

Add a bill payment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

accounting.bills.addBillPayment(uuid, addBillPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description   | Notes |
| ------------------------- | ----------------------------------------------------- | ------------- | ----- |
| **uuid**                  | **String**                                            | The bill uuid |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) |               |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteBill

> deleteBill(uuid)

Delete a bill

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid

accounting.bills.deleteBill(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description   | Notes |
| -------- | ---------- | ------------- | ----- |
| **uuid** | **String** | The bill uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBill

> getBill(uuid)

Get a bill

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid

accounting.bills.getBill(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description   | Notes |
| -------- | ---------- | ------------- | ----- |
| **uuid** | **String** | The bill uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBillDocument

> getBillDocument(uuid)

Get a bill in PDF

This endpoint generate a bill in PDF if &#x60;selfbilling&#x60; is set to true

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.bills.getBillDocument(uuid).then(
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
| **uuid** | **String** | The invoice uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

## listBills

> listBills(fields, page, perPage)

List company&#39;s bills

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.bills.listBills(fields, page, perPage).then(
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

## updateBill

> updateBill(uuid, addBillRequest)

Update a bill

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let addBillRequest = {}; // AddBillRequest |

accounting.bills.updateBill(uuid, addBillRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name               | Type                                    | Description   | Notes |
| ------------------ | --------------------------------------- | ------------- | ----- |
| **uuid**           | **String**                              | The bill uuid |
| **addBillRequest** | [**AddBillRequest**](AddBillRequest.md) |               |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateBillPayment

> updateBillPayment(uuid, payment, addBillPaymentRequest)

Update a bill payment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let payment = "payment_example"; // String | The bill payment uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

accounting.bills.updateBillPayment(uuid, payment, addBillPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description           | Notes |
| ------------------------- | ----------------------------------------------------- | --------------------- | ----- |
| **uuid**                  | **String**                                            | The bill uuid         |
| **payment**               | **String**                                            | The bill payment uuid |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) |                       |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
