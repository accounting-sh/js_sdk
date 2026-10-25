# Accountingsh.CreditNotesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                               | HTTP request                                  | Description                                                         |
| -------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------- |
| [**addCreditNote**](CreditNotesApi.md#addCreditNote)                 | **POST** /incomes/credit-notes                | Issue a partial credit note or credit the remaining invoice balance |
| [**deleteCreditNote**](CreditNotesApi.md#deleteCreditNote)           | **DELETE** /incomes/credit-notes/{uuid}       | Issued credit notes cannot be deleted                               |
| [**getCreditNote**](CreditNotesApi.md#getCreditNote)                 | **GET** /incomes/credit-notes/{uuid}          | Retrieve an issued credit note                                      |
| [**getCreditNoteDocument**](CreditNotesApi.md#getCreditNoteDocument) | **GET** /incomes/credit-notes/{uuid}/document | Download the immutable credit note PDF                              |
| [**listCreditNotes**](CreditNotesApi.md#listCreditNotes)             | **GET** /incomes/credit-notes                 | List this company&#39;s issued credit notes                         |
| [**updateCreditNote**](CreditNotesApi.md#updateCreditNote)           | **PUT** /incomes/credit-notes/{uuid}          | Issued credit notes cannot be updated                               |

## addCreditNote

> addCreditNote(addCreditNoteRequest)

Issue a partial credit note or credit the remaining invoice balance

Issue an immutable credit note against an issued invoice. Omit items to credit the remaining balance or select original line UUIDs with positive quantities and optional positive net unit prices. Returned credit amounts are negative. replacement&#x3D;true also creates a replacement draft for a full reversal with no previous credit notes. Requires permission: &#x60;correct.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCreditNoteRequest = {}; // AddCreditNoteRequest |

accounting.creditNotes.addCreditNote(addCreditNoteRequest).then(
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
| **addCreditNoteRequest** | [**AddCreditNoteRequest**](AddCreditNoteRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCreditNote

> deleteCreditNote(uuid)

Issued credit notes cannot be deleted

Issued credit notes are immutable. Returns 404 for unknown or other-company identifiers and 409 for owned issued notes. Requires permission: &#x60;correct.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.deleteCreditNote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **uuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## getCreditNote

> getCreditNote(uuid)

Retrieve an issued credit note

Retrieve the frozen credit note and its signed line amounts. Requires permission: &#x60;view.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.getCreditNote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **uuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCreditNoteDocument

> getCreditNoteDocument(uuid)

Download the immutable credit note PDF

Download the archived original PDF after integrity verification; returns HTTP 202 JSON while Async generation is pending. Requires permission: &#x60;view.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.getCreditNoteDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **uuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf

## listCreditNotes

> listCreditNotes(page, perPage)

List this company&#39;s issued credit notes

List issued credit notes for the authenticated company. Pages start at 1, default page size is 10, and page size is clamped to 1–100. Requires permission: &#x60;list.invoices&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |

accounting.creditNotes.listCreditNotes(page, perPage).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description | Notes      |
| ----------- | ---------- | ----------- | ---------- |
| **page**    | **Number** |             | [optional] |
| **perPage** | **Number** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCreditNote

> updateCreditNote(uuid)

Issued credit notes cannot be updated

Issued credit notes are immutable. Returns 404 for unknown or other-company identifiers and 409 for owned issued notes. Requires permission: &#x60;correct.invoice&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.updateCreditNote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **uuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined
