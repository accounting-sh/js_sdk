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

Add a tag. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.tag&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTagRequest = {}; // AddTagRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name              | Type                                  | Description                                                                        | Notes |
| ----------------- | ------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addTagRequest** | [**AddTagRequest**](AddTagRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteTag

> deleteTag(uuid)

Delete a tag

Delete a tag. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.tag&#x60;.

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

Get a tag. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.tag&#x60;.

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

> listTags(fields, page, perPage, orderBy)

List company&#39;s tags

List company&#39;s tags. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.tags&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,key,value,attached_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, key, value, attached_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.tags.listTags(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                      | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, key, value, attached_at. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                     | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.             | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                          | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listTagsByResource

> listTagsByResource(resource, fields, page, perPage, orderBy)

List company&#39;s tags by resource attachment

List company&#39;s tags by resource attachment. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;list.tags&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let resource = "resource_example"; // String | The resource
let fields = "uuid,key,value,attached_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, key, value, attached_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.tags
  .listTagsByResource(resource, fields, page, perPage, orderBy)
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

| Name         | Type       | Description                                                                                      | Notes                      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| **resource** | **String** | The resource                                                                                     |
| **fields**   | **String** | Comma-separated fields to include in each record. Default fields: uuid, key, value, attached_at. | [optional]                 |
| **page**     | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                     | [optional] [default to 1]  |
| **perPage**  | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.             | [optional] [default to 10] |
| **orderBy**  | **String** | Sort by a supported field and direction, using field:asc or field:desc.                          | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateTag

> updateTag(uuid, addTagRequest)

Update a tag

Update a tag. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.tag&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid
let addTagRequest = {}; // AddTagRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name              | Type                                  | Description                                                                        | Notes |
| ----------------- | ------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**          | **String**                            | The tag uuid                                                                       |
| **addTagRequest** | [**AddTagRequest**](AddTagRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
