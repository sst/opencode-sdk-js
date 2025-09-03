// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AgentResource extends APIResource {
  /**
   * List all agents
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/agent', { query, ...options });
  }
}

export interface Agent {
  builtIn: boolean;

  mode: 'subagent' | 'primary' | 'all';

  name: string;

  options: { [key: string]: unknown };

  permission: Agent.Permission;

  tools: { [key: string]: boolean };

  description?: string;

  model?: Agent.Model;

  prompt?: string;

  temperature?: number;

  topP?: number;
}

export namespace Agent {
  export interface Permission {
    bash: { [key: string]: 'ask' | 'allow' | 'deny' };

    edit: 'ask' | 'allow' | 'deny';

    webfetch?: 'ask' | 'allow' | 'deny';
  }

  export interface Model {
    modelID: string;

    providerID: string;
  }
}

export type AgentListResponse = Array<Agent>;

export interface AgentListParams {
  directory?: string;
}

export declare namespace AgentResource {
  export {
    type Agent as Agent,
    type AgentListResponse as AgentListResponse,
    type AgentListParams as AgentListParams,
  };
}
