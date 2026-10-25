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

Add an OAuth configuration. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;oauth_config.add&#x60;. Requires company feature(s): &#x60;oauth&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                             | Type                                                                | Description                                                                        | Notes |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addOAuthConfigurationRequest** | [**AddOAuthConfigurationRequest**](AddOAuthConfigurationRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteOAuthConfiguration

> deleteOAuthConfiguration(uuid)

Delete an oauth configuration

Delete an oauth configuration. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;oauth_config.delete&#x60;. Requires company feature(s): &#x60;oauth&#x60;. Returns 402 if unavailable.

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

Get an OAuth configuration. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;oauth_config.view&#x60;. Requires company feature(s): &#x60;oauth&#x60;. Returns 402 if unavailable.

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

> listOAuthConfigurations(fields, page, perPage, orderBy)

List company&#39;s oauth configurations

List company&#39;s oauth configurations. Retrieve records using the query parameters below. Requires at least one permission: &#x60;oauth_config.list&#x60;. Requires company feature(s): &#x60;oauth&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,provider,client_id"; // String | Comma-separated fields to include in each record. Default fields: uuid, provider, client_id.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.oAuthConfig
  .listOAuthConfigurations(fields, page, perPage, orderBy)
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

| Name        | Type       | Description                                                                                  | Notes                      |
| ----------- | ---------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, provider, client_id. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                 | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.         | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                      | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listProviders

> listProviders()

List available providers

Retrieve the supported OAuth providers before creating an OAuth configuration.

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

Update an oauth configuration. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;oauth_config.edit&#x60;. Requires company feature(s): &#x60;oauth&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid
let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                             | Type                                                                | Description                                                                        | Notes |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                         | **String**                                                          | The oauth configuration uuid                                                       |
| **addOAuthConfigurationRequest** | [**AddOAuthConfigurationRequest**](AddOAuthConfigurationRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
