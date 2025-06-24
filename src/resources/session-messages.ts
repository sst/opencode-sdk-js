// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionChatAPI from './session-chat';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionMessages extends APIResource {
  /**
   * Get messages for a session
   */
  create(
    body: SessionMessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<SessionMessageCreateResponse> {
    return this._client.post('/session_messages', { body, ...options });
  }
}

export type SessionMessageCreateResponse = Array<SessionChatAPI.MessageInfo>;

export interface SessionMessageCreateParams {
  sessionID: string;
}

export declare namespace SessionMessages {
  export {
    type SessionMessageCreateResponse as SessionMessageCreateResponse,
    type SessionMessageCreateParams as SessionMessageCreateParams,
  };
}
