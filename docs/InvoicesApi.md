# Accountingsh.InvoicesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                          | HTTP request                                        | Description                        |
| --------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------- |
| [**addInvoice**](InvoicesApi.md#addInvoice)                     | **POST** /incomes/invoices                          | Add an invoice                     |
| [**addInvoicePayment**](InvoicesApi.md#addInvoicePayment)       | **POST** /incomes/invoices/{uuid}/payments          | Add an invoice payment             |
| [**deleteInvoice**](InvoicesApi.md#deleteInvoice)               | **DELETE** /incomes/invoices/{uuid}                 | Delete an invoice                  |
| [**getInvoice**](InvoicesApi.md#getInvoice)                     | **GET** /incomes/invoices/{uuid}                    | Get an invoice                     |
| [**getInvoiceDocument**](InvoicesApi.md#getInvoiceDocument)     | **GET** /incomes/invoices/{uuid}/document           | Get an invoice in PDF              |
| [**listInvoices**](InvoicesApi.md#listInvoices)                 | **GET** /incomes/invoices                           | List company&#39;s invoices        |
| [**listUnpaidInvoices**](InvoicesApi.md#listUnpaidInvoices)     | **GET** /incomes/invoices/unpaid                    | List company&#39;s unpaid invoices |
| [**updateInvoice**](InvoicesApi.md#updateInvoice)               | **PUT** /incomes/invoices/{uuid}                    | Update an invoice                  |
| [**updateInvoicePayment**](InvoicesApi.md#updateInvoicePayment) | **PUT** /incomes/invoices/{uuid}/payments/{payment} | Update an invoice payment          |

## addInvoice

> addInvoice(addInvoiceRequest)

Add an invoice

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addInvoiceRequest = {}; // AddInvoiceRequest |

accounting.invoices.addInvoice(addInvoiceRequest).then(
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
| **addInvoiceRequest** | [**AddInvoiceRequest**](AddInvoiceRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addInvoicePayment

> addInvoicePayment(uuid, addBillPaymentRequest)

Add an invoice payment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

accounting.invoices.addInvoicePayment(uuid, addBillPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description      | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------- | ----- |
| **uuid**                  | **String**                                            | The invoice uuid |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteInvoice

> deleteInvoice(uuid)

Delete an invoice

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.invoices.deleteInvoice(uuid).then(
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
- **Accept**: application/json

## getInvoice

> getInvoice(uuid)

Get an invoice

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.invoices.getInvoice(uuid).then(
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
- **Accept**: application/json

## getInvoiceDocument

> getInvoiceDocument(uuid)

Get an invoice in PDF

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.invoices.getInvoiceDocument(uuid).then(
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

## listInvoices

> listInvoices(fields, page, perPage)

List company&#39;s invoices

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.invoices.listInvoices(fields, page, perPage).then(
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

## listUnpaidInvoices

> listUnpaidInvoices()

List company&#39;s unpaid invoices

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.invoices.listUnpaidInvoices().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

This endpoint does not need any parameter.

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateInvoice

> updateInvoice(uuid, addInvoiceRequest)

Update an invoice

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let addInvoiceRequest = {}; // AddInvoiceRequest |

accounting.invoices.updateInvoice(uuid, addInvoiceRequest).then(
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
| **uuid**              | **String**                                    | The invoice uuid |
| **addInvoiceRequest** | [**AddInvoiceRequest**](AddInvoiceRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateInvoicePayment

> updateInvoicePayment(uuid, payment, addBillPaymentRequest)

Update an invoice payment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let payment = "payment_example"; // String | The invoice payment uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

accounting.invoices
  .updateInvoicePayment(uuid, payment, addBillPaymentRequest)
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

| Name                      | Type                                                  | Description              | Notes |
| ------------------------- | ----------------------------------------------------- | ------------------------ | ----- |
| **uuid**                  | **String**                                            | The invoice uuid         |
| **payment**               | **String**                                            | The invoice payment uuid |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) |                          |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
