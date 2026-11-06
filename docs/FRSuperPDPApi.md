# Accountingsh.FRSuperPDPApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                    | HTTP request                                          | Description                        |
| ------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------- |
| [**frSuperPdpApprove**](FRSuperPDPApi.md#frSuperPdpApprove)               | **PUT** /fr/superpdp/inbox/{uuid}/approve             | Approve a received invoice         |
| [**frSuperPdpAuthorize**](FRSuperPDPApi.md#frSuperPdpAuthorize)           | **POST** /fr/superpdp/authorize                       | Create a SuperPDP consent URL      |
| [**frSuperPdpCallback**](FRSuperPDPApi.md#frSuperPdpCallback)             | **POST** /fr/superpdp/callback                        | Complete SuperPDP consent          |
| [**frSuperPdpClassify**](FRSuperPDPApi.md#frSuperPdpClassify)             | **PUT** /fr/superpdp/operations/{uuid}/classification | Classify reporting lines           |
| [**frSuperPdpConfigure**](FRSuperPDPApi.md#frSuperPdpConfigure)           | **PUT** /fr/superpdp/settings                         | Configure SuperPDP synchronization |
| [**frSuperPdpDisconnect**](FRSuperPDPApi.md#frSuperPdpDisconnect)         | **DELETE** /fr/superpdp                               | Disconnect SuperPDP                |
| [**frSuperPdpInbox**](FRSuperPDPApi.md#frSuperPdpInbox)                   | **GET** /fr/superpdp/inbox                            | List received invoices             |
| [**frSuperPdpLifecycle**](FRSuperPDPApi.md#frSuperPdpLifecycle)           | **POST** /fr/superpdp/operations/{uuid}/events        | Queue a buyer lifecycle event      |
| [**frSuperPdpOperations**](FRSuperPDPApi.md#frSuperPdpOperations)         | **GET** /fr/superpdp/operations                       | List SuperPDP operations           |
| [**frSuperPdpReceipt**](FRSuperPDPApi.md#frSuperPdpReceipt)               | **GET** /fr/superpdp/inbox/{uuid}                     | Get a received invoice             |
| [**frSuperPdpReceiptHistory**](FRSuperPDPApi.md#frSuperPdpReceiptHistory) | **GET** /fr/superpdp/inbox/{uuid}/history             | Get received invoice history       |
| [**frSuperPdpReceiptPdf**](FRSuperPDPApi.md#frSuperPdpReceiptPdf)         | **GET** /fr/superpdp/inbox/{uuid}/pdf                 | Get a received invoice PDF         |
| [**frSuperPdpReconcile**](FRSuperPDPApi.md#frSuperPdpReconcile)           | **PUT** /fr/superpdp/operations/{uuid}/reconcile      | Reconcile a reporting submission   |
| [**frSuperPdpRefuse**](FRSuperPDPApi.md#frSuperPdpRefuse)                 | **PUT** /fr/superpdp/inbox/{uuid}/refuse              | Refuse a received invoice          |
| [**frSuperPdpRetry**](FRSuperPDPApi.md#frSuperPdpRetry)                   | **PUT** /fr/superpdp/operations/{uuid}/retry          | Retry a SuperPDP operation         |
| [**frSuperPdpSettings**](FRSuperPDPApi.md#frSuperPdpSettings)             | **GET** /fr/superpdp/settings                         | Get SuperPDP settings              |
| [**frSuperPdpStatus**](FRSuperPDPApi.md#frSuperPdpStatus)                 | **GET** /fr/superpdp                                  | Get SuperPDP connection status     |
| [**frSuperPdpSubmit**](FRSuperPDPApi.md#frSuperPdpSubmit)                 | **POST** /fr/superpdp/submit                          | Submit an issued invoice           |
| [**frSuperPdpSync**](FRSuperPDPApi.md#frSuperPdpSync)                     | **POST** /fr/superpdp/sync                            | Queue SuperPDP synchronization     |
| [**frSuperPdpVerify**](FRSuperPDPApi.md#frSuperPdpVerify)                 | **POST** /fr/superpdp/verify                          | Queue SuperPDP verification        |

## frSuperPdpApprove

> frSuperPdpApprove(uuid)

Approve a received invoice

Record human approval and queue import of the exact reviewed PDF; duplicate approvals do not create another bill. Requires the &#x60;add.bill&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.fRSuperPDP.frSuperPdpApprove(uuid).then(
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

## frSuperPdpAuthorize

> frSuperPdpAuthorize()

Create a SuperPDP consent URL

Create a consent URL for the authenticated company without exposing provider credentials. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.fRSuperPDP.frSuperPdpAuthorize().then(
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
- **Accept**: Not defined

## frSuperPdpCallback

> frSuperPdpCallback(frSuperPdpCallbackRequest)

Complete SuperPDP consent

The configured frontend callback forwards code/state using its existing authenticated company session. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let frSuperPdpCallbackRequest = {}; // FrSuperPdpCallbackRequest |

accounting.fRSuperPDP.frSuperPdpCallback(frSuperPdpCallbackRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                          | Type                                                          | Description | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------- | ----- |
| **frSuperPdpCallbackRequest** | [**FrSuperPdpCallbackRequest**](FrSuperPdpCallbackRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpClassify

> frSuperPdpClassify(uuid, frSuperPdpClassifyRequest)

Classify reporting lines

Validate a complete per-line goods/services classification for a mixed consumer sale awaiting submission. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let frSuperPdpClassifyRequest = {}; // FrSuperPdpClassifyRequest |

accounting.fRSuperPDP.frSuperPdpClassify(uuid, frSuperPdpClassifyRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                          | Type                                                          | Description | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------- | ----- |
| **uuid**                      | **String**                                                    |             |
| **frSuperPdpClassifyRequest** | [**FrSuperPdpClassifyRequest**](FrSuperPdpClassifyRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpConfigure

> frSuperPdpConfigure(frSuperPdpConfigureRequest)

Configure SuperPDP synchronization

Validate backfill/routing; legacy frequency inputs are adapted to shared settings with their standard edit permission. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let frSuperPdpConfigureRequest = {}; // FrSuperPdpConfigureRequest |

accounting.fRSuperPDP.frSuperPdpConfigure(frSuperPdpConfigureRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                           | Type                                                            | Description | Notes |
| ------------------------------ | --------------------------------------------------------------- | ----------- | ----- |
| **frSuperPdpConfigureRequest** | [**FrSuperPdpConfigureRequest**](FrSuperPdpConfigureRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpDisconnect

> frSuperPdpDisconnect()

Disconnect SuperPDP

Delete local OAuth secrets; provider-side consent remains manageable from SuperPDP. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.fRSuperPDP.frSuperPdpDisconnect().then(
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
- **Accept**: Not defined

## frSuperPdpInbox

> frSuperPdpInbox(page, reviewStatus)

List received invoices

List owned received invoices, defaulting to pending review while allowing all historical review states. Requires the &#x60;list.bills&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let reviewStatus = "'pending'"; // String |

accounting.fRSuperPDP.frSuperPdpInbox(page, reviewStatus).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name             | Type       | Description | Notes                                     |
| ---------------- | ---------- | ----------- | ----------------------------------------- |
| **page**         | **Number** |             | [optional]                                |
| **reviewStatus** | **String** |             | [optional] [default to &#39;pending&#39;] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## frSuperPdpLifecycle

> frSuperPdpLifecycle(uuid, frSuperPdpLifecycleRequest)

Queue a buyer lifecycle event

Queue a buyer lifecycle decision with a client UUID to make repeated HTTP requests idempotent. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let frSuperPdpLifecycleRequest = {}; // FrSuperPdpLifecycleRequest |

accounting.fRSuperPDP
  .frSuperPdpLifecycle(uuid, frSuperPdpLifecycleRequest)
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

| Name                           | Type                                                            | Description | Notes |
| ------------------------------ | --------------------------------------------------------------- | ----------- | ----- |
| **uuid**                       | **String**                                                      |             |
| **frSuperPdpLifecycleRequest** | [**FrSuperPdpLifecycleRequest**](FrSuperPdpLifecycleRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpOperations

> frSuperPdpOperations(page, kind)

List SuperPDP operations

Return bounded local invoice, inbox, lifecycle, reporting and failure records. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let kind = "kind_example"; // String |

accounting.fRSuperPDP.frSuperPdpOperations(page, kind).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes      |
| -------- | ---------- | ----------- | ---------- |
| **page** | **Number** |             | [optional] |
| **kind** | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## frSuperPdpReceipt

> frSuperPdpReceipt(uuid)

Get a received invoice

Return structured supplier/line/total facts and review/import state without creating accounting resources. Requires the &#x60;view.bill&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.fRSuperPDP.frSuperPdpReceipt(uuid).then(
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

## frSuperPdpReceiptHistory

> frSuperPdpReceiptHistory(uuid, page)

Get received invoice history

Retrieve one receipt&#39;s retained provider events and local lifecycle delivery outcomes without any provider calls. Requires the &#x60;view.bill&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let page = 56; // Number |

accounting.fRSuperPDP.frSuperPdpReceiptHistory(uuid, page).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description | Notes      |
| -------- | ---------- | ----------- | ---------- |
| **uuid** | **String** |             |
| **page** | **Number** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

## frSuperPdpReceiptPdf

> frSuperPdpReceiptPdf(uuid)

Get a received invoice PDF

Serve the exact private S3 PDF used for approval; callers should display it in a sandboxed PDF viewer. Requires the &#x60;view.bill&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.fRSuperPDP.frSuperPdpReceiptPdf(uuid).then(
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

## frSuperPdpReconcile

> frSuperPdpReconcile(uuid, frSuperPdpReconcileRequest)

Reconcile a reporting submission

Queue proof checking for an ambiguous reporting submission, without posting its tax facts again. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let frSuperPdpReconcileRequest = {}; // FrSuperPdpReconcileRequest |

accounting.fRSuperPDP
  .frSuperPdpReconcile(uuid, frSuperPdpReconcileRequest)
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

| Name                           | Type                                                            | Description | Notes |
| ------------------------------ | --------------------------------------------------------------- | ----------- | ----- |
| **uuid**                       | **String**                                                      |             |
| **frSuperPdpReconcileRequest** | [**FrSuperPdpReconcileRequest**](FrSuperPdpReconcileRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpRefuse

> frSuperPdpRefuse(uuid, frSuperPdpRefuseRequest)

Refuse a received invoice

Record a reason-coded refusal and queue fr:210 without creating a bill, contact or document. Requires the &#x60;edit.bill&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let frSuperPdpRefuseRequest = {}; // FrSuperPdpRefuseRequest |

accounting.fRSuperPDP.frSuperPdpRefuse(uuid, frSuperPdpRefuseRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                        | Type                                                      | Description | Notes |
| --------------------------- | --------------------------------------------------------- | ----------- | ----- |
| **uuid**                    | **String**                                                |             |
| **frSuperPdpRefuseRequest** | [**FrSuperPdpRefuseRequest**](FrSuperPdpRefuseRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpRetry

> frSuperPdpRetry(uuid, frSuperPdpRetryRequest)

Retry a SuperPDP operation

Retry failures, requiring an explicit provider nonreceipt check before replaying an ambiguous POST. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let frSuperPdpRetryRequest = new Accountingsh.FrSuperPdpRetryRequest(); // FrSuperPdpRetryRequest |

accounting.fRSuperPDP.frSuperPdpRetry(uuid, frSuperPdpRetryRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                       | Type                                                    | Description | Notes      |
| -------------------------- | ------------------------------------------------------- | ----------- | ---------- |
| **uuid**                   | **String**                                              |             |
| **frSuperPdpRetryRequest** | [**FrSuperPdpRetryRequest**](FrSuperPdpRetryRequest.md) |             | [optional] |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpSettings

> frSuperPdpSettings()

Get SuperPDP settings

Read the synchronized projection of company VAT settings, provider filing frequency and the local backfill boundary. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.fRSuperPDP.frSuperPdpSettings().then(
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
- **Accept**: Not defined

## frSuperPdpStatus

> frSuperPdpStatus()

Get SuperPDP connection status

Read safe local status and request a throttled asynchronous refresh when verification/synchronization is stale. Requires the &#x60;view.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.fRSuperPDP.frSuperPdpStatus().then(
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
- **Accept**: Not defined

## frSuperPdpSubmit

> frSuperPdpSubmit(frSuperPdpSubmitRequest)

Submit an issued invoice

Opt an existing issued source into delivery/reporting; drafts and foreign-owned UUIDs are rejected. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let frSuperPdpSubmitRequest = {}; // FrSuperPdpSubmitRequest |

accounting.fRSuperPDP.frSuperPdpSubmit(frSuperPdpSubmitRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                        | Type                                                      | Description | Notes |
| --------------------------- | --------------------------------------------------------- | ----------- | ----- |
| **frSuperPdpSubmitRequest** | [**FrSuperPdpSubmitRequest**](FrSuperPdpSubmitRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

## frSuperPdpSync

> frSuperPdpSync()

Queue SuperPDP synchronization

Queue synchronization; callers poll local operations instead of waiting for provider network calls. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.fRSuperPDP.frSuperPdpSync().then(
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
- **Accept**: Not defined

## frSuperPdpVerify

> frSuperPdpVerify()

Queue SuperPDP verification

Enqueue verification and resume invoice synchronization immediately once the grant becomes ready. Requires the &#x60;edit.company&#x60; permission and the &#x60;einvoicing&#x60; company feature.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.fRSuperPDP.frSuperPdpVerify().then(
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
- **Accept**: Not defined
