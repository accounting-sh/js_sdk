# Accountingsh.RevenuesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                            | HTTP request                        | Description                 |
| ------------------------------------------------- | ----------------------------------- | --------------------------- |
| [**addRevenue**](RevenuesApi.md#addRevenue)       | **POST** /incomes/revenues          | Add a revenue               |
| [**deleteRevenue**](RevenuesApi.md#deleteRevenue) | **DELETE** /incomes/revenues/{uuid} | Delete a revenue            |
| [**getRevenue**](RevenuesApi.md#getRevenue)       | **GET** /incomes/revenues/{uuid}    | Get a revenue               |
| [**listRevenues**](RevenuesApi.md#listRevenues)   | **GET** /incomes/revenues           | List company&#39;s revenues |
| [**updateRevenue**](RevenuesApi.md#updateRevenue) | **PUT** /incomes/revenues/{uuid}    | Update a revenue            |

## addRevenue

> addRevenue(addRevenueRequest)

Add a revenue

Add a revenue. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.revenue&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addRevenueRequest = {}; // AddRevenueRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.revenues.addRevenue(addRevenueRequest).then(
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
| **addRevenueRequest** | [**AddRevenueRequest**](AddRevenueRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRevenue

> deleteRevenue(uuid)

Delete a revenue

Delete a revenue. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;revenue.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid

accounting.revenues.deleteRevenue(uuid).then(
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
| **uuid** | **String** | The revenue uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getRevenue

> getRevenue(uuid)

Get a revenue

Get a revenue. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.revenue&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid

accounting.revenues.getRevenue(uuid).then(
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
| **uuid** | **String** | The revenue uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listRevenues

> listRevenues(fields, page, perPage, orderBy)

List company&#39;s revenues

List company&#39;s revenues. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.revenues&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,paid_at,amount,currency"; // String | Comma-separated fields to include in each record. Default fields: uuid, paid_at, amount, currency.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.revenues.listRevenues(fields, page, perPage, orderBy).then(
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
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, paid_at, amount, currency. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                       | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.               | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                            | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateRevenue

> updateRevenue(uuid, addRevenueRequest)

Update a revenue

Update a revenue. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.revenue&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid
let addRevenueRequest = {}; // AddRevenueRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.revenues.updateRevenue(uuid, addRevenueRequest).then(
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
| **uuid**              | **String**                                    | The revenue uuid                                                                   |
| **addRevenueRequest** | [**AddRevenueRequest**](AddRevenueRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
