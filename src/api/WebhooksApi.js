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

export class WebhooksApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addWebhook(addWebhookRequest) {
    // verify the required parameter 'addWebhookRequest' is set
    if (addWebhookRequest === undefined || addWebhookRequest === null) {
      throw new Error(
        "Missing the required parameter 'addWebhookRequest' when calling addWebhook",
      );
    }

    let path = "/webhooks";

    let options = {
      params: {},
      data: addWebhookRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteWebhook(uuid = null) {
    let path = "/webhooks/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getWebhook(uuid = null) {
    let path = "/webhooks/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getWebhookHistory(uuid = null) {
    let path = "/webhooks/{uuid}/history";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listWebhookEvents() {
    let path = "/webhooks/events";

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listWebhooks(fields = null, page = null, perPage = null) {
    let path = "/webhooks";

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

  updateWebhook(addWebhookRequest, uuid = null) {
    // verify the required parameter 'addWebhookRequest' is set
    if (addWebhookRequest === undefined || addWebhookRequest === null) {
      throw new Error(
        "Missing the required parameter 'addWebhookRequest' when calling updateWebhook",
      );
    }

    let path = "/webhooks/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addWebhookRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
