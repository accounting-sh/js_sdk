# Accountingsh.ExportApi

All URIs are relative to *https://api.accounting.sh*

| Method                                          | HTTP request     | Description                |
| ----------------------------------------------- | ---------------- | -------------------------- |
| [**listExports**](ExportApi.md#listExports)     | **GET** /export  | List company&#39;s exports |
| [**requestExport**](ExportApi.md#requestExport) | **POST** /export | Request an export          |

## listExports

> listExports(fields, page, perPage, orderBy)

List company&#39;s exports

List company&#39;s exports. Retrieve records using the query parameters below. Requires at least one permission: &#x60;export&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,status,document,created_at,updated_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, status, document, created_at, updated_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.export.listExports(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                                       | Notes                      |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, status, document, created_at, updated_at. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                                      | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                              | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                           | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## requestExport

> requestExport(requestExportRequest)

Request an export

Queue an accounting ZIP using the supplied options. For companies with Journal, the ZIP also includes posted lines in journal.csv and an integrity/completeness manifest in journal-metadata.json, filtered by the export accounting-date range. Journal snapshots exceeding 50000 lines fail rather than truncate. HTTP 202 acknowledges the job. Use GET /export to find the export and its generation status. Requires at least one permission: &#x60;export&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let requestExportRequest = {}; // RequestExportRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.export.requestExport(requestExportRequest).then(
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
| **requestExportRequest** | [**RequestExportRequest**](RequestExportRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
