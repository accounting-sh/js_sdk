# Accountingsh.RossumApi

All URIs are relative to *https://api.accounting.sh*

| Method                                      | HTTP request                     | Description                   |
| ------------------------------------------- | -------------------------------- | ----------------------------- |
| [**listReviews**](RossumApi.md#listReviews) | **GET** /external/rossum/reviews | List documents to be reviewed |

## listReviews

> listReviews(fields, page, perPage, orderBy)

List documents to be reviewed

List documents to be reviewed. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;list.documents&#x60;. Requires company feature(s): &#x60;document_ia&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,process_status"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, process_status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.rossum.listReviews(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                   | Notes                      |
| ----------- | ---------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, name, process_status. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                  | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.          | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                       | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
