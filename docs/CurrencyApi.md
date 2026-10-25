# Accountingsh.CurrencyApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                | HTTP request                  | Description                           |
| ----------------------------------------------------- | ----------------------------- | ------------------------------------- |
| [**getExchangeRate**](CurrencyApi.md#getExchangeRate) | **GET** /currency/{from}/{to} | Get the latest currency exchange rate |

## getExchangeRate

> getExchangeRate(from, to)

Get the latest currency exchange rate

Retrieve the exchange rate for the source and destination currency codes in the URL. Requires at least one permission: &#x60;view.currency.rates&#x60;. Requires company feature(s): &#x60;api&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = "from_example"; // String | The currency to convert from
let to = "to_example"; // String | The currency to convert to

accounting.currency.getExchangeRate(from, to).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                  | Notes |
| -------- | ---------- | ---------------------------- | ----- |
| **from** | **String** | The currency to convert from |
| **to**   | **String** | The currency to convert to   |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
