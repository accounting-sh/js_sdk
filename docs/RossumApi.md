# Accountingsh.RossumApi

All URIs are relative to *https://api.accounting.sh*

| Method                                      | HTTP request                     | Description                   |
| ------------------------------------------- | -------------------------------- | ----------------------------- |
| [**listReviews**](RossumApi.md#listReviews) | **GET** /external/rossum/reviews | List documents to be reviewes |

## listReviews

> listReviews(fields, page, perPage)

List documents to be reviewes

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.rossum.listReviews(fields, page, perPage).then(
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
