// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as PermissionsAPI from './session/permissions';
import * as SessionAPI from './session/session';
import { APIPromise } from '../core/api-promise';
import { Stream } from '../core/streaming';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Event extends APIResource {
  /**
   * Get events
   */
  list(
    query: EventListParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<EventListResponse>> {
    return this._client.get('/event', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<EventListResponse>>;
  }
}

export type EventListResponse =
  | EventListResponse.EventInstallationUpdated
  | EventListResponse.EventLspClientDiagnostics
  | EventListResponse.EventMessageUpdated
  | EventListResponse.EventMessageRemoved
  | EventListResponse.EventMessagePartUpdated
  | EventListResponse.EventMessagePartRemoved
  | EventListResponse.EventPermissionUpdated
  | EventListResponse.EventPermissionReplied
  | EventListResponse.EventFileEdited
  | EventListResponse.EventSessionUpdated
  | EventListResponse.EventSessionDeleted
  | EventListResponse.EventSessionIdle
  | EventListResponse.EventSessionError
  | EventListResponse.EventServerConnected;

export namespace EventListResponse {
  export interface EventInstallationUpdated {
    properties: EventInstallationUpdated.Properties;

    type: 'installation.updated';
  }

  export namespace EventInstallationUpdated {
    export interface Properties {
      version: string;
    }
  }

  export interface EventLspClientDiagnostics {
    properties: EventLspClientDiagnostics.Properties;

    type: 'lsp.client.diagnostics';
  }

  export namespace EventLspClientDiagnostics {
    export interface Properties {
      path: string;

      serverID: string;
    }
  }

  export interface EventMessageUpdated {
    properties: EventMessageUpdated.Properties;

    type: 'message.updated';
  }

  export namespace EventMessageUpdated {
    export interface Properties {
      info: SessionAPI.Message;
    }
  }

  export interface EventMessageRemoved {
    properties: EventMessageRemoved.Properties;

    type: 'message.removed';
  }

  export namespace EventMessageRemoved {
    export interface Properties {
      messageID: string;

      sessionID: string;
    }
  }

  export interface EventMessagePartUpdated {
    properties: EventMessagePartUpdated.Properties;

    type: 'message.part.updated';
  }

  export namespace EventMessagePartUpdated {
    export interface Properties {
      part: SessionAPI.Part;
    }
  }

  export interface EventMessagePartRemoved {
    properties: EventMessagePartRemoved.Properties;

    type: 'message.part.removed';
  }

  export namespace EventMessagePartRemoved {
    export interface Properties {
      messageID: string;

      partID: string;

      sessionID: string;
    }
  }

  export interface EventPermissionUpdated {
    properties: PermissionsAPI.Permission;

    type: 'permission.updated';
  }

  export interface EventPermissionReplied {
    properties: EventPermissionReplied.Properties;

    type: 'permission.replied';
  }

  export namespace EventPermissionReplied {
    export interface Properties {
      permissionID: string;

      response: string;

      sessionID: string;
    }
  }

  export interface EventFileEdited {
    properties: EventFileEdited.Properties;

    type: 'file.edited';
  }

  export namespace EventFileEdited {
    export interface Properties {
      file: string;
    }
  }

  export interface EventSessionUpdated {
    properties: EventSessionUpdated.Properties;

    type: 'session.updated';
  }

  export namespace EventSessionUpdated {
    export interface Properties {
      info: SessionAPI.Session;
    }
  }

  export interface EventSessionDeleted {
    properties: EventSessionDeleted.Properties;

    type: 'session.deleted';
  }

  export namespace EventSessionDeleted {
    export interface Properties {
      info: SessionAPI.Session;
    }
  }

  export interface EventSessionIdle {
    properties: EventSessionIdle.Properties;

    type: 'session.idle';
  }

  export namespace EventSessionIdle {
    export interface Properties {
      sessionID: string;
    }
  }

  export interface EventSessionError {
    properties: EventSessionError.Properties;

    type: 'session.error';
  }

  export namespace EventSessionError {
    export interface Properties {
      error?:
        | Shared.ProviderAuthError
        | Shared.UnknownError
        | Properties.MessageOutputLengthError
        | Shared.MessageAbortedError;

      sessionID?: string;
    }

    export namespace Properties {
      export interface MessageOutputLengthError {
        data: unknown;

        name: 'MessageOutputLengthError';
      }
    }
  }

  export interface EventServerConnected {
    properties: unknown;

    type: 'server.connected';
  }
}

export interface EventListParams {
  directory?: string;
}

export declare namespace Event {
  export { type EventListResponse as EventListResponse, type EventListParams as EventListParams };
}
