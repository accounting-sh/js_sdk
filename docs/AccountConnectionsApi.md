# Accountingsh.AccountConnectionsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                          | HTTP request                           | Description                        |
| ------------------------------------------------------------------------------- | -------------------------------------- | ---------------------------------- |
| [**deleteAccountConnection**](AccountConnectionsApi.md#deleteAccountConnection) | **DELETE** /accounts/{uuid}/connect    | Delete an account&#39;s connection |
| [**listAccountConnections**](AccountConnectionsApi.md#listAccountConnections)   | **GET** /accounts/{uuid}/connect       | List account&#39;s connections     |
| [**listBanks**](AccountConnectionsApi.md#listBanks)                             | **GET** /accounts/{uuid}/connect/banks | List available bank connections    |

## deleteAccountConnection

> deleteAccountConnection(uuid)

Delete an account&#39;s connection

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid

accounting.accountConnections.deleteAccountConnection(uuid).then(
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
| **uuid** | **String** | The account uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAccountConnections

> listAccountConnections(uuid, fields, page, perPage)

List account&#39;s connections

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.accountConnections
  .listAccountConnections(uuid, fields, page, perPage)
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

| Name        | Type       | Description                                                | Notes      |
| ----------- | ---------- | ---------------------------------------------------------- | ---------- |
| **uuid**    | **String** | The account uuid                                           |
| **fields**  | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**    | **String** | The response page                                          | [optional] |
| **perPage** | **String** | The number of items per page                               | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listBanks

> listBanks(uuid, country)

List available bank connections

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let country = "country_example"; // String | A two letter country code, if none are specified, the company's country is used

accounting.accountConnections.listBanks(uuid, country).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                         | Notes      |
| ----------- | ---------- | ----------------------------------------------------------------------------------- | ---------- |
| **uuid**    | **String** | The account uuid                                                                    |
| **country** | **String** | A two letter country code, if none are specified, the company&#39;s country is used | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
