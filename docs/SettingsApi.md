# Accountingsh.SettingsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                              | HTTP request                             | Description                     |
| --------------------------------------------------- | ---------------------------------------- | ------------------------------- |
| [**getSettings**](SettingsApi.md#getSettings)       | **GET** /companies/{uuid}/settings/{key} | Get a company&#39;s settings    |
| [**listSettings**](SettingsApi.md#listSettings)     | **GET** /companies/{uuid}/settings       | List company&#39;s settings     |
| [**updateSettings**](SettingsApi.md#updateSettings) | **PUT** /companies/{uuid}/settings/{key} | Update a company&#39;s settings |

## getSettings

> getSettings(uuid, key)

Get a company&#39;s settings

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The setting key

accounting.settings.getSettings(uuid, key).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The company uuid |
| **key**  | **String** | The setting key  |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listSettings

> listSettings(fields, page, perPage, uuid)

List company&#39;s settings

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let uuid = "uuid_example"; // String | The company uuid

accounting.settings.listSettings(fields, page, perPage, uuid).then(
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
| **uuid**    | **String** | The company uuid                                           | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateSettings

> updateSettings(uuid, key, updateSettingsRequest)

Update a company&#39;s settings

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The setting key
let updateSettingsRequest = {}; // UpdateSettingsRequest |

accounting.settings.updateSettings(uuid, key, updateSettingsRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                      | Type                                                  | Description      | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------- | ----- |
| **uuid**                  | **String**                                            | The company uuid |
| **key**                   | **String**                                            | The setting key  |
| **updateSettingsRequest** | [**UpdateSettingsRequest**](UpdateSettingsRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
