// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AppResource extends APIResource {
  /**
   * Get app info
   */
  get(options?: RequestOptions): APIPromise<App> {
    return this._client.get('/app', options);
  }

  /**
   * Initialize the app
   */
  init(options?: RequestOptions): APIPromise<AppInitResponse> {
    return this._client.post('/app/init', options);
  }

  /**
   * Write a log entry to the server logs
   */
  log(body: AppLogParams, options?: RequestOptions): APIPromise<AppLogResponse> {
    return this._client.post('/log', { body, ...options });
  }

  /**
   * List all modes
   */
  modes(options?: RequestOptions): APIPromise<AppModesResponse> {
    return this._client.get('/mode', options);
  }
}

export interface App {
  git: boolean;

  hostname: string;

  path: App.Path;

  time: App.Time;
}

export namespace App {
  export interface Path {
    config: string;

    cwd: string;

    data: string;

    root: string;

    state: string;
  }

  export interface Time {
    initialized?: number;
  }
}

/**
 * Log level
 */
export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface Mode {
  name: string;

  tools: { [key: string]: boolean };

  model?: Mode.Model;

  prompt?: string;
}

export namespace Mode {
  export interface Model {
    modelID: string;

    providerID: string;
  }
}

export type AppInitResponse = boolean;

export type AppLogResponse = boolean;

export type AppModesResponse = Array<Mode>;

export interface AppLogParams {
  /**
   * Log level
   */
  level: 'debug' | 'info' | 'error' | 'warn';

  /**
   * Log message
   */
  message: string;

  /**
   * Service name for the log entry
   */
  service: string;

  /**
   * Additional metadata for the log entry
   */
  extra?: { [key: string]: unknown };
}

export declare namespace AppResource {
  export {
    type App as App,
    type LogLevel as LogLevel,
    type Mode as Mode,
    type AppInitResponse as AppInitResponse,
    type AppLogResponse as AppLogResponse,
    type AppModesResponse as AppModesResponse,
    type AppLogParams as AppLogParams,
  };
}
