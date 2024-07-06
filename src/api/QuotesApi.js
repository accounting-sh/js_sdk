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

export class QuotesApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addQuote(addQuoteRequest) {
    // verify the required parameter 'addQuoteRequest' is set
    if (addQuoteRequest === undefined || addQuoteRequest === null) {
      throw new Error(
        "Missing the required parameter 'addQuoteRequest' when calling addQuote",
      );
    }

    let path = "/quotes";

    let options = {
      params: {},
      data: addQuoteRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteQuote(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteQuote",
      );
    }

    let path = "/quotes/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getQuote(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getQuote",
      );
    }

    let path = "/quotes/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  getQuoteDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getQuoteDocument",
      );
    }

    let path = "/quotes/{uuid}/document";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listQuotes(fields = null, page = null, perPage = null) {
    let path = "/quotes";

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

  updateQuote(uuid, addQuoteRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateQuote",
      );
    }

    // verify the required parameter 'addQuoteRequest' is set
    if (addQuoteRequest === undefined || addQuoteRequest === null) {
      throw new Error(
        "Missing the required parameter 'addQuoteRequest' when calling updateQuote",
      );
    }

    let path = "/quotes/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addQuoteRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}