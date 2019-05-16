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
import * as Mappers from "../models/billingPermissionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingPermissions. */
export class BillingPermissions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingPermissions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all billing permissions for the caller under a billing account.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByBillingAccountResponse>
   */
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByBillingAccountResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingAccount(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByBillingAccount(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByBillingAccountResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listByBillingAccountOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByBillingAccountResponse>;
  }

  /**
   * Lists all billing permissions for the caller under invoice section.
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByInvoiceSectionsResponse>
   */
  listByInvoiceSections(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByInvoiceSectionsResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param callback The callback
   */
  listByInvoiceSections(billingAccountName: string, invoiceSectionName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param invoiceSectionName InvoiceSection Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInvoiceSections(billingAccountName: string, invoiceSectionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByInvoiceSections(billingAccountName: string, invoiceSectionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByInvoiceSectionsResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        invoiceSectionName,
        options
      },
      listByInvoiceSectionsOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByInvoiceSectionsResponse>;
  }

  /**
   * Lists all billingPermissions for the caller has for a billing account.
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingPermissionsListByBillingProfileResponse>
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingPermissionsListByBillingProfileResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param billingProfileName Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  listByBillingProfile(billingAccountName: string, billingProfileName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingPermissionsListByBillingProfileResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        billingProfileName,
        options
      },
      listByBillingProfileOperationSpec,
      callback) as Promise<Models.BillingPermissionsListByBillingProfileResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBillingAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByInvoiceSectionsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoiceSections/{invoiceSectionName}/providers/Microsoft.Billing/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.invoiceSectionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByBillingProfileOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/providers/Microsoft.Billing/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName,
    Parameters.billingProfileName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
