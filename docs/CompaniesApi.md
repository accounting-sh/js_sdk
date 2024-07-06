# Accountingsh.CompaniesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                 | HTTP request                            | Description                                  |
| ---------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------- |
| [**addCompany**](CompaniesApi.md#addCompany)                           | **POST** /companies                     | Add a company                                |
| [**deleteCompany**](CompaniesApi.md#deleteCompany)                     | **DELETE** /companies/{uuid}            | Delete a company                             |
| [**getCompany**](CompaniesApi.md#getCompany)                           | **GET** /companies/{uuid}               | Get a company                                |
| [**getCompanyCustomization**](CompaniesApi.md#getCompanyCustomization) | **GET** /companies/{uuid}/customization | Get a company&#39;s customization parameters |
| [**getCompanyFeatureSet**](CompaniesApi.md#getCompanyFeatureSet)       | **GET** /companies/{uuid}/features      | List a company&#39;s feature set             |
| [**listCompanies**](CompaniesApi.md#listCompanies)                     | **GET** /companies                      | List companies on this instance              |
| [**updateCompany**](CompaniesApi.md#updateCompany)                     | **PUT** /companies/{uuid}               | Update a company                             |

## addCompany

> addCompany(addCompanyRequest)

Add a company

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCompanyRequest = {}; // AddCompanyRequest |

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

| Name                  | Type                                          | Description | Notes |
| --------------------- | --------------------------------------------- | ----------- | ----- |
| **addCompanyRequest** | [**AddCompanyRequest**](AddCompanyRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteCompany

> deleteCompany(uuid)

Delete a company

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

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

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

| Name     | Type       | Description      | Notes |
| -------- | ---------- | ---------------- | ----- |
| **uuid** | **String** | The company uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listCompanies

> listCompanies(fields, page, perPage)

List companies on this instance

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.companies.listCompanies(fields, page, perPage).then(
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

## updateCompany

> updateCompany(uuid, addCompanyRequest)

Update a company

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let addCompanyRequest = {}; // AddCompanyRequest |

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

| Name                  | Type                                          | Description      | Notes |
| --------------------- | --------------------------------------------- | ---------------- | ----- |
| **uuid**              | **String**                                    | The company uuid |
| **addCompanyRequest** | [**AddCompanyRequest**](AddCompanyRequest.md) |                  |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
