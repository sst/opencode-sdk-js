// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AppInitialize extends APIResource {
  /**
   * Initialize the app
   */
  initialize(options?: RequestOptions): APIPromise<AppInitializeInitializeResponse> {
    return this._client.post('/app_initialize', options);
  }
}

export type AppInitializeInitializeResponse = boolean;

export declare namespace AppInitialize {
  export { type AppInitializeInitializeResponse as AppInitializeInitializeResponse };
}
