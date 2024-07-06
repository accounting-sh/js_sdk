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

describe("TransfersApi", function () {
  describe("addTransfer", function () {
    it("should call addTransfer successfully", function (done) {
      let path = "/transfers";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.transfers
        .addTransfer({})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("deleteTransfer", function () {
    it("should call deleteTransfer successfully", function (done) {
      let path = "/transfers/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.transfers
        .deleteTransfer("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getTransfer", function () {
    it("should call getTransfer successfully", function (done) {
      let path = "/transfers/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.transfers
        .getTransfer("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listTransfers", function () {
    it("should call listTransfers successfully", function (done) {
      let path = "/transfers";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.transfers
        .listTransfers("fields_example", "page_example", "perPage_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("updateTransfer", function () {
    it("should call updateTransfer successfully", function (done) {
      let path = "/transfers/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.transfers
        .updateTransfer("uuid_example", {})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});