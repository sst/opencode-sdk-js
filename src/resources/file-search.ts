// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FileSearch extends APIResource {
  /**
   * Search for files
   */
  search(body: FileSearchSearchParams, options?: RequestOptions): APIPromise<FileSearchSearchResponse> {
    return this._client.post('/file_search', { body, ...options });
  }
}

export type FileSearchSearchResponse = Array<string>;

export interface FileSearchSearchParams {
  query: string;
}

export declare namespace FileSearch {
  export {
    type FileSearchSearchResponse as FileSearchSearchResponse,
    type FileSearchSearchParams as FileSearchSearchParams,
  };
}
