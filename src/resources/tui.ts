// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tui extends APIResource {
  /**
   * Append prompt to the TUI
   */
  appendPrompt(params: TuiAppendPromptParams, options?: RequestOptions): APIPromise<TuiAppendPromptResponse> {
    const { directory, ...body } = params;
    return this._client.post('/tui/append-prompt', { query: { directory }, body, ...options });
  }

  /**
   * Clear the prompt
   */
  clearPrompt(
    params: TuiClearPromptParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TuiClearPromptResponse> {
    const { directory } = params ?? {};
    return this._client.post('/tui/clear-prompt', { query: { directory }, ...options });
  }

  /**
   * Execute a TUI command (e.g. agent_cycle)
   */
  executeCommand(
    params: TuiExecuteCommandParams,
    options?: RequestOptions,
  ): APIPromise<TuiExecuteCommandResponse> {
    const { directory, ...body } = params;
    return this._client.post('/tui/execute-command', { query: { directory }, body, ...options });
  }

  /**
   * Open the help dialog
   */
  openHelp(
    params: TuiOpenHelpParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TuiOpenHelpResponse> {
    const { directory } = params ?? {};
    return this._client.post('/tui/open-help', { query: { directory }, ...options });
  }

  /**
   * Open the model dialog
   */
  openModels(
    params: TuiOpenModelsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TuiOpenModelsResponse> {
    const { directory } = params ?? {};
    return this._client.post('/tui/open-models', { query: { directory }, ...options });
  }

  /**
   * Open the session dialog
   */
  openSessions(
    params: TuiOpenSessionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TuiOpenSessionsResponse> {
    const { directory } = params ?? {};
    return this._client.post('/tui/open-sessions', { query: { directory }, ...options });
  }

  /**
   * Open the theme dialog
   */
  openThemes(
    params: TuiOpenThemesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TuiOpenThemesResponse> {
    const { directory } = params ?? {};
    return this._client.post('/tui/open-themes', { query: { directory }, ...options });
  }

  /**
   * Show a toast notification in the TUI
   */
  showToast(params: TuiShowToastParams, options?: RequestOptions): APIPromise<TuiShowToastResponse> {
    const { directory, ...body } = params;
    return this._client.post('/tui/show-toast', { query: { directory }, body, ...options });
  }

  /**
   * Submit the prompt
   */
  submitPrompt(
    params: TuiSubmitPromptParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TuiSubmitPromptResponse> {
    const { directory } = params ?? {};
    return this._client.post('/tui/submit-prompt', { query: { directory }, ...options });
  }
}

export type TuiAppendPromptResponse = boolean;

export type TuiClearPromptResponse = boolean;

export type TuiExecuteCommandResponse = boolean;

export type TuiOpenHelpResponse = boolean;

export type TuiOpenModelsResponse = boolean;

export type TuiOpenSessionsResponse = boolean;

export type TuiOpenThemesResponse = boolean;

export type TuiShowToastResponse = boolean;

export type TuiSubmitPromptResponse = boolean;

export interface TuiAppendPromptParams {
  /**
   * Body param:
   */
  text: string;

  /**
   * Query param:
   */
  directory?: string;
}

export interface TuiClearPromptParams {
  directory?: string;
}

export interface TuiExecuteCommandParams {
  /**
   * Body param:
   */
  command: string;

  /**
   * Query param:
   */
  directory?: string;
}

export interface TuiOpenHelpParams {
  directory?: string;
}

export interface TuiOpenModelsParams {
  directory?: string;
}

export interface TuiOpenSessionsParams {
  directory?: string;
}

export interface TuiOpenThemesParams {
  directory?: string;
}

export interface TuiShowToastParams {
  /**
   * Body param:
   */
  message: string;

  /**
   * Body param:
   */
  variant: 'info' | 'success' | 'warning' | 'error';

  /**
   * Query param:
   */
  directory?: string;

  /**
   * Body param:
   */
  title?: string;
}

export interface TuiSubmitPromptParams {
  directory?: string;
}

export declare namespace Tui {
  export {
    type TuiAppendPromptResponse as TuiAppendPromptResponse,
    type TuiClearPromptResponse as TuiClearPromptResponse,
    type TuiExecuteCommandResponse as TuiExecuteCommandResponse,
    type TuiOpenHelpResponse as TuiOpenHelpResponse,
    type TuiOpenModelsResponse as TuiOpenModelsResponse,
    type TuiOpenSessionsResponse as TuiOpenSessionsResponse,
    type TuiOpenThemesResponse as TuiOpenThemesResponse,
    type TuiShowToastResponse as TuiShowToastResponse,
    type TuiSubmitPromptResponse as TuiSubmitPromptResponse,
    type TuiAppendPromptParams as TuiAppendPromptParams,
    type TuiClearPromptParams as TuiClearPromptParams,
    type TuiExecuteCommandParams as TuiExecuteCommandParams,
    type TuiOpenHelpParams as TuiOpenHelpParams,
    type TuiOpenModelsParams as TuiOpenModelsParams,
    type TuiOpenSessionsParams as TuiOpenSessionsParams,
    type TuiOpenThemesParams as TuiOpenThemesParams,
    type TuiShowToastParams as TuiShowToastParams,
    type TuiSubmitPromptParams as TuiSubmitPromptParams,
  };
}
