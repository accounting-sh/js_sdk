# Accountingsh.ContactsApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                        | HTTP request                      | Description                   |
| ------------------------------------------------------------- | --------------------------------- | ----------------------------- |
| [**addContact**](ContactsApi.md#addContact)                   | **POST** /contacts                | Create a new contact          |
| [**deleteContact**](ContactsApi.md#deleteContact)             | **DELETE** /contacts/{uuid}       | Delete a contact              |
| [**getContact**](ContactsApi.md#getContact)                   | **GET** /contacts/{uuid}          | Retrieve a contact            |
| [**listContactBills**](ContactsApi.md#listContactBills)       | **GET** /contacts/{uuid}/bills    | List a contact&#39;s bills    |
| [**listContactInvoices**](ContactsApi.md#listContactInvoices) | **GET** /contacts/{uuid}/invoices | List a contact&#39;s invoices |
| [**listContacts**](ContactsApi.md#listContacts)               | **GET** /contacts                 | List company&#39;s contacts   |
| [**updateContact**](ContactsApi.md#updateContact)             | **PUT** /contacts/{uuid}          | Update a contact              |

## addContact

> addContact(addContactRequest)

Create a new contact

Create a new contact. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.contact&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addContactRequest = {}; // AddContactRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.contacts.addContact(addContactRequest).then(
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
| **addContactRequest** | [**AddContactRequest**](AddContactRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteContact

> deleteContact(uuid)

Delete a contact

Delete a contact. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.contact&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid

accounting.contacts.deleteContact(uuid).then(
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
| **uuid** | **String** | The contact uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getContact

> getContact(uuid)

Retrieve a contact

Retrieve a contact. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.contact&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid

accounting.contacts.getContact(uuid).then(
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
| **uuid** | **String** | The contact uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContactBills

> listContactBills(uuid, fields, page, perPage, orderBy)

List a contact&#39;s bills

List a contact&#39;s bills. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;list.bills&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let fields = "uuid,vendor,bill_number,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, vendor, bill_number, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.contacts.listContactBills(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                          | Notes                      |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| **uuid**    | **String** | The contact uuid                                                                                     |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, vendor, bill_number, status. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                         | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                 | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                              | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContactInvoices

> listContactInvoices(uuid, fields, page, perPage, orderBy)

List a contact&#39;s invoices

List a contact&#39;s invoices. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;list.invoices&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let fields = "uuid,customer,status,emitted"; // String | Comma-separated fields to include in each record. Default fields: uuid, customer, status, emitted.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.contacts
  .listContactInvoices(uuid, fields, page, perPage, orderBy)
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

| Name        | Type       | Description                                                                                        | Notes                      |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| **uuid**    | **String** | The contact uuid                                                                                   |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, customer, status, emitted. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                       | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.               | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                            | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContacts

> listContacts(fields, page, perPage, orderBy)

List company&#39;s contacts

List company&#39;s contacts. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.contacts&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,prefix,currency,registration_number"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, prefix, currency, registration_number. Optional buyer_type is the explicit business/consumer override; null uses automatic inference.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.contacts.listContacts(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                                                                                                                                         | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, name, prefix, currency, registration_number. Optional buyer_type is the explicit business/consumer override; null uses automatic inference. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                                                                                                                                        | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                                                                                                                                | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                                                                                                                             | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateContact

> updateContact(uuid, addContactRequest)

Update a contact

Update a contact. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.contact&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let addContactRequest = {}; // AddContactRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.contacts.updateContact(uuid, addContactRequest).then(
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
| **uuid**              | **String**                                    | The contact uuid                                                                   |
| **addContactRequest** | [**AddContactRequest**](AddContactRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
