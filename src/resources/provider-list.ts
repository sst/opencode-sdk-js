// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ProviderList extends APIResource {
  /**
   * List all providers
   */
  create(options?: RequestOptions): APIPromise<ProviderListCreateResponse> {
    return this._client.post('/provider_list', options);
  }
}

export interface ProviderListCreateResponse {
  default: { [key: string]: string };

  providers: Array<ProviderListCreateResponse.Provider>;
}

export namespace ProviderListCreateResponse {
  export interface Provider {
    id: string;

    env: Array<string>;

    models: { [key: string]: Provider.Models };

    name: string;

    api?: string;

    npm?: string;
  }

  export namespace Provider {
    export interface Models {
      id: string;

      attachment: boolean;

      cost: Models.Cost;

      limit: Models.Limit;

      name: string;

      options: { [key: string]: unknown };

      reasoning: boolean;

      temperature: boolean;

      tool_call: boolean;
    }

    export namespace Models {
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
  }
}

export declare namespace ProviderList {
  export { type ProviderListCreateResponse as ProviderListCreateResponse };
}
