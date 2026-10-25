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

Add a notification type. Send the resource fields in the request body; the response contains the saved record. Requires at least one permission: &#x60;add.notification_type&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addNotificationTypeRequest = {}; // AddNotificationTypeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

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

| Name                           | Type                                                            | Description                                                                        | Notes |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **addNotificationTypeRequest** | [**AddNotificationTypeRequest**](AddNotificationTypeRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteNotificationType

> deleteNotificationType(uuid)

Delete a notification type

Delete a notification type. This action deletes the selected record. Review references to it before deletion. Requires at least one permission: &#x60;delete.notification_type&#x60;.

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

Get a notification type. Use the identifier returned by the corresponding list or create operation. Requires at least one permission: &#x60;view.notification_type&#x60;.

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

> listNotificationTypes(fields, page, perPage, orderBy)

List company&#39;s notification types

List company&#39;s notification types. Retrieve records using the query parameters below. Requires at least one permission: &#x60;list.notification_type&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "name,title,description,allowed_methods,internal"; // String | Comma-separated fields to include in each record. Default fields: name, title, description, allowed_methods, internal.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.notificationTypes
  .listNotificationTypes(fields, page, perPage, orderBy)
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

| Name        | Type       | Description                                                                                                            | Notes                      |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| **fields**  | **String** | Comma-separated fields to include in each record. Default fields: name, title, description, allowed_methods, internal. | [optional]                 |
| **page**    | **Number** | Page number, starting at 1. Values below 1 are treated as 1.                                                           | [optional] [default to 1]  |
| **perPage** | **Number** | Records per page. The server caps page size to 100. Values below 1 use that maximum.                                   | [optional] [default to 10] |
| **orderBy** | **String** | Sort by a supported field and direction, using field:asc or field:desc.                                                | [optional]                 |

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateNotificationType

> updateNotificationType(uuid, updateNotificationTypeRequest)

Update a notification type

Update a notification type. Send the fields accepted by this operation in the request body. Requires at least one permission: &#x60;edit.notification_type&#x60;.

### Example

```javascript
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid
let updateNotificationTypeRequest = {}; // UpdateNotificationTypeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.notificationTypes
  .updateNotificationType(uuid, updateNotificationTypeRequest)
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

| Name                              | Type                                                                  | Description                                                                        | Notes |
| --------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ----- |
| **uuid**                          | **String**                                                            | The notification type uuid                                                         |
| **updateNotificationTypeRequest** | [**UpdateNotificationTypeRequest**](UpdateNotificationTypeRequest.md) | Send a JSON object with the fields below. Fields marked required must be supplied. |

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
