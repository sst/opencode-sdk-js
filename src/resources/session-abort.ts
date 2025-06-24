// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionAbort extends APIResource {
  /**
   * Abort a session
   */
  abort(body: SessionAbortAbortParams, options?: RequestOptions): APIPromise<SessionAbortAbortResponse> {
    return this._client.post('/session_abort', { body, ...options });
  }
}

export type SessionAbortAbortResponse = boolean;

export interface SessionAbortAbortParams {
  sessionID: string;
}

export declare namespace SessionAbort {
  export {
    type SessionAbortAbortResponse as SessionAbortAbortResponse,
    type SessionAbortAbortParams as SessionAbortAbortParams,
  };
}
