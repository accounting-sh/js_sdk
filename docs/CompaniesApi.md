# Accountingsh.CompaniesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                 | HTTP request                            | Description                                      |
| ---------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| [**addCompany**](CompaniesApi.md#addCompany)                           | **POST** /companies                     | Add a company (resellers only)                   |
| [**deleteCompany**](CompaniesApi.md#deleteCompany)                     | **DELETE** /companies/{uuid}            | Delete a company                                 |
| [**getCompany**](CompaniesApi.md#getCompany)                           | **GET** /companies/{uuid}               | Get a company                                    |
| [**getCompanyCustomization**](CompaniesApi.md#getCompanyCustomization) | **GET** /companies/{uuid}/customization | Get a company&#39;s customization parameters     |
| [**getCompanyFeatureSet**](CompaniesApi.md#getCompanyFeatureSet)       | **GET** /companies/{uuid}/features      | List a company&#39;s feature set                 |
| [**getCompanyOnboarding**](CompaniesApi.md#getCompanyOnboarding)       | **GET** /companies/{uuid}/onboarding    | Get company onboarding status                    |
| [**listCompanies**](CompaniesApi.md#listCompanies)                     | **GET** /companies                      | List companies on this instance (resellers only) |
| [**updateCompany**](CompaniesApi.md#updateCompany)                     | **PUT** /companies/{uuid}               | Update a company                                 |

## addCompany

> addCompany(addCompanyRequest)

Add a company (resellers only)

Restricted to resellers. Add a company. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.company&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCompanyRequest = {}; // AddCompanyRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.companies.addCompany(addCompanyRequest).then(
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
| **addCompanyRequest** | [**AddCompanyRequest**](AddCompanyRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCompany

> deleteCompany(uuid)

Delete a company

Delete a company. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;company.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.deleteCompany(uuid).then(
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

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCompany

> getCompany(uuid)

Get a company

Get a company. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.company&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.getCompany(uuid).then(
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

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCompanyCustomization

> getCompanyCustomization(uuid)

Get a company&#39;s customization parameters

Get a company&#39;s customization parameters. Use the parameters and response fields below for this operation. Requires authentication.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.getCompanyCustomization(uuid).then(
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

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCompanyFeatureSet

> getCompanyFeatureSet(uuid)

List a company&#39;s feature set

Retrieve the features enabled for the authenticated company. The company identifier must match the company associated with your authentication. Requires authentication.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | Identifier of the authenticated company.

accounting.companies.getCompanyFeatureSet(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                              | Notes |
| -------- | ---------- | ---------------------------------------- | ----- |
| **uuid** | **String** | Identifier of the authenticated company. |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getCompanyOnboarding

> getCompanyOnboarding(uuid)

Get company onboarding status

Get the company&#39;s current onboarding version and completion status. When incomplete, returns missing setting keys and the fiscal year end (default 31/12). French companies are checked for invoice.FR.franchise_en_base and invoice.FR.vat_on_debits; all companies are checked for preferred.locale. A completed response omits missing_settings and fiscal_year_end. Requires at least one permission: &#x60;view.company&#x60;, &#x60;edit.company&#x60;, &#x60;edit.company.settings&#x60;, &#x60;view.company.settings&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The authenticated company's UUID.

accounting.companies.getCompanyOnboarding(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                           | Notes |
| -------- | ---------- | ------------------------------------- | ----- |
| **uuid** | **String** | The authenticated company&#39;s UUID. |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCompanies

> listCompanies(fields, page, perPage, orderBy)

List companies on this instance (resellers only)

Restricted to resellers. List companies on this instance. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.companies&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,currency,prefix"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, currency, prefix.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.companies.listCompanies(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                                     | Notes                      |
| ----------- | ---------- | ----------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, name, currency, prefix. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                    | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.            | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                         | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateCompany

> updateCompany(uuid, addCompanyRequest)

Update a company

Update a company. Send the fields accepted by this operation in the request body. Omitted optional fields retain their existing values. Requires at least one permission: &#x60;edit.company&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let addCompanyRequest = {}; // AddCompanyRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.companies.updateCompany(uuid, addCompanyRequest).then(
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
| **uuid**              | **String**                                    | The company uuid                                                                   |
| **addCompanyRequest** | [**AddCompanyRequest**](AddCompanyRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
