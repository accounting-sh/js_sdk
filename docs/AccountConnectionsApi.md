# Accountingsh.AccountConnectionsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                                            | HTTP request                                     | Description                                   |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------- |
| [**deleteAccountConnection**](AccountConnectionsApi.md#deleteAccountConnection)                   | **DELETE** /accounts/{uuid}/connect/{connection} | Delete an account&#39;s connection            |
| [**listAccountConnections**](AccountConnectionsApi.md#listAccountConnections)                     | **GET** /accounts/{uuid}/connect                 | List account&#39;s connections                |
| [**listBanks**](AccountConnectionsApi.md#listBanks)                                               | **GET** /accounts/{uuid}/connect/banks           | List available bank connections               |
| [**listConnectableBankAccounts**](AccountConnectionsApi.md#listConnectableBankAccounts)           | **GET** /accounts/{uuid}/connect/accounts        | List connectable bank accounts                |
| [**listConnectedAccountTransactions**](AccountConnectionsApi.md#listConnectedAccountTransactions) | **GET** /accounts/{uuid}/connect/{connection}    | List the connected account&#39;s transactions |
| [**requestBankConnection**](AccountConnectionsApi.md#requestBankConnection)                       | **POST** /accounts/{uuid}/connect/request        | Request a new bank connection                 |
| [**selectBankAccount**](AccountConnectionsApi.md#selectBankAccount)                               | **POST** /accounts/{uuid}/connect/accounts       | Select a bank account to connect              |

## deleteAccountConnection

> deleteAccountConnection(uuid, connection)

Delete an account&#39;s connection

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let connection = "connection_example"; // String | The connection uuid

accounting.accountConnections.deleteAccountConnection(uuid, connection).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name           | Type       | Description         | Notes |
| -------------- | ---------- | ------------------- | ----- |
| **uuid**       | **String** | The account uuid    |
| **connection** | **String** | The connection uuid |

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

## listConnectableBankAccounts

> listConnectableBankAccounts(uuid, connection)

List connectable bank accounts

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let connection = "connection_example"; // String | The connection request UUID

accounting.accountConnections
  .listConnectableBankAccounts(uuid, connection)
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

| Name           | Type       | Description                 | Notes      |
| -------------- | ---------- | --------------------------- | ---------- |
| **uuid**       | **String** | The account uuid            |
| **connection** | **String** | The connection request UUID | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listConnectedAccountTransactions

> listConnectedAccountTransactions(uuid, connection, period)

List the connected account&#39;s transactions

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let connection = "connection_example"; // String | The connection uuid
let period = 3.4; // Number | The number of days to look back for transactions. Default is 7 days.

accounting.accountConnections
  .listConnectedAccountTransactions(uuid, connection, period)
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

| Name           | Type       | Description                                                          | Notes      |
| -------------- | ---------- | -------------------------------------------------------------------- | ---------- |
| **uuid**       | **String** | The account uuid                                                     |
| **connection** | **String** | The connection uuid                                                  |
| **period**     | **Number** | The number of days to look back for transactions. Default is 7 days. | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## requestBankConnection

> requestBankConnection(uuid, requestBankConnectionRequest)

Request a new bank connection

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let requestBankConnectionRequest = {}; // RequestBankConnectionRequest |

accounting.accountConnections
  .requestBankConnection(uuid, requestBankConnectionRequest)
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

| Name                             | Type                                                                | Description      | Notes |
| -------------------------------- | ------------------------------------------------------------------- | ---------------- | ----- |
| **uuid**                         | **String**                                                          | The account uuid |
| **requestBankConnectionRequest** | [**RequestBankConnectionRequest**](RequestBankConnectionRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## selectBankAccount

> selectBankAccount(uuid, selectBankAccountRequest)

Select a bank account to connect

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let selectBankAccountRequest = {}; // SelectBankAccountRequest |

accounting.accountConnections
  .selectBankAccount(uuid, selectBankAccountRequest)
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

| Name                         | Type                                                        | Description      | Notes |
| ---------------------------- | ----------------------------------------------------------- | ---------------- | ----- |
| **uuid**                     | **String**                                                  | The account uuid |
| **selectBankAccountRequest** | [**SelectBankAccountRequest**](SelectBankAccountRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
