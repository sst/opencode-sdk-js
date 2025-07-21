// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionAPI from './session';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tui extends APIResource {
  /**
   * Open the help dialog
   */
  openHelp(options?: RequestOptions): APIPromise<TuiOpenHelpResponse> {
    return this._client.post('/tui/open-help', options);
  }

  /**
   * Send a prompt to the TUI
   */
  prompt(body: TuiPromptParams, options?: RequestOptions): APIPromise<TuiPromptResponse> {
    return this._client.post('/tui/prompt', { body, ...options });
  }
}

export type TuiOpenHelpResponse = boolean;

export type TuiPromptResponse = boolean;

export interface TuiPromptParams {
  parts: Array<SessionAPI.Part>;

  text: string;
}

export declare namespace Tui {
  export {
    type TuiOpenHelpResponse as TuiOpenHelpResponse,
    type TuiPromptResponse as TuiPromptResponse,
    type TuiPromptParams as TuiPromptParams,
  };
}
