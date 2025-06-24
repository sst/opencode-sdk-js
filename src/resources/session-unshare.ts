// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionCreateAPI from './session-create';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionUnshare extends APIResource {
  /**
   * Unshare the session
   */
  unshare(
    body: SessionUnshareUnshareParams,
    options?: RequestOptions,
  ): APIPromise<SessionCreateAPI.SessionInfo> {
    return this._client.post('/session_unshare', { body, ...options });
  }
}

export interface SessionUnshareUnshareParams {
  sessionID: string;
}

export declare namespace SessionUnshare {
  export { type SessionUnshareUnshareParams as SessionUnshareUnshareParams };
}
