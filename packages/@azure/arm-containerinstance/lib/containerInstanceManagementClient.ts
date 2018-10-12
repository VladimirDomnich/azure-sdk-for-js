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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
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
}

// Operation Specifications

export {
  ContainerInstanceManagementClient,
  ContainerInstanceManagementClientContext,
  Models as ContainerInstanceManagementModels,
  Mappers as ContainerInstanceManagementMappers
};
export * from "./operations";