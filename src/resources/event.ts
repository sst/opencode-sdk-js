// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionAPI from './session';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Event extends APIResource {
  /**
   * Get events
   */
  list(options?: RequestOptions): APIPromise<EventListResponse> {
    return this._client.get('/event', options);
  }
}

export type EventListResponse =
  | EventListResponse.EventStorageWrite
  | EventListResponse.EventInstallationUpdated
  | EventListResponse.EventLspClientDiagnostics
  | EventListResponse.EventPermissionUpdated
  | EventListResponse.EventMessageUpdated
  | EventListResponse.EventMessagePartUpdated
  | EventListResponse.EventSessionUpdated
  | EventListResponse.EventSessionDeleted
  | EventListResponse.EventSessionError;

export namespace EventListResponse {
  export interface EventStorageWrite {
    properties: EventStorageWrite.Properties;

    type: 'storage.write';
  }

  export namespace EventStorageWrite {
    export interface Properties {
      key: string;

      content?: unknown;
    }
  }

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

  export interface EventPermissionUpdated {
    properties: EventPermissionUpdated.Properties;

    type: 'permission.updated';
  }

  export namespace EventPermissionUpdated {
    export interface Properties {
      id: string;

      metadata: { [key: string]: unknown };

      sessionID: string;

      time: Properties.Time;

      title: string;
    }

    export namespace Properties {
      export interface Time {
        created: number;
      }
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

  export interface EventMessagePartUpdated {
    properties: EventMessagePartUpdated.Properties;

    type: 'message.part.updated';
  }

  export namespace EventMessagePartUpdated {
    export interface Properties {
      messageID: string;

      part: SessionAPI.MessagePart;

      sessionID: string;
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

  export interface EventSessionError {
    properties: EventSessionError.Properties;

    type: 'session.error';
  }

  export namespace EventSessionError {
    export interface Properties {
      error?: Properties.ProviderAuthError | Properties.UnknownError | Properties.MessageOutputLengthError;
    }

    export namespace Properties {
      export interface ProviderAuthError {
        data: ProviderAuthError.Data;

        name: 'ProviderAuthError';
      }

      export namespace ProviderAuthError {
        export interface Data {
          message: string;

          providerID: string;
        }
      }

      export interface UnknownError {
        data: UnknownError.Data;

        name: 'UnknownError';
      }

      export namespace UnknownError {
        export interface Data {
          message: string;
        }
      }

      export interface MessageOutputLengthError {
        data: unknown;

        name: 'MessageOutputLengthError';
      }
    }
  }
}

export declare namespace Event {
  export { type EventListResponse as EventListResponse };
}
