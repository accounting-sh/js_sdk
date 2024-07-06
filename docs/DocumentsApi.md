# Accountingsh.DocumentsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                 | HTTP request                        | Description                  |
| ------------------------------------------------------ | ----------------------------------- | ---------------------------- |
| [**cancelReview**](DocumentsApi.md#cancelReview)       | **DELETE** /documents/{uuid}/review | Cancel document review       |
| [**deleteDocument**](DocumentsApi.md#deleteDocument)   | **DELETE** /documents/{uuid}        | Delete a document            |
| [**getDocument**](DocumentsApi.md#getDocument)         | **GET** /documents/{uuid}           | Get a document               |
| [**listDocuments**](DocumentsApi.md#listDocuments)     | **GET** /documents                  | List company&#39;s documents |
| [**processDocument**](DocumentsApi.md#processDocument) | **GET** /documents/{uuid}/process   | Process a document           |
| [**reviewUrl**](DocumentsApi.md#reviewUrl)             | **GET** /documents/{uuid}/review    | Get url to review a document |
| [**updateDocument**](DocumentsApi.md#updateDocument)   | **PUT** /documents/{uuid}           | Update a document            |
| [**uploadDocument**](DocumentsApi.md#uploadDocument)   | **POST** /documents                 | Upload a document            |
| [**viewDocument**](DocumentsApi.md#viewDocument)       | **GET** /documents/{uuid}/view      | View a document              |

## cancelReview

> cancelReview(uuid)

Cancel document review

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.cancelReview(uuid).then(
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

## deleteDocument

> deleteDocument(uuid)

Delete a document

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

> listDocuments(fields, page, perPage)

List company&#39;s documents

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.documents.listDocuments(fields, page, perPage).then(
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

## processDocument

> processDocument(uuid)

Process a document

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

## reviewUrl

> reviewUrl(uuid)

Get url to review a document

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.reviewUrl(uuid).then(
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

## updateDocument

> updateDocument(uuid, updateDocumentRequest)

Update a document

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid
let updateDocumentRequest = {}; // UpdateDocumentRequest |

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

| Name                      | Type                                                  | Description       | Notes |
| ------------------------- | ----------------------------------------------------- | ----------------- | ----- |
| **uuid**                  | **String**                                            | The document uuid |
| **updateDocumentRequest** | [**UpdateDocumentRequest**](UpdateDocumentRequest.md) |                   |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## uploadDocument

> uploadDocument(name, file)

Upload a document

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let name = "name_example"; // String |
let file = null; // File |

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

| Name     | Type                | Description | Notes |
| -------- | ------------------- | ----------- | ----- |
| **name** | **String**          |             |
| **file** | [**File**](File.md) |             |

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

## viewDocument

> viewDocument(uuid)

View a document

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
- **Accept**: _\/_, application/json
