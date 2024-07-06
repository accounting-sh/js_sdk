# Accountingsh.TaxApi

All URIs are relative to *https://api.accounting.sh*

| Method                                   | HTTP request                 | Description                           |
| ---------------------------------------- | ---------------------------- | ------------------------------------- |
| [**getTaxRate**](TaxApi.md#getTaxRate)   | **GET** /tax/{country}       | Get the latest tax rate for a country |
| [**verifyVatId**](TaxApi.md#verifyVatId) | **GET** /vat/verify/{number} | Verify a VAT ID                       |

## getTaxRate

> getTaxRate(country)

Get the latest tax rate for a country

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let country = "country_example"; // String | The country

accounting.tax.getTaxRate(country).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description | Notes |
| ----------- | ---------- | ----------- | ----- |
| **country** | **String** | The country |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## verifyVatId

> verifyVatId(number)

Verify a VAT ID

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let number = "number_example"; // String | The VAT ID

accounting.tax.verifyVatId(number).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name       | Type       | Description | Notes |
| ---------- | ---------- | ----------- | ----- |
| **number** | **String** | The VAT ID  |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
