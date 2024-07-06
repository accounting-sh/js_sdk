# Accountingsh.NotificationApi

All URIs are relative to *https://api.accounting.sh*

| Method                                                                                | HTTP request                                      | Description                      |
| ------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------- |
| [**listNotificationPreferences**](NotificationApi.md#listNotificationPreferences)     | **GET** /notifications/preferences/{notification} | List notification preferences    |
| [**listNotifications**](NotificationApi.md#listNotifications)                         | **GET** /notifications                            | List company&#39;s notifications |
| [**sendNotification**](NotificationApi.md#sendNotification)                           | **POST** /notifications/send                      | Send a notification              |
| [**updateNotificationPreferences**](NotificationApi.md#updateNotificationPreferences) | **PUT** /notifications/preferences/{notification} | Update notification preferences  |

## listNotificationPreferences

> listNotificationPreferences(notification)

List notification preferences

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let notification = "notification_example"; // String | The notification name

accounting.notification.listNotificationPreferences(notification).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name             | Type       | Description           | Notes |
| ---------------- | ---------- | --------------------- | ----- |
| **notification** | **String** | The notification name |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## listNotifications

> listNotifications(fields, page, perPage)

List company&#39;s notifications

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.notification.listNotifications(fields, page, perPage).then(
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

## sendNotification

> sendNotification(sendNotificationRequest)

Send a notification

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let sendNotificationRequest = {}; // SendNotificationRequest |

accounting.notification.sendNotification(sendNotificationRequest).then(
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
| **sendNotificationRequest** | [**SendNotificationRequest**](SendNotificationRequest.md) |             |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateNotificationPreferences

> updateNotificationPreferences(notification, updateNotificationPreferencesRequest)

Update notification preferences

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let notification = "notification_example"; // String | The notification name
let updateNotificationPreferencesRequest = {}; // UpdateNotificationPreferencesRequest |

accounting.notification
  .updateNotificationPreferences(
    notification,
    updateNotificationPreferencesRequest,
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

| Name                                     | Type                                                                                | Description           | Notes |
| ---------------------------------------- | ----------------------------------------------------------------------------------- | --------------------- | ----- |
| **notification**                         | **String**                                                                          | The notification name |
| **updateNotificationPreferencesRequest** | [**UpdateNotificationPreferencesRequest**](UpdateNotificationPreferencesRequest.md) |                       |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
