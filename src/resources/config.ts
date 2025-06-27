// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ConfigResource extends APIResource {
  /**
   * Get config info
   */
  get(options?: RequestOptions): APIPromise<Config> {
    return this._client.get('/config', options);
  }

  /**
   * List all providers
   */
  providers(options?: RequestOptions): APIPromise<ConfigProvidersResponse> {
    return this._client.get('/config/providers', options);
  }
}

export interface Config {
  /**
   * JSON schema reference for configuration validation
   */
  $schema?: string;

  /**
   * Share newly created sessions automatically
   */
  autoshare?: boolean;

  /**
   * Automatically update to the latest version
   */
  autoupdate?: boolean;

  /**
   * Disable providers that are loaded automatically
   */
  disabled_providers?: Array<string>;

  experimental?: Config.Experimental;

  /**
   * Custom keybind configurations
   */
  keybinds?: Keybinds;

  /**
   * MCP (Model Context Protocol) server configurations
   */
  mcp?: { [key: string]: McpLocal | McpRemote };

  /**
   * Model to use in the format of provider/model, eg anthropic/claude-2
   */
  model?: string;

  /**
   * Custom provider configurations and model overrides
   */
  provider?: { [key: string]: Config.Provider };

  /**
   * Theme name to use for the interface
   */
  theme?: string;
}

export namespace Config {
  export interface Experimental {
    hook?: Experimental.Hook;
  }

  export namespace Experimental {
    export interface Hook {
      file_edited?: { [key: string]: Array<Hook.FileEdited> };

      session_completed?: Array<Hook.SessionCompleted>;
    }

    export namespace Hook {
      export interface FileEdited {
        command: Array<string>;

        environment?: { [key: string]: string };
      }

      export interface SessionCompleted {
        command: Array<string>;

        environment?: { [key: string]: string };
      }
    }
  }

  export interface Provider {
    models: { [key: string]: Provider.Models };

    id?: string;

    api?: string;

    env?: Array<string>;

    name?: string;

    npm?: string;

    options?: { [key: string]: unknown };
  }

  export namespace Provider {
    export interface Models {
      id?: string;

      attachment?: boolean;

      cost?: Models.Cost;

      limit?: Models.Limit;

      name?: string;

      options?: { [key: string]: unknown };

      reasoning?: boolean;

      temperature?: boolean;

      tool_call?: boolean;
    }

    export namespace Models {
      export interface Cost {
        input: number;

        output: number;

        cache_read?: number;

        cache_write?: number;
      }

      export interface Limit {
        context: number;

        output: number;
      }
    }
  }
}

export interface Keybinds {
  /**
   * Exit the application
   */
  app_exit?: string;

  /**
   * Open external editor
   */
  editor_open?: string;

  /**
   * Show help dialog
   */
  help?: string;

  /**
   * Navigate to next history item
   */
  history_next?: string;

  /**
   * Navigate to previous history item
   */
  history_previous?: string;

  /**
   * Clear input field
   */
  input_clear?: string;

  /**
   * Insert newline in input
   */
  input_newline?: string;

  /**
   * Paste from clipboard
   */
  input_paste?: string;

  /**
   * Submit input
   */
  input_submit?: string;

  /**
   * Leader key for keybind combinations
   */
  leader?: string;

  /**
   * Navigate to first message
   */
  messages_first?: string;

  /**
   * Scroll messages down by half page
   */
  messages_half_page_down?: string;

  /**
   * Scroll messages up by half page
   */
  messages_half_page_up?: string;

  /**
   * Navigate to last message
   */
  messages_last?: string;

  /**
   * Navigate to next message
   */
  messages_next?: string;

  /**
   * Scroll messages down by one page
   */
  messages_page_down?: string;

  /**
   * Scroll messages up by one page
   */
  messages_page_up?: string;

  /**
   * Navigate to previous message
   */
  messages_previous?: string;

  /**
   * List available models
   */
  model_list?: string;

  /**
   * Initialize project configuration
   */
  project_init?: string;

  /**
   * Toggle compact mode for session
   */
  session_compact?: string;

  /**
   * Interrupt current session
   */
  session_interrupt?: string;

  /**
   * List all sessions
   */
  session_list?: string;

  /**
   * Create a new session
   */
  session_new?: string;

  /**
   * Share current session
   */
  session_share?: string;

  /**
   * List available themes
   */
  theme_list?: string;

  /**
   * Show tool details
   */
  tool_details?: string;
}

export interface McpLocal {
  /**
   * Command and arguments to run the MCP server
   */
  command: Array<string>;

  /**
   * Type of MCP server connection
   */
  type: 'local';

  /**
   * Environment variables to set when running the MCP server
   */
  environment?: { [key: string]: string };
}

export interface McpRemote {
  /**
   * Type of MCP server connection
   */
  type: 'remote';

  /**
   * URL of the remote MCP server
   */
  url: string;
}

export interface Model {
  id: string;

  attachment: boolean;

  cost: Model.Cost;

  limit: Model.Limit;

  name: string;

  options: { [key: string]: unknown };

  reasoning: boolean;

  temperature: boolean;

  tool_call: boolean;
}

export namespace Model {
  export interface Cost {
    input: number;

    output: number;

    cache_read?: number;

    cache_write?: number;
  }

  export interface Limit {
    context: number;

    output: number;
  }
}

export interface Provider {
  id: string;

  env: Array<string>;

  models: { [key: string]: Model };

  name: string;

  api?: string;

  npm?: string;
}

export interface ConfigProvidersResponse {
  default: { [key: string]: string };

  providers: Array<Provider>;
}

export declare namespace ConfigResource {
  export {
    type Config as Config,
    type Keybinds as Keybinds,
    type McpLocal as McpLocal,
    type McpRemote as McpRemote,
    type Model as Model,
    type Provider as Provider,
    type ConfigProvidersResponse as ConfigProvidersResponse,
  };
}
