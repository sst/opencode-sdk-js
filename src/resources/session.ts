// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SessionResource extends APIResource {
  /**
   * Create a new session
   */
  create(options?: RequestOptions): APIPromise<Session> {
    return this._client.post('/session', options);
  }

  /**
   * List all sessions
   */
  list(options?: RequestOptions): APIPromise<SessionListResponse> {
    return this._client.get('/session', options);
  }

  /**
   * Delete a session and all its data
   */
  delete(id: string, options?: RequestOptions): APIPromise<SessionDeleteResponse> {
    return this._client.delete(path`/session/${id}`, options);
  }

  /**
   * Abort a session
   */
  abort(id: string, options?: RequestOptions): APIPromise<SessionAbortResponse> {
    return this._client.post(path`/session/${id}/abort`, options);
  }

  /**
   * Create and send a new message to a session
   */
  chat(id: string, body: SessionChatParams, options?: RequestOptions): APIPromise<Message> {
    return this._client.post(path`/session/${id}/message`, { body, ...options });
  }

  /**
   * Analyze the app and create an AGENTS.md file
   */
  init(id: string, body: SessionInitParams, options?: RequestOptions): APIPromise<SessionInitResponse> {
    return this._client.post(path`/session/${id}/init`, { body, ...options });
  }

  /**
   * List messages for a session
   */
  messages(id: string, options?: RequestOptions): APIPromise<SessionMessagesResponse> {
    return this._client.get(path`/session/${id}/message`, options);
  }

  /**
   * Share a session
   */
  share(id: string, options?: RequestOptions): APIPromise<Session> {
    return this._client.post(path`/session/${id}/share`, options);
  }

  /**
   * Summarize the session
   */
  summarize(
    id: string,
    body: SessionSummarizeParams,
    options?: RequestOptions,
  ): APIPromise<SessionSummarizeResponse> {
    return this._client.post(path`/session/${id}/summarize`, { body, ...options });
  }

  /**
   * Unshare the session
   */
  unshare(id: string, options?: RequestOptions): APIPromise<Session> {
    return this._client.delete(path`/session/${id}/share`, options);
  }
}

export interface FilePart {
  mediaType: string;

  type: 'file';

  url: string;

  filename?: string;
}

export interface Message {
  id: string;

  metadata: Message.Metadata;

  parts: Array<MessagePart>;

  role: 'user' | 'assistant';
}

export namespace Message {
  export interface Metadata {
    sessionID: string;

    time: Metadata.Time;

    tool: { [key: string]: Metadata.Tool };

    assistant?: Metadata.Assistant;

    error?: Shared.ProviderAuthError | Shared.UnknownError | Metadata.MessageOutputLengthError;
  }

  export namespace Metadata {
    export interface Time {
      created: number;

      completed?: number;
    }

    export interface Tool {
      time: Tool.Time;

      title: string;

      [k: string]: unknown;
    }

    export namespace Tool {
      export interface Time {
        end: number;

        start: number;
      }
    }

    export interface Assistant {
      cost: number;

      modelID: string;

      path: Assistant.Path;

      providerID: string;

      system: Array<string>;

      tokens: Assistant.Tokens;

      summary?: boolean;
    }

    export namespace Assistant {
      export interface Path {
        cwd: string;

        root: string;
      }

      export interface Tokens {
        cache: Tokens.Cache;

        input: number;

        output: number;

        reasoning: number;
      }

      export namespace Tokens {
        export interface Cache {
          read: number;

          write: number;
        }
      }
    }

    export interface MessageOutputLengthError {
      data: unknown;

      name: 'MessageOutputLengthError';
    }
  }
}

export type MessagePart =
  | TextPart
  | ReasoningPart
  | ToolInvocationPart
  | SourceURLPart
  | FilePart
  | StepStartPart;

export interface ReasoningPart {
  text: string;

  type: 'reasoning';

  providerMetadata?: { [key: string]: unknown };
}

export interface Session {
  id: string;

  time: Session.Time;

  title: string;

  version: string;

  parentID?: string;

  share?: Session.Share;
}

export namespace Session {
  export interface Time {
    created: number;

    updated: number;
  }

  export interface Share {
    url: string;
  }
}

export interface SourceURLPart {
  sourceId: string;

  type: 'source-url';

  url: string;

  providerMetadata?: { [key: string]: unknown };

  title?: string;
}

export interface StepStartPart {
  type: 'step-start';
}

export interface TextPart {
  text: string;

  type: 'text';
}

export interface ToolCall {
  state: 'call';

  toolCallId: string;

  toolName: string;

  args?: unknown;

  step?: number;
}

export interface ToolInvocationPart {
  toolInvocation: ToolCall | ToolPartialCall | ToolResult;

  type: 'tool-invocation';
}

export interface ToolPartialCall {
  state: 'partial-call';

  toolCallId: string;

  toolName: string;

  args?: unknown;

  step?: number;
}

export interface ToolResult {
  result: string;

  state: 'result';

  toolCallId: string;

  toolName: string;

  args?: unknown;

  step?: number;
}

export type SessionListResponse = Array<Session>;

export type SessionDeleteResponse = boolean;

export type SessionAbortResponse = boolean;

export type SessionInitResponse = boolean;

export type SessionMessagesResponse = Array<Message>;

export type SessionSummarizeResponse = boolean;

export interface SessionChatParams {
  modelID: string;

  parts: Array<MessagePart>;

  providerID: string;

  /**
   * Session ID
   */
  sessionID: string;
}

export interface SessionInitParams {
  modelID: string;

  providerID: string;
}

export interface SessionSummarizeParams {
  modelID: string;

  providerID: string;
}

export declare namespace SessionResource {
  export {
    type FilePart as FilePart,
    type Message as Message,
    type MessagePart as MessagePart,
    type ReasoningPart as ReasoningPart,
    type Session as Session,
    type SourceURLPart as SourceURLPart,
    type StepStartPart as StepStartPart,
    type TextPart as TextPart,
    type ToolCall as ToolCall,
    type ToolInvocationPart as ToolInvocationPart,
    type ToolPartialCall as ToolPartialCall,
    type ToolResult as ToolResult,
    type SessionListResponse as SessionListResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionAbortResponse as SessionAbortResponse,
    type SessionInitResponse as SessionInitResponse,
    type SessionMessagesResponse as SessionMessagesResponse,
    type SessionSummarizeResponse as SessionSummarizeResponse,
    type SessionChatParams as SessionChatParams,
    type SessionInitParams as SessionInitParams,
    type SessionSummarizeParams as SessionSummarizeParams,
  };
}
