// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class File extends APIResource {
  /**
   * Read a file
   */
  read(query: FileReadParams, options?: RequestOptions): APIPromise<FileReadResponse> {
    return this._client.get('/file', { query, ...options });
  }

  /**
   * Get file status
   */
  status(options?: RequestOptions): APIPromise<FileStatusResponse> {
    return this._client.get('/file/status', options);
  }
}

export interface FileReadResponse {
  content: string;

  type: 'raw' | 'patch';
}

export type FileStatusResponse = Array<FileStatusResponse.FileStatusResponseItem>;

export namespace FileStatusResponse {
  export interface FileStatusResponseItem {
    added: number;

    file: string;

    removed: number;

    status: 'added' | 'deleted' | 'modified';
  }
}

export interface FileReadParams {
  path: string;
}

export declare namespace File {
  export {
    type FileReadResponse as FileReadResponse,
    type FileStatusResponse as FileStatusResponse,
    type FileReadParams as FileReadParams,
  };
}
