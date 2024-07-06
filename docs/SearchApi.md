# Accountingsh.SearchApi

All URIs are relative to *https://api.accounting.sh*

| Method                            | HTTP request    | Description |
| --------------------------------- | --------------- | ----------- |
| [**search**](SearchApi.md#search) | **GET** /search | Search      |

## search

> search(q, excluse, only)

Search

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let q = "q_example"; // String | Query string
let excluse = "excluse_example"; // String | Exclude specific types. This is a comma separated list.
let only = "only_example"; // String | Perfom search only on those types. This is a comma separated list.

accounting.search.search(q, excluse, only).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                        | Notes      |
| ----------- | ---------- | ------------------------------------------------------------------ | ---------- |
| **q**       | **String** | Query string                                                       |
| **excluse** | **String** | Exclude specific types. This is a comma separated list.            | [optional] |
| **only**    | **String** | Perfom search only on those types. This is a comma separated list. | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
