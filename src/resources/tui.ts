// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tui extends APIResource {
  /**
   * Send a prompt to the TUI
   */
  prompt(options?: RequestOptions): APIPromise<TuiPromptResponse> {
    return this._client.post('/tui/prompt', options);
  }
}

export type TuiPromptResponse = boolean;

export declare namespace Tui {
  export { type TuiPromptResponse as TuiPromptResponse };
}
