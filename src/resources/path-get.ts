// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PathGet extends APIResource {
  /**
   * Get paths
   */
  create(options?: RequestOptions): APIPromise<PathGetCreateResponse> {
    return this._client.post('/path_get', options);
  }
}

export interface PathGetCreateResponse {
  config: string;

  cwd: string;

  data: string;

  root: string;
}

export declare namespace PathGet {
  export { type PathGetCreateResponse as PathGetCreateResponse };
}
