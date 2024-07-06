# Accountingsh.CredentialsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                     | HTTP request                     | Description                                                         |
| ---------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------- |
| [**addCredential**](CredentialsApi.md#addCredential)       | **POST** /credentials            | Add a credential                                                    |
| [**deleteCredential**](CredentialsApi.md#deleteCredential) | **DELETE** /credentials/{uuid}   | Delete a credential                                                 |
| [**getCredential**](CredentialsApi.md#getCredential)       | **GET** /credentials/{uuid}      | Get a credential                                                    |
| [**listCredentials**](CredentialsApi.md#listCredentials)   | **GET** /credentials             | List company&#39;s credentials                                      |
| [**listPermissions**](CredentialsApi.md#listPermissions)   | **GET** /credentials/permissions | List available permissions                                          |
| [**me**](CredentialsApi.md#me)                             | **GET** /me                      | Get current credential informations                                 |
| [**updateCredential**](CredentialsApi.md#updateCredential) | **PUT** /credentials/{uuid}      | Update a credential                                                 |
| [**userveria**](CredentialsApi.md#userveria)               | **POST** /userveria              | Exchange a my stantabcorp (userveria) token for an Accounting Token |

## addCredential

> addCredential(addCredentialRequest)

Add a credential

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCredentialRequest = {}; // AddCredentialRequest |

accounting.credentials.addCredential(addCredentialRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                     | Type                                                | Description | Notes |
| ------------------------ | --------------------------------------------------- | ----------- | ----- |
| **addCredentialRequest** | [**AddCredentialRequest**](AddCredentialRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCredential

> deleteCredential(uuid)

Delete a credential

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid

accounting.credentials.deleteCredential(uuid).then(
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
| **uuid** | **String** | The credential uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCredential

> getCredential(uuid)

Get a credential

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid

accounting.credentials.getCredential(uuid).then(
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
| **uuid** | **String** | The credential uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCredentials

> listCredentials(fields, page, perPage)

List company&#39;s credentials

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.credentials.listCredentials(fields, page, perPage).then(
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

## listPermissions

> listPermissions()

List available permissions

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.credentials.listPermissions().then(
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

## me

> me()

Get current credential informations

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.credentials.me().then(
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

## updateCredential

> updateCredential(uuid, addCredentialRequest)

Update a credential

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid
let addCredentialRequest = {}; // AddCredentialRequest |

accounting.credentials.updateCredential(uuid, addCredentialRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                     | Type                                                | Description         | Notes |
| ------------------------ | --------------------------------------------------- | ------------------- | ----- |
| **uuid**                 | **String**                                          | The credential uuid |
| **addCredentialRequest** | [**AddCredentialRequest**](AddCredentialRequest.md) |                     |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## userveria

> userveria()

Exchange a my stantabcorp (userveria) token for an Accounting Token

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.credentials.userveria().then(
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
