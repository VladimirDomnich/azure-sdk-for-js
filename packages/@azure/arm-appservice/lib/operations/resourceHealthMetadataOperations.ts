/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/resourceHealthMetadataOperationsMappers";
import * as Parameters from "../models/parameters";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";

/** Class representing a ResourceHealthMetadataOperations. */
export class ResourceHealthMetadataOperations {
  private readonly client: WebSiteManagementClientContext;

  /**
   * Create a ResourceHealthMetadataOperations.
   * @param {WebSiteManagementClientContext} client Reference to the service client.
   */
  constructor(client: WebSiteManagementClientContext) {
    this.client = client;
  }

  /**
   * List all ResourceHealthMetadata for all sites in the subscription.
   * @summary List all ResourceHealthMetadata for all sites in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  list(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListResponse>;
  }

  /**
   * List all ResourceHealthMetadata for all sites in the resource group in the subscription.
   * @summary List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListByResourceGroupResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListByResourceGroupResponse>;
  }

  /**
   * Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @summary Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListBySiteResponse>
   */
  listBySite(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListBySiteResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param callback The callback
   */
  listBySite(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySite(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listBySite(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListBySiteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      listBySiteOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListBySiteResponse>;
  }

  /**
   * Gets the category of ResourceHealthMetadata to use for the given site
   * @summary Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataGetBySiteResponse>
   */
  getBySite(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataGetBySiteResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param callback The callback
   */
  getBySite(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadata>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param options The optional parameters
   * @param callback The callback
   */
  getBySite(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadata>): void;
  getBySite(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadata>): Promise<Models.ResourceHealthMetadataGetBySiteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      getBySiteOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataGetBySiteResponse>;
  }

  /**
   * Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @summary Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListBySiteSlotResponse>
   */
  listBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListBySiteSlotResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param callback The callback
   */
  listBySiteSlot(resourceGroupName: string, name: string, slot: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app.
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySiteSlot(resourceGroupName: string, name: string, slot: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListBySiteSlotResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        slot,
        options
      },
      listBySiteSlotOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListBySiteSlotResponse>;
  }

  /**
   * Gets the category of ResourceHealthMetadata to use for the given site
   * @summary Gets the category of ResourceHealthMetadata to use for the given site
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataGetBySiteSlotResponse>
   */
  getBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataGetBySiteSlotResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param callback The callback
   */
  getBySiteSlot(resourceGroupName: string, name: string, slot: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadata>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Name of web app
   * @param slot Name of web app slot. If not specified then will default to production slot.
   * @param options The optional parameters
   * @param callback The callback
   */
  getBySiteSlot(resourceGroupName: string, name: string, slot: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadata>): void;
  getBySiteSlot(resourceGroupName: string, name: string, slot: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadata>): Promise<Models.ResourceHealthMetadataGetBySiteSlotResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        slot,
        options
      },
      getBySiteSlotOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataGetBySiteSlotResponse>;
  }

  /**
   * List all ResourceHealthMetadata for all sites in the subscription.
   * @summary List all ResourceHealthMetadata for all sites in the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListNextResponse>;
  }

  /**
   * List all ResourceHealthMetadata for all sites in the resource group in the subscription.
   * @summary List all ResourceHealthMetadata for all sites in the resource group in the
   * subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListByResourceGroupNextResponse>;
  }

  /**
   * Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @summary Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListBySiteNextResponse>
   */
  listBySiteNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListBySiteNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySiteNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySiteNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listBySiteNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListBySiteNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySiteNextOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListBySiteNextResponse>;
  }

  /**
   * Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @summary Gets the category of ResourceHealthMetadata to use for the given site as a collection
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ResourceHealthMetadataListBySiteSlotNextResponse>
   */
  listBySiteSlotNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ResourceHealthMetadataListBySiteSlotNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySiteSlotNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySiteSlotNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): void;
  listBySiteSlotNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceHealthMetadataCollection>): Promise<Models.ResourceHealthMetadataListBySiteSlotNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySiteSlotNextOperationSpec,
      callback) as Promise<Models.ResourceHealthMetadataListBySiteSlotNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Web/resourceHealthMetadata",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/resourceHealthMetadata",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listBySiteOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getBySiteOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/resourceHealthMetadata/default",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadata
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listBySiteSlotOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.slot,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const getBySiteSlotOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/resourceHealthMetadata/default",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.slot,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceHealthMetadata
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listBySiteNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};

const listBySiteSlotNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ResourceHealthMetadataCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  serializer
};