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
}

export interface App {
  git: boolean;

  hostname: string;

  path: App.Path;

  project: string;

  time: App.Time;

  user: string;
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

export type AppInitResponse = boolean;

export declare namespace AppResource {
  export { type App as App, type AppInitResponse as AppInitResponse };
}
