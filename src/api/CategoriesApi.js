/**
 * Accounting API
 *
 * The version of the OpenAPI document: 8.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

export class CategoriesApi {
  accounting;

  constructor(accounting) {
    this.accounting = accounting;
  }

  addCategory(addCategoryRequest) {
    // verify the required parameter 'addCategoryRequest' is set
    if (addCategoryRequest === undefined || addCategoryRequest === null) {
      throw new Error(
        "Missing the required parameter 'addCategoryRequest' when calling addCategory",
      );
    }

    let path = "/categories";

    let options = {
      params: {},
      data: addCategoryRequest,
    };

    return this.accounting.request("POST", path, options);
  }

  deleteCategory(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling deleteCategory",
      );
    }

    let path = "/categories/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("DELETE", path, options);
  }

  getCategory(uuid) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling getCategory",
      );
    }

    let path = "/categories/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: {},
    };

    return this.accounting.request("GET", path, options);
  }

  listCategories(fields = null, page = null, perPage = null) {
    let path = "/categories";

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

  updateCategory(uuid, addCategoryRequest) {
    // verify the required parameter 'uuid' is set
    if (uuid === undefined || uuid === null) {
      throw new Error(
        "Missing the required parameter 'uuid' when calling updateCategory",
      );
    }

    // verify the required parameter 'addCategoryRequest' is set
    if (addCategoryRequest === undefined || addCategoryRequest === null) {
      throw new Error(
        "Missing the required parameter 'addCategoryRequest' when calling updateCategory",
      );
    }

    let path = "/categories/{uuid}";
    path = path.replace("{uuid}", uuid);

    let options = {
      params: {},
      data: addCategoryRequest,
    };

    return this.accounting.request("PUT", path, options);
  }
}
