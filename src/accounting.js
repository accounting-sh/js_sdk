/**
 * Accounting API
 *
 * The version of the OpenAPI document: 8.0.6
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import { AccountConnectionsApi } from "./api/AccountConnectionsApi.js";
import { AccountingCodesApi } from "./api/AccountingCodesApi.js";
import { AccountsApi } from "./api/AccountsApi.js";
import { AttachmentsApi } from "./api/AttachmentsApi.js";
import { AuthApi } from "./api/AuthApi.js";
import { BillsApi } from "./api/BillsApi.js";
import { CategoriesApi } from "./api/CategoriesApi.js";
import { CompaniesApi } from "./api/CompaniesApi.js";
import { CompanyStatisticsApi } from "./api/CompanyStatisticsApi.js";
import { ContactsApi } from "./api/ContactsApi.js";
import { CountriesApi } from "./api/CountriesApi.js";
import { CredentialsApi } from "./api/CredentialsApi.js";
import { CurrencyApi } from "./api/CurrencyApi.js";
import { DocumentsApi } from "./api/DocumentsApi.js";
import { ExpenseReportsApi } from "./api/ExpenseReportsApi.js";
import { ExportApi } from "./api/ExportApi.js";
import { InvoicesApi } from "./api/InvoicesApi.js";
import { LogsApi } from "./api/LogsApi.js";
import { NotificationApi } from "./api/NotificationApi.js";
import { NotificationTypesApi } from "./api/NotificationTypesApi.js";
import { OAuthConfigApi } from "./api/OAuthConfigApi.js";
import { PaymentsApi } from "./api/PaymentsApi.js";
import { QuotesApi } from "./api/QuotesApi.js";
import { ReceiptsApi } from "./api/ReceiptsApi.js";
import { RevenuesApi } from "./api/RevenuesApi.js";
import { RossumApi } from "./api/RossumApi.js";
import { SearchApi } from "./api/SearchApi.js";
import { SettingsApi } from "./api/SettingsApi.js";
import { TagsApi } from "./api/TagsApi.js";
import { TaxApi } from "./api/TaxApi.js";
import { TransactionsApi } from "./api/TransactionsApi.js";
import { TransfersApi } from "./api/TransfersApi.js";
import { UsersApi } from "./api/UsersApi.js";
import { VATIDApi } from "./api/VATIDApi.js";
import { WebhooksApi } from "./api/WebhooksApi.js";

import axios from "axios";

export class Accounting {
  token;
  url;
  config;

  constructor(token, url = "https://api.accounting.sh", config = {}) {
    this.token = token;
    this.url = url;
    this.config = config;

    if (!this.config) {
      config.headers["User-Agent"] = "AccountingSh//js";
    }
  }

  request(method, url, config = {}) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Authorization"] = "Bearer " + this.token;

    return new Promise((resolve, reject) => {
      axios
        .request({
          ...{
            method: method,
            url: url,
            baseURL: this.url,
          },
          ...config,
          ...this.config,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error); // FIXME: Add a real error handling logic
        });
    });
  }

  get accountConnections() {
    return new AccountConnectionsApi(this);
  }

  get accountingCodes() {
    return new AccountingCodesApi(this);
  }

  get accounts() {
    return new AccountsApi(this);
  }

  get attachments() {
    return new AttachmentsApi(this);
  }

  get auth() {
    return new AuthApi(this);
  }

  get bills() {
    return new BillsApi(this);
  }

  get categories() {
    return new CategoriesApi(this);
  }

  get companies() {
    return new CompaniesApi(this);
  }

  get companyStatistics() {
    return new CompanyStatisticsApi(this);
  }

  get contacts() {
    return new ContactsApi(this);
  }

  get countries() {
    return new CountriesApi(this);
  }

  get credentials() {
    return new CredentialsApi(this);
  }

  get currency() {
    return new CurrencyApi(this);
  }

  get documents() {
    return new DocumentsApi(this);
  }

  get expenseReports() {
    return new ExpenseReportsApi(this);
  }

  get export() {
    return new ExportApi(this);
  }

  get invoices() {
    return new InvoicesApi(this);
  }

  get logs() {
    return new LogsApi(this);
  }

  get notification() {
    return new NotificationApi(this);
  }

  get notificationTypes() {
    return new NotificationTypesApi(this);
  }

  get oAuthConfig() {
    return new OAuthConfigApi(this);
  }

  get payments() {
    return new PaymentsApi(this);
  }

  get quotes() {
    return new QuotesApi(this);
  }

  get receipts() {
    return new ReceiptsApi(this);
  }

  get revenues() {
    return new RevenuesApi(this);
  }

  get rossum() {
    return new RossumApi(this);
  }

  get search() {
    return new SearchApi(this);
  }

  get settings() {
    return new SettingsApi(this);
  }

  get tags() {
    return new TagsApi(this);
  }

  get tax() {
    return new TaxApi(this);
  }

  get transactions() {
    return new TransactionsApi(this);
  }

  get transfers() {
    return new TransfersApi(this);
  }

  get users() {
    return new UsersApi(this);
  }

  get vATID() {
    return new VATIDApi(this);
  }

  get webhooks() {
    return new WebhooksApi(this);
  }
}
