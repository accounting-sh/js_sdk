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

Add a webhook. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.webhook&#x60;. Requires company feature(s): &#x60;webhooks&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addWebhookRequest = {}; // AddWebhookRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                  | Type                                          | Description                                                                        | Notes |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addWebhookRequest** | [**AddWebhookRequest**](AddWebhookRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteWebhook

> deleteWebhook(uuid)

Delete a webhook

Delete a webhook. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.webhook&#x60;. Requires company feature(s): &#x60;webhooks&#x60;. Returns 402 if unavailable.

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

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The webhook uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhook

> getWebhook(uuid)

Get a webhook

Get a webhook. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.webhook&#x60;. Requires company feature(s): &#x60;webhooks&#x60;. Returns 402 if unavailable.

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

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The webhook uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhookHistory

> getWebhookHistory(uuid)

Get webhook&#39;s history

Retrieve delivery history for this webhook to inspect previous attempts and troubleshoot delivery failures. Requires at least one permission: &#x60;view.webhook&#x60;. Requires company feature(s): &#x60;webhooks&#x60;. Returns 402 if unavailable.

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

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The webhook uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listWebhookEvents

> listWebhookEvents()

List available webhook events

Retrieve event identifiers accepted when creating or updating a webhook subscription.

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

> listWebhooks(fields, page, perPage, orderBy)

List company&#39;s webhooks

List company&#39;s webhooks. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.webhooks&#x60;. Requires company feature(s): &#x60;webhooks&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,link,events"; // String | Comma-separated fields to include in each record. Default fields: uuid, link, events.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.webhooks.listWebhooks(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                           | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, link, events. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                          | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.  | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.               | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateWebhook

> updateWebhook(uuid, addWebhookRequest)

Update a webhook

Update a webhook. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.webhook&#x60;. Requires company feature(s): &#x60;webhooks&#x60;. Returns 402 if unavailable.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid
let addWebhookRequest = {}; // AddWebhookRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.webhooks.updateWebhook(uuid, addWebhookRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                  | Type                                          | Description                                                                        | Notes |
| --------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**              | **String**                                    | The webhook uuid                                                                   |
| **addWebhookRequest** | [**AddWebhookRequest**](AddWebhookRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
