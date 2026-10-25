# Accountingsh.InvoicesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                          | HTTP request                                        | Description                                                               |
| --------------------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------- |
| [**addInvoice**](InvoicesApi.md#addInvoice)                     | **POST** /incomes/invoices                          | Add an invoice                                                            |
| [**addInvoicePayment**](InvoicesApi.md#addInvoicePayment)       | **POST** /incomes/invoices/{uuid}/payments          | Add an invoice payment                                                    |
| [**deleteInvoice**](InvoicesApi.md#deleteInvoice)               | **DELETE** /incomes/invoices/{uuid}                 | Delete an invoice                                                         |
| [**getInvoice**](InvoicesApi.md#getInvoice)                     | **GET** /incomes/invoices/{uuid}                    | Get an invoice                                                            |
| [**getInvoiceDocument**](InvoicesApi.md#getInvoiceDocument)     | **GET** /incomes/invoices/{uuid}/document           | Get an invoice in PDF                                                     |
| [**getInvoiceIssuance**](InvoicesApi.md#getInvoiceIssuance)     | **GET** /incomes/invoices/{uuid}/issuance           | Retrieve the immutable source snapshot and original document fingerprints |
| [**listInvoices**](InvoicesApi.md#listInvoices)                 | **GET** /incomes/invoices                           | List company&#39;s invoices                                               |
| [**listUnpaidInvoices**](InvoicesApi.md#listUnpaidInvoices)     | **GET** /incomes/invoices/unpaid                    | List company&#39;s unpaid invoices                                        |
| [**updateInvoice**](InvoicesApi.md#updateInvoice)               | **PUT** /incomes/invoices/{uuid}                    | Update an invoice                                                         |
| [**updateInvoicePayment**](InvoicesApi.md#updateInvoicePayment) | **PUT** /incomes/invoices/{uuid}/payments/{payment} | Update an invoice payment                                                 |

## addInvoice

> addInvoice(addInvoiceRequest)

Add an invoice

Create an invoice. Send status&#x3D;draft to keep it editable with a temporary draft reference. The default status is received and triggers issuance, allocating a legal number and freezing invoice facts and original documents. French issuance requires resolved supply, buyer and VAT particulars. UK foreign-currency invoices retain sterling VAT conversion evidence. Requires at least one permission: &#x60;add.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addInvoiceRequest = {}; // AddInvoiceRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                  | Type                                          | Description                                                                        | Notes |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addInvoiceRequest** | [**AddInvoiceRequest**](AddInvoiceRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## addInvoicePayment

> addInvoicePayment(uuid, addBillPaymentRequest)

Add an invoice payment

Add an invoice payment. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;add.invoice.payment&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The invoice uuid                                                                   |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteInvoice

> deleteInvoice(uuid)

Delete an invoice

Delete an unissued draft. Issued invoices cannot be deleted; use a credit note to correct them. Requires at least one permission: &#x60;invoice.delete&#x60;.

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

Get an invoice. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.invoice&#x60;.

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

Retrieve the generated PDF for this record. HTTP 200 returns application/pdf. If generation is still pending, HTTP 202 returns JSON with success&#x3D;false and an explanation; retry later. Requires at least one permission: &#x60;regenerate.invoice&#x60;.

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

## getInvoiceIssuance

> getInvoiceIssuance(uuid)

Retrieve the immutable source snapshot and original document fingerprints

Read the frozen invoice facts, document hashes and archive provenance. Requires permission: &#x60;view.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.invoices.getInvoiceIssuance(uuid).then(
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

## listInvoices

> listInvoices(fields, page, perPage, orderBy)

List company&#39;s invoices

List company&#39;s invoices. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.invoices&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,contact,status,emitted"; // String | Comma-separated fields to include in each record. Default fields: uuid, contact, status, emitted.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.invoices.listInvoices(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                       | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, contact, status, emitted. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                      | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.              | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                           | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUnpaidInvoices

> listUnpaidInvoices()

List company&#39;s unpaid invoices

List company&#39;s unpaid invoices. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;list.invoices&#x60;.

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

> updateInvoice(uuid, updateInvoiceRequest)

Update an invoice

Update a draft or replay unchanged issued facts. Issued invoice facts, lines and original documents are immutable; corrections require a credit note. Omit particulars and vat_conversion to retain existing values; supplying particulars replaces the whole object. Requires at least one permission: &#x60;edit.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let updateInvoiceRequest = {}; // UpdateInvoiceRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.invoices.updateInvoice(uuid, updateInvoiceRequest).then(
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
| **uuid**                 | **String**                                          | The invoice uuid                                                                   |
| **updateInvoiceRequest** | [**UpdateInvoiceRequest**](UpdateInvoiceRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateInvoicePayment

> updateInvoicePayment(uuid, payment, addBillPaymentRequest)

Update an invoice payment

Update an invoice payment. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.invoice.revenues&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let payment = "payment_example"; // String | The invoice payment uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The invoice uuid                                                                   |
| **payment**               | **String**                                            | The invoice payment uuid                                                           |
| **addBillPaymentRequest** | [**AddBillPaymentRequest**](AddBillPaymentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
