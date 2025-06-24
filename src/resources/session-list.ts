// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionCreateAPI from './session-create';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionList extends APIResource {
  /**
   * List all sessions
   */
  create(options?: RequestOptions): APIPromise<SessionListCreateResponse> {
    return this._client.post('/session_list', options);
  }
}

export type SessionListCreateResponse = Array<SessionCreateAPI.SessionInfo>;

export declare namespace SessionList {
  export { type SessionListCreateResponse as SessionListCreateResponse };
}
