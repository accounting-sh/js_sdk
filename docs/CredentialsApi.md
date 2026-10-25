# Accountingsh.CredentialsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                     | HTTP request                     | Description                         |
| ---------------------------------------------------------- | -------------------------------- | ----------------------------------- |
| [**addCredential**](CredentialsApi.md#addCredential)       | **POST** /credentials            | Add a credential                    |
| [**deleteCredential**](CredentialsApi.md#deleteCredential) | **DELETE** /credentials/{uuid}   | Delete a credential                 |
| [**getCredential**](CredentialsApi.md#getCredential)       | **GET** /credentials/{uuid}      | Get a credential                    |
| [**listCredentials**](CredentialsApi.md#listCredentials)   | **GET** /credentials             | List company&#39;s credentials      |
| [**listPermissions**](CredentialsApi.md#listPermissions)   | **GET** /credentials/permissions | List available permissions          |
| [**me**](CredentialsApi.md#me)                             | **GET** /me                      | Get current credential informations |
| [**updateCredential**](CredentialsApi.md#updateCredential) | **PUT** /credentials/{uuid}      | Update a credential                 |

## addCredential

> addCredential(addCredentialRequest)

Add a credential

Add a credential. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.credential&#x60;. Requires company feature(s): &#x60;api&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCredentialRequest = {}; // AddCredentialRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                     | Type                                                | Description                                                                        | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addCredentialRequest** | [**AddCredentialRequest**](AddCredentialRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCredential

> deleteCredential(uuid)

Delete a credential

Delete a credential. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.credential&#x60;.

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

Get a credential. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.credential&#x60;.

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

> listCredentials(fields, page, perPage, orderBy)

List company&#39;s credentials

List company&#39;s credentials. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.credentials&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,permissions,expired_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, permissions, expired_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.credentials.listCredentials(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                      | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, permissions, expired_at. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                     | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.             | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                          | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listPermissions

> listPermissions()

List available permissions

Retrieve the permission identifiers available for API credentials. Use these values in the permissions array when creating or updating a credential.

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

Inspect the current company API credential, including its permissions and expiry. Use a Bearer API credential; a browser session token is not an API credential. Requires authentication.

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

Update a credential. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.credential&#x60;. Requires company feature(s): &#x60;api&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid
let addCredentialRequest = {}; // AddCredentialRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                     | Type                                                | Description                                                                        | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                 | **String**                                          | The credential uuid                                                                |
| **addCredentialRequest** | [**AddCredentialRequest**](AddCredentialRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
