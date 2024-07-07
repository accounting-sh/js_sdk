/**
 * Accounting API
 *
 * The version of the OpenAPI document: 7.5.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class DocumentsApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  cancelReview(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling cancelReview",
      );
    }

    let path = "/documents/{uuid}/review";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  deleteDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteDocument",
      );
    }

    let path = "/documents/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getDocument",
      );
    }

    let path = "/documents/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listDocuments(fields = null, page = null, perPage = null) {
    let path = "/documents";

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

  processDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling processDocument",
      );
    }

    let path = "/documents/{uuid}/process";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  reviewUrl(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling reviewUrl",
      );
    }

    let path = "/documents/{uuid}/review";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  updateDocument(uuid, updateDocumentRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateDocument",
      );
    }

    // verify the required parameter 'updateDocumentRequest' is set
    if (updateDocumentRequest === undefined || updateDocumentRequest === null) {
      throw new Error(
        "Missing the required parameter 'updateDocumentRequest' when calling updateDocument",
      );
    }

    let path = "/documents/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: updateDocumentRequest,
    };

    return this.accounting.request("PUT", path, options);
  }

  uploadDocument(name, file) {
    // verify the required parameter 'name' is set
    if (name === undefined || name === null) {
      throw new Error(
        "Missing the required parameter 'name' when calling uploadDocument",
      );
    }

    // verify the required parameter 'file' is set
    if (file === undefined || file === null) {
      throw new Error(
        "Missing the required parameter 'file' when calling uploadDocument",
      );
    }

    let path = "/documents";

    let options = {
      params: {},
      data: {},
    };

    const formData = new FormData();

    formData.append("name", name);
    formData.append("file", file);

    options.data = formData;

    return this.accounting.request("POST", path, options);
  }

  viewDocument(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling viewDocument",
      );
    }

    let path = "/documents/{uuid}/view";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }
}
