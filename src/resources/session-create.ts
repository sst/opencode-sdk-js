// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionCreate extends APIResource {
  /**
   * Create a new session
   */
  create(options?: RequestOptions): APIPromise<SessionInfo> {
    return this._client.post('/session_create', options);
  }
}

export interface SessionInfo {
  id: string;

  time: SessionInfo.Time;

  title: string;

  version: string;

  parentID?: string;

  share?: SessionInfo.Share;
}

export namespace SessionInfo {
  export interface Time {
    created: number;

    updated: number;
  }

  export interface Share {
    url: string;
  }
}

export declare namespace SessionCreate {
  export { type SessionInfo as SessionInfo };
}
