# Accountingsh.AnalyticsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                   | HTTP request                      | Description                                |
| -------------------------------------------------------- | --------------------------------- | ------------------------------------------ |
| [**analyticsCards**](AnalyticsApi.md#analyticsCards)     | **GET** /analytics/cards/{group}  | Grouped analytics statistic cards          |
| [**analyticsCatalog**](AnalyticsApi.md#analyticsCatalog) | **GET** /analytics                | Available analytics graphs and card groups |
| [**analyticsGraph**](AnalyticsApi.md#analyticsGraph)     | **GET** /analytics/graphs/{graph} | One frontend-ready analytics graph         |

## analyticsCards

> analyticsCards(group, start, end, interval, limit, currency)

Grouped analytics statistic cards

Returns the selected statistic-card group for a custom date range. Requires &#x60;analytics&#x60;. Expense self-only restrictions and company feature gates still apply. Cards expose units, labels, comparisons where supported and calculation metadata; monetary values use exact decimal strings.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let group = "group_example"; // String | Select a related statistics-card group. See GET /analytics for available group metadata.
let start = new Date("2013-10-20"); // Date | Inclusive first activity date in YYYY-MM-DD format.
let end = new Date("2013-10-20"); // Date | Inclusive last activity date; also the balance as-of date where applicable.
let interval = "'month'"; // String | Calendar bucket for time-series graphs.
let limit = 10; // Number | Maximum ranked categories where the graph supports a limit.
let currency = "currency_example"; // String | Optional ISO 4217 currency filter; does not request arbitrary currency conversion.

accounting.analytics
  .analyticsCards(group, start, end, interval, limit, currency)
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

| Name         | Type       | Description                                                                              | Notes                                   |
| ------------ | ---------- | ---------------------------------------------------------------------------------------- | --------------------------------------- |
| **group**    | **String** | Select a related statistics-card group. See GET /analytics for available group metadata. |
| **start**    | **Date**   | Inclusive first activity date in YYYY-MM-DD format.                                      | [optional]                              |
| **end**      | **Date**   | Inclusive last activity date; also the balance as-of date where applicable.              | [optional]                              |
| **interval** | **String** | Calendar bucket for time-series graphs.                                                  | [optional] [default to &#39;month&#39;] |
| **limit**    | **Number** | Maximum ranked categories where the graph supports a limit.                              | [optional] [default to 10]              |
| **currency** | **String** | Optional ISO 4217 currency filter; does not request arbitrary currency conversion.       | [optional]                              |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## analyticsCatalog

> analyticsCatalog()

Available analytics graphs and card groups

Requires &#x60;analytics&#x60;. Lists available graph and grouped-card identifiers. Uses the authenticated company; no company override is accepted. This metadata request never refreshes views.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.analytics.analyticsCatalog().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

This endpoint does not need any parameter.

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## analyticsGraph

> analyticsGraph(graph, start, end, interval, limit, currency)

One frontend-ready analytics graph

One HTTP request returns one graph with chart type, data, labels, series/legend, units, and calculation metadata. Requires &#x60;analytics&#x60;. Expense self-only restrictions and company feature gates still apply. Reads materialized analytics only; never refreshes in HTTP. Decimal monetary values are strings.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let graph = "graph_example"; // String | Select one of the implemented graph identifiers. See GET /analytics for localized titles, metric IDs, bases and feature requirements.
let start = new Date("2013-10-20"); // Date | Inclusive first activity date in YYYY-MM-DD format.
let end = new Date("2013-10-20"); // Date | Inclusive last activity date; also the balance as-of date where applicable.
let interval = "'month'"; // String | Calendar bucket for time-series graphs.
let limit = 10; // Number | Maximum ranked categories where the graph supports a limit.
let currency = "currency_example"; // String | Optional ISO 4217 currency filter; does not request arbitrary currency conversion.

accounting.analytics
  .analyticsGraph(graph, start, end, interval, limit, currency)
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

| Name         | Type       | Description                                                                                                                           | Notes                                   |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| **graph**    | **String** | Select one of the implemented graph identifiers. See GET /analytics for localized titles, metric IDs, bases and feature requirements. |
| **start**    | **Date**   | Inclusive first activity date in YYYY-MM-DD format.                                                                                   | [optional]                              |
| **end**      | **Date**   | Inclusive last activity date; also the balance as-of date where applicable.                                                           | [optional]                              |
| **interval** | **String** | Calendar bucket for time-series graphs.                                                                                               | [optional] [default to &#39;month&#39;] |
| **limit**    | **Number** | Maximum ranked categories where the graph supports a limit.                                                                           | [optional] [default to 10]              |
| **currency** | **String** | Optional ISO 4217 currency filter; does not request arbitrary currency conversion.                                                    | [optional]                              |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
