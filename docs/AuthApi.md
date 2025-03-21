# Accountingsh.AuthApi

All URIs are relative to *https://api.accounting.sh*

| Method                                        | HTTP request          | Description                   |
| --------------------------------------------- | --------------------- | ----------------------------- |
| [**authInit**](AuthApi.md#authInit)           | **GET** /auth/init    | Init authentication process   |
| [**login**](AuthApi.md#login)                 | **POST** /auth/login  | Login user                    |
| [**logout**](AuthApi.md#logout)               | **GET** /auth/logout  | Logout current user           |
| [**switchCompany**](AuthApi.md#switchCompany) | **POST** /auth/switch | Switch to a different company |

## authInit

> authInit()

Init authentication process

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.auth.authInit().then(
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

## login

> login(loginRequest)

Login user

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let loginRequest = {}; // LoginRequest |

accounting.auth.login(loginRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name             | Type                                | Description | Notes |
| ---------------- | ----------------------------------- | ----------- | ----- |
| **loginRequest** | [**LoginRequest**](LoginRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## logout

> logout()

Logout current user

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.auth.logout().then(
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

## switchCompany

> switchCompany(switchCompanyRequest)

Switch to a different company

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let switchCompanyRequest = {}; // SwitchCompanyRequest |

accounting.auth.switchCompany(switchCompanyRequest).then(
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
| **switchCompanyRequest** | [**SwitchCompanyRequest**](SwitchCompanyRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
