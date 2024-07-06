/**
 * Accounting API
 *
 * The version of the OpenAPI document: VERSION_HERE
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Accounting } from "../../src/index.js";

let mock = new MockAdapter(axios);

describe("WebhooksApi", function () {
  describe("addWebhook", function () {
    it("should call addWebhook successfully", function (done) {
      let path = "/webhooks";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .addWebhook({})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("deleteWebhook", function () {
    it("should call deleteWebhook successfully", function (done) {
      let path = "/webhooks/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .deleteWebhook("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getWebhook", function () {
    it("should call getWebhook successfully", function (done) {
      let path = "/webhooks/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .getWebhook("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getWebhookHistory", function () {
    it("should call getWebhookHistory successfully", function (done) {
      let path = "/webhooks/{uuid}/history";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .getWebhookHistory("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listWebhookEvents", function () {
    it("should call listWebhookEvents successfully", function (done) {
      let path = "/webhooks/events";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .listWebhookEvents()
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listWebhooks", function () {
    it("should call listWebhooks successfully", function (done) {
      let path = "/webhooks";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .listWebhooks("fields_example", "page_example", "perPage_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("updateWebhook", function () {
    it("should call updateWebhook successfully", function (done) {
      let path = "/webhooks/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.webhooks
        .updateWebhook({}, "uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});
