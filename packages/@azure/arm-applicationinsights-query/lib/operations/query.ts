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
import * as Mappers from "../models/queryMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsDataClientContext } from "../applicationInsightsDataClientContext";

/** Class representing a Query. */
export class Query {
  private readonly client: ApplicationInsightsDataClientContext;

  /**
   * Create a Query.
   * @param {ApplicationInsightsDataClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsDataClientContext) {
    this.client = client;
  }

  /**
   * Executes an Analytics query for data.
   * [Here](https://dev.applicationinsights.io/documentation/Using-the-API/Query) is an example for
   * using POST with an Analytics query.
   * @summary Execute an Analytics query
   * @param appId ID of the application. This is Application ID from the API Access settings blade in
   * the Azure portal.
   * @param body The Analytics query. Learn more about the [Analytics query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   * @param [options] The optional parameters
   * @returns Promise<Models.QueryExecuteResponse>
   */
  execute(appId: string, body: Models.QueryBody, options?: msRest.RequestOptionsBase): Promise<Models.QueryExecuteResponse>;
  /**
   * @param appId ID of the application. This is Application ID from the API Access settings blade in
   * the Azure portal.
   * @param body The Analytics query. Learn more about the [Analytics query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   * @param callback The callback
   */
  execute(appId: string, body: Models.QueryBody, callback: msRest.ServiceCallback<Models.QueryResults>): void;
  /**
   * @param appId ID of the application. This is Application ID from the API Access settings blade in
   * the Azure portal.
   * @param body The Analytics query. Learn more about the [Analytics query
   * syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
   * @param options The optional parameters
   * @param callback The callback
   */
  execute(appId: string, body: Models.QueryBody, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.QueryResults>): void;
  execute(appId: string, body: Models.QueryBody, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.QueryResults>): Promise<Models.QueryExecuteResponse> {
    return this.client.sendOperationRequest(
      {
        appId,
        body,
        options
      },
      executeOperationSpec,
      callback) as Promise<Models.QueryExecuteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const executeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "v1/apps/{appId}/query",
  urlParameters: [
    Parameters.appId
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.QueryBody,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.QueryResults
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};