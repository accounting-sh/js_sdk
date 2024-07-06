# Accountingsh.NotificationTypesApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                       | HTTP request                           | Description                           |
| ---------------------------------------------------------------------------- | -------------------------------------- | ------------------------------------- |
| [**addNotificationType**](NotificationTypesApi.md#addNotificationType)       | **POST** /notifications/types          | Add a notification type               |
| [**deleteNotificationType**](NotificationTypesApi.md#deleteNotificationType) | **DELETE** /notifications/types/{uuid} | Delete a notification type            |
| [**getNotificationType**](NotificationTypesApi.md#getNotificationType)       | **GET** /notifications/types/{uuid}    | Get a notification type               |
| [**listNotificationTypes**](NotificationTypesApi.md#listNotificationTypes)   | **GET** /notifications/types           | List company&#39;s notification types |
| [**updateNotificationType**](NotificationTypesApi.md#updateNotificationType) | **PUT** /notifications/types/{uuid}    | Update a notification type            |

## addNotificationType

> addNotificationType(addNotificationTypeRequest)

Add a notification type

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addNotificationTypeRequest = {}; // AddNotificationTypeRequest |

accounting.notificationTypes
  .addNotificationType(addNotificationTypeRequest)
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
| **addNotificationTypeRequest** | [**AddNotificationTypeRequest**](AddNotificationTypeRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteNotificationType

> deleteNotificationType(uuid)

Delete a notification type

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid

accounting.notificationTypes.deleteNotificationType(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                | Notes |
| -------- | ---------- | -------------------------- | ----- |
| **uuid** | **String** | The notification type uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getNotificationType

> getNotificationType(uuid)

Get a notification type

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid

accounting.notificationTypes.getNotificationType(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name     | Type       | Description                | Notes |
| -------- | ---------- | -------------------------- | ----- |
| **uuid** | **String** | The notification type uuid |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listNotificationTypes

> listNotificationTypes(fields, page, perPage)

List company&#39;s notification types

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.notificationTypes.listNotificationTypes(fields, page, perPage).then(
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

## updateNotificationType

> updateNotificationType(uuid, addNotificationTypeRequest)

Update a notification type

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid
let addNotificationTypeRequest = {}; // AddNotificationTypeRequest |

accounting.notificationTypes
  .updateNotificationType(uuid, addNotificationTypeRequest)
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

| Name                           | Type                                                            | Description                | Notes |
| ------------------------------ | --------------------------------------------------------------- | -------------------------- | ----- |
| **uuid**                       | **String**                                                      | The notification type uuid |
| **addNotificationTypeRequest** | [**AddNotificationTypeRequest**](AddNotificationTypeRequest.md) |                            |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
