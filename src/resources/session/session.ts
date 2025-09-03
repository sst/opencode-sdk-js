// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SessionAPI from './session';
import * as Shared from '../shared';
import * as PermissionsAPI from './permissions';
import { Permission, PermissionRespondParams, PermissionRespondResponse, Permissions } from './permissions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SessionResource extends APIResource {
  permissions: PermissionsAPI.Permissions = new PermissionsAPI.Permissions(this._client);

  /**
   * Create a new session
   */
  create(params: SessionCreateParams | null | undefined = {}, options?: RequestOptions): APIPromise<Session> {
    const { directory, ...body } = params ?? {};
    return this._client.post('/session', { query: { directory }, body, ...options });
  }

  /**
   * Update session properties
   */
  update(
    id: string,
    params: SessionUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Session> {
    const { directory, ...body } = params ?? {};
    return this._client.patch(path`/session/${id}`, { query: { directory }, body, ...options });
  }

  /**
   * List all sessions
   */
  list(
    query: SessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionListResponse> {
    return this._client.get('/session', { query, ...options });
  }

  /**
   * Delete a session and all its data
   */
  delete(
    id: string,
    params: SessionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionDeleteResponse> {
    const { directory } = params ?? {};
    return this._client.delete(path`/session/${id}`, { query: { directory }, ...options });
  }

  /**
   * Abort a session
   */
  abort(
    id: string,
    params: SessionAbortParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionAbortResponse> {
    const { directory } = params ?? {};
    return this._client.post(path`/session/${id}/abort`, { query: { directory }, ...options });
  }

  /**
   * Get a session's children
   */
  children(
    id: string,
    query: SessionChildrenParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionChildrenResponse> {
    return this._client.get(path`/session/${id}/children`, { query, ...options });
  }

  /**
   * Send a new command to a session
   */
  command(
    id: string,
    params: SessionCommandParams,
    options?: RequestOptions,
  ): APIPromise<SessionCommandResponse> {
    const { directory, ...body } = params;
    return this._client.post(path`/session/${id}/command`, { query: { directory }, body, ...options });
  }

  /**
   * Get session
   */
  get(
    id: string,
    query: SessionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Session> {
    return this._client.get(path`/session/${id}`, { query, ...options });
  }

  /**
   * Analyze the app and create an AGENTS.md file
   */
  init(id: string, params: SessionInitParams, options?: RequestOptions): APIPromise<SessionInitResponse> {
    const { directory, ...body } = params;
    return this._client.post(path`/session/${id}/init`, { query: { directory }, body, ...options });
  }

  /**
   * Get a message from a session
   */
  message(
    messageID: string,
    params: SessionMessageParams,
    options?: RequestOptions,
  ): APIPromise<SessionMessageResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/session/${id}/message/${messageID}`, { query, ...options });
  }

  /**
   * List messages for a session
   */
  messages(
    id: string,
    query: SessionMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionMessagesResponse> {
    return this._client.get(path`/session/${id}/message`, { query, ...options });
  }

  /**
   * Create and send a new message to a session
   */
  prompt(
    id: string,
    params: SessionPromptParams,
    options?: RequestOptions,
  ): APIPromise<SessionPromptResponse> {
    const { directory, ...body } = params;
    return this._client.post(path`/session/${id}/message`, { query: { directory }, body, ...options });
  }

  /**
   * Revert a message
   */
  revert(id: string, params: SessionRevertParams, options?: RequestOptions): APIPromise<Session> {
    const { directory, ...body } = params;
    return this._client.post(path`/session/${id}/revert`, { query: { directory }, body, ...options });
  }

  /**
   * Share a session
   */
  share(
    id: string,
    params: SessionShareParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Session> {
    const { directory } = params ?? {};
    return this._client.post(path`/session/${id}/share`, { query: { directory }, ...options });
  }

  /**
   * Run a shell command
   */
  shell(id: string, params: SessionShellParams, options?: RequestOptions): APIPromise<AssistantMessage> {
    const { directory, ...body } = params;
    return this._client.post(path`/session/${id}/shell`, { query: { directory }, body, ...options });
  }

  /**
   * Summarize the session
   */
  summarize(
    id: string,
    params: SessionSummarizeParams,
    options?: RequestOptions,
  ): APIPromise<SessionSummarizeResponse> {
    const { directory, ...body } = params;
    return this._client.post(path`/session/${id}/summarize`, { query: { directory }, body, ...options });
  }

  /**
   * Restore all reverted messages
   */
  unrevert(
    id: string,
    params: SessionUnrevertParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Session> {
    const { directory } = params ?? {};
    return this._client.post(path`/session/${id}/unrevert`, { query: { directory }, ...options });
  }

  /**
   * Unshare the session
   */
  unshare(
    id: string,
    params: SessionUnshareParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Session> {
    const { directory } = params ?? {};
    return this._client.delete(path`/session/${id}/share`, { query: { directory }, ...options });
  }
}

export interface AgentPart {
  id: string;

  messageID: string;

  name: string;

  sessionID: string;

  type: 'agent';

  source?: AgentPart.Source;
}

export namespace AgentPart {
  export interface Source {
    end: number;

    start: number;

    value: string;
  }
}

export interface AgentPartInput {
  name: string;

  type: 'agent';

  id?: string;

  source?: AgentPartInput.Source;
}

export namespace AgentPartInput {
  export interface Source {
    end: number;

    start: number;

    value: string;
  }
}

export interface AssistantMessage {
  id: string;

  cost: number;

  mode: string;

  modelID: string;

  path: AssistantMessage.Path;

  providerID: string;

  role: 'assistant';

  sessionID: string;

  system: Array<string>;

  time: AssistantMessage.Time;

  tokens: AssistantMessage.Tokens;

  error?:
    | Shared.ProviderAuthError
    | Shared.UnknownError
    | AssistantMessage.MessageOutputLengthError
    | Shared.MessageAbortedError;

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

export interface FilePart {
  id: string;

  messageID: string;

  mime: string;

  sessionID: string;

  type: 'file';

  url: string;

  filename?: string;

  source?: FilePartSource;
}

export interface FilePartInput {
  mime: string;

  type: 'file';

  url: string;

  id?: string;

  filename?: string;

  source?: FilePartSource;
}

export type FilePartSource = FileSource | SymbolSource;

export interface FilePartSourceText {
  end: number;

  start: number;

  value: string;
}

export interface FileSource {
  path: string;

  text: FilePartSourceText;

  type: 'file';
}

export type Message = UserMessage | AssistantMessage;

export type Part =
  | TextPart
  | ReasoningPart
  | FilePart
  | ToolPart
  | StepStartPart
  | StepFinishPart
  | SnapshotPart
  | Part.PatchPart
  | AgentPart;

export namespace Part {
  export interface PatchPart {
    id: string;

    files: Array<string>;

    hash: string;

    messageID: string;

    sessionID: string;

    type: 'patch';
  }
}

export interface ReasoningPart {
  id: string;

  messageID: string;

  sessionID: string;

  text: string;

  time: ReasoningPart.Time;

  type: 'reasoning';

  metadata?: { [key: string]: unknown };
}

export namespace ReasoningPart {
  export interface Time {
    start: number;

    end?: number;
  }
}

export interface Session {
  id: string;

  directory: string;

  projectID: string;

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

    diff?: string;

    partID?: string;

    snapshot?: string;
  }

  export interface Share {
    url: string;
  }
}

export interface SnapshotPart {
  id: string;

  messageID: string;

  sessionID: string;

  snapshot: string;

  type: 'snapshot';
}

export interface StepFinishPart {
  id: string;

  cost: number;

  messageID: string;

  sessionID: string;

  tokens: StepFinishPart.Tokens;

  type: 'step-finish';
}

export namespace StepFinishPart {
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

export interface StepStartPart {
  id: string;

  messageID: string;

  sessionID: string;

  type: 'step-start';
}

export interface SymbolSource {
  kind: number;

  name: string;

  path: string;

  range: SymbolSource.Range;

  text: FilePartSourceText;

  type: 'symbol';
}

export namespace SymbolSource {
  export interface Range {
    end: Range.End;

    start: Range.Start;
  }

  export namespace Range {
    export interface End {
      character: number;

      line: number;
    }

    export interface Start {
      character: number;

      line: number;
    }
  }
}

export interface TextPart {
  id: string;

  messageID: string;

  sessionID: string;

  text: string;

  type: 'text';

  synthetic?: boolean;

  time?: TextPart.Time;
}

export namespace TextPart {
  export interface Time {
    start: number;

    end?: number;
  }
}

export interface TextPartInput {
  text: string;

  type: 'text';

  id?: string;

  synthetic?: boolean;

  time?: TextPartInput.Time;
}

export namespace TextPartInput {
  export interface Time {
    start: number;

    end?: number;
  }
}

export interface ToolPart {
  id: string;

  callID: string;

  messageID: string;

  sessionID: string;

  state: ToolStatePending | ToolStateRunning | ToolStateCompleted | ToolStateError;

  tool: string;

  type: 'tool';
}

export interface ToolStateCompleted {
  input: { [key: string]: unknown };

  metadata: { [key: string]: unknown };

  output: string;

  status: 'completed';

  time: ToolStateCompleted.Time;

  title: string;
}

export namespace ToolStateCompleted {
  export interface Time {
    end: number;

    start: number;
  }
}

export interface ToolStateError {
  error: string;

  input: { [key: string]: unknown };

  status: 'error';

  time: ToolStateError.Time;

  metadata?: { [key: string]: unknown };
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

export interface UserMessage {
  id: string;

  role: 'user';

  sessionID: string;

  time: UserMessage.Time;
}

export namespace UserMessage {
  export interface Time {
    created: number;
  }
}

export type SessionListResponse = Array<Session>;

export type SessionDeleteResponse = boolean;

export type SessionAbortResponse = boolean;

export type SessionChildrenResponse = Array<Session>;

export interface SessionCommandResponse {
  info: AssistantMessage;

  parts: Array<Part>;
}

export type SessionInitResponse = boolean;

export interface SessionMessageResponse {
  info: Message;

  parts: Array<Part>;
}

export type SessionMessagesResponse = Array<SessionMessagesResponse.SessionMessagesResponseItem>;

export namespace SessionMessagesResponse {
  export interface SessionMessagesResponseItem {
    info: SessionAPI.Message;

    parts: Array<SessionAPI.Part>;
  }
}

export interface SessionPromptResponse {
  info: AssistantMessage;

  parts: Array<Part>;
}

export type SessionSummarizeResponse = boolean;

export interface SessionCreateParams {
  /**
   * Query param:
   */
  directory?: string;

  /**
   * Body param:
   */
  parentID?: string;

  /**
   * Body param:
   */
  title?: string;
}

export interface SessionUpdateParams {
  /**
   * Query param:
   */
  directory?: string;

  /**
   * Body param:
   */
  title?: string;
}

export interface SessionListParams {
  directory?: string;
}

export interface SessionDeleteParams {
  directory?: string;
}

export interface SessionAbortParams {
  directory?: string;
}

export interface SessionChildrenParams {
  directory?: string;
}

export interface SessionCommandParams {
  /**
   * Body param:
   */
  arguments: string;

  /**
   * Body param:
   */
  command: string;

  /**
   * Query param:
   */
  directory?: string;

  /**
   * Body param:
   */
  agent?: string;

  /**
   * Body param:
   */
  messageID?: string;

  /**
   * Body param:
   */
  model?: string;
}

export interface SessionGetParams {
  directory?: string;
}

export interface SessionInitParams {
  /**
   * Body param:
   */
  messageID: string;

  /**
   * Body param:
   */
  modelID: string;

  /**
   * Body param:
   */
  providerID: string;

  /**
   * Query param:
   */
  directory?: string;
}

export interface SessionMessageParams {
  /**
   * Path param: Session ID
   */
  id: string;

  /**
   * Query param:
   */
  directory?: string;
}

export interface SessionMessagesParams {
  directory?: string;
}

export interface SessionPromptParams {
  /**
   * Body param:
   */
  parts: Array<TextPartInput | FilePartInput | AgentPartInput>;

  /**
   * Query param:
   */
  directory?: string;

  /**
   * Body param:
   */
  agent?: string;

  /**
   * Body param:
   */
  messageID?: string;

  /**
   * Body param:
   */
  model?: SessionPromptParams.Model;

  /**
   * Body param:
   */
  system?: string;

  /**
   * Body param:
   */
  tools?: { [key: string]: boolean };
}

export namespace SessionPromptParams {
  export interface Model {
    modelID: string;

    providerID: string;
  }
}

export interface SessionRevertParams {
  /**
   * Body param:
   */
  messageID: string;

  /**
   * Query param:
   */
  directory?: string;

  /**
   * Body param:
   */
  partID?: string;
}

export interface SessionShareParams {
  directory?: string;
}

export interface SessionShellParams {
  /**
   * Body param:
   */
  agent: string;

  /**
   * Body param:
   */
  command: string;

  /**
   * Query param:
   */
  directory?: string;
}

export interface SessionSummarizeParams {
  /**
   * Body param:
   */
  modelID: string;

  /**
   * Body param:
   */
  providerID: string;

  /**
   * Query param:
   */
  directory?: string;
}

export interface SessionUnrevertParams {
  directory?: string;
}

export interface SessionUnshareParams {
  directory?: string;
}

SessionResource.Permissions = Permissions;

export declare namespace SessionResource {
  export {
    type AgentPart as AgentPart,
    type AgentPartInput as AgentPartInput,
    type AssistantMessage as AssistantMessage,
    type FilePart as FilePart,
    type FilePartInput as FilePartInput,
    type FilePartSource as FilePartSource,
    type FilePartSourceText as FilePartSourceText,
    type FileSource as FileSource,
    type Message as Message,
    type Part as Part,
    type ReasoningPart as ReasoningPart,
    type Session as Session,
    type SnapshotPart as SnapshotPart,
    type StepFinishPart as StepFinishPart,
    type StepStartPart as StepStartPart,
    type SymbolSource as SymbolSource,
    type TextPart as TextPart,
    type TextPartInput as TextPartInput,
    type ToolPart as ToolPart,
    type ToolStateCompleted as ToolStateCompleted,
    type ToolStateError as ToolStateError,
    type ToolStatePending as ToolStatePending,
    type ToolStateRunning as ToolStateRunning,
    type UserMessage as UserMessage,
    type SessionListResponse as SessionListResponse,
    type SessionDeleteResponse as SessionDeleteResponse,
    type SessionAbortResponse as SessionAbortResponse,
    type SessionChildrenResponse as SessionChildrenResponse,
    type SessionCommandResponse as SessionCommandResponse,
    type SessionInitResponse as SessionInitResponse,
    type SessionMessageResponse as SessionMessageResponse,
    type SessionMessagesResponse as SessionMessagesResponse,
    type SessionPromptResponse as SessionPromptResponse,
    type SessionSummarizeResponse as SessionSummarizeResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionDeleteParams as SessionDeleteParams,
    type SessionAbortParams as SessionAbortParams,
    type SessionChildrenParams as SessionChildrenParams,
    type SessionCommandParams as SessionCommandParams,
    type SessionGetParams as SessionGetParams,
    type SessionInitParams as SessionInitParams,
    type SessionMessageParams as SessionMessageParams,
    type SessionMessagesParams as SessionMessagesParams,
    type SessionPromptParams as SessionPromptParams,
    type SessionRevertParams as SessionRevertParams,
    type SessionShareParams as SessionShareParams,
    type SessionShellParams as SessionShellParams,
    type SessionSummarizeParams as SessionSummarizeParams,
    type SessionUnrevertParams as SessionUnrevertParams,
    type SessionUnshareParams as SessionUnshareParams,
  };

  export {
    Permissions as Permissions,
    type Permission as Permission,
    type PermissionRespondResponse as PermissionRespondResponse,
    type PermissionRespondParams as PermissionRespondParams,
  };
}
