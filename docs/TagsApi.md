# Accountingsh.TagsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                  | HTTP request                         | Description                                    |
| ------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| [**addTag**](TagsApi.md#addTag)                         | **POST** /tags                       | Add a tag                                      |
| [**deleteTag**](TagsApi.md#deleteTag)                   | **DELETE** /tags/{uuid}              | Delete a tag                                   |
| [**getTag**](TagsApi.md#getTag)                         | **GET** /tags/{uuid}                 | Get a tag                                      |
| [**listTags**](TagsApi.md#listTags)                     | **GET** /tags                        | List company&#39;s tags                        |
| [**listTagsByResource**](TagsApi.md#listTagsByResource) | **GET** /tags/attachments/{resource} | List company&#39;s tags by resource attachment |
| [**updateTag**](TagsApi.md#updateTag)                   | **PUT** /tags/{uuid}                 | Update a tag                                   |

## addTag

> addTag(addTagRequest)

Add a tag

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTagRequest = {}; // AddTagRequest |

accounting.tags.addTag(addTagRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name              | Type                                  | Description | Notes |
| ----------------- | ------------------------------------- | ----------- | ----- |
| **addTagRequest** | [**AddTagRequest**](AddTagRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteTag

> deleteTag(uuid)

Delete a tag

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid

accounting.tags.deleteTag(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **uuid** | **String** | The tag uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getTag

> getTag(uuid)

Get a tag

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid

accounting.tags.getTag(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description  | Notes |
| -------- | ---------- | ------------ | ----- |
| **uuid** | **String** | The tag uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTags

> listTags(fields, page, perPage)

List company&#39;s tags

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.tags.listTags(fields, page, perPage).then(
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

## listTagsByResource

> listTagsByResource(resource, fields, page, perPage)

List company&#39;s tags by resource attachment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let resource = "resource_example"; // String | The resource
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.tags.listTagsByResource(resource, fields, page, perPage).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name         | Type       | Description                                                | Notes      |
| ------------ | ---------- | ---------------------------------------------------------- | ---------- |
| **resource** | **String** | The resource                                               |
| **fields**   | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**     | **String** | The response page                                          | [optional] |
| **perPage**  | **String** | The number of items per page                               | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateTag

> updateTag(uuid, addTagRequest)

Update a tag

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid
let addTagRequest = {}; // AddTagRequest |

accounting.tags.updateTag(uuid, addTagRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name              | Type                                  | Description  | Notes |
| ----------------- | ------------------------------------- | ------------ | ----- |
| **uuid**          | **String**                            | The tag uuid |
| **addTagRequest** | [**AddTagRequest**](AddTagRequest.md) |              |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
