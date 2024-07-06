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

> addCompanyVatId(addCompanyVatIdRequest, uuid)

Add a company&#39;s Vat Id

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest |
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.addCompanyVatId(addCompanyVatIdRequest, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                       | Type                                                    | Description      | Notes      |
| -------------------------- | ------------------------------------------------------- | ---------------- | ---------- |
| **addCompanyVatIdRequest** | [**AddCompanyVatIdRequest**](AddCompanyVatIdRequest.md) |                  |
| **uuid**                   | **String**                                              | The company uuid | [optional] |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCompanyVatId

> deleteCompanyVatId(key, uuid)

Delete a company&#39;s Vat Id

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let key = "key_example"; // String | The VAT ID uuid
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.deleteCompanyVatId(key, uuid).then(
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
| **key**  | **String** | The VAT ID uuid  |
| **uuid** | **String** | The company uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCompanyVatId

> getCompanyVatId(key, uuid)

Get a company&#39;s Vat Id

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let key = "key_example"; // String | The VAT ID uuid
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.getCompanyVatId(key, uuid).then(
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
| **key**  | **String** | The VAT ID uuid  |
| **uuid** | **String** | The company uuid | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCompanyVatId

> listCompanyVatId(fields, page, perPage, uuid)

List company&#39;s Vat Id

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.listCompanyVatId(fields, page, perPage, uuid).then(
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
| **uuid**    | **String** | The company uuid                                           | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCompanyVatId

> updateCompanyVatId(key, addCompanyVatIdRequest, uuid)

Update a company&#39;s Vat Id

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let key = "key_example"; // String | The VAT ID uuid
let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest |
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.updateCompanyVatId(key, addCompanyVatIdRequest, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                       | Type                                                    | Description      | Notes      |
| -------------------------- | ------------------------------------------------------- | ---------------- | ---------- |
| **key**                    | **String**                                              | The VAT ID uuid  |
| **addCompanyVatIdRequest** | [**AddCompanyVatIdRequest**](AddCompanyVatIdRequest.md) |                  |
| **uuid**                   | **String**                                              | The company uuid | [optional] |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
