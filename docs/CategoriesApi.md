# Accountingsh.CategoriesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                | HTTP request                  | Description                   |
| ----------------------------------------------------- | ----------------------------- | ----------------------------- |
| [**addCategory**](CategoriesApi.md#addCategory)       | **POST** /categories          | Add a category                |
| [**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /categories/{uuid} | Delete a category             |
| [**getCategory**](CategoriesApi.md#getCategory)       | **GET** /categories/{uuid}    | Get a category                |
| [**listCategories**](CategoriesApi.md#listCategories) | **GET** /categories           | List company&#39;s categories |
| [**updateCategory**](CategoriesApi.md#updateCategory) | **PUT** /categories/{uuid}    | Update a category             |

## addCategory

> addCategory(addCategoryRequest)

Add a category

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCategoryRequest = {}; // AddCategoryRequest |

accounting.categories.addCategory(addCategoryRequest).then(
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
| **addCategoryRequest** | [**AddCategoryRequest**](AddCategoryRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCategory

> deleteCategory(uuid)

Delete a category

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid

accounting.categories.deleteCategory(uuid).then(
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
| **uuid** | **String** | The category uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCategory

> getCategory(uuid)

Get a category

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid

accounting.categories.getCategory(uuid).then(
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
| **uuid** | **String** | The category uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCategories

> listCategories(fields, page, perPage)

List company&#39;s categories

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.categories.listCategories(fields, page, perPage).then(
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

## updateCategory

> updateCategory(uuid, addCategoryRequest)

Update a category

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid
let addCategoryRequest = {}; // AddCategoryRequest |

accounting.categories.updateCategory(uuid, addCategoryRequest).then(
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
| **uuid**               | **String**                                      | The category uuid |
| **addCategoryRequest** | [**AddCategoryRequest**](AddCategoryRequest.md) |                   |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
