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

Get a company&#39;s settings. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;view.company.settings&#x60;.

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

> listSettings(uuid, fields, page, perPage, orderBy)

List company&#39;s settings

List company&#39;s settings. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.company.settings&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let fields = "uuid,key,value"; // String | Comma-separated fields to include in each record. Default fields: uuid, key, value.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.settings.listSettings(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                          | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------ | -------------------------- |
| **uuid**    | **String** | The company uuid                                                                     |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, key, value.  | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                         | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum. | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.              | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateSettings

> updateSettings(uuid, key, updateSettingsRequest)

Update a company&#39;s settings

Update a company&#39;s settings. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.company.settings&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The setting key
let updateSettingsRequest = {}; // UpdateSettingsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                      | Type                                                  | Description                                                                        | Notes |
| ------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                  | **String**                                            | The company uuid                                                                   |
| **key**                   | **String**                                            | The setting key                                                                    |
| **updateSettingsRequest** | [**UpdateSettingsRequest**](UpdateSettingsRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
