# Accountingsh.UsersApi

All URIs are relative to *https://api.accounting.sh*

| Method                                               | HTTP request                | Description                 |
| ---------------------------------------------------- | --------------------------- | --------------------------- |
| [**addUser**](UsersApi.md#addUser)                   | **POST** /users             | Add user                    |
| [**deleteUser**](UsersApi.md#deleteUser)             | **DELETE** /users/{uuid}    | Delete user                 |
| [**getUser**](UsersApi.md#getUser)                   | **GET** /users/{uuid}       | View user                   |
| [**listUsers**](UsersApi.md#listUsers)               | **GET** /users              | List company&#39;s users    |
| [**updateMePutAlias**](UsersApi.md#updateMePutAlias) | **PUT** /users/me           | Update current user details |
| [**updateUser**](UsersApi.md#updateUser)             | **PUT** /users/{uuid}       | Update user                 |
| [**usersCompanies**](UsersApi.md#usersCompanies)     | **GET** /users/me/companies | List current user companies |
| [**usersMe**](UsersApi.md#usersMe)                   | **GET** /users/me           | View current user details   |

## addUser

> addUser()

Add user

Add user. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;user.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.addUser().then(
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

## deleteUser

> deleteUser(uuid)

Delete user

Delete user. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;user.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid

accounting.users.deleteUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description   | Notes |
| -------- | ---------- | ------------- | ----- |
| **uuid** | **String** | The user uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getUser

> getUser(uuid)

View user

View user. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;user.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid

accounting.users.getUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description   | Notes |
| -------- | ---------- | ------------- | ----- |
| **uuid** | **String** | The user uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listUsers

> listUsers(fields, page, perPage, orderBy)

List company&#39;s users

List company&#39;s users. Retrieve records using the query parameters below. Requires at least one permission: &#x60;user.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,user,permissions"; // String | Comma-separated fields to include in each record. Default fields: uuid, user, permissions.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.users.listUsers(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, user, permissions. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                               | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.       | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                    | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateMePutAlias

> updateMePutAlias()

Update current user details

Update the current authenticated user profile using the supplied fields. This requires an interactive user session. Requires authentication. Equivalent to POST /users/me.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.updateMePutAlias().then(
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

## updateUser

> updateUser(uuid)

Update user

Update user. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;user.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid

accounting.users.updateUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description   | Notes |
| -------- | ---------- | ------------- | ----- |
| **uuid** | **String** | The user uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## usersCompanies

> usersCompanies()

List current user companies

Retrieve companies associated with the current authenticated user. Use a company identifier with POST /auth/switch to change the user session company. Requires authentication.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.usersCompanies().then(
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

## usersMe

> usersMe()

View current user details

Retrieve the current authenticated user and company membership. Use an interactive user session for user-specific information. Requires authentication.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.usersMe().then(
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
