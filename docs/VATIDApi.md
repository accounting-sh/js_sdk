# Accountingsh.VATIDApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                   | HTTP request                           | Description                   |
| -------------------------------------------------------- | -------------------------------------- | ----------------------------- |
| [**addCompanyVatId**](VATIDApi.md#addCompanyVatId)       | **POST** /companies/{uuid}/vat         | Add a company&#39;s Vat Id    |
| [**deleteCompanyVatId**](VATIDApi.md#deleteCompanyVatId) | **DELETE** /companies/{uuid}/vat/{key} | Delete a company&#39;s Vat Id |
| [**getCompanyVatId**](VATIDApi.md#getCompanyVatId)       | **GET** /companies/{uuid}/vat/{key}    | Get a company&#39;s Vat Id    |
| [**listCompanyVatId**](VATIDApi.md#listCompanyVatId)     | **GET** /companies/{uuid}/vat          | List company&#39;s Vat Id     |
| [**updateCompanyVatId**](VATIDApi.md#updateCompanyVatId) | **PUT** /companies/{uuid}/vat/{key}    | Update a company&#39;s Vat Id |

## addCompanyVatId

> addCompanyVatId(uuid, addCompanyVatIdRequest)

Add a company&#39;s Vat Id

Add a company&#39;s Vat Id. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;vat.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.vATID.addCompanyVatId(uuid, addCompanyVatIdRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                       | Type                                                    | Description                                                                        | Notes |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                   | **String**                                              | The company uuid                                                                   |
| **addCompanyVatIdRequest** | [**AddCompanyVatIdRequest**](AddCompanyVatIdRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCompanyVatId

> deleteCompanyVatId(uuid, key)

Delete a company&#39;s Vat Id

Delete a company&#39;s Vat Id. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;vat.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The VAT ID uuid

accounting.vATID.deleteCompanyVatId(uuid, key).then(
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
| **uuid** | **String** | The company uuid |
| **key**  | **String** | The VAT ID uuid  |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCompanyVatId

> getCompanyVatId(uuid, key)

Get a company&#39;s Vat Id

Get a company&#39;s Vat Id. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;vat.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The VAT ID uuid

accounting.vATID.getCompanyVatId(uuid, key).then(
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
| **uuid** | **String** | The company uuid |
| **key**  | **String** | The VAT ID uuid  |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCompanyVatId

> listCompanyVatId(uuid, fields, page, perPage, orderBy)

List company&#39;s Vat Id

List company&#39;s Vat Id. Retrieve records using the query parameters below. Requires at least one permission: &#x60;vat.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let fields = "uuid,vat_id,country"; // String | Comma-separated fields to include in each record. Default fields: uuid, vat_id, country.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.vATID.listCompanyVatId(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                              | Notes                      |
| ----------- | ---------- | ---------------------------------------------------------------------------------------- | -------------------------- |
| **uuid**    | **String** | The company uuid                                                                         |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, vat_id, country. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                             | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.     | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                  | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCompanyVatId

> updateCompanyVatId(uuid, key, addCompanyVatIdRequest)

Update a company&#39;s Vat Id

Update a company&#39;s Vat Id. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;vat.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The VAT ID uuid
let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.vATID.updateCompanyVatId(uuid, key, addCompanyVatIdRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                       | Type                                                    | Description                                                                        | Notes |
| -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                   | **String**                                              | The company uuid                                                                   |
| **key**                    | **String**                                              | The VAT ID uuid                                                                    |
| **addCompanyVatIdRequest** | [**AddCompanyVatIdRequest**](AddCompanyVatIdRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
