/**
 * Accounting API
 *
 * The version of the OpenAPI document: 8.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class NotificationTypesApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addNotificationType(addNotificationTypeRequest) {
    // verify the required parameter 'addNotificationTypeRequest' is set
    if (
      addNotificationTypeRequest === undefined ||
      addNotificationTypeRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addNotificationTypeRequest' when calling addNotificationType",
      );
    }

    let path = "/notifications/types";

    let options = {
      params: {},
      data: addNotificationTypeRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteNotificationType(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteNotificationType",
      );
    }

    let path = "/notifications/types/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getNotificationType(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getNotificationType",
      );
    }

    let path = "/notifications/types/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listNotificationTypes(fields = null, page = null, perPage = null) {
    let path = "/notifications/types";

    let options = {
      params: {
        fields: fields,
        page: page,
        per_page: perPage,
      },
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  updateNotificationType(uuid, addNotificationTypeRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateNotificationType",
      );
    }

    // verify the required parameter 'addNotificationTypeRequest' is set
    if (
      addNotificationTypeRequest === undefined ||
      addNotificationTypeRequest === null
    ) {
      throw new Error(
        "Missing the required parameter 'addNotificationTypeRequest' when calling updateNotificationType",
      );
    }

    let path = "/notifications/types/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addNotificationTypeRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
