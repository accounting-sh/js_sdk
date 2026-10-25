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

Add a bill. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.bill&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addBillRequest = {}; // AddBillRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name               | Type                                    | Description                                                                        | Notes |
| ------------------ | --------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addBillRequest** | [**AddBillRequest**](AddBillRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addBillPayment

> addBillPayment(uuid, addBillPaymentRequest)

Add a bill payment

Add a bill payment. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;add.invoice.payment&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The bill uuid                                                                      |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteBill

> deleteBill(uuid)

Delete a bill

Delete a bill. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.bill&#x60;.

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

Get a bill. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.bill&#x60;.

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

Retrieve the generated PDF for this record. HTTP 200 returns application/pdf. If generation is still pending, HTTP 202 returns JSON with success&#x3D;false and an explanation; retry later. Requires at least one permission: &#x60;regenerate.invoice&#x60;.

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

> listBills(fields, page, perPage, orderBy)

List company&#39;s bills

List company&#39;s bills. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.bills&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,contact,bill_number,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, contact, bill_number, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.bills.listBills(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                           | Notes                      |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, contact, bill_number, status. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                          | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                  | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                               | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateBill

> updateBill(uuid, updateBillRequest)

Update a bill

Update a bill. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.bill&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let updateBillRequest = {}; // UpdateBillRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.bills.updateBill(uuid, updateBillRequest).then(
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
| **uuid**              | **String**                                    | The bill uuid                                                                      |
| **updateBillRequest** | [**UpdateBillRequest**](UpdateBillRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateBillPayment

> updateBillPayment(uuid, payment, addBillPaymentRequest)

Update a bill payment

Update a bill payment. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.invoice.revenues&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let payment = "payment_example"; // String | The bill payment uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The bill uuid                                                                      |
| **payment**               | **String**                                            | The bill payment uuid                                                              |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
