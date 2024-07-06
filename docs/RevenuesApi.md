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

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addRevenueRequest = {}; // AddRevenueRequest |

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

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addRevenueRequest** | [**AddRevenueRequest**](AddRevenueRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteRevenue

> deleteRevenue(uuid)

Delete a revenue

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

> listRevenues(fields, page, perPage)

List company&#39;s revenues

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.revenues.listRevenues(fields, page, perPage).then(
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

## updateRevenue

> updateRevenue(uuid, addRevenueRequest)

Update a revenue

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid
let addRevenueRequest = {}; // AddRevenueRequest |

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

| Name                  | Type                                          | Description      | Notes |
| --------------------- | --------------------------------------------- | ---------------- | ----- |
| **uuid**              | **String**                                    | The revenue uuid |
| **addRevenueRequest** | [**AddRevenueRequest**](AddRevenueRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
