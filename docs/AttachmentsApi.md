# Accountingsh.AttachmentsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                           | HTTP request                             | Description                                     |
| ---------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------- |
| [**addAttachment**](AttachmentsApi.md#addAttachment)             | **POST** /attachments                    | Add an attachment                               |
| [**deleteAttachment**](AttachmentsApi.md#deleteAttachment)       | **DELETE** /attachments/{uuid}           | Delete an attachment                            |
| [**getAttachment**](AttachmentsApi.md#getAttachment)             | **GET** /attachments/{uuid}              | Get an attachment                               |
| [**listAttachments**](AttachmentsApi.md#listAttachments)         | **GET** /attachments                     | List company&#39;s attachments                  |
| [**retrieveAttachments**](AttachmentsApi.md#retrieveAttachments) | **GET** /attachments/resource/{resource} | List company&#39;s attachments link to resource |
| [**updateAttachment**](AttachmentsApi.md#updateAttachment)       | **PUT** /attachments/{uuid}              | Update an attachment                            |

## addAttachment

> addAttachment(addAttachmentRequest)

Add an attachment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAttachmentRequest = {}; // AddAttachmentRequest |

accounting.attachments.addAttachment(addAttachmentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                     | Type                                                | Description | Notes |
| ------------------------ | --------------------------------------------------- | ----------- | ----- |
| **addAttachmentRequest** | [**AddAttachmentRequest**](AddAttachmentRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAttachment

> deleteAttachment(uuid)

Delete an attachment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid

accounting.attachments.deleteAttachment(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description         | Notes |
| -------- | ---------- | ------------------- | ----- |
| **uuid** | **String** | The attachment uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getAttachment

> getAttachment(uuid)

Get an attachment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid

accounting.attachments.getAttachment(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description         | Notes |
| -------- | ---------- | ------------------- | ----- |
| **uuid** | **String** | The attachment uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAttachments

> listAttachments(fields, page, perPage)

List company&#39;s attachments

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.attachments.listAttachments(fields, page, perPage).then(
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

## retrieveAttachments

> retrieveAttachments(resource, fields, page, perPage)

List company&#39;s attachments link to resource

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let resource = "resource_example"; // String | The resource
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.attachments
  .retrieveAttachments(resource, fields, page, perPage)
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

| Name         | Type       | Description                                                | Notes      |
| ------------ | ---------- | ---------------------------------------------------------- | ---------- |
| **resource** | **String** | The resource                                               |
| **fields**   | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**     | **String** | The response page                                          | [optional] |
| **perPage**  | **String** | The number of items per page                               | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAttachment

> updateAttachment(uuid, addAttachmentRequest)

Update an attachment

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid
let addAttachmentRequest = {}; // AddAttachmentRequest |

accounting.attachments.updateAttachment(uuid, addAttachmentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                     | Type                                                | Description         | Notes |
| ------------------------ | --------------------------------------------------- | ------------------- | ----- |
| **uuid**                 | **String**                                          | The attachment uuid |
| **addAttachmentRequest** | [**AddAttachmentRequest**](AddAttachmentRequest.md) |                     |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
