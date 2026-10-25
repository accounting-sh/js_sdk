//..deleteAccountConnection
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let connection = "connection_example"; // String | The connection uuid

accounting.accountConnections.deleteAccountConnection(uuid, connection).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..importAccountTransactions
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account UUID

accounting.accountConnections.importAccountTransactions(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listAccountConnections
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.accountConnections
  .listAccountConnections(uuid, fields, page, perPage)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listBanks
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let country = "country_example"; // String | A two letter country code, if none are specified, the company's country is used

accounting.accountConnections.listBanks(uuid, country).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listConnectableBankAccounts
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let connection = "connection_example"; // String | The connection request UUID

accounting.accountConnections
  .listConnectableBankAccounts(uuid, connection)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listConnectedAccountTransactions
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let connection = "connection_example"; // String | The connection uuid
let period = 3.4; // Number | The number of days to look back for transactions. Default is 7 days.

accounting.accountConnections
  .listConnectedAccountTransactions(uuid, connection, period)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..requestBankConnection
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let requestBankConnectionRequest = {}; // RequestBankConnectionRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.accountConnections
  .requestBankConnection(uuid, requestBankConnectionRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..selectBankAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let selectBankAccountRequest = {}; // SelectBankAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.accountConnections
  .selectBankAccount(uuid, selectBankAccountRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..addAccountingCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAccountingCodeRequest = {}; // AddAccountingCodeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.accountingCodes.addAccountingCode(addAccountingCodeRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteAccountingCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The accounting code uuid

accounting.accountingCodes.deleteAccountingCode(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getAccountingCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The accounting code uuid

accounting.accountingCodes.getAccountingCode(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listAccountingCodes
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.accountingCodes.listAccountingCodes().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateAccountingCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The accounting code uuid
let addAccountingCodeRequest = {}; // AddAccountingCodeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.accountingCodes
  .updateAccountingCode(uuid, addAccountingCodeRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..addAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAccountRequest = {}; // AddAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.accounts.addAccount(addAccountRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid

accounting.accounts.deleteAccount(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid

accounting.accounts.getAccount(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listAccounts
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,bank,currency,journal_number"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, bank, currency, journal_number.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.accounts.listAccounts(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid
let addAccountRequest = {}; // AddAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.accounts.updateAccount(uuid, addAccountRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addAttachment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAttachmentRequest = {}; // AddAttachmentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.attachments.addAttachment(addAttachmentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteAttachment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid

accounting.attachments.deleteAttachment(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getAttachment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid

accounting.attachments.getAttachment(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listAttachments
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,document,attached_to"; // String | Comma-separated fields to include in each record. Default fields: uuid, document, attached_to.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.attachments.listAttachments(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..retrieveAttachments
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let resource = "resource_example"; // String | The resource
let fields = "uuid,document,attached_to"; // String | Comma-separated fields to include in each record. Default fields: uuid, document, attached_to.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.attachments
  .retrieveAttachments(resource, fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateAttachment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The attachment uuid
let addAttachmentRequest = {}; // AddAttachmentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.attachments.updateAttachment(uuid, addAttachmentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..authInit
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.auth.authInit().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..login
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let loginGetAliasRequest = {}; // LoginGetAliasRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.auth.login(loginGetAliasRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..loginGetAlias
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let loginGetAliasRequest = {}; // LoginGetAliasRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.auth.loginGetAlias(loginGetAliasRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..logout
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.auth.logout().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..switchCompany
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let switchCompanyRequest = {}; // SwitchCompanyRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.auth.switchCompany(switchCompanyRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addBill
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addBillRequest = {}; // AddBillRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.bills.addBill(addBillRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addBillPayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.bills.addBillPayment(uuid, addBillPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteBill
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid

accounting.bills.deleteBill(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getBill
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid

accounting.bills.getBill(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getBillDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.bills.getBillDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listBills
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,contact,bill_number,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, contact, bill_number, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.bills.listBills(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateBill
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let updateBillRequest = {}; // UpdateBillRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.bills.updateBill(uuid, updateBillRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateBillPayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The bill uuid
let payment = "payment_example"; // String | The bill payment uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.bills.updateBillPayment(uuid, payment, addBillPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addCategory
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCategoryRequest = {}; // AddCategoryRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.categories.addCategory(addCategoryRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteCategory
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid

accounting.categories.deleteCategory(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCategory
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid

accounting.categories.getCategory(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listCategories
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,type,color"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, type, color.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.categories.listCategories(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateCategory
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The category uuid
let addCategoryRequest = {}; // AddCategoryRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.categories.updateCategory(uuid, addCategoryRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addCompany
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCompanyRequest = {}; // AddCompanyRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.companies.addCompany(addCompanyRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteCompany
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.deleteCompany(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCompany
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.getCompany(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCompanyCustomization
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.getCompanyCustomization(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCompanyFeatureSet
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | Identifier of the authenticated company.

accounting.companies.getCompanyFeatureSet(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCompanyOnboarding
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The authenticated company's UUID.

accounting.companies.getCompanyOnboarding(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listCompanies
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,currency,prefix"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, currency, prefix.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.companies.listCompanies(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateCompany
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let addCompanyRequest = {}; // AddCompanyRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.companies.updateCompany(uuid, addCompanyRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addContact
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addContactRequest = {}; // AddContactRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.contacts.addContact(addContactRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteContact
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid

accounting.contacts.deleteContact(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getContact
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid

accounting.contacts.getContact(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listContactBills
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let fields = "uuid,vendor,bill_number,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, vendor, bill_number, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.contacts.listContactBills(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listContactInvoices
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let fields = "uuid,customer,status,emitted"; // String | Comma-separated fields to include in each record. Default fields: uuid, customer, status, emitted.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.contacts
  .listContactInvoices(uuid, fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listContacts
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,prefix,currency,registration_number"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, prefix, currency, registration_number. Optional buyer_type is the explicit business/consumer override; null uses automatic inference.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.contacts.listContacts(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateContact
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The contact uuid
let addContactRequest = {}; // AddContactRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.contacts.updateContact(uuid, addContactRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getTranslatedCountries
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let lang = "lang_example"; // String | The target language

accounting.countries.getTranslatedCountries(lang).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addCredential
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCredentialRequest = {}; // AddCredentialRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.credentials.addCredential(addCredentialRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteCredential
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid

accounting.credentials.deleteCredential(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCredential
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid

accounting.credentials.getCredential(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listCredentials
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,permissions,expired_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, permissions, expired_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.credentials.listCredentials(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listPermissions
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.credentials.listPermissions().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..me
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.credentials.me().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateCredential
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The credential uuid
let addCredentialRequest = {}; // AddCredentialRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.credentials.updateCredential(uuid, addCredentialRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addCreditNote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addCreditNoteRequest = {}; // AddCreditNoteRequest |

accounting.creditNotes.addCreditNote(addCreditNoteRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteCreditNote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.deleteCreditNote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCreditNote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.getCreditNote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCreditNoteDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.getCreditNoteDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listCreditNotes
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |

accounting.creditNotes.listCreditNotes(page, perPage).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateCreditNote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.creditNotes.updateCreditNote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getExchangeRate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = "from_example"; // String | The currency to convert from
let to = "to_example"; // String | The currency to convert to

accounting.currency.getExchangeRate(from, to).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.deleteDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.getDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listDocuments
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,mimetype"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, mimetype.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.documents.listDocuments(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..processDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.processDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..reviewDocumentRetention
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let reviewDocumentRetentionRequest = {}; // ReviewDocumentRetentionRequest |

accounting.documents
  .reviewDocumentRetention(uuid, reviewDocumentRetentionRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid
let updateDocumentRequest = {}; // UpdateDocumentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.documents.updateDocument(uuid, updateDocumentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..uploadDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let name = "name_example"; // String | Human-readable name or label.
let file = "/path/to/file"; // File | File to upload. Send this field as a file part in a multipart/form-data request.

accounting.documents.uploadDocument(name, file).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..viewDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.viewDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addExpenseReport
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addExpenseReportRequest = {}; // AddExpenseReportRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports.addExpenseReport(addExpenseReportRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteExpenseReport
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid

accounting.expenseReports.deleteExpenseReport(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..expenseReportOAuthLogin
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let method = "method_example"; // String | The OAuth Provider to use

accounting.expenseReports.expenseReportOAuthLogin(method).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getExpenseReport
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid

accounting.expenseReports.getExpenseReport(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getExpenseReportAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.expenseReports.getExpenseReportAccount().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getExpenseReportUser
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report user uuid

accounting.expenseReports.getExpenseReportUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listExpenseReports
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,user,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, user, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.expenseReports
  .listExpenseReports(fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..sendExpenseReportLoginEmail
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let sendExpenseReportLoginEmailRequest = {}; // SendExpenseReportLoginEmailRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .sendExpenseReportLoginEmail(sendExpenseReportLoginEmailRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateExpenseReport
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The expense report uuid
let addExpenseReportRequest = {}; // AddExpenseReportRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .updateExpenseReport(uuid, addExpenseReportRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateExpenseReportAccount
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let updateExpenseReportAccountRequest = {}; // UpdateExpenseReportAccountRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .updateExpenseReportAccount(updateExpenseReportAccountRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateExpenseReportSettings
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let updateExpenseReportSettingsRequest = {}; // UpdateExpenseReportSettingsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .updateExpenseReportSettings(updateExpenseReportSettingsRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..verifyExpenseReportSettings
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let verifyExpenseReportSettingsRequest = {}; // VerifyExpenseReportSettingsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.expenseReports
  .verifyExpenseReportSettings(verifyExpenseReportSettingsRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listExports
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,status,document,created_at,updated_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, status, document, created_at, updated_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.export.listExports(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..requestExport
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let requestExportRequest = {}; // RequestExportRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.export.requestExport(requestExportRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addInvoice
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addInvoiceRequest = {}; // AddInvoiceRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.invoices.addInvoice(addInvoiceRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addInvoicePayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.invoices.addInvoicePayment(uuid, addBillPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteInvoice
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.invoices.deleteInvoice(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getInvoice
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.invoices.getInvoice(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getInvoiceDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid

accounting.invoices.getInvoiceDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getInvoiceIssuance
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.invoices.getInvoiceIssuance(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listInvoices
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,contact,status,emitted"; // String | Comma-separated fields to include in each record. Default fields: uuid, contact, status, emitted.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.invoices.listInvoices(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listUnpaidInvoices
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.invoices.listUnpaidInvoices().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateInvoice
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let updateInvoiceRequest = {}; // UpdateInvoiceRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.invoices.updateInvoice(uuid, updateInvoiceRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateInvoicePayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The invoice uuid
let payment = "payment_example"; // String | The invoice payment uuid
let addBillPaymentRequest = {}; // AddBillPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.invoices
  .updateInvoicePayment(uuid, payment, addBillPaymentRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalBalances
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |
let groupByContact = true; // Boolean |

accounting.journal
  .journalBalances(
    from,
    to,
    code,
    contact,
    journal,
    period,
    bankAccount,
    groupByContact,
  )
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalBalancesheet
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |

accounting.journal
  .journalBalancesheet(from, to, code, contact, journal, period, bankAccount)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalCorrectionAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalCorrectionAddRequest = {}; // JournalCorrectionAddRequest |

accounting.journal.journalCorrectionAdd(journalCorrectionAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalCorrectionDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalCorrectionDelete(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalCorrectionDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalCorrectionDetails(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalCorrectionList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let originalEntry = "originalEntry_example"; // String |

accounting.journal.journalCorrectionList(page, perPage, originalEntry).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalCorrectionUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalCorrectionUpdate(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalEntryAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let journalEntryAddRequest = {}; // JournalEntryAddRequest |

accounting.journal.journalEntryAdd(journalUuid, journalEntryAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalEntryDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |

accounting.journal.journalEntryDelete(journalUuid, entryUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalEntryDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |

accounting.journal.journalEntryDetails(journalUuid, entryUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalEntryList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |
let origin = "origin_example"; // String |
let period = "period_example"; // String |
let accountingDate = "accountingDate_example"; // String |
let from = "from_example"; // String |
let to = "to_example"; // String |
let sourceType = "sourceType_example"; // String |
let sourceUuid = "sourceUuid_example"; // String |
let code = "code_example"; // String |
let contact = "contact_example"; // String |

accounting.journal
  .journalEntryList(
    journalUuid,
    page,
    perPage,
    status,
    origin,
    period,
    accountingDate,
    from,
    to,
    sourceType,
    sourceUuid,
    code,
    contact,
  )
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalEntryUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let journalEntryUpdateRequest = {}; // JournalEntryUpdateRequest |

accounting.journal
  .journalEntryUpdate(journalUuid, entryUuid, journalEntryUpdateRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalEvidenceAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let journalEvidenceAddRequest = {}; // JournalEvidenceAddRequest |

accounting.journal
  .journalEvidenceAdd(journalUuid, entryUuid, journalEvidenceAddRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalEvidenceDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let uuid = "uuid_example"; // String |

accounting.journal.journalEvidenceDelete(journalUuid, entryUuid, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalEvidenceDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let uuid = "uuid_example"; // String |

accounting.journal.journalEvidenceDetails(journalUuid, entryUuid, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalEvidenceList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let page = 56; // Number |
let perPage = 56; // Number |

accounting.journal
  .journalEvidenceList(journalUuid, entryUuid, page, perPage)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalEvidenceUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let entryUuid = "entryUuid_example"; // String |
let uuid = "uuid_example"; // String |

accounting.journal.journalEvidenceUpdate(journalUuid, entryUuid, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalExportAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalExportAddRequest = {}; // JournalExportAddRequest |

accounting.journal.journalExportAdd(journalExportAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalExportDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalExportDelete(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalExportDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalExportDetails(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalExportList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |

accounting.journal.journalExportList(page, perPage).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalExportUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalExportUpdate(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalInitializationAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalInitializationAddRequest = {}; // JournalInitializationAddRequest |

accounting.journal
  .journalInitializationAdd(journalInitializationAddRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalInitializationDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalInitializationDelete(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalInitializationDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalInitializationDetails(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalInitializationList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |

accounting.journal.journalInitializationList(page, perPage, status).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalInitializationUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalInitializationUpdate(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalIssueAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.journal.journalIssueAdd().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalIssueDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalIssueDelete(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalIssueDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalIssueDetails(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalIssueList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |
let sourceType = "sourceType_example"; // String |
let sourceUuid = "sourceUuid_example"; // String |
let event = "event_example"; // String |

accounting.journal
  .journalIssueList(page, perPage, status, sourceType, sourceUuid, event)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalIssueUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalIssueUpdate(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalJournalAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalJournalAddRequest = {}; // JournalJournalAddRequest |

accounting.journal.journalJournalAdd(journalJournalAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalJournalDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |

accounting.journal.journalJournalDelete(journalUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalJournalDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |

accounting.journal.journalJournalDetails(journalUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalJournalList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |
let type = "type_example"; // String |

accounting.journal.journalJournalList(page, perPage, status, type).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalJournalUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalUuid = "journalUuid_example"; // String |
let journalJournalUpdateRequest = {}; // JournalJournalUpdateRequest |

accounting.journal
  .journalJournalUpdate(journalUuid, journalJournalUpdateRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalMappingAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalMappingAddRequest = {}; // JournalMappingAddRequest |

accounting.journal.journalMappingAdd(journalMappingAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalMappingDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalMappingDelete(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalMappingDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalMappingDetails(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalMappingList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let role = "role_example"; // String |
let scope = "scope_example"; // String |
let status = "status_example"; // String |

accounting.journal.journalMappingList(page, perPage, role, scope, status).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalMappingUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let journalMappingUpdateRequest = {}; // JournalMappingUpdateRequest |

accounting.journal.journalMappingUpdate(uuid, journalMappingUpdateRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalMovements
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let code = "code_example"; // String |
let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |
let page = 56; // Number |
let perPage = 56; // Number |

accounting.journal
  .journalMovements(
    code,
    from,
    to,
    contact,
    journal,
    period,
    bankAccount,
    page,
    perPage,
  )
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalPeriodAdd
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let journalPeriodAddRequest = {}; // JournalPeriodAddRequest |

accounting.journal.journalPeriodAdd(journalPeriodAddRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalPeriodDelete
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalPeriodDelete(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalPeriodDetails
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.journal.journalPeriodDetails(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalPeriodList
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let page = 56; // Number |
let perPage = 56; // Number |
let status = "status_example"; // String |

accounting.journal.journalPeriodList(page, perPage, status).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalPeriodUpdate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let journalPeriodUpdateRequest = {}; // JournalPeriodUpdateRequest |

accounting.journal.journalPeriodUpdate(uuid, journalPeriodUpdateRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..journalProfitandloss
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |

accounting.journal
  .journalProfitandloss(from, to, code, contact, journal, period, bankAccount)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..journalTrialbalance
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let from = new Date("2013-10-20"); // Date |
let to = new Date("2013-10-20"); // Date |
let code = "code_example"; // String |
let contact = "contact_example"; // String |
let journal = "journal_example"; // String |
let period = "period_example"; // String |
let bankAccount = "bankAccount_example"; // String |

accounting.journal
  .journalTrialbalance(from, to, code, contact, journal, period, bankAccount)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..logs
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,channel,level,message,recorded_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, channel, level, message, recorded_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let channel = "channel_example"; // String | The channel to retrieve the logs from
let level = "level_example"; // String | The log level to retrieve
let resource = "resource_example"; // String | Retrive logs linked to that resource
let before = "before_example"; // String | Retrive logs before the provided date
let after = "after_example"; // String | Retrive logs after the provided date
let format = "format_example"; // String | In which format to retrieve the logs, available: json or txt
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.logs
  .logs(
    fields,
    page,
    perPage,
    channel,
    level,
    resource,
    before,
    after,
    format,
    orderBy,
  )
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listNotificationPreferences
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let notification = "notification_example"; // String | The notification name

accounting.notification.listNotificationPreferences(notification).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listNotifications
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,notification"; // String | Comma-separated fields to include in each record. Default fields: uuid, notification.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.notification.listNotifications(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..sendNotification
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let sendNotificationRequest = {}; // SendNotificationRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.notification.sendNotification(sendNotificationRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateNotificationPreferences
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let notification = "notification_example"; // String | The notification name
let updateNotificationPreferencesRequest = {}; // UpdateNotificationPreferencesRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.notification
  .updateNotificationPreferences(
    notification,
    updateNotificationPreferencesRequest,
  )
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..addNotificationType
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addNotificationTypeRequest = {}; // AddNotificationTypeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.notificationTypes
  .addNotificationType(addNotificationTypeRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..deleteNotificationType
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid

accounting.notificationTypes.deleteNotificationType(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getNotificationType
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid

accounting.notificationTypes.getNotificationType(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listNotificationTypes
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "name,title,description,allowed_methods,internal"; // String | Comma-separated fields to include in each record. Default fields: name, title, description, allowed_methods, internal.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.notificationTypes
  .listNotificationTypes(fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateNotificationType
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The notification type uuid
let updateNotificationTypeRequest = {}; // UpdateNotificationTypeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.notificationTypes
  .updateNotificationType(uuid, updateNotificationTypeRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..addOAuthConfiguration
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.oAuthConfig.addOAuthConfiguration(addOAuthConfigurationRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteOAuthConfiguration
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid

accounting.oAuthConfig.deleteOAuthConfiguration(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getOAuthConfiguration
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid

accounting.oAuthConfig.getOAuthConfiguration(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listOAuthConfigurations
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,provider,client_id"; // String | Comma-separated fields to include in each record. Default fields: uuid, provider, client_id.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.oAuthConfig
  .listOAuthConfigurations(fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listProviders
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.oAuthConfig.listProviders().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateOAuthConfiguration
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The oauth configuration uuid
let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.oAuthConfig
  .updateOAuthConfiguration(uuid, addOAuthConfigurationRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..addPayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addPaymentRequest = {}; // AddPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.payments.addPayment(addPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deletePayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid

accounting.payments.deletePayment(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getPayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid

accounting.payments.getPayment(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listPayments
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,amount,currency,contact"; // String | Comma-separated fields to include in each record. Default fields: uuid, amount, currency, contact.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.payments.listPayments(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updatePayment
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The payment uuid
let addPaymentRequest = {}; // AddPaymentRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.payments.updatePayment(uuid, addPaymentRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addQuote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addQuoteRequest = {}; // AddQuoteRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.quotes.addQuote(addQuoteRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteQuote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid

accounting.quotes.deleteQuote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getQuote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid

accounting.quotes.getQuote(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getQuoteDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid

accounting.quotes.getQuoteDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listQuotes
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,contact,quote_number,status"; // String | Comma-separated fields to include in each record. Default fields: uuid, contact, quote_number, status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.quotes.listQuotes(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateQuote
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The quote uuid
let updateQuoteRequest = {}; // UpdateQuoteRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.quotes.updateQuote(uuid, updateQuoteRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addReceipt
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addReceiptRequest = {}; // AddReceiptRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.receipts.addReceipt(addReceiptRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteReceipt
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid

accounting.receipts.deleteReceipt(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getReceipt
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid

accounting.receipts.getReceipt(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getReceiptDocument
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid

accounting.receipts.getReceiptDocument(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listReceipts
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,for,from,receipt_number"; // String | Comma-separated fields to include in each record. Default fields: uuid, for, from, receipt_number.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.receipts.listReceipts(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateReceipt
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The receipt uuid
let updateReceiptRequest = {}; // UpdateReceiptRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.receipts.updateReceipt(uuid, updateReceiptRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addRevenue
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addRevenueRequest = {}; // AddRevenueRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.revenues.addRevenue(addRevenueRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteRevenue
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid

accounting.revenues.deleteRevenue(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getRevenue
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid

accounting.revenues.getRevenue(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listRevenues
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,paid_at,amount,currency"; // String | Comma-separated fields to include in each record. Default fields: uuid, paid_at, amount, currency.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.revenues.listRevenues(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateRevenue
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The revenue uuid
let addRevenueRequest = {}; // AddRevenueRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.revenues.updateRevenue(uuid, addRevenueRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listReviews
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,name,process_status"; // String | Comma-separated fields to include in each record. Default fields: uuid, name, process_status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.rossum.listReviews(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..search
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let q = "q_example"; // String | Query string
let exclude = "exclude_example"; // String | Exclude specific types. This is a comma separated list.
let only = "only_example"; // String | Perfom search only on those types. This is a comma separated list.

accounting.search.search(q, exclude, only).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getSettings
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The setting key

accounting.settings.getSettings(uuid, key).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listSettings
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let fields = "uuid,key,value"; // String | Comma-separated fields to include in each record. Default fields: uuid, key, value.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.settings.listSettings(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateSettings
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The setting key
let updateSettingsRequest = {}; // UpdateSettingsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.settings.updateSettings(uuid, key, updateSettingsRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..summaryStatisticsPeriod
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let start = new Date("2013-10-20"); // Date | The start date
let end = new Date("2013-10-20"); // Date | The end date

accounting.statistics.summaryStatisticsPeriod(uuid, start, end).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addTag
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTagRequest = {}; // AddTagRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.tags.addTag(addTagRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteTag
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid

accounting.tags.deleteTag(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getTag
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid

accounting.tags.getTag(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listTags
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,key,value,attached_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, key, value, attached_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.tags.listTags(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listTagsByResource
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let resource = "resource_example"; // String | The resource
let fields = "uuid,key,value,attached_at"; // String | Comma-separated fields to include in each record. Default fields: uuid, key, value, attached_at.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.tags
  .listTagsByResource(resource, fields, page, perPage, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..updateTag
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The tag uuid
let addTagRequest = {}; // AddTagRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.tags.updateTag(uuid, addTagRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getTaxRate
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let country = "country_example"; // String | The country

accounting.tax.getTaxRate(country).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..verifyVatId
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let number = "number_example"; // String | The VAT ID

accounting.tax.verifyVatId(number).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addLink
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let addLinkRequest = {}; // AddLinkRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.addLink(uuid, addLinkRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addTransaction
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransactionRequest = {}; // AddTransactionRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.addTransaction(addTransactionRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addTransactionCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let addTransactionCodeRequest = {}; // AddTransactionCodeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions
  .addTransactionCode(uuid, addTransactionCodeRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..deleteLink
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid

accounting.transactions.deleteLink(uuid, linkUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteTransaction
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid

accounting.transactions.deleteTransaction(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteTransactionCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let code = "code_example"; // String | The transaction's code uuid

accounting.transactions.deleteTransactionCode(uuid, code).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getTransaction
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid

accounting.transactions.getTransaction(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..importTransactions
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let importTransactionsRequest = {}; // ImportTransactionsRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.importTransactions(importTransactionsRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..ledger
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,account,amount,event_date"; // String | Comma-separated fields to include in each record. Default fields: uuid, account, amount, event_date.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let account = "account_example"; // String | An account uuid to filter results
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions.ledger(fields, page, perPage, account, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listLinks
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let fields = "target_type,target,link_status"; // String | Comma-separated fields to include in each record. Default fields: target_type, target, link_status.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions.listLinks(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listTransactionCodes
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let fields = "uuid,code,description,amount"; // String | Comma-separated fields to include in each record. Default fields: uuid, code, description, amount.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let account = "account_example"; // String | List to the specified account
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions
  .listTransactionCodes(uuid, fields, page, perPage, account, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..listTransactions
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,account,amount,transaction_date"; // String | Comma-separated fields to include in each record. Default fields: uuid, account, amount, transaction_date.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let account = "account_example"; // String | List to the specified account
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transactions
  .listTransactions(fields, page, perPage, account, orderBy)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..reconciliationReject
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let reconciliationRejectRequest = {}; // ReconciliationRejectRequest |

accounting.transactions
  .reconciliationReject(uuid, reconciliationRejectRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..reconciliationRun
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.transactions.reconciliationRun(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..reconciliationSuggestions
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |

accounting.transactions.reconciliationSuggestions(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..reverseTransactionLink
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String |
let linkUuid = "linkUuid_example"; // String |

accounting.transactions.reverseTransactionLink(uuid, linkUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateLink
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid
let addLinkRequest = {}; // AddLinkRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.updateLink(uuid, linkUuid, addLinkRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateTransaction
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let addTransactionRequest = {}; // AddTransactionRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions.updateTransaction(uuid, addTransactionRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateTransactionCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transaction uuid
let code = "code_example"; // String | Identifier of the code selected by this route.
let addTransactionCodeRequest = {}; // AddTransactionCodeRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transactions
  .updateTransactionCode(uuid, code, addTransactionCodeRequest)
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
    },
  );

//..viewLink
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | A transaction uuid
let linkUuid = "linkUuid_example"; // String | A transaction link uuid OR the target uuid

accounting.transactions.viewLink(uuid, linkUuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addTransfer
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransferRequest = {}; // AddTransferRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transfers.addTransfer(addTransferRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteTransfer
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid

accounting.transfers.deleteTransfer(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getTransfer
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid

accounting.transfers.getTransfer(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listTransfers
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,from,to,amount"; // String | Comma-separated fields to include in each record. Default fields: uuid, from, to, amount.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.transfers.listTransfers(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateTransfer
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The transfer uuid
let addTransferRequest = {}; // AddTransferRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.transfers.updateTransfer(uuid, addTransferRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addUser
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.addUser().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteUser
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid

accounting.users.deleteUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getUser
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid

accounting.users.getUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listUsers
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,user,permissions"; // String | Comma-separated fields to include in each record. Default fields: uuid, user, permissions.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.users.listUsers(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateMePutAlias
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.updateMePutAlias().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateUser
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The user uuid

accounting.users.updateUser(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..usersCompanies
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.usersCompanies().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..usersMe
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.users.usersMe().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addCompanyVatId
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.vATID.addCompanyVatId(uuid, addCompanyVatIdRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteCompanyVatId
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The VAT ID uuid

accounting.vATID.deleteCompanyVatId(uuid, key).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getCompanyVatId
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The VAT ID uuid

accounting.vATID.getCompanyVatId(uuid, key).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listCompanyVatId
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let fields = "uuid,vat_id,country"; // String | Comma-separated fields to include in each record. Default fields: uuid, vat_id, country.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.vATID.listCompanyVatId(uuid, fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateCompanyVatId
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let key = "key_example"; // String | The VAT ID uuid
let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.vATID.updateCompanyVatId(uuid, key, addCompanyVatIdRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..addWebhook
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addWebhookRequest = {}; // AddWebhookRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.webhooks.addWebhook(addWebhookRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..deleteWebhook
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.deleteWebhook(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getWebhook
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.getWebhook(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getWebhookHistory
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.getWebhookHistory(uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listWebhookEvents
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.webhooks.listWebhookEvents().then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..listWebhooks
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "uuid,link,events"; // String | Comma-separated fields to include in each record. Default fields: uuid, link, events.
let page = 1; // Number | Page number, starting at 1. Values below 1 are treated as 1.
let perPage = 10; // Number | Records per page. The server caps page size to 100. Values below 1 use that maximum.
let orderBy = "created_at:desc"; // String | Sort by a supported field and direction, using field:asc or field:desc.

accounting.webhooks.listWebhooks(fields, page, perPage, orderBy).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..updateWebhook
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The webhook uuid
let addWebhookRequest = {}; // AddWebhookRequest | Send a JSON object with the fields below. Fields marked required must be supplied.

accounting.webhooks.updateWebhook(uuid, addWebhookRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
