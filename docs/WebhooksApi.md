# Accountingsh.WebhooksApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                    | HTTP request                     | Description                   |
| --------------------------------------------------------- | -------------------------------- | ----------------------------- |
| [**addWebhook**](WebhooksApi.md#addWebhook)               | **POST** /webhooks               | Add a webhook                 |
| [**deleteWebhook**](WebhooksApi.md#deleteWebhook)         | **DELETE** /webhooks/{uuid}      | Delete a webhook              |
| [**getWebhook**](WebhooksApi.md#getWebhook)               | **GET** /webhooks/{uuid}         | Get a webhook                 |
| [**getWebhookHistory**](WebhooksApi.md#getWebhookHistory) | **GET** /webhooks/{uuid}/history | Get webhook&#39;s history     |
| [**listWebhookEvents**](WebhooksApi.md#listWebhookEvents) | **GET** /webhooks/events         | List available webhook events |
| [**listWebhooks**](WebhooksApi.md#listWebhooks)           | **GET** /webhooks                | List company&#39;s webhooks   |
| [**updateWebhook**](WebhooksApi.md#updateWebhook)         | **PUT** /webhooks/{uuid}         | Update a webhook              |

## addWebhook

> addWebhook(addWebhookRequest)

Add a webhook

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addWebhookRequest = {}; // AddWebhookRequest |

accounting.webhooks.addWebhook(addWebhookRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addWebhookRequest** | [**AddWebhookRequest**](AddWebhookRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteWebhook

> deleteWebhook(uuid)

Delete a webhook

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.deleteWebhook(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description      | Notes      |
| -------- | ---------- | ---------------- | ---------- |
| **uuid** | **String** | The webhook uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhook

> getWebhook(uuid)

Get a webhook

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.getWebhook(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description      | Notes      |
| -------- | ---------- | ---------------- | ---------- |
| **uuid** | **String** | The webhook uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhookHistory

> getWebhookHistory(uuid)

Get webhook&#39;s history

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.getWebhookHistory(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description      | Notes      |
| -------- | ---------- | ---------------- | ---------- |
| **uuid** | **String** | The webhook uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listWebhookEvents

> listWebhookEvents()

List available webhook events

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.webhooks.listWebhookEvents().then(
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

## listWebhooks

> listWebhooks(fields, page, perPage)

List company&#39;s webhooks

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.webhooks.listWebhooks(fields, page, perPage).then(
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

## updateWebhook

> updateWebhook(addWebhookRequest, uuid)

Update a webhook

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addWebhookRequest = {}; // AddWebhookRequest |
let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.updateWebhook(addWebhookRequest, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                  | Type                                          | Description      | Notes      |
| --------------------- | --------------------------------------------- | ---------------- | ---------- |
| **addWebhookRequest** | [**AddWebhookRequest**](AddWebhookRequest.md) |                  |
| **uuid**              | **String**                                    | The webhook uuid | [optional] |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
