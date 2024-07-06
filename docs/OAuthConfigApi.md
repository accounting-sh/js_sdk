# Accountingsh.OAuthConfigApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                     | HTTP request             | Description                             |
| -------------------------------------------------------------------------- | ------------------------ | --------------------------------------- |
| [**addOAuthConfiguration**](OAuthConfigApi.md#addOAuthConfiguration)       | **POST** /oauth          | Add an OAuth configuration              |
| [**deleteOAuthConfiguration**](OAuthConfigApi.md#deleteOAuthConfiguration) | **DELETE** /oauth/{uuid} | Delete an oauth configuration           |
| [**getOAuthConfiguration**](OAuthConfigApi.md#getOAuthConfiguration)       | **GET** /oauth/{uuid}    | Get an OAuth configuration              |
| [**listOAuthConfigurations**](OAuthConfigApi.md#listOAuthConfigurations)   | **GET** /oauth           | List company&#39;s oauth configurations |
| [**listProviders**](OAuthConfigApi.md#listProviders)                       | **GET** /oauth/providers | List available providers                |
| [**updateOAuthConfiguration**](OAuthConfigApi.md#updateOAuthConfiguration) | **PUT** /oauth/{uuid}    | Update an oauth configuration           |

## addOAuthConfiguration

> addOAuthConfiguration(addOAuthConfigurationRequest)

Add an OAuth configuration

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest |

accounting.oAuthConfig.addOAuthConfiguration(addOAuthConfigurationRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                             | Type                                                                | Description | Notes |
| -------------------------------- | ------------------------------------------------------------------- | ----------- | ----- |
| **addOAuthConfigurationRequest** | [**AddOAuthConfigurationRequest**](AddOAuthConfigurationRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteOAuthConfiguration

> deleteOAuthConfiguration(uuid)

Delete an oauth configuration

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid

accounting.oAuthConfig.deleteOAuthConfiguration(uuid).then(
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
| **uuid** | **String** | The oauth configuration uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOAuthConfiguration

> getOAuthConfiguration(uuid)

Get an OAuth configuration

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid

accounting.oAuthConfig.getOAuthConfiguration(uuid).then(
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
| **uuid** | **String** | The oauth configuration uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listOAuthConfigurations

> listOAuthConfigurations(fields, page, perPage)

List company&#39;s oauth configurations

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.oAuthConfig.listOAuthConfigurations(fields, page, perPage).then(
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

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProviders

> listProviders()

List available providers

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.oAuthConfig.listProviders().then(
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

## updateOAuthConfiguration

> updateOAuthConfiguration(uuid, addOAuthConfigurationRequest)

Update an oauth configuration

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid
let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest |

accounting.oAuthConfig
  .updateOAuthConfiguration(uuid, addOAuthConfigurationRequest)
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

| Name                             | Type                                                                | Description                  | Notes |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------- | ----- |
| **uuid**                         | **String**                                                          | The oauth configuration uuid |
| **addOAuthConfigurationRequest** | [**AddOAuthConfigurationRequest**](AddOAuthConfigurationRequest.md) |                              |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
