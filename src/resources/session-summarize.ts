// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionSummarize extends APIResource {
  /**
   * Summarize the session
   */
  summarize(
    body: SessionSummarizeSummarizeParams,
    options?: RequestOptions,
  ): APIPromise<SessionSummarizeSummarizeResponse> {
    return this._client.post('/session_summarize', { body, ...options });
  }
}

export type SessionSummarizeSummarizeResponse = boolean;

export interface SessionSummarizeSummarizeParams {
  modelID: string;

  providerID: string;

  sessionID: string;
}

export declare namespace SessionSummarize {
  export {
    type SessionSummarizeSummarizeResponse as SessionSummarizeSummarizeResponse,
    type SessionSummarizeSummarizeParams as SessionSummarizeSummarizeParams,
  };
}
