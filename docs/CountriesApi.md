# Accountingsh.CountriesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                               | HTTP request              | Description                      |
| -------------------------------------------------------------------- | ------------------------- | -------------------------------- |
| [**getTranslatedCountries**](CountriesApi.md#getTranslatedCountries) | **GET** /countries/{lang} | Get translated list of countries |

## getTranslatedCountries

> getTranslatedCountries(lang)

Get translated list of countries

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let lang = "lang_example"; // String | The target language

accounting.countries.getTranslatedCountries(lang).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description         | Notes |
| -------- | ---------- | ------------------- | ----- |
| **lang** | **String** | The target language |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
