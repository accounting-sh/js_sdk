# Accountingsh.LogsApi

All URIs are relative to *https://api.accounting.sh*

| Method                      | HTTP request  | Description             |
| --------------------------- | ------------- | ----------------------- |
| [**logs**](LogsApi.md#logs) | **GET** /logs | List company&#39;s logs |

## logs

> logs(fields, page, perPage, channel, level, resource, before, after, format)

List company&#39;s logs

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let channel = "channel_example"; // String | The channel to retrieve the logs from
let level = "level_example"; // String | The log level to retrieve
let resource = "resource_example"; // String | Retrive logs linked to that resource
let before = "before_example"; // String | Retrive logs before the provided date
let after = "after_example"; // String | Retrive logs after the provided date
let format = "format_example"; // String | In which format to retrieve the logs, available: json or txt

accounting.logs
  .logs(fields, page, perPage, channel, level, resource, before, after, format)
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

| Name         | Type       | Description                                                  | Notes      |
| ------------ | ---------- | ------------------------------------------------------------ | ---------- |
| **fields**   | **String** | A comma separated list of fields requested in the response   | [optional] |
| **page**     | **String** | The response page                                            | [optional] |
| **perPage**  | **String** | The number of items per page                                 | [optional] |
| **channel**  | **String** | The channel to retrieve the logs from                        | [optional] |
| **level**    | **String** | The log level to retrieve                                    | [optional] |
| **resource** | **String** | Retrive logs linked to that resource                         | [optional] |
| **before**   | **String** | Retrive logs before the provided date                        | [optional] |
| **after**    | **String** | Retrive logs after the provided date                         | [optional] |
| **format**   | **String** | In which format to retrieve the logs, available: json or txt | [optional] |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
