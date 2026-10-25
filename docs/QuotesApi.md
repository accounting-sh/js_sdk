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

Add a quote. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.quote&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addQuoteRequest = {}; // AddQuoteRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                | Type                                      | Description                                                                        | Notes |
| ------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addQuoteRequest** | [**AddQuoteRequest**](AddQuoteRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteQuote

> deleteQuote(uuid)

Delete a quote

Delete a quote. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;quote.delete&#x60;.

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

Get a quote. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.quote&#x60;.

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

Retrieve the generated PDF for this record. HTTP 200 returns application/pdf. If generation is still pending, HTTP 202 returns JSON with success&#x3D;false and an explanation; retry later. Requires at least one permission: &#x60;regenerate.quote&#x60;.

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

> listQuotes(fields, page, perPage, orderBy)

List company&#39;s quotes

List company&#39;s quotes. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.quotes&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,contact,quote_number,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, contact, quote_number, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.quotes.listQuotes(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                            | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, contact, quote_number, status. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                           | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                   | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateQuote

> updateQuote(uuid, updateQuoteRequest)

Update a quote

Update a quote. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.quote&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid
let updateQuoteRequest = {}; // UpdateQuoteRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.quotes.updateQuote(uuid, updateQuoteRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                   | Type                                            | Description                                                                        | Notes |
| ---------------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**               | **String**                                      | The quote uuid                                                                     |
| **updateQuoteRequest** | [**UpdateQuoteRequest**](UpdateQuoteRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
