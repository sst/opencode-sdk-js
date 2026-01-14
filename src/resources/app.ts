// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class App extends APIResource {
  /**
   * Write a log entry to the server logs
   */
  log(params: AppLogParams, options?: RequestOptions): APIPromise<AppLogResponse> {
    const { directory, ...body } = params;
    return this._client.post('/log', { query: { directory }, body, ...options });
  }

  /**
   * List all providers
   */
  providers(
    query: AppProvidersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AppProvidersResponse> {
    return this._client.get('/config/providers', { query, ...options });
  }
}

export interface Model {
  id: string;

  attachment: boolean;

  cost: Model.Cost;

  limit: Model.Limit;

  name: string;

  options: { [key: string]: unknown };

  reasoning: boolean;

  release_date: string;

  temperature: boolean;

  tool_call: boolean;
}

export namespace Model {
  export interface Cost {
    input: number;

    output: number;

    cache_read?: number;

    cache_write?: number;
  }

  export interface Limit {
    context: number;

    output: number;
  }
}

export interface Provider {
  id: string;

  env: Array<string>;

  models: { [key: string]: Model };

  name: string;

  api?: string;

  npm?: string;
}

export type AppLogResponse = boolean;

export interface AppProvidersResponse {
  default: { [key: string]: string };

  providers: Array<Provider>;
}

export interface AppLogParams {
  /**
   * Body param: Log level
   */
  level: 'debug' | 'info' | 'error' | 'warn';

  /**
   * Body param: Log message
   */
  message: string;

  /**
   * Body param: Service name for the log entry
   */
  service: string;

  /**
   * Query param
   */
  directory?: string;

  /**
   * Body param: Additional metadata for the log entry
   */
  extra?: { [key: string]: unknown };
}

export interface AppProvidersParams {
  directory?: string;
}

export declare namespace App {
  export {
    type Model as Model,
    type Provider as Provider,
    type AppLogResponse as AppLogResponse,
    type AppProvidersResponse as AppProvidersResponse,
    type AppLogParams as AppLogParams,
    type AppProvidersParams as AppProvidersParams,
  };
}
