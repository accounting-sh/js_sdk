# Accountingsh.PaymentsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                            | HTTP request                         | Description                 |
| ------------------------------------------------- | ------------------------------------ | --------------------------- |
| [**addPayment**](PaymentsApi.md#addPayment)       | **POST** /expenses/payments          | Add a payment               |
| [**deletePayment**](PaymentsApi.md#deletePayment) | **DELETE** /expenses/payments/{uuid} | Delete a payment            |
| [**getPayment**](PaymentsApi.md#getPayment)       | **GET** /expenses/payments/{uuid}    | Get a payment               |
| [**listPayments**](PaymentsApi.md#listPayments)   | **GET** /expenses/payments           | List company&#39;s payments |
| [**updatePayment**](PaymentsApi.md#updatePayment) | **PUT** /expenses/payments/{uuid}    | Update a payment            |

## addPayment

> addPayment(addPaymentRequest)

Add a payment

Add a payment. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.payment&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addPaymentRequest = {}; // AddPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.payments.addPayment(addPaymentRequest).then(
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
| **addPaymentRequest** | [**AddPaymentRequest**](AddPaymentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deletePayment

> deletePayment(uuid)

Delete a payment

Delete a payment. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.payment&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid

accounting.payments.deletePayment(uuid).then(
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
| **uuid** | **String** | The payment uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getPayment

> getPayment(uuid)

Get a payment

Get a payment. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.payment&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid

accounting.payments.getPayment(uuid).then(
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
| **uuid** | **String** | The payment uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPayments

> listPayments(fields, page, perPage, orderBy)

List company&#39;s payments

List company&#39;s payments. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.payments&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,amount,currency,contact"; // String | Comma-separated fields to include in each record. Default fields: uuid, amount, currency, contact.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.payments.listPayments(fields, page, perPage, orderBy).then(
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
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, amount, currency, contact. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                       | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.               | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                            | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updatePayment

> updatePayment(uuid, addPaymentRequest)

Update a payment

Update a payment. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.payment&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid
let addPaymentRequest = {}; // AddPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.payments.updatePayment(uuid, addPaymentRequest).then(
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
| **uuid**              | **String**                                    | The payment uuid                                                                   |
| **addPaymentRequest** | [**AddPaymentRequest**](AddPaymentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
