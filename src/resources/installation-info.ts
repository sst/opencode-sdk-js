// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class InstallationInfo extends APIResource {
  /**
   * Get installation info
   */
  create(options?: RequestOptions): APIPromise<InstallationInfoCreateResponse> {
    return this._client.post('/installation_info', options);
  }
}

export interface InstallationInfoCreateResponse {
  latest: string;

  version: string;
}

export declare namespace InstallationInfo {
  export { type InstallationInfoCreateResponse as InstallationInfoCreateResponse };
}
