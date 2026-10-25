# Accountingsh.AccountConnectionsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                                            | HTTP request                                     | Description                                                  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| [**deleteAccountConnection**](AccountConnectionsApi.md#deleteAccountConnection)                   | **DELETE** /accounts/{uuid}/connect/{connection} | Delete an account&#39;s connection                           |
| [**importAccountTransactions**](AccountConnectionsApi.md#importAccountTransactions)               | **POST** /accounts/{uuid}/transactions/import    | Import all available bank transaction history asynchronously |
| [**listAccountConnections**](AccountConnectionsApi.md#listAccountConnections)                     | **GET** /accounts/{uuid}/connect                 | List account&#39;s connections                               |
| [**listBanks**](AccountConnectionsApi.md#listBanks)                                               | **GET** /accounts/{uuid}/connect/banks           | List available bank connections                              |
| [**listConnectableBankAccounts**](AccountConnectionsApi.md#listConnectableBankAccounts)           | **GET** /accounts/{uuid}/connect/accounts        | List connectable bank accounts                               |
| [**listConnectedAccountTransactions**](AccountConnectionsApi.md#listConnectedAccountTransactions) | **GET** /accounts/{uuid}/connect/{connection}    | List the connected account&#39;s transactions                |
| [**requestBankConnection**](AccountConnectionsApi.md#requestBankConnection)                       | **POST** /accounts/{uuid}/connect/request        | Request a new bank connection                                |
| [**selectBankAccount**](AccountConnectionsApi.md#selectBankAccount)                               | **POST** /accounts/{uuid}/connect/accounts       | Select a bank account to connect                             |

## deleteAccountConnection

> deleteAccountConnection(uuid, connection)

Delete an account&#39;s connection

Delete an account&#39;s connection. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;account.connections.delete&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

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

## importAccountTransactions

> importAccountTransactions(uuid)

Import all available bank transaction history asynchronously

Queue import of the available transaction history from the connected bank account. HTTP 202 acknowledges the background job; imported transactions become available through the transaction routes. Requires at least one permission: &#x60;transaction.add&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account UUID

accounting.accountConnections.importAccountTransactions(uuid).then(
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
| **uuid** | **String** | The account UUID |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listAccountConnections

> listAccountConnections(uuid, fields, page, perPage)

List account&#39;s connections

List account&#39;s connections. Retrieve records using the query parameters below. Requires at least one permission: &#x60;account.connections.list&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

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

List available bank connections. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;account.connections.banks&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

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

List connectable bank accounts. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;account.connections.banks&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

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

List the connected account&#39;s transactions. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;account.connections.list&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

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

Request a new bank connection. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;account.connections.banks&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let requestBankConnectionRequest = {}; // RequestBankConnectionRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                             | Type                                                                | Description                                                                        | Notes |
| -------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                         | **String**                                                          | The account uuid                                                                   |
| **requestBankConnectionRequest** | [**RequestBankConnectionRequest**](RequestBankConnectionRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## selectBankAccount

> selectBankAccount(uuid, selectBankAccountRequest)

Select a bank account to connect

Select a bank account to connect. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;account.connections.banks&#x60;. Requires company feature(s): &#x60;bank_connection&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let selectBankAccountRequest = {}; // SelectBankAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                         | Type                                                        | Description                                                                        | Notes |
| ---------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                     | **String**                                                  | The account uuid                                                                   |
| **selectBankAccountRequest** | [**SelectBankAccountRequest**](SelectBankAccountRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
