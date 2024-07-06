# Accountingsh.QuotesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                | HTTP request                    | Description               |
| ----------------------------------------------------- | ------------------------------- | ------------------------- |
| [**addQuote**](QuotesApi.md#addQuote)                 | **POST** /quotes                | Add a quote               |
| [**deleteQuote**](QuotesApi.md#deleteQuote)           | **DELETE** /quotes/{uuid}       | Delete a quote            |
| [**getQuote**](QuotesApi.md#getQuote)                 | **GET** /quotes/{uuid}          | Get a quote               |
| [**getQuoteDocument**](QuotesApi.md#getQuoteDocument) | **GET** /quotes/{uuid}/document | Get a quote in PDF        |
| [**listQuotes**](QuotesApi.md#listQuotes)             | **GET** /quotes                 | List company&#39;s quotes |
| [**updateQuote**](QuotesApi.md#updateQuote)           | **PUT** /quotes/{uuid}          | Update a quote            |

## addQuote

> addQuote(addQuoteRequest)

Add a quote

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addQuoteRequest = {}; // AddQuoteRequest |

accounting.quotes.addQuote(addQuoteRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                | Type                                      | Description | Notes |
| ------------------- | ----------------------------------------- | ----------- | ----- |
| **addQuoteRequest** | [**AddQuoteRequest**](AddQuoteRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteQuote

> deleteQuote(uuid)

Delete a quote

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid

accounting.quotes.deleteQuote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description    | Notes |
| -------- | ---------- | -------------- | ----- |
| **uuid** | **String** | The quote uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getQuote

> getQuote(uuid)

Get a quote

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid

accounting.quotes.getQuote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description    | Notes |
| -------- | ---------- | -------------- | ----- |
| **uuid** | **String** | The quote uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getQuoteDocument

> getQuoteDocument(uuid)

Get a quote in PDF

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid

accounting.quotes.getQuoteDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description    | Notes |
| -------- | ---------- | -------------- | ----- |
| **uuid** | **String** | The quote uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

## listQuotes

> listQuotes(fields, page, perPage)

List company&#39;s quotes

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.quotes.listQuotes(fields, page, perPage).then(
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

## updateQuote

> updateQuote(uuid, addQuoteRequest)

Update a quote

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid
let addQuoteRequest = {}; // AddQuoteRequest |

accounting.quotes.updateQuote(uuid, addQuoteRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                | Type                                      | Description    | Notes |
| ------------------- | ----------------------------------------- | -------------- | ----- |
| **uuid**            | **String**                                | The quote uuid |
| **addQuoteRequest** | [**AddQuoteRequest**](AddQuoteRequest.md) |                |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
