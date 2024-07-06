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

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addPaymentRequest = {}; // AddPaymentRequest |

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

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addPaymentRequest** | [**AddPaymentRequest**](AddPaymentRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deletePayment

> deletePayment(uuid)

Delete a payment

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

> listPayments(fields, page, perPage)

List company&#39;s payments

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.payments.listPayments(fields, page, perPage).then(
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

## updatePayment

> updatePayment(uuid, addPaymentRequest)

Update a payment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid
let addPaymentRequest = {}; // AddPaymentRequest |

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

| Name                  | Type                                          | Description      | Notes |
| --------------------- | --------------------------------------------- | ---------------- | ----- |
| **uuid**              | **String**                                    | The payment uuid |
| **addPaymentRequest** | [**AddPaymentRequest**](AddPaymentRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
