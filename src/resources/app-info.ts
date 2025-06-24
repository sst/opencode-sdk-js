// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AppInfo extends APIResource {
  /**
   * Get app info
   */
  create(options?: RequestOptions): APIPromise<AppInfoCreateResponse> {
    return this._client.post('/app_info', options);
  }
}

export interface AppInfoCreateResponse {
  git: boolean;

  path: AppInfoCreateResponse.Path;

  time: AppInfoCreateResponse.Time;

  user: string;
}

export namespace AppInfoCreateResponse {
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

export declare namespace AppInfo {
  export { type AppInfoCreateResponse as AppInfoCreateResponse };
}
