# Accountingsh.CurrencyApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                | HTTP request                  | Description                           |
| ----------------------------------------------------- | ----------------------------- | ------------------------------------- |
| [**getExchangeRate**](CurrencyApi.md#getExchangeRate) | **GET** /currency/{from}/{to} | Get the latest currency exchange rate |

## getExchangeRate

> getExchangeRate(from, to)

Get the latest currency exchange rate

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
