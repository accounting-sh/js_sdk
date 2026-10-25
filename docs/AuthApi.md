# Accountingsh.AuthApi

All URIs are relative to *https://api.accounting.sh*

| Method                                        | HTTP request          | Description                   |
| --------------------------------------------- | --------------------- | ----------------------------- |
| [**authInit**](AuthApi.md#authInit)           | **GET** /auth/init    | Init authentication process   |
| [**login**](AuthApi.md#login)                 | **POST** /auth/login  | Login user                    |
| [**loginGetAlias**](AuthApi.md#loginGetAlias) | **GET** /auth/login   | Login user                    |
| [**logout**](AuthApi.md#logout)               | **GET** /auth/logout  | Logout current user           |
| [**switchCompany**](AuthApi.md#switchCompany) | **POST** /auth/switch | Switch to a different company |

## authInit

> authInit()

Init authentication process

Retrieve the authorization URL used to start interactive OAuth sign-in. Open the returned URL in a browser, then use the authorization code with /auth/login.

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

> login(loginGetAliasRequest)

Login user

Exchange the OAuth authorization code for a browser session. Use the resulting session for subsequent user requests.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let loginGetAliasRequest = {}; // LoginGetAliasRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.auth.login(loginGetAliasRequest).then(
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
| **loginGetAliasRequest** | [**LoginGetAliasRequest**](LoginGetAliasRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## loginGetAlias

> loginGetAlias(loginGetAliasRequest)

Login user

Exchange the OAuth authorization code for a browser session. Use the resulting session for subsequent user requests. Equivalent to POST /auth/login.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let loginGetAliasRequest = {}; // LoginGetAliasRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.auth.loginGetAlias(loginGetAliasRequest).then(
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
| **loginGetAliasRequest** | [**LoginGetAliasRequest**](LoginGetAliasRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## logout

> logout()

Logout current user

Sign out the current user. This endpoint changes session state and should not be prefetched.

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

Switch the current user session to a company in which the user has a membership. Send the company identifier in the JSON body. This requires a user session; a company API credential does not identify a user. Requires authentication.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let switchCompanyRequest = {}; // SwitchCompanyRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                     | Type                                                | Description                                                                        | Notes |
| ------------------------ | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **switchCompanyRequest** | [**SwitchCompanyRequest**](SwitchCompanyRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
