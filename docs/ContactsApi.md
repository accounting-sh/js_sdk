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
| [**updateContact**](ContactsApi.md#updateContact)             | **PUT** /contact/{uuid}           | Update a contact              |

## addContact

> addContact(addContactRequest)

Create a new contact

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addContactRequest = {}; // AddContactRequest |

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

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addContactRequest** | [**AddContactRequest**](AddContactRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteContact

> deleteContact(uuid)

Delete a contact

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

> listContactBills(uuid, fields, page, perPage)

List a contact&#39;s bills

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.contacts.listContactBills(uuid, fields, page, perPage).then(
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
| **uuid**    | **String** | The contact uuid                                           | [optional] |
| **fields**  | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**    | **String** | The response page                                          | [optional] |
| **perPage** | **String** | The number of items per page                               | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContactInvoices

> listContactInvoices(uuid, fields, page, perPage)

List a contact&#39;s invoices

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.contacts.listContactInvoices(uuid, fields, page, perPage).then(
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
| **uuid**    | **String** | The contact uuid                                           |
| **fields**  | **String** | A comma separated list of fields requested in the response | [optional] |
| **page**    | **String** | The response page                                          | [optional] |
| **perPage** | **String** | The number of items per page                               | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listContacts

> listContacts(fields, page, perPage)

List company&#39;s contacts

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.contacts.listContacts(fields, page, perPage).then(
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

## updateContact

> updateContact(uuid, addContactRequest)

Update a contact

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let addContactRequest = {}; // AddContactRequest |

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

| Name                  | Type                                          | Description      | Notes |
| --------------------- | --------------------------------------------- | ---------------- | ----- |
| **uuid**              | **String**                                    | The contact uuid |
| **addContactRequest** | [**AddContactRequest**](AddContactRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
