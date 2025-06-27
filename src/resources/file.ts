// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class File extends APIResource {
  /**
   * Search for files
   */
  search(query: FileSearchParams, options?: RequestOptions): APIPromise<FileSearchResponse> {
    return this._client.get('/file', { query, ...options });
  }
}

export type FileSearchResponse = Array<string>;

export interface FileSearchParams {
  query: string;
}

export declare namespace File {
  export { type FileSearchResponse as FileSearchResponse, type FileSearchParams as FileSearchParams };
}
