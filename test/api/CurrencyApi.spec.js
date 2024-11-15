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

describe("CurrencyApi", function () {
  describe("getExchangeRate", function () {
    it("should call getExchangeRate successfully", function (done) {
      let path = "/currency/{from}/{to}";
      path = path.replace("{" + "from" + "}", "from_example");
      path = path.replace("{" + "to" + "}", "to_example");

      mock.onAny(path).reply(200, {});
      let accounting = new Accounting(
        "fake-token",
        "https://fake-endpoint.accounting.sh",
      );
      accounting.currency
        .getExchangeRate("from_example", "to_example")
        .then(() => {
          done();
        })
        .catch(() => {
          done(false);
        });
    });
  });
});
