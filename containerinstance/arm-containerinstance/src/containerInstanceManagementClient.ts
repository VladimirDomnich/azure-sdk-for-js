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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { ContainerInstanceManagementClientContext } from "./containerInstanceManagementClientContext";


class ContainerInstanceManagementClient extends ContainerInstanceManagementClientContext {
  // Operation groups
  containerGroups: operations.ContainerGroups;
  operations: operations.Operations;
  containerGroupUsage: operations.ContainerGroupUsage;
  container: operations.ContainerOperations;
  serviceAssociationLink: operations.ServiceAssociationLink;

  /**
   * Initializes a new instance of the ContainerInstanceManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ContainerInstanceManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.containerGroups = new operations.ContainerGroups(this);
    this.operations = new operations.Operations(this);
    this.containerGroupUsage = new operations.ContainerGroupUsage(this);
    this.container = new operations.ContainerOperations(this);
    this.serviceAssociationLink = new operations.ServiceAssociationLink(this);
  }

  /**
   * Get the list of cached images on specific OS type for a subscription in a region.
   * @summary Get the list of cached images.
   * @param location The identifier for the physical azure location.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListCachedImagesResponse>
   */
  listCachedImages(location: string, options?: msRest.RequestOptionsBase): Promise<Models.ListCachedImagesResponse>;
  /**
   * @param location The identifier for the physical azure location.
   * @param callback The callback
   */
  listCachedImages(location: string, callback: msRest.ServiceCallback<Models.CachedImagesListResult>): void;
  /**
   * @param location The identifier for the physical azure location.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCachedImages(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CachedImagesListResult>): void;
  listCachedImages(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CachedImagesListResult>, callback?: msRest.ServiceCallback<Models.CachedImagesListResult>): Promise<Models.ListCachedImagesResponse> {
    return this.sendOperationRequest(
      {
        location,
        options
      },
      listCachedImagesOperationSpec,
      callback) as Promise<Models.ListCachedImagesResponse>;
  }

  /**
   * Get the list of CPU/memory/GPU capabilities of a region.
   * @summary Get the list of capabilities of the location.
   * @param location The identifier for the physical azure location.
   * @param [options] The optional parameters
   * @returns Promise<Models.ListCapabilitiesResponse>
   */
  listCapabilities(location: string, options?: msRest.RequestOptionsBase): Promise<Models.ListCapabilitiesResponse>;
  /**
   * @param location The identifier for the physical azure location.
   * @param callback The callback
   */
  listCapabilities(location: string, callback: msRest.ServiceCallback<Models.CapabilitiesListResult>): void;
  /**
   * @param location The identifier for the physical azure location.
   * @param options The optional parameters
   * @param callback The callback
   */
  listCapabilities(location: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CapabilitiesListResult>): void;
  listCapabilities(location: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CapabilitiesListResult>, callback?: msRest.ServiceCallback<Models.CapabilitiesListResult>): Promise<Models.ListCapabilitiesResponse> {
    return this.sendOperationRequest(
      {
        location,
        options
      },
      listCapabilitiesOperationSpec,
      callback) as Promise<Models.ListCapabilitiesResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listCachedImagesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/cachedImages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CachedImagesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listCapabilitiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerInstance/locations/{location}/capabilities",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.location
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CapabilitiesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

export {
  ContainerInstanceManagementClient,
  ContainerInstanceManagementClientContext,
  Models as ContainerInstanceManagementModels,
  Mappers as ContainerInstanceManagementMappers
};
export * from "./operations";
