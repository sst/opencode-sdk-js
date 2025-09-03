// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ProjectResource extends APIResource {
  /**
   * List all projects
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/project', { query, ...options });
  }

  /**
   * Get the current project
   */
  current(
    query: ProjectCurrentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Project> {
    return this._client.get('/project/current', { query, ...options });
  }
}

export interface Project {
  id: string;

  time: Project.Time;

  worktree: string;

  vcs?: 'git';
}

export namespace Project {
  export interface Time {
    created: number;

    initialized?: number;
  }
}

export type ProjectListResponse = Array<Project>;

export interface ProjectListParams {
  directory?: string;
}

export interface ProjectCurrentParams {
  directory?: string;
}

export declare namespace ProjectResource {
  export {
    type Project as Project,
    type ProjectListResponse as ProjectListResponse,
    type ProjectListParams as ProjectListParams,
    type ProjectCurrentParams as ProjectCurrentParams,
  };
}
