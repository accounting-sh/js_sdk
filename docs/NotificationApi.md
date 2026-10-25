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

List notification preferences. Use the parameters and response fields below for this operation. Requires at least one permission: &#x60;manage.notification_preferences&#x60;.

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

> listNotifications(fields, page, perPage, orderBy)

List company&#39;s notifications

List company&#39;s notifications. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list_notification&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,notification"; // String | Comma-separated fields to include in each record. Default fields: uuid, notification.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.notification.listNotifications(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
```

### Parameters

| Name        | Type       | Description                                                                           | Notes                      |
| ----------- | ---------- | ------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: uuid, notification. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                          | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.  | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.               | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## sendNotification

> sendNotification(sendNotificationRequest)

Send a notification

Send a notification using the supplied delivery options. This action can contact recipients; avoid automatic retries. Requires at least one permission: &#x60;send_notification&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let sendNotificationRequest = {}; // SendNotificationRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                        | Type                                                      | Description                                                                        | Notes |
| --------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **sendNotificationRequest** | [**SendNotificationRequest**](SendNotificationRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## updateNotificationPreferences

> updateNotificationPreferences(notification, updateNotificationPreferencesRequest)

Update notification preferences

Update notification preferences. Send the fields accepted by this operation in the request body. Omitted optional fields retain their existing values. Requires at least one permission: &#x60;manage.notification_preferences&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let notification = "notification_example"; // String | The notification name
let updateNotificationPreferencesRequest = {}; // UpdateNotificationPreferencesRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                                     | Type                                                                                | Description                                                                        | Notes |
| ---------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **notification**                         | **String**                                                                          | The notification name                                                              |
| **updateNotificationPreferencesRequest** | [**UpdateNotificationPreferencesRequest**](UpdateNotificationPreferencesRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
