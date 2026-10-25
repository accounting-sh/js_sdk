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

Add an attachment. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;attachment.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAttachmentRequest = {}; // AddAttachmentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                     | Type                                                | Description                                                                        | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addAttachmentRequest** | [**AddAttachmentRequest**](AddAttachmentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteAttachment

> deleteAttachment(uuid)

Delete an attachment

Delete an attachment. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;attachment.delete&#x60;.

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

Get an attachment. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;attachment.view&#x60;.

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

> listAttachments(fields, page, perPage, orderBy)

List company&#39;s attachments

List company&#39;s attachments. Retrieve records using the query parameters below. Requires at least one permission: &#x60;attachment.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,document,attached_to"; // String | Comma-separated fields to include in each record. Default fields: uuid, document, attached_to.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.attachments.listAttachments(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                    | Notes                      |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, document, attached_to. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                   | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.           | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                        | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## retrieveAttachments

> retrieveAttachments(resource, fields, page, perPage, orderBy)

List company&#39;s attachments link to resource

List company&#39;s attachments link to resource. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;attachment.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let resource = "resource_example"; // String | The resource
let fields = "uuid,document,attached_to"; // String | Comma-separated fields to include in each record. Default fields: uuid, document, attached_to.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.attachments
  .retrieveAttachments(resource, fields, page, perPage, orderBy)
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

| Name         | Type       | Description                                                                                    | Notes                      |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| **resource** | **String** | The resource                                                                                   |
| **fields**   | **String** | Comma-separated fields to include in each record. Default fields: uuid, document, attached_to. | [optional]                 |
| **page**     | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                   | [optional] [default to 1]  |
| **perPage**  | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.           | [optional] [default to 10] |
| **orderBy**  | **String** | Sort by a supported field and direction, using field:asc or field:desc.                        | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateAttachment

> updateAttachment(uuid, addAttachmentRequest)

Update an attachment

Update an attachment. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;attachment.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid
let addAttachmentRequest = {}; // AddAttachmentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                     | Type                                                | Description                                                                        | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                 | **String**                                          | The attachment uuid                                                                |
| **addAttachmentRequest** | [**AddAttachmentRequest**](AddAttachmentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
