# Accountingsh.UsersApi

All URIs are relative to *https://api.accounting.sh*

| Method                                           | HTTP request                | Description                 |
| ------------------------------------------------ | --------------------------- | --------------------------- |
| [**addUser**](UsersApi.md#addUser)               | **POST** /users             | Add user                    |
| [**deleteUser**](UsersApi.md#deleteUser)         | **DELETE** /users/{uuid}    | Delete user                 |
| [**getUser**](UsersApi.md#getUser)               | **GET** /users/{uuid}       | View user                   |
| [**listUsers**](UsersApi.md#listUsers)           | **GET** /users              | List company&#39;s users    |
| [**updateUser**](UsersApi.md#updateUser)         | **PUT** /users/{uuid}       | Update user                 |
| [**usersCompanies**](UsersApi.md#usersCompanies) | **GET** /users/me/companies | List current user companies |
| [**usersMe**](UsersApi.md#usersMe)               | **GET** /users/me           | View current user details   |

## addUser

> addUser(addUserRequest)

Add user

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addUserRequest = {}; // AddUserRequest |

accounting.users.addUser(addUserRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name               | Type                                    | Description | Notes |
| ------------------ | --------------------------------------- | ----------- | ----- |
| **addUserRequest** | [**AddUserRequest**](AddUserRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteUser

> deleteUser(uuid)

Delete user

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

> listUsers(fields, page, perPage)

List company&#39;s users

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.users.listUsers(fields, page, perPage).then(
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

## updateUser

> updateUser(uuid, updateUserRequest)

Update user

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid
let updateUserRequest = {}; // UpdateUserRequest |

accounting.users.updateUser(uuid, updateUserRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                  | Type                                          | Description   | Notes |
| --------------------- | --------------------------------------------- | ------------- | ----- |
| **uuid**              | **String**                                    | The user uuid |
| **updateUserRequest** | [**UpdateUserRequest**](UpdateUserRequest.md) |               |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## usersCompanies

> usersCompanies()

List current user companies

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
