// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionCreateAPI from './session-create';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionShare extends APIResource {
  /**
   * Share the session
   */
  create(body: SessionShareCreateParams, options?: RequestOptions): APIPromise<SessionCreateAPI.SessionInfo> {
    return this._client.post('/session_share', { body, ...options });
  }
}

export interface SessionShareCreateParams {
  sessionID: string;
}

export declare namespace SessionShare {
  export { type SessionShareCreateParams as SessionShareCreateParams };
}
