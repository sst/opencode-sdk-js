// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SessionChatAPI from './session-chat';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SessionChat extends APIResource {
  /**
   * Chat with a model
   */
  create(body: SessionChatCreateParams, options?: RequestOptions): APIPromise<MessageInfo> {
    return this._client.post('/session_chat', { body, ...options });
  }
}

export interface MessageInfo {
  id: string;

  metadata: MessageInfo.Metadata;

  parts: Array<MessagePart>;

  role: 'user' | 'assistant';
}

export namespace MessageInfo {
  export interface Metadata {
    sessionID: string;

    time: Metadata.Time;

    tool: { [key: string]: Metadata.Tool };

    assistant?: Metadata.Assistant;

    error?: SessionChatAPI.ProviderAuthError | SessionChatAPI.UnknownError;
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
  }
}

export type MessagePart =
  | MessagePart.MessagePartText
  | MessagePart.MessagePartReasoning
  | MessagePart.MessagePartToolInvocation
  | MessagePart.MessagePartSourceURL
  | MessagePart.MessagePartFile
  | MessagePart.MessagePartStepStart;

export namespace MessagePart {
  export interface MessagePartText {
    text: string;

    type: 'text';
  }

  export interface MessagePartReasoning {
    text: string;

    type: 'reasoning';

    providerMetadata?: { [key: string]: unknown };
  }

  export interface MessagePartToolInvocation {
    toolInvocation:
      | MessagePartToolInvocation.MessageToolInvocationToolCall
      | MessagePartToolInvocation.MessageToolInvocationToolPartialCall
      | MessagePartToolInvocation.MessageToolInvocationToolResult;

    type: 'tool-invocation';
  }

  export namespace MessagePartToolInvocation {
    export interface MessageToolInvocationToolCall {
      state: 'call';

      toolCallId: string;

      toolName: string;

      args?: unknown;

      step?: number;
    }

    export interface MessageToolInvocationToolPartialCall {
      state: 'partial-call';

      toolCallId: string;

      toolName: string;

      args?: unknown;

      step?: number;
    }

    export interface MessageToolInvocationToolResult {
      result: string;

      state: 'result';

      toolCallId: string;

      toolName: string;

      args?: unknown;

      step?: number;
    }
  }

  export interface MessagePartSourceURL {
    sourceId: string;

    type: 'source-url';

    url: string;

    providerMetadata?: { [key: string]: unknown };

    title?: string;
  }

  export interface MessagePartFile {
    mediaType: string;

    type: 'file';

    url: string;

    filename?: string;
  }

  export interface MessagePartStepStart {
    type: 'step-start';
  }
}

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

export interface SessionChatCreateParams {
  modelID: string;

  parts: Array<MessagePart>;

  providerID: string;

  sessionID: string;
}

export declare namespace SessionChat {
  export {
    type MessageInfo as MessageInfo,
    type MessagePart as MessagePart,
    type ProviderAuthError as ProviderAuthError,
    type UnknownError as UnknownError,
    type SessionChatCreateParams as SessionChatCreateParams,
  };
}
