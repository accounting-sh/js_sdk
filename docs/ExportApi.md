# Accountingsh.ExportApi

All URIs are relative to *https://api.accounting.sh*

| Method                                          | HTTP request     | Description                |
| ----------------------------------------------- | ---------------- | -------------------------- |
| [**listExports**](ExportApi.md#listExports)     | **GET** /export  | List company&#39;s exports |
| [**requestExport**](ExportApi.md#requestExport) | **POST** /export | Request an export          |

## listExports

> listExports(fields, page, perPage)

List company&#39;s exports

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.export.listExports(fields, page, perPage).then(
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

## requestExport

> requestExport(requestExportRequest)

Request an export

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let requestExportRequest = {}; // RequestExportRequest |

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

| Name                     | Type                                                | Description | Notes |
| ------------------------ | --------------------------------------------------- | ----------- | ----- |
| **requestExportRequest** | [**RequestExportRequest**](RequestExportRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
