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

describe("AttachmentsApi", function () {
  describe("addAttachment", function () {
    it("should call addAttachment successfully", function (done) {
      let path = "/attachments";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.attachments
        .addAttachment({})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("deleteAttachment", function () {
    it("should call deleteAttachment successfully", function (done) {
      let path = "/attachments/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.attachments
        .deleteAttachment("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("getAttachment", function () {
    it("should call getAttachment successfully", function (done) {
      let path = "/attachments/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.attachments
        .getAttachment("uuid_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("listAttachments", function () {
    it("should call listAttachments successfully", function (done) {
      let path = "/attachments";

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.attachments
        .listAttachments("fields_example", "page_example", "perPage_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("retrieveAttachments", function () {
    it("should call retrieveAttachments successfully", function (done) {
      let path = "/attachments/resource/{resource}";
      path = path.replace("{" + "resource" + "}", "resource_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.attachments
        .retrieveAttachments(
          "resource_example",
          "fields_example",
          "page_example",
          "perPage_example",
        )
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
  describe("updateAttachment", function () {
    it("should call updateAttachment successfully", function (done) {
      let path = "/attachments/{uuid}";
      path = path.replace("{" + "uuid" + "}", "uuid_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.attachments
        .updateAttachment("uuid_example", {})
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});
