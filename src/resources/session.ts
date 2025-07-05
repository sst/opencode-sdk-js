// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionAPI from './session';
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
  chat(id: string, body: SessionChatParams, options?: RequestOptions): APIPromise<AssistantMessage> {
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

export interface AssistantMessage {
  id: string;

  cost: number;

  modelID: string;

  parts: Array<AssistantMessagePart>;

  path: AssistantMessage.Path;

  providerID: string;

  role: 'assistant';

  sessionID: string;

  system: Array<string>;

  time: AssistantMessage.Time;

  tokens: AssistantMessage.Tokens;

  error?: Shared.ProviderAuthError | Shared.UnknownError | AssistantMessage.MessageOutputLengthError;

  summary?: boolean;
}

export namespace AssistantMessage {
  export interface Path {
    cwd: string;

    root: string;
  }

  export interface Time {
    created: number;

    completed?: number;
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

  export interface MessageOutputLengthError {
    data: unknown;

    name: 'MessageOutputLengthError';
  }
}

export type AssistantMessagePart = TextPart | ToolPart | StepStartPart;

export interface FilePart {
  mime: string;

  type: 'file';

  url: string;

  filename?: string;
}

export type Message = Message.UserMessage | AssistantMessage;

export namespace Message {
  export interface UserMessage {
    id: string;

    parts: Array<SessionAPI.UserMessagePart>;

    role: 'user';

    sessionID: string;

    time: UserMessage.Time;
  }

  export namespace UserMessage {
    export interface Time {
      created: number;
    }
  }
}

export interface Session {
  id: string;

  time: Session.Time;

  title: string;

  version: string;

  parentID?: string;

  revert?: Session.Revert;

  share?: Session.Share;
}

export namespace Session {
  export interface Time {
    created: number;

    updated: number;
  }

  export interface Revert {
    messageID: string;

    part: number;

    snapshot?: string;
  }

  export interface Share {
    url: string;
  }
}

export interface StepStartPart {
  type: 'step-start';
}

export interface TextPart {
  text: string;

  type: 'text';
}

export interface ToolPart {
  id: string;

  state: ToolStatePending | ToolStateRunning | ToolStateCompleted | ToolStateError;

  tool: string;

  type: 'tool';
}

export interface ToolStateCompleted {
  metadata: { [key: string]: unknown };

  output: string;

  status: 'completed';

  time: ToolStateCompleted.Time;

  title: string;

  input?: unknown;
}

export namespace ToolStateCompleted {
  export interface Time {
    end: number;

    start: number;
  }
}

export interface ToolStateError {
  error: string;

  status: 'error';

  time: ToolStateError.Time;

  input?: unknown;
}

export namespace ToolStateError {
  export interface Time {
    end: number;

    start: number;
  }
}

export interface ToolStatePending {
  status: 'pending';
}

export interface ToolStateRunning {
  status: 'running';

  time: ToolStateRunning.Time;

  input?: unknown;

  metadata?: { [key: string]: unknown };

  title?: string;
}

export namespace ToolStateRunning {
  export interface Time {
    start: number;
  }
}

export type UserMessagePart = TextPart | FilePart;

export type SessionListResponse = Array<Session>;

export type SessionDeleteResponse = boolean;

export type SessionAbortResponse = boolean;

export type SessionInitResponse = boolean;

export type SessionMessagesResponse = Array<Message>;

export type SessionSummarizeResponse = boolean;

export interface SessionChatParams {
  modelID: string;

  parts: Array<UserMessagePart>;

  providerID: string;
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
    type AssistantMessage as AssistantMessage,
    type AssistantMessagePart as AssistantMessagePart,
    type FilePart as FilePart,
    type Message as Message,
    type Session as Session,
    type StepStartPart as StepStartPart,
    type TextPart as TextPart,
    type ToolPart as ToolPart,
    type ToolStateCompleted as ToolStateCompleted,
    type ToolStateError as ToolStateError,
    type ToolStatePending as ToolStatePending,
    type ToolStateRunning as ToolStateRunning,
    type UserMessagePart as UserMessagePart,
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
