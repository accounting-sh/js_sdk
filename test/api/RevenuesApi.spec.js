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

describe("RevenuesApi", function () {
  describe("addRevenue", function () {
    it("should call addRevenue successfully", function (done) {
      let path = "/incomes/revenues";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.revenues
        .addRevenue({})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("deleteRevenue", function () {
    it("should call deleteRevenue successfully", function (done) {
      let path = "/incomes/revenues/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.revenues
        .deleteRevenue("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getRevenue", function () {
    it("should call getRevenue successfully", function (done) {
      let path = "/incomes/revenues/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.revenues
        .getRevenue("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listRevenues", function () {
    it("should call listRevenues successfully", function (done) {
      let path = "/incomes/revenues";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.revenues
        .listRevenues("fields_example", "page_example", "perPage_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("updateRevenue", function () {
    it("should call updateRevenue successfully", function (done) {
      let path = "/incomes/revenues/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.revenues
        .updateRevenue("uuid_example", {})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});