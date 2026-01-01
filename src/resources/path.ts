// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PathResource extends APIResource {
  /**
   * Get the current path
   */
  get(query: PathGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Path> {
    return this._client.get('/path', { query, ...options });
  }
}

export interface Path {
  config: string;

  directory: string;

  state: string;

  worktree: string;
}

export interface PathGetParams {
  directory?: string;
}

export declare namespace PathResource {
  export { type Path as Path, type PathGetParams as PathGetParams };
}
