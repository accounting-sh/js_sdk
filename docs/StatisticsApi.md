# Accountingsh.StatisticsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                  | HTTP request                                 | Description                      |
| ----------------------------------------------------------------------- | -------------------------------------------- | -------------------------------- |
| [**summaryStatisticsPeriod**](StatisticsApi.md#summaryStatisticsPeriod) | **GET** /companies/{uuid}/statistics/summary | Company&#39;s summary statistics |

## summaryStatisticsPeriod

> summaryStatisticsPeriod(start, end)

Company&#39;s summary statistics

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let start = new Date("2013-10-20"); // Date | The start date
let end = new Date("2013-10-20"); // Date | The end date

accounting.statistics.summaryStatisticsPeriod(start, end).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name      | Type     | Description    | Notes      |
| --------- | -------- | -------------- | ---------- |
| **start** | **Date** | The start date | [optional] |
| **end**   | **Date** | The end date   | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
