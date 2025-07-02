// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Find extends APIResource {
  /**
   * Find files
   */
  files(query: FindFilesParams, options?: RequestOptions): APIPromise<FindFilesResponse> {
    return this._client.get('/find/file', { query, ...options });
  }

  /**
   * Find workspace symbols
   */
  symbols(query: FindSymbolsParams, options?: RequestOptions): APIPromise<FindSymbolsResponse> {
    return this._client.get('/find/symbol', { query, ...options });
  }

  /**
   * Find text in files
   */
  text(query: FindTextParams, options?: RequestOptions): APIPromise<FindTextResponse> {
    return this._client.get('/find', { query, ...options });
  }
}

export type FindFilesResponse = Array<string>;

export type FindSymbolsResponse = Array<unknown>;

export type FindTextResponse = Array<FindTextResponse.FindTextResponseItem>;

export namespace FindTextResponse {
  export interface FindTextResponseItem {
    absolute_offset: number;

    line_number: number;

    lines: FindTextResponseItem.Lines;

    path: FindTextResponseItem.Path;

    submatches: Array<FindTextResponseItem.Submatch>;
  }

  export namespace FindTextResponseItem {
    export interface Lines {
      text: string;
    }

    export interface Path {
      text: string;
    }

    export interface Submatch {
      end: number;

      match: Submatch.Match;

      start: number;
    }

    export namespace Submatch {
      export interface Match {
        text: string;
      }
    }
  }
}

export interface FindFilesParams {
  query: string;
}

export interface FindSymbolsParams {
  query: string;
}

export interface FindTextParams {
  pattern: string;
}

export declare namespace Find {
  export {
    type FindFilesResponse as FindFilesResponse,
    type FindSymbolsResponse as FindSymbolsResponse,
    type FindTextResponse as FindTextResponse,
    type FindFilesParams as FindFilesParams,
    type FindSymbolsParams as FindSymbolsParams,
    type FindTextParams as FindTextParams,
  };
}
