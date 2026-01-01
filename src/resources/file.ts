// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FileResource extends APIResource {
  /**
   * List files and directories
   */
  list(query: FileListParams, options?: RequestOptions): APIPromise<FileListResponse> {
    return this._client.get('/file', { query, ...options });
  }

  /**
   * Read a file
   */
  read(query: FileReadParams, options?: RequestOptions): APIPromise<FileReadResponse> {
    return this._client.get('/file/content', { query, ...options });
  }

  /**
   * Get file status
   */
  status(
    query: FileStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FileStatusResponse> {
    return this._client.get('/file/status', { query, ...options });
  }
}

export interface File {
  added: number;

  path: string;

  removed: number;

  status: 'added' | 'deleted' | 'modified';
}

export interface FileNode {
  ignored: boolean;

  name: string;

  path: string;

  type: 'file' | 'directory';
}

export type FileListResponse = Array<FileNode>;

export interface FileReadResponse {
  content: string;

  type: 'raw' | 'patch';
}

export type FileStatusResponse = Array<File>;

export interface FileListParams {
  path: string;

  directory?: string;
}

export interface FileReadParams {
  path: string;

  directory?: string;
}

export interface FileStatusParams {
  directory?: string;
}

export declare namespace FileResource {
  export {
    type File as File,
    type FileNode as FileNode,
    type FileListResponse as FileListResponse,
    type FileReadResponse as FileReadResponse,
    type FileStatusResponse as FileStatusResponse,
    type FileListParams as FileListParams,
    type FileReadParams as FileReadParams,
    type FileStatusParams as FileStatusParams,
  };
}
