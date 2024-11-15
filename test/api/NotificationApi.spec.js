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

describe("NotificationApi", function () {
  describe("listNotificationPreferences", function () {
    it("should call listNotificationPreferences successfully", function (done) {
      let path = "/notifications/preferences/{notification}";
      path = path.replace("{" + "notification" + "}", "notification_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.notification
        .listNotificationPreferences("notification_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listNotifications", function () {
    it("should call listNotifications successfully", function (done) {
      let path = "/notifications";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.notification
        .listNotifications("fields_example", "page_example", "perPage_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("sendNotification", function () {
    it("should call sendNotification successfully", function (done) {
      let path = "/notifications/send";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.notification
        .sendNotification({})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("updateNotificationPreferences", function () {
    it("should call updateNotificationPreferences successfully", function (done) {
      let path = "/notifications/preferences/{notification}";
      path = path.replace("{" + "notification" + "}", "notification_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.notification
        .updateNotificationPreferences("notification_example", {})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});
