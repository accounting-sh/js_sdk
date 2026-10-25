# Accountingsh.JournalApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                         | HTTP request                                                            | Description                                |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ------------------------------------------ |
| [**journalBalances**](JournalApi.md#journalBalances)                           | **GET** /journal/balances                                               | Account balances                           |
| [**journalBalancesheet**](JournalApi.md#journalBalancesheet)                   | **GET** /journal/reports/balance-sheet                                  | Balance sheet                              |
| [**journalCorrectionAdd**](JournalApi.md#journalCorrectionAdd)                 | **POST** /journal/corrections                                           | Add correction                             |
| [**journalCorrectionDelete**](JournalApi.md#journalCorrectionDelete)           | **DELETE** /journal/corrections/{uuid}                                  | Reject changes to immutable correction     |
| [**journalCorrectionDetails**](JournalApi.md#journalCorrectionDetails)         | **GET** /journal/corrections/{uuid}                                     | Details correction                         |
| [**journalCorrectionList**](JournalApi.md#journalCorrectionList)               | **GET** /journal/corrections                                            | List correction                            |
| [**journalCorrectionUpdate**](JournalApi.md#journalCorrectionUpdate)           | **PUT** /journal/corrections/{uuid}                                     | Reject changes to immutable correction     |
| [**journalEntryAdd**](JournalApi.md#journalEntryAdd)                           | **POST** /journal/{journal_uuid}/entries                                | Add entry                                  |
| [**journalEntryDelete**](JournalApi.md#journalEntryDelete)                     | **DELETE** /journal/{journal_uuid}/entries/{entry_uuid}                 | Delete entry                               |
| [**journalEntryDetails**](JournalApi.md#journalEntryDetails)                   | **GET** /journal/{journal_uuid}/entries/{entry_uuid}                    | Details entry                              |
| [**journalEntryList**](JournalApi.md#journalEntryList)                         | **GET** /journal/{journal_uuid}/entries                                 | List entry                                 |
| [**journalEntryUpdate**](JournalApi.md#journalEntryUpdate)                     | **PUT** /journal/{journal_uuid}/entries/{entry_uuid}                    | Update entry                               |
| [**journalEvidenceAdd**](JournalApi.md#journalEvidenceAdd)                     | **POST** /journal/{journal_uuid}/entries/{entry_uuid}/evidence          | Add evidence                               |
| [**journalEvidenceDelete**](JournalApi.md#journalEvidenceDelete)               | **DELETE** /journal/{journal_uuid}/entries/{entry_uuid}/evidence/{uuid} | Reject changes to immutable evidence       |
| [**journalEvidenceDetails**](JournalApi.md#journalEvidenceDetails)             | **GET** /journal/{journal_uuid}/entries/{entry_uuid}/evidence/{uuid}    | Details evidence                           |
| [**journalEvidenceList**](JournalApi.md#journalEvidenceList)                   | **GET** /journal/{journal_uuid}/entries/{entry_uuid}/evidence           | List evidence                              |
| [**journalEvidenceUpdate**](JournalApi.md#journalEvidenceUpdate)               | **PUT** /journal/{journal_uuid}/entries/{entry_uuid}/evidence/{uuid}    | Reject changes to immutable evidence       |
| [**journalExportAdd**](JournalApi.md#journalExportAdd)                         | **POST** /journal/exports                                               | Add export                                 |
| [**journalExportDelete**](JournalApi.md#journalExportDelete)                   | **DELETE** /journal/exports/{uuid}                                      | Reject changes to immutable export         |
| [**journalExportDetails**](JournalApi.md#journalExportDetails)                 | **GET** /journal/exports/{uuid}                                         | Details export                             |
| [**journalExportList**](JournalApi.md#journalExportList)                       | **GET** /journal/exports                                                | List export                                |
| [**journalExportUpdate**](JournalApi.md#journalExportUpdate)                   | **PUT** /journal/exports/{uuid}                                         | Reject changes to immutable export         |
| [**journalInitializationAdd**](JournalApi.md#journalInitializationAdd)         | **POST** /journal/initializations                                       | Add initialization                         |
| [**journalInitializationDelete**](JournalApi.md#journalInitializationDelete)   | **DELETE** /journal/initializations/{uuid}                              | Reject changes to immutable initialization |
| [**journalInitializationDetails**](JournalApi.md#journalInitializationDetails) | **GET** /journal/initializations/{uuid}                                 | Details initialization                     |
| [**journalInitializationList**](JournalApi.md#journalInitializationList)       | **GET** /journal/initializations                                        | List initialization                        |
| [**journalInitializationUpdate**](JournalApi.md#journalInitializationUpdate)   | **PUT** /journal/initializations/{uuid}                                 | Reject changes to immutable initialization |
| [**journalIssueAdd**](JournalApi.md#journalIssueAdd)                           | **POST** /journal/issues                                                | Reject changes to immutable issue          |
| [**journalIssueDelete**](JournalApi.md#journalIssueDelete)                     | **DELETE** /journal/issues/{uuid}                                       | Reject changes to immutable issue          |
| [**journalIssueDetails**](JournalApi.md#journalIssueDetails)                   | **GET** /journal/issues/{uuid}                                          | Details issue                              |
| [**journalIssueList**](JournalApi.md#journalIssueList)                         | **GET** /journal/issues                                                 | List issue                                 |
| [**journalIssueUpdate**](JournalApi.md#journalIssueUpdate)                     | **PUT** /journal/issues/{uuid}                                          | Reject changes to immutable issue          |
| [**journalJournalAdd**](JournalApi.md#journalJournalAdd)                       | **POST** /journal                                                       | Add journal                                |
| [**journalJournalDelete**](JournalApi.md#journalJournalDelete)                 | **DELETE** /journal/{journal_uuid}                                      | Delete journal                             |
| [**journalJournalDetails**](JournalApi.md#journalJournalDetails)               | **GET** /journal/{journal_uuid}                                         | Details journal                            |
| [**journalJournalList**](JournalApi.md#journalJournalList)                     | **GET** /journal                                                        | List journal                               |
| [**journalJournalUpdate**](JournalApi.md#journalJournalUpdate)                 | **PUT** /journal/{journal_uuid}                                         | Update journal                             |
| [**journalMappingAdd**](JournalApi.md#journalMappingAdd)                       | **POST** /journal/mappings                                              | Add mapping                                |
| [**journalMappingDelete**](JournalApi.md#journalMappingDelete)                 | **DELETE** /journal/mappings/{uuid}                                     | Delete mapping                             |
| [**journalMappingDetails**](JournalApi.md#journalMappingDetails)               | **GET** /journal/mappings/{uuid}                                        | Details mapping                            |
| [**journalMappingList**](JournalApi.md#journalMappingList)                     | **GET** /journal/mappings                                               | List mapping                               |
| [**journalMappingUpdate**](JournalApi.md#journalMappingUpdate)                 | **PUT** /journal/mappings/{uuid}                                        | Update mapping                             |
| [**journalMovements**](JournalApi.md#journalMovements)                         | **GET** /journal/movements                                              | Posted account movements                   |
| [**journalPeriodAdd**](JournalApi.md#journalPeriodAdd)                         | **POST** /journal/periods                                               | Add period                                 |
| [**journalPeriodDelete**](JournalApi.md#journalPeriodDelete)                   | **DELETE** /journal/periods/{uuid}                                      | Delete period                              |
| [**journalPeriodDetails**](JournalApi.md#journalPeriodDetails)                 | **GET** /journal/periods/{uuid}                                         | Details period                             |
| [**journalPeriodList**](JournalApi.md#journalPeriodList)                       | **GET** /journal/periods                                                | List period                                |
| [**journalPeriodUpdate**](JournalApi.md#journalPeriodUpdate)                   | **PUT** /journal/periods/{uuid}                                         | Update period                              |
| [**journalProfitandloss**](JournalApi.md#journalProfitandloss)                 | **GET** /journal/reports/profit-and-loss                                | Profit and loss                            |
| [**journalTrialbalance**](JournalApi.md#journalTrialbalance)                   | **GET** /journal/reports/trial-balance                                  | Trial balance                              |

## journalBalances

> journalBalances(from, to, code, contact, journal, period, bankAccount, groupByContact)

Account balances

Posted entries only; exact decimal strings use ISO minor-unit precision in the preserved company books currency (EUR 2, JPY 0, KWD 3). Requires &#x60;journal.report.view&#x60;. Reports do not certify country compliance or source completeness.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |
let groupByContact = true; // Boolean |

accounting.journal
  .journalBalances(
    from,
    to,
    code,
    contact,
    journal,
    period,
    bankAccount,
    groupByContact,
  )
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

| Name               | Type        | Description | Notes      |
| ------------------ | ----------- | ----------- | ---------- |
| **from**           | **Date**    |             | [optional] |
| **to**             | **Date**    |             | [optional] |
| **code**           | **String**  |             | [optional] |
| **contact**        | **String**  |             | [optional] |
| **journal**        | **String**  |             | [optional] |
| **period**         | **String**  |             | [optional] |
| **bankAccount**    | **String**  |             | [optional] |
| **groupByContact** | **Boolean** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalBalancesheet

> journalBalancesheet(from, to, code, contact, journal, period, bankAccount)

Balance sheet

Posted entries only; exact decimal strings use ISO minor-unit precision in the preserved company books currency (EUR 2, JPY 0, KWD 3). Requires &#x60;journal.report.view&#x60;. Reports do not certify country compliance or source completeness.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |

accounting.journal
  .journalBalancesheet(from, to, code, contact, journal, period, bankAccount)
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

| Name            | Type       | Description | Notes      |
| --------------- | ---------- | ----------- | ---------- |
| **from**        | **Date**   |             | [optional] |
| **to**          | **Date**   |             | [optional] |
| **code**        | **String** |             | [optional] |
| **contact**     | **String** |             | [optional] |
| **journal**     | **String** |             | [optional] |
| **period**      | **String** |             | [optional] |
| **bankAccount** | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalCorrectionAdd

> journalCorrectionAdd(journalCorrectionAddRequest)

Add correction

All identifiers are scoped to the authenticated company. Only posted manual entries can be corrected here. The original, reversal and optional replacement remain linked. Generated corrections follow the source workflow. Requires &#x60;journal.correction.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalCorrectionAddRequest = {}; // JournalCorrectionAddRequest |

accounting.journal.journalCorrectionAdd(journalCorrectionAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                            | Type                                                              | Description | Notes |
| ------------------------------- | ----------------------------------------------------------------- | ----------- | ----- |
| **journalCorrectionAddRequest** | [**JournalCorrectionAddRequest**](JournalCorrectionAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalCorrectionDelete

> journalCorrectionDelete(uuid)

Reject changes to immutable correction

All identifiers are scoped to the authenticated company. Only posted manual entries can be corrected here. The original, reversal and optional replacement remain linked. Generated corrections follow the source workflow. This write is unsupported and returns 405. Requires &#x60;journal.correction.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalCorrectionDelete(uuid).then(
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

## journalCorrectionDetails

> journalCorrectionDetails(uuid)

Details correction

All identifiers are scoped to the authenticated company. Only posted manual entries can be corrected here. The original, reversal and optional replacement remain linked. Generated corrections follow the source workflow. Requires &#x60;journal.correction.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalCorrectionDetails(uuid).then(
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

## journalCorrectionList

> journalCorrectionList(page, perPage, originalEntry)

List correction

All identifiers are scoped to the authenticated company. Only posted manual entries can be corrected here. The original, reversal and optional replacement remain linked. Generated corrections follow the source workflow. Requires &#x60;journal.correction.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let originalEntry = "originalEntry_example"; // String |

accounting.journal.journalCorrectionList(page, perPage, originalEntry).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name              | Type       | Description | Notes      |
| ----------------- | ---------- | ----------- | ---------- |
| **page**          | **Number** |             | [optional] |
| **perPage**       | **Number** |             | [optional] |
| **originalEntry** | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalCorrectionUpdate

> journalCorrectionUpdate(uuid)

Reject changes to immutable correction

All identifiers are scoped to the authenticated company. Only posted manual entries can be corrected here. The original, reversal and optional replacement remain linked. Generated corrections follow the source workflow. This write is unsupported and returns 405. Requires &#x60;journal.correction.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalCorrectionUpdate(uuid).then(
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

## journalEntryAdd

> journalEntryAdd(journalUuid, journalEntryAddRequest)

Add entry

All identifiers are scoped to the authenticated company. Entries are scoped to their parent journal. Generated and posted financial content is immutable. Lines are saved atomically; amounts use exact decimal strings in major currency units. Posting requires &#x60;journal.entry.post&#x60; and an open period; opening entries additionally require &#x60;journal.entry.opening&#x60; and reviewed initialization. Requires &#x60;journal.entry.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let journalEntryAddRequest = {}; // JournalEntryAddRequest |

accounting.journal.journalEntryAdd(journalUuid, journalEntryAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                       | Type                                                    | Description | Notes |
| -------------------------- | ------------------------------------------------------- | ----------- | ----- |
| **journalUuid**            | **String**                                              |             |
| **journalEntryAddRequest** | [**JournalEntryAddRequest**](JournalEntryAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalEntryDelete

> journalEntryDelete(journalUuid, entryUuid)

Delete entry

All identifiers are scoped to the authenticated company. Entries are scoped to their parent journal. Generated and posted financial content is immutable. Lines are saved atomically; amounts use exact decimal strings in major currency units. Posting requires &#x60;journal.entry.post&#x60; and an open period; opening entries additionally require &#x60;journal.entry.opening&#x60; and reviewed initialization. Requires &#x60;journal.entry.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |

accounting.journal.journalEntryDelete(journalUuid, entryUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |
| **entryUuid**   | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalEntryDetails

> journalEntryDetails(journalUuid, entryUuid)

Details entry

All identifiers are scoped to the authenticated company. Entries are scoped to their parent journal. Generated and posted financial content is immutable. Lines are saved atomically; amounts use exact decimal strings in major currency units. Posting requires &#x60;journal.entry.post&#x60; and an open period; opening entries additionally require &#x60;journal.entry.opening&#x60; and reviewed initialization. Requires &#x60;journal.entry.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |

accounting.journal.journalEntryDetails(journalUuid, entryUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |
| **entryUuid**   | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalEntryList

> journalEntryList(journalUuid, page, perPage, status, origin, period, accountingDate, from, to, sourceType, sourceUuid, code, contact)

List entry

All identifiers are scoped to the authenticated company. Entries are scoped to their parent journal. Generated and posted financial content is immutable. Lines are saved atomically; amounts use exact decimal strings in major currency units. Posting requires &#x60;journal.entry.post&#x60; and an open period; opening entries additionally require &#x60;journal.entry.opening&#x60; and reviewed initialization. Requires &#x60;journal.entry.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |
let origin = "origin_example"; // String |
let period = "period_example"; // String |
let accountingDate = "accountingDate_example"; // String |
let from = "from_example"; // String |
let to = "to_example"; // String |
let sourceType = "sourceType_example"; // String |
let sourceUuid = "sourceUuid_example"; // String |
let code = "code_example"; // String |
let contact = "contact_example"; // String |

accounting.journal
  .journalEntryList(
    journalUuid,
    page,
    perPage,
    status,
    origin,
    period,
    accountingDate,
    from,
    to,
    sourceType,
    sourceUuid,
    code,
    contact,
  )
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

| Name               | Type       | Description | Notes      |
| ------------------ | ---------- | ----------- | ---------- |
| **journalUuid**    | **String** |             |
| **page**           | **Number** |             | [optional] |
| **perPage**        | **Number** |             | [optional] |
| **status**         | **String** |             | [optional] |
| **origin**         | **String** |             | [optional] |
| **period**         | **String** |             | [optional] |
| **accountingDate** | **String** |             | [optional] |
| **from**           | **String** |             | [optional] |
| **to**             | **String** |             | [optional] |
| **sourceType**     | **String** |             | [optional] |
| **sourceUuid**     | **String** |             | [optional] |
| **code**           | **String** |             | [optional] |
| **contact**        | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalEntryUpdate

> journalEntryUpdate(journalUuid, entryUuid, journalEntryUpdateRequest)

Update entry

All identifiers are scoped to the authenticated company. Entries are scoped to their parent journal. Generated and posted financial content is immutable. Lines are saved atomically; amounts use exact decimal strings in major currency units. Posting requires &#x60;journal.entry.post&#x60; and an open period; opening entries additionally require &#x60;journal.entry.opening&#x60; and reviewed initialization. Requires &#x60;journal.entry.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let journalEntryUpdateRequest = {}; // JournalEntryUpdateRequest |

accounting.journal
  .journalEntryUpdate(journalUuid, entryUuid, journalEntryUpdateRequest)
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

| Name                          | Type                                                          | Description | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------- | ----- |
| **journalUuid**               | **String**                                                    |             |
| **entryUuid**                 | **String**                                                    |             |
| **journalEntryUpdateRequest** | [**JournalEntryUpdateRequest**](JournalEntryUpdateRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalEvidenceAdd

> journalEvidenceAdd(journalUuid, entryUuid, journalEvidenceAddRequest)

Add evidence

All identifiers are scoped to the authenticated company. Evidence links are append-only; the document and entry must belong to the authenticated company. Requires &#x60;journal.evidence.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let journalEvidenceAddRequest = {}; // JournalEvidenceAddRequest |

accounting.journal
  .journalEvidenceAdd(journalUuid, entryUuid, journalEvidenceAddRequest)
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

| Name                          | Type                                                          | Description | Notes |
| ----------------------------- | ------------------------------------------------------------- | ----------- | ----- |
| **journalUuid**               | **String**                                                    |             |
| **entryUuid**                 | **String**                                                    |             |
| **journalEvidenceAddRequest** | [**JournalEvidenceAddRequest**](JournalEvidenceAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalEvidenceDelete

> journalEvidenceDelete(journalUuid, entryUuid, uuid)

Reject changes to immutable evidence

All identifiers are scoped to the authenticated company. Evidence links are append-only; the document and entry must belong to the authenticated company. This write is unsupported and returns 405. Requires &#x60;journal.evidence.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let uuid = "uuid_example"; // String |

accounting.journal.journalEvidenceDelete(journalUuid, entryUuid, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |
| **entryUuid**   | **String** |             |
| **uuid**        | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalEvidenceDetails

> journalEvidenceDetails(journalUuid, entryUuid, uuid)

Details evidence

All identifiers are scoped to the authenticated company. Evidence links are append-only; the document and entry must belong to the authenticated company. Requires &#x60;journal.evidence.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let uuid = "uuid_example"; // String |

accounting.journal.journalEvidenceDetails(journalUuid, entryUuid, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |
| **entryUuid**   | **String** |             |
| **uuid**        | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalEvidenceList

> journalEvidenceList(journalUuid, entryUuid, page, perPage)

List evidence

All identifiers are scoped to the authenticated company. Evidence links are append-only; the document and entry must belong to the authenticated company. Requires &#x60;journal.evidence.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let page = 56; // Number |
let perPage = 56; // Number |

accounting.journal
  .journalEvidenceList(journalUuid, entryUuid, page, perPage)
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

| Name            | Type       | Description | Notes      |
| --------------- | ---------- | ----------- | ---------- |
| **journalUuid** | **String** |             |
| **entryUuid**   | **String** |             |
| **page**        | **Number** |             | [optional] |
| **perPage**     | **Number** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalEvidenceUpdate

> journalEvidenceUpdate(journalUuid, entryUuid, uuid)

Reject changes to immutable evidence

All identifiers are scoped to the authenticated company. Evidence links are append-only; the document and entry must belong to the authenticated company. This write is unsupported and returns 405. Requires &#x60;journal.evidence.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let uuid = "uuid_example"; // String |

accounting.journal.journalEvidenceUpdate(journalUuid, entryUuid, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |
| **entryUuid**   | **String** |             |
| **uuid**        | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalExportAdd

> journalExportAdd(journalExportAddRequest)

Add export

All identifiers are scoped to the authenticated company. Creation queues generation and returns status&#x3D;pending. Poll the owned details resource until status&#x3D;ready; its CSV is loaded from S3 as JSON data with a SHA-256 hash; this is not a statutory export. Requires &#x60;journal.export.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalExportAddRequest = {}; // JournalExportAddRequest |

accounting.journal.journalExportAdd(journalExportAddRequest).then(
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
| **journalExportAddRequest** | [**JournalExportAddRequest**](JournalExportAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalExportDelete

> journalExportDelete(uuid)

Reject changes to immutable export

All identifiers are scoped to the authenticated company. Creation queues generation and returns status&#x3D;pending. Poll the owned details resource until status&#x3D;ready; its CSV is loaded from S3 as JSON data with a SHA-256 hash; this is not a statutory export. This write is unsupported and returns 405. Requires &#x60;journal.export.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalExportDelete(uuid).then(
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

## journalExportDetails

> journalExportDetails(uuid)

Details export

All identifiers are scoped to the authenticated company. Creation queues generation and returns status&#x3D;pending. Poll the owned details resource until status&#x3D;ready; its CSV is loaded from S3 as JSON data with a SHA-256 hash; this is not a statutory export. Requires &#x60;journal.export.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalExportDetails(uuid).then(
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

## journalExportList

> journalExportList(page, perPage)

List export

All identifiers are scoped to the authenticated company. Creation queues generation and returns status&#x3D;pending. Poll the owned details resource until status&#x3D;ready; its CSV is loaded from S3 as JSON data with a SHA-256 hash; this is not a statutory export. Requires &#x60;journal.export.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |

accounting.journal.journalExportList(page, perPage).then(
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

## journalExportUpdate

> journalExportUpdate(uuid)

Reject changes to immutable export

All identifiers are scoped to the authenticated company. Creation queues generation and returns status&#x3D;pending. Poll the owned details resource until status&#x3D;ready; its CSV is loaded from S3 as JSON data with a SHA-256 hash; this is not a statutory export. This write is unsupported and returns 405. Requires &#x60;journal.export.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalExportUpdate(uuid).then(
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

## journalInitializationAdd

> journalInitializationAdd(journalInitializationAddRequest)

Add initialization

Creation schedules historical processing. Explicit zero opening with automatic_setup also prepares journals and mappings and requires &#x60;journal.add&#x60;, &#x60;journal.mapping.add&#x60; and &#x60;accounting_code.add&#x60;. replace_unposted additionally requires &#x60;journal.mapping.edit&#x60; and refuses any financial history. Requires &#x60;journal.initialization.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalInitializationAddRequest = {}; // JournalInitializationAddRequest |

accounting.journal
  .journalInitializationAdd(journalInitializationAddRequest)
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

| Name                                | Type                                                                      | Description | Notes |
| ----------------------------------- | ------------------------------------------------------------------------- | ----------- | ----- |
| **journalInitializationAddRequest** | [**JournalInitializationAddRequest**](JournalInitializationAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalInitializationDelete

> journalInitializationDelete(uuid)

Reject changes to immutable initialization

All identifiers are scoped to the authenticated company. Creation schedules historical processing; status remains system-managed. This write is unsupported and returns 405. Requires &#x60;journal.initialization.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalInitializationDelete(uuid).then(
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

## journalInitializationDetails

> journalInitializationDetails(uuid)

Details initialization

All identifiers are scoped to the authenticated company. Creation schedules historical processing; status remains system-managed. Requires &#x60;journal.initialization.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalInitializationDetails(uuid).then(
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

## journalInitializationList

> journalInitializationList(page, perPage, status)

List initialization

All identifiers are scoped to the authenticated company. Creation schedules historical processing; status remains system-managed. Requires &#x60;journal.initialization.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |

accounting.journal.journalInitializationList(page, perPage, status).then(
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
| **status**  | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalInitializationUpdate

> journalInitializationUpdate(uuid)

Reject changes to immutable initialization

All identifiers are scoped to the authenticated company. Creation schedules historical processing; status remains system-managed. This write is unsupported and returns 405. Requires &#x60;journal.initialization.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalInitializationUpdate(uuid).then(
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

## journalIssueAdd

> journalIssueAdd()

Reject changes to immutable issue

All identifiers are scoped to the authenticated company. This write is unsupported and returns 405. Requires &#x60;journal.issue.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.journal.journalIssueAdd().then(
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
- **Accept**: application/json

## journalIssueDelete

> journalIssueDelete(uuid)

Reject changes to immutable issue

All identifiers are scoped to the authenticated company. This write is unsupported and returns 405. Requires &#x60;journal.issue.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalIssueDelete(uuid).then(
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

## journalIssueDetails

> journalIssueDetails(uuid)

Details issue

All identifiers are scoped to the authenticated company. Requires &#x60;journal.issue.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalIssueDetails(uuid).then(
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

## journalIssueList

> journalIssueList(page, perPage, status, sourceType, sourceUuid, event)

List issue

All identifiers are scoped to the authenticated company. Requires &#x60;journal.issue.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |
let sourceType = "sourceType_example"; // String |
let sourceUuid = "sourceUuid_example"; // String |
let event = "event_example"; // String |

accounting.journal
  .journalIssueList(page, perPage, status, sourceType, sourceUuid, event)
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

| Name           | Type       | Description | Notes      |
| -------------- | ---------- | ----------- | ---------- |
| **page**       | **Number** |             | [optional] |
| **perPage**    | **Number** |             | [optional] |
| **status**     | **String** |             | [optional] |
| **sourceType** | **String** |             | [optional] |
| **sourceUuid** | **String** |             | [optional] |
| **event**      | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalIssueUpdate

> journalIssueUpdate(uuid)

Reject changes to immutable issue

All identifiers are scoped to the authenticated company. This write is unsupported and returns 405. Requires &#x60;journal.issue.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalIssueUpdate(uuid).then(
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

## journalJournalAdd

> journalJournalAdd(journalJournalAddRequest)

Add journal

All identifiers are scoped to the authenticated company. Requires &#x60;journal.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalJournalAddRequest = {}; // JournalJournalAddRequest |

accounting.journal.journalJournalAdd(journalJournalAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                         | Type                                                        | Description | Notes |
| ---------------------------- | ----------------------------------------------------------- | ----------- | ----- |
| **journalJournalAddRequest** | [**JournalJournalAddRequest**](JournalJournalAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalJournalDelete

> journalJournalDelete(journalUuid)

Delete journal

All identifiers are scoped to the authenticated company. Requires &#x60;journal.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |

accounting.journal.journalJournalDelete(journalUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalJournalDetails

> journalJournalDetails(journalUuid)

Details journal

All identifiers are scoped to the authenticated company. Requires &#x60;journal.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |

accounting.journal.journalJournalDetails(journalUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name            | Type       | Description | Notes |
| --------------- | ---------- | ----------- | ----- |
| **journalUuid** | **String** |             |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalJournalList

> journalJournalList(page, perPage, status, type)

List journal

All identifiers are scoped to the authenticated company. Requires &#x60;journal.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |
let type = "type_example"; // String |

accounting.journal.journalJournalList(page, perPage, status, type).then(
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
| **status**  | **String** |             | [optional] |
| **type**    | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalJournalUpdate

> journalJournalUpdate(journalUuid, journalJournalUpdateRequest)

Update journal

All identifiers are scoped to the authenticated company. Requires &#x60;journal.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let journalJournalUpdateRequest = {}; // JournalJournalUpdateRequest |

accounting.journal
  .journalJournalUpdate(journalUuid, journalJournalUpdateRequest)
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

| Name                            | Type                                                              | Description | Notes |
| ------------------------------- | ----------------------------------------------------------------- | ----------- | ----- |
| **journalUuid**                 | **String**                                                        |             |
| **journalJournalUpdateRequest** | [**JournalJournalUpdateRequest**](JournalJournalUpdateRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalMappingAdd

> journalMappingAdd(journalMappingAddRequest)

Add mapping

All identifiers are scoped to the authenticated company. The code field identifies an existing accounting code UUID. No accounting codes are created by this endpoint. Requires &#x60;journal.mapping.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalMappingAddRequest = {}; // JournalMappingAddRequest |

accounting.journal.journalMappingAdd(journalMappingAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                         | Type                                                        | Description | Notes |
| ---------------------------- | ----------------------------------------------------------- | ----------- | ----- |
| **journalMappingAddRequest** | [**JournalMappingAddRequest**](JournalMappingAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalMappingDelete

> journalMappingDelete(uuid)

Delete mapping

All identifiers are scoped to the authenticated company. The code field identifies an existing accounting code UUID. No accounting codes are created by this endpoint. Requires &#x60;journal.mapping.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalMappingDelete(uuid).then(
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

## journalMappingDetails

> journalMappingDetails(uuid)

Details mapping

All identifiers are scoped to the authenticated company. The code field identifies an existing accounting code UUID. No accounting codes are created by this endpoint. Requires &#x60;journal.mapping.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalMappingDetails(uuid).then(
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

## journalMappingList

> journalMappingList(page, perPage, role, scope, status)

List mapping

All identifiers are scoped to the authenticated company. The code field identifies an existing accounting code UUID. No accounting codes are created by this endpoint. Requires &#x60;journal.mapping.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let role = "role_example"; // String |
let scope = "scope_example"; // String |
let status = "status_example"; // String |

accounting.journal.journalMappingList(page, perPage, role, scope, status).then(
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
| **role**    | **String** |             | [optional] |
| **scope**   | **String** |             | [optional] |
| **status**  | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalMappingUpdate

> journalMappingUpdate(uuid, journalMappingUpdateRequest)

Update mapping

All identifiers are scoped to the authenticated company. The code field identifies an existing accounting code UUID. No accounting codes are created by this endpoint. Requires &#x60;journal.mapping.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let journalMappingUpdateRequest = {}; // JournalMappingUpdateRequest |

accounting.journal.journalMappingUpdate(uuid, journalMappingUpdateRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name                            | Type                                                              | Description | Notes |
| ------------------------------- | ----------------------------------------------------------------- | ----------- | ----- |
| **uuid**                        | **String**                                                        |             |
| **journalMappingUpdateRequest** | [**JournalMappingUpdateRequest**](JournalMappingUpdateRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalMovements

> journalMovements(code, from, to, contact, journal, period, bankAccount, page, perPage)

Posted account movements

Posted entries only; exact decimal strings use ISO minor-unit precision in the preserved company books currency (EUR 2, JPY 0, KWD 3). Requires &#x60;journal.report.view&#x60;. Reports do not certify country compliance or source completeness.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let code = "code_example"; // String |
let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |
let page = 56; // Number |
let perPage = 56; // Number |

accounting.journal
  .journalMovements(
    code,
    from,
    to,
    contact,
    journal,
    period,
    bankAccount,
    page,
    perPage,
  )
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

| Name            | Type       | Description | Notes      |
| --------------- | ---------- | ----------- | ---------- |
| **code**        | **String** |             |
| **from**        | **Date**   |             | [optional] |
| **to**          | **Date**   |             | [optional] |
| **contact**     | **String** |             | [optional] |
| **journal**     | **String** |             | [optional] |
| **period**      | **String** |             | [optional] |
| **bankAccount** | **String** |             | [optional] |
| **page**        | **Number** |             | [optional] |
| **perPage**     | **Number** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalPeriodAdd

> journalPeriodAdd(journalPeriodAddRequest)

Add period

All identifiers are scoped to the authenticated company. Requires &#x60;journal.period.add&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalPeriodAddRequest = {}; // JournalPeriodAddRequest |

accounting.journal.journalPeriodAdd(journalPeriodAddRequest).then(
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
| **journalPeriodAddRequest** | [**JournalPeriodAddRequest**](JournalPeriodAddRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalPeriodDelete

> journalPeriodDelete(uuid)

Delete period

All identifiers are scoped to the authenticated company. Requires &#x60;journal.period.delete&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalPeriodDelete(uuid).then(
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

## journalPeriodDetails

> journalPeriodDetails(uuid)

Details period

All identifiers are scoped to the authenticated company. Requires &#x60;journal.period.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalPeriodDetails(uuid).then(
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

## journalPeriodList

> journalPeriodList(page, perPage, status)

List period

All identifiers are scoped to the authenticated company. Requires &#x60;journal.period.list&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |

accounting.journal.journalPeriodList(page, perPage, status).then(
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
| **status**  | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalPeriodUpdate

> journalPeriodUpdate(uuid, journalPeriodUpdateRequest)

Update period

All identifiers are scoped to the authenticated company. Requires &#x60;journal.period.edit&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let journalPeriodUpdateRequest = {}; // JournalPeriodUpdateRequest |

accounting.journal.journalPeriodUpdate(uuid, journalPeriodUpdateRequest).then(
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
| **journalPeriodUpdateRequest** | [**JournalPeriodUpdateRequest**](JournalPeriodUpdateRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## journalProfitandloss

> journalProfitandloss(from, to, code, contact, journal, period, bankAccount)

Profit and loss

Posted entries only; exact decimal strings use ISO minor-unit precision in the preserved company books currency (EUR 2, JPY 0, KWD 3). Requires &#x60;journal.report.view&#x60;. Reports do not certify country compliance or source completeness.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |

accounting.journal
  .journalProfitandloss(from, to, code, contact, journal, period, bankAccount)
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

| Name            | Type       | Description | Notes      |
| --------------- | ---------- | ----------- | ---------- |
| **from**        | **Date**   |             | [optional] |
| **to**          | **Date**   |             | [optional] |
| **code**        | **String** |             | [optional] |
| **contact**     | **String** |             | [optional] |
| **journal**     | **String** |             | [optional] |
| **period**      | **String** |             | [optional] |
| **bankAccount** | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## journalTrialbalance

> journalTrialbalance(from, to, code, contact, journal, period, bankAccount)

Trial balance

Posted entries only; exact decimal strings use ISO minor-unit precision in the preserved company books currency (EUR 2, JPY 0, KWD 3). Requires &#x60;journal.report.view&#x60;. Reports do not certify country compliance or source completeness.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |

accounting.journal
  .journalTrialbalance(from, to, code, contact, journal, period, bankAccount)
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

| Name            | Type       | Description | Notes      |
| --------------- | ---------- | ----------- | ---------- |
| **from**        | **Date**   |             | [optional] |
| **to**          | **Date**   |             | [optional] |
| **code**        | **String** |             | [optional] |
| **contact**     | **String** |             | [optional] |
| **journal**     | **String** |             | [optional] |
| **period**      | **String** |             | [optional] |
| **bankAccount** | **String** |             | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
