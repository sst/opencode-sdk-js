// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionInitialize extends APIResource {
  /**
   * Analyze the app and create an AGENTS.md file
   */
  create(
    body: SessionInitializeCreateParams,
    options?: RequestOptions,
  ): APIPromise<SessionInitializeCreateResponse> {
    return this._client.post('/session_initialize', { body, ...options });
  }
}

export type SessionInitializeCreateResponse = boolean;

export interface SessionInitializeCreateParams {
  modelID: string;

  providerID: string;

  sessionID: string;
}

export declare namespace SessionInitialize {
  export {
    type SessionInitializeCreateResponse as SessionInitializeCreateResponse,
    type SessionInitializeCreateParams as SessionInitializeCreateParams,
  };
}
