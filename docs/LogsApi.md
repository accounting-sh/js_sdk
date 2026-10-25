# Accountingsh.LogsApi

All URIs are relative to *https://api.accounting.sh*

| Method                      | HTTP request  | Description             |
| --------------------------- | ------------- | ----------------------- |
| [**logs**](LogsApi.md#logs) | **GET** /logs | List company&#39;s logs |

## logs

> logs(fields, page, perPage, channel, level, resource, before, after, format, orderBy)

List company&#39;s logs

List company&#39;s logs. Retrieve records using the query parameters below. Requires at least one permission: &#x60;log.view&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,channel,level,message,recorded_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, channel, level, message, recorded_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let channel = "channel_example"; // String | The channel to retrieve the logs from
let level = "level_example"; // String | The log level to retrieve
let resource = "resource_example"; // String | Retrive logs linked to that resource
let before = "before_example"; // String | Retrive logs before the provided date
let after = "after_example"; // String | Retrive logs after the provided date
let format = "format_example"; // String | In which format to retrieve the logs, available: json or txt
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.logs
  .logs(
    fields,
    page,
    perPage,
    channel,
    level,
    resource,
    before,
    after,
    format,
    orderBy,
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

| Name         | Type       | Description                                                                                                   | Notes                      |
| ------------ | ---------- | ------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**   | **String** | Comma-separated fields to include in each record. Default fields: uuid, channel, level, message, recorded_at. | [optional]                 |
| **page**     | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                                  | [optional] [default to 1]  |
| **perPage**  | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                          | [optional] [default to 10] |
| **channel**  | **String** | The channel to retrieve the logs from                                                                         | [optional]                 |
| **level**    | **String** | The log level to retrieve                                                                                     | [optional]                 |
| **resource** | **String** | Retrive logs linked to that resource                                                                          | [optional]                 |
| **before**   | **String** | Retrive logs before the provided date                                                                         | [optional]                 |
| **after**    | **String** | Retrive logs after the provided date                                                                          | [optional]                 |
| **format**   | **String** | In which format to retrieve the logs, available: json or txt                                                  | [optional]                 |
| **orderBy**  | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                       | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
