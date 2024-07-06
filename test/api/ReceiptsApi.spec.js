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

describe("ReceiptsApi", function () {
  describe("addReceipt", function () {
    it("should call addReceipt successfully", function (done) {
      let path = "/receipts";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.receipts
        .addReceipt({})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("deleteReceipt", function () {
    it("should call deleteReceipt successfully", function (done) {
      let path = "/receipts/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.receipts
        .deleteReceipt("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getReceipt", function () {
    it("should call getReceipt successfully", function (done) {
      let path = "/receipts/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.receipts
        .getReceipt("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getReceiptDocument", function () {
    it("should call getReceiptDocument successfully", function (done) {
      let path = "/receipts/{uuid}/document";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.receipts
        .getReceiptDocument("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listReceipts", function () {
    it("should call listReceipts successfully", function (done) {
      let path = "/receipts";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.receipts
        .listReceipts("fields_example", "page_example", "perPage_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("updateReceipt", function () {
    it("should call updateReceipt successfully", function (done) {
      let path = "/receipts/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.receipts
        .updateReceipt("uuid_example", {})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});
