//..deleteAccountConnection
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The account uuid

accounting.accountConnections.deleteAccountConnection(uuid).then(
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

//..addAccountingCode
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addAccountingCodeRequest = {}; // AddAccountingCodeRequest |

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
let addAccountingCodeRequest = {}; // AddAccountingCodeRequest |

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

let addAccountRequest = {}; // AddAccountRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.accounts.listAccounts(fields, page, perPage).then(
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
let addAccountRequest = {}; // AddAccountRequest |

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

let addAttachmentRequest = {}; // AddAttachmentRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.attachments.listAttachments(fields, page, perPage).then(
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
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.attachments
  .retrieveAttachments(resource, fields, page, perPage)
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
let addAttachmentRequest = {}; // AddAttachmentRequest |

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

let loginRequest = {}; // LoginRequest |

accounting.auth.login(loginRequest).then(
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

let switchCompanyRequest = {}; // SwitchCompanyRequest |

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

let addBillRequest = {}; // AddBillRequest |

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
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.bills.listBills(fields, page, perPage).then(
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
let addBillRequest = {}; // AddBillRequest |

accounting.bills.updateBill(uuid, addBillRequest).then(
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
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

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

let addCategoryRequest = {}; // AddCategoryRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.categories.listCategories(fields, page, perPage).then(
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
let addCategoryRequest = {}; // AddCategoryRequest |

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

let addCompanyRequest = {}; // AddCompanyRequest |

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

let uuid = "uuid_example"; // String | The company uuid

accounting.companies.getCompanyFeatureSet(uuid).then(
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.companies.listCompanies(fields, page, perPage).then(
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
let addCompanyRequest = {}; // AddCompanyRequest |

accounting.companies.updateCompany(uuid, addCompanyRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..getStatistics
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The company uuid
let start = "start_example"; // String | Start date
let end = "end_example"; // String | End date

accounting.companyStatistics.getStatistics(uuid, start, end).then(
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

let addContactRequest = {}; // AddContactRequest |

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
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.contacts.listContactBills(uuid, fields, page, perPage).then(
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
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.contacts.listContactInvoices(uuid, fields, page, perPage).then(
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.contacts.listContacts(fields, page, perPage).then(
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
let addContactRequest = {}; // AddContactRequest |

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

let addCredentialRequest = {}; // AddCredentialRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.credentials.listCredentials(fields, page, perPage).then(
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
let addCredentialRequest = {}; // AddCredentialRequest |

accounting.credentials.updateCredential(uuid, addCredentialRequest).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);

//..userveria
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

accounting.credentials.userveria().then(
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

//..cancelReview
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.cancelReview(uuid).then(
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.documents.listDocuments(fields, page, perPage).then(
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

//..reviewUrl
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let uuid = "uuid_example"; // String | The document uuid

accounting.documents.reviewUrl(uuid).then(
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
let updateDocumentRequest = {}; // UpdateDocumentRequest |

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

let name = "name_example"; // String |
let file = null; // File |

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

let addExpenseReportRequest = {}; // AddExpenseReportRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.expenseReports.listExpenseReports(fields, page, perPage).then(
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

let sendExpenseReportLoginEmailRequest = {}; // SendExpenseReportLoginEmailRequest |

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
let addExpenseReportRequest = {}; // AddExpenseReportRequest |

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

let updateExpenseReportAccountRequest = {}; // UpdateExpenseReportAccountRequest |

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

let updateExpenseReportSettingsRequest = {}; // UpdateExpenseReportSettingsRequest |

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

let verifyExpenseReportSettingsRequest = {}; // VerifyExpenseReportSettingsRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.export.listExports(fields, page, perPage).then(
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

let requestExportRequest = {}; // RequestExportRequest |

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

let addInvoiceRequest = {}; // AddInvoiceRequest |

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
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

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

//..listInvoices
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.invoices.listInvoices(fields, page, perPage).then(
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
let addInvoiceRequest = {}; // AddInvoiceRequest |

accounting.invoices.updateInvoice(uuid, addInvoiceRequest).then(
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
let addBillPaymentRequest = {}; // AddBillPaymentRequest |

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

//..logs
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let channel = "channel_example"; // String | The channel to retrieve the logs from
let level = "level_example"; // String | The log level to retrieve
let resource = "resource_example"; // String | Retrive logs linked to that resource
let before = "before_example"; // String | Retrive logs before the provided date
let after = "after_example"; // String | Retrive logs after the provided date
let format = "format_example"; // String | In which format to retrieve the logs, available: json or txt

accounting.logs
  .logs(fields, page, perPage, channel, level, resource, before, after, format)
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.notification.listNotifications(fields, page, perPage).then(
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

let sendNotificationRequest = {}; // SendNotificationRequest |

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
let updateNotificationPreferencesRequest = {}; // UpdateNotificationPreferencesRequest |

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

let addNotificationTypeRequest = {}; // AddNotificationTypeRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.notificationTypes.listNotificationTypes(fields, page, perPage).then(
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
let addNotificationTypeRequest = {}; // AddNotificationTypeRequest |

accounting.notificationTypes
  .updateNotificationType(uuid, addNotificationTypeRequest)
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

let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.oAuthConfig.listOAuthConfigurations(fields, page, perPage).then(
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
let addOAuthConfigurationRequest = {}; // AddOAuthConfigurationRequest |

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

let addPaymentRequest = {}; // AddPaymentRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.payments.listPayments(fields, page, perPage).then(
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
let addPaymentRequest = {}; // AddPaymentRequest |

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

let addQuoteRequest = {}; // AddQuoteRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.quotes.listQuotes(fields, page, perPage).then(
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
let addQuoteRequest = {}; // AddQuoteRequest |

accounting.quotes.updateQuote(uuid, addQuoteRequest).then(
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

let addReceiptRequest = {}; // AddReceiptRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.receipts.listReceipts(fields, page, perPage).then(
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
let addReceiptRequest = {}; // AddReceiptRequest |

accounting.receipts.updateReceipt(uuid, addReceiptRequest).then(
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

let addRevenueRequest = {}; // AddRevenueRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.revenues.listRevenues(fields, page, perPage).then(
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
let addRevenueRequest = {}; // AddRevenueRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.rossum.listReviews(fields, page, perPage).then(
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
let excluse = "excluse_example"; // String | Exclude specific types. This is a comma separated list.
let only = "only_example"; // String | Perfom search only on those types. This is a comma separated list.

accounting.search.search(q, excluse, only).then(
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let uuid = "uuid_example"; // String | The company uuid

accounting.settings.listSettings(fields, page, perPage, uuid).then(
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
let updateSettingsRequest = {}; // UpdateSettingsRequest |

accounting.settings.updateSettings(uuid, key, updateSettingsRequest).then(
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

let addTagRequest = {}; // AddTagRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.tags.listTags(fields, page, perPage).then(
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
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.tags.listTagsByResource(resource, fields, page, perPage).then(
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
let addTagRequest = {}; // AddTagRequest |

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

//..addTransaction
import { Accounting } from "accountingsh";

let accounting = new Accounting("api-token");

let addTransactionRequest = {}; // AddTransactionRequest |

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
let updateTransactionCodeRequest = {}; // UpdateTransactionCodeRequest |

accounting.transactions
  .addTransactionCode(uuid, updateTransactionCodeRequest)
  .then(
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

let importTransactionsRequest = {}; // ImportTransactionsRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let account = "account_example"; // String | An account uuid to filter results

accounting.transactions.ledger(fields, page, perPage, account).then(
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
let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let account = "account_example"; // String | List to the specified account

accounting.transactions
  .listTransactionCodes(uuid, fields, page, perPage, account)
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let account = "account_example"; // String | List to the specified account

accounting.transactions.listTransactions(fields, page, perPage, account).then(
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
let addTransactionRequest = {}; // AddTransactionRequest |

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
let updateTransactionCodeRequest = {}; // UpdateTransactionCodeRequest |

accounting.transactions
  .updateTransactionCode(uuid, updateTransactionCodeRequest)
  .then(
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

let addTransferRequest = {}; // AddTransferRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.transfers.listTransfers(fields, page, perPage).then(
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
let addTransferRequest = {}; // AddTransferRequest |

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

let addUserRequest = {}; // AddUserRequest |

accounting.users.addUser(addUserRequest).then(
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.users.listUsers(fields, page, perPage).then(
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
let updateUserRequest = {}; // UpdateUserRequest |

accounting.users.updateUser(uuid, updateUserRequest).then(
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

let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest |
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.addCompanyVatId(addCompanyVatIdRequest, uuid).then(
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

let key = "key_example"; // String | The VAT ID uuid
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.deleteCompanyVatId(key, uuid).then(
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

let key = "key_example"; // String | The VAT ID uuid
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.getCompanyVatId(key, uuid).then(
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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.listCompanyVatId(fields, page, perPage, uuid).then(
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

let key = "key_example"; // String | The VAT ID uuid
let addCompanyVatIdRequest = {}; // AddCompanyVatIdRequest |
let uuid = "uuid_example"; // String | The company uuid

accounting.vATID.updateCompanyVatId(key, addCompanyVatIdRequest, uuid).then(
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

let addWebhookRequest = {}; // AddWebhookRequest |

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

let fields = "fields_example"; // String | A comma separated list of fields requested in the response
let page = "page_example"; // String | The response page
let perPage = "perPage_example"; // String | The number of items per page

accounting.webhooks.listWebhooks(fields, page, perPage).then(
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

let addWebhookRequest = {}; // AddWebhookRequest |
let uuid = "uuid_example"; // String | The webhook uuid

accounting.webhooks.updateWebhook(addWebhookRequest, uuid).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  },
);
