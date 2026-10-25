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

Add a category. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.category&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCategoryRequest = {}; // AddCategoryRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                   | Type                                            | Description                                                                        | Notes |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addCategoryRequest** | [**AddCategoryRequest**](AddCategoryRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCategory

> deleteCategory(uuid)

Delete a category

Delete a category. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.category&#x60;.

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

Get a category. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.category&#x60;.

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

> listCategories(fields, page, perPage, orderBy)

List company&#39;s categories

List company&#39;s categories. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.categories&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,type,color"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, type, color.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.categories.listCategories(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, name, type, color. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                               | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.       | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                    | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCategory

> updateCategory(uuid, addCategoryRequest)

Update a category

Update a category. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.category&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid
let addCategoryRequest = {}; // AddCategoryRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                   | Type                                            | Description                                                                        | Notes |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**               | **String**                                      | The category uuid                                                                  |
| **addCategoryRequest** | [**AddCategoryRequest**](AddCategoryRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
