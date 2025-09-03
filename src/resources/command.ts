// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CommandResource extends APIResource {
  /**
   * List all commands
   */
  list(
    query: CommandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommandListResponse> {
    return this._client.get('/command', { query, ...options });
  }
}

export interface Command {
  name: string;

  template: string;

  agent?: string;

  description?: string;

  model?: string;
}

export type CommandListResponse = Array<Command>;

export interface CommandListParams {
  directory?: string;
}

export declare namespace CommandResource {
  export {
    type Command as Command,
    type CommandListResponse as CommandListResponse,
    type CommandListParams as CommandListParams,
  };
}
