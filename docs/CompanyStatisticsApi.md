# Accountingsh.CompanyStatisticsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                     | HTTP request                                | Description                 |
| ---------------------------------------------------------- | ------------------------------------------- | --------------------------- |
| [**getStatistics**](CompanyStatisticsApi.md#getStatistics) | **GET** /companies/{uuid}/statistics/period | Get company&#39;s statistic |

## getStatistics

> getStatistics(uuid, start, end)

Get company&#39;s statistic

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let start = "start_example"; // String | Start date
let end = "end_example"; // String | End date

accounting.companyStatistics.getStatistics(uuid, start, end).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name      | Type       | Description      | Notes      |
| --------- | ---------- | ---------------- | ---------- |
| **uuid**  | **String** | The company uuid |
| **start** | **String** | Start date       | [optional] |
| **end**   | **String** | End date         | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
