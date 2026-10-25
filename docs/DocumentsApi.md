# Accountingsh.DocumentsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                 | HTTP request                        | Description                                 |
| ---------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------- |
| [**deleteDocument**](DocumentsApi.md#deleteDocument)                   | **DELETE** /documents/{uuid}        | Delete a document                           |
| [**getDocument**](DocumentsApi.md#getDocument)                         | **GET** /documents/{uuid}           | Get a document                              |
| [**listDocuments**](DocumentsApi.md#listDocuments)                     | **GET** /documents                  | List company&#39;s documents                |
| [**processDocument**](DocumentsApi.md#processDocument)                 | **GET** /documents/{uuid}/process   | Process a document                          |
| [**reviewDocumentRetention**](DocumentsApi.md#reviewDocumentRetention) | **PUT** /documents/{uuid}/retention | Review accounting retention or a legal hold |
| [**updateDocument**](DocumentsApi.md#updateDocument)                   | **PUT** /documents/{uuid}           | Update a document                           |
| [**uploadDocument**](DocumentsApi.md#uploadDocument)                   | **POST** /documents                 | Upload a document                           |
| [**viewDocument**](DocumentsApi.md#viewDocument)                       | **GET** /documents/{uuid}/view      | View a document                             |

## deleteDocument

> deleteDocument(uuid)

Delete a document

Delete a document. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.document&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.deleteDocument(uuid).then(
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
| **uuid** | **String** | The document uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getDocument

> getDocument(uuid)

Get a document

Get a document. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.document&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.getDocument(uuid).then(
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
| **uuid** | **String** | The document uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listDocuments

> listDocuments(fields, page, perPage, orderBy)

List company&#39;s documents

List company&#39;s documents. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.documents&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,mimetype"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, mimetype.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.documents.listDocuments(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                             | Notes                      |
| ----------- | ---------- | --------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, name, mimetype. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                            | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.    | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                 | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## processDocument

> processDocument(uuid)

Process a document

Queue background processing of the uploaded document. A successful response acknowledges the queued job, not completed extraction. Already processed documents return 400. This GET starts work; avoid automatic retries. Requires at least one permission: &#x60;process.document&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.processDocument(uuid).then(
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
| **uuid** | **String** | The document uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## reviewDocumentRetention

> reviewDocumentRetention(uuid, reviewDocumentRetentionRequest)

Review accounting retention or a legal hold

Review the accounting anchor, retention category or legal hold. This cannot shorten existing protection or change the frozen jurisdiction. Send hold&#x3D;null explicitly to release a hold. Requires permission: &#x60;manage.document.retention&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let reviewDocumentRetentionRequest = {}; // ReviewDocumentRetentionRequest |

accounting.documents
  .reviewDocumentRetention(uuid, reviewDocumentRetentionRequest)
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

| Name                               | Type                                                                    | Description | Notes |
| ---------------------------------- | ----------------------------------------------------------------------- | ----------- | ----- |
| **uuid**                           | **String**                                                              |             |
| **reviewDocumentRetentionRequest** | [**ReviewDocumentRetentionRequest**](ReviewDocumentRetentionRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateDocument

> updateDocument(uuid, updateDocumentRequest)

Update a document

Update a document. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.document&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid
let updateDocumentRequest = {}; // UpdateDocumentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.documents.updateDocument(uuid, updateDocumentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The document uuid                                                                  |
| **updateDocumentRequest** | [**UpdateDocumentRequest**](UpdateDocumentRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## uploadDocument

> uploadDocument(name, file)

Upload a document

Upload a document. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.document&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let name = "name_example"; // String | Human-readable name or label.
let file = "/path/to/file"; // File | File to upload. Send this field as a file part in a multipart/form-data request.

accounting.documents.uploadDocument(name, file).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                                                                      | Notes |
| -------- | ---------- | -------------------------------------------------------------------------------- | ----- |
| **name** | **String** | Human-readable name or label.                                                    |
| **file** | **File**   | File to upload. Send this field as a file part in a multipart/form-data request. |

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## viewDocument

> viewDocument(uuid)

View a document

Download the stored document content. The response is a file, rather than a JSON resource envelope. Requires at least one permission: &#x60;view.document&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.viewDocument(uuid).then(
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
| **uuid** | **String** | The document uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: _/_, application/json
