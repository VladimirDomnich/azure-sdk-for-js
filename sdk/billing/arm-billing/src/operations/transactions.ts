/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/transactionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a Transactions. */
export class Transactions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a Transactions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the transactions by billing account name for given start and end date.
   * @param billingAccountName billing Account Id.
   * @param startDate Start date
   * @param endDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByBillingAccountNameResponse>
   */
  listByBillingAccountName(billingAccountName: string, startDate: string, endDate: string, options?: Models.TransactionsListByBillingAccountNameOptionalParams): Promise<Models.TransactionsListByBillingAccountNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param startDate Start date
   * @param endDate End date
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, startDate: string, endDate: string, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param startDate Start date
   * @param endDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountName(billingAccountName: string, startDate: string, endDate: string, options: Models.TransactionsListByBillingAccountNameOptionalParams, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  listByBillingAccountName(billingAccountName: string, startDate: string, endDate: string, options?: Models.TransactionsListByBillingAccountNameOptionalParams | msRest.ServiceCallback<Models.TransactionsListResult>, callback?: msRest.ServiceCallback<Models.TransactionsListResult>): Promise<Models.TransactionsListByBillingAccountNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        startDate,
        endDate,
        options
      },
      listByBillingAccountNameOperationSpec,
      callback) as Promise<Models.TransactionsListByBillingAccountNameResponse>;
  }

  /**
   * Lists the transactions by billing profile name for given start date and end date.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param startDate Start date
   * @param endDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByBillingProfileNameResponse>
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, startDate: string, endDate: string, options?: Models.TransactionsListByBillingProfileNameOptionalParams): Promise<Models.TransactionsListByBillingProfileNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param startDate Start date
   * @param endDate End date
   * @param callback The callback
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, startDate: string, endDate: string, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param startDate Start date
   * @param endDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, startDate: string, endDate: string, options: Models.TransactionsListByBillingProfileNameOptionalParams, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  listByBillingProfileName(billingAccountName: string, billingProfileName: string, startDate: string, endDate: string, options?: Models.TransactionsListByBillingProfileNameOptionalParams | msRest.ServiceCallback<Models.TransactionsListResult>, callback?: msRest.ServiceCallback<Models.TransactionsListResult>): Promise<Models.TransactionsListByBillingProfileNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        startDate,
        endDate,
        options
      },
      listByBillingProfileNameOperationSpec,
      callback) as Promise<Models.TransactionsListByBillingProfileNameResponse>;
  }

  /**
   * Lists the transactions by invoice section name for given start date and end date.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param startDate Start date
   * @param endDate End date
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByInvoiceSectionNameResponse>
   */
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, startDate: string, endDate: string, options?: Models.TransactionsListByInvoiceSectionNameOptionalParams): Promise<Models.TransactionsListByInvoiceSectionNameResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param startDate Start date
   * @param endDate End date
   * @param callback The callback
   */
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, startDate: string, endDate: string, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param startDate Start date
   * @param endDate End date
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, startDate: string, endDate: string, options: Models.TransactionsListByInvoiceSectionNameOptionalParams, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  listByInvoiceSectionName(billingAccountName: string, invoiceSectionName: string, startDate: string, endDate: string, options?: Models.TransactionsListByInvoiceSectionNameOptionalParams | msRest.ServiceCallback<Models.TransactionsListResult>, callback?: msRest.ServiceCallback<Models.TransactionsListResult>): Promise<Models.TransactionsListByInvoiceSectionNameResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        startDate,
        endDate,
        options
      },
      listByInvoiceSectionNameOperationSpec,
      callback) as Promise<Models.TransactionsListByInvoiceSectionNameResponse>;
  }

  /**
   * Lists the transactions by billing account name for given start and end date.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransactionsListByBillingAccountNameNextResponse>
   */
  listByBillingAccountNameNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TransactionsListByBillingAccountNameNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBillingAccountNameNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccountNameNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransactionsListResult>): void;
  listByBillingAccountNameNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransactionsListResult>, callback?: msRest.ServiceCallback<Models.TransactionsListResult>): Promise<Models.TransactionsListByBillingAccountNameNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBillingAccountNameNextOperationSpec,
      callback) as Promise<Models.TransactionsListByBillingAccountNameNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/transactions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startDate,
    Parameters.endDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startDate,
    Parameters.endDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/transactions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startDate,
    Parameters.endDate,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingAccountNameNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransactionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
