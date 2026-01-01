// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ConfigResource extends APIResource {
  /**
   * Get config info
   */
  get(query: ConfigGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<Config> {
    return this._client.get('/config', { query, ...options });
  }
}

export interface Config {
  /**
   * JSON schema reference for configuration validation
   */
  $schema?: string;

  /**
   * Agent configuration, see https://opencode.ai/docs/agent
   */
  agent?: Config.Agent;

  /**
   * @deprecated Use 'share' field instead. Share newly created sessions
   * automatically
   */
  autoshare?: boolean;

  /**
   * Automatically update to the latest version
   */
  autoupdate?: boolean;

  /**
   * Command configuration, see https://opencode.ai/docs/commands
   */
  command?: { [key: string]: Config.Command };

  /**
   * Disable providers that are loaded automatically
   */
  disabled_providers?: Array<string>;

  experimental?: Config.Experimental;

  formatter?: { [key: string]: Config.Formatter };

  /**
   * Additional instruction files or patterns to include
   */
  instructions?: Array<string>;

  /**
   * Custom keybind configurations
   */
  keybinds?: KeybindsConfig;

  /**
   * @deprecated Always uses stretch layout.
   */
  layout?: 'auto' | 'stretch';

  lsp?: { [key: string]: Config.Disabled | Config.UnionMember1 };

  /**
   * MCP (Model Context Protocol) server configurations
   */
  mcp?: { [key: string]: McpLocalConfig | McpRemoteConfig };

  /**
   * @deprecated Use `agent` field instead.
   */
  mode?: Config.Mode;

  /**
   * Model to use in the format of provider/model, eg anthropic/claude-2
   */
  model?: string;

  permission?: Config.Permission;

  plugin?: Array<string>;

  /**
   * Custom provider configurations and model overrides
   */
  provider?: { [key: string]: Config.Provider };

  /**
   * Control sharing behavior:'manual' allows manual sharing via commands, 'auto'
   * enables automatic sharing, 'disabled' disables all sharing
   */
  share?: 'manual' | 'auto' | 'disabled';

  /**
   * Small model to use for tasks like title generation in the format of
   * provider/model
   */
  small_model?: string;

  snapshot?: boolean;

  /**
   * Theme name to use for the interface
   */
  theme?: string;

  tools?: { [key: string]: boolean };

  /**
   * TUI specific settings
   */
  tui?: Config.Tui;

  /**
   * Custom username to display in conversations instead of system username
   */
  username?: string;
}

export namespace Config {
  /**
   * Agent configuration, see https://opencode.ai/docs/agent
   */
  export interface Agent {
    build?: Agent.Build;

    general?: Agent.General;

    plan?: Agent.Plan;

    [k: string]: Agent.AgentConfig | undefined;
  }

  export namespace Agent {
    export interface Build {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: Build.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace Build {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }

    export interface General {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: General.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace General {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }

    export interface Plan {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: Plan.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace Plan {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }

    export interface AgentConfig {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: AgentConfig.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace AgentConfig {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }
  }

  export interface AgentConfig {
    /**
     * Description of when to use the agent
     */
    description?: string;

    disable?: boolean;

    mode?: 'subagent' | 'primary' | 'all';

    model?: string;

    permission?: AgentConfig.Permission;

    prompt?: string;

    temperature?: number;

    tools?: { [key: string]: boolean };

    top_p?: number;

    [k: string]: unknown;
  }

  export namespace AgentConfig {
    export interface Permission {
      bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

      edit?: 'ask' | 'allow' | 'deny';

      webfetch?: 'ask' | 'allow' | 'deny';
    }
  }

  export interface AgentConfig {
    /**
     * Description of when to use the agent
     */
    description?: string;

    disable?: boolean;

    mode?: 'subagent' | 'primary' | 'all';

    model?: string;

    permission?: AgentConfig.Permission;

    prompt?: string;

    temperature?: number;

    tools?: { [key: string]: boolean };

    top_p?: number;

    [k: string]: unknown;
  }

  export namespace AgentConfig {
    export interface Permission {
      bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

      edit?: 'ask' | 'allow' | 'deny';

      webfetch?: 'ask' | 'allow' | 'deny';
    }
  }

  export interface Command {
    template: string;

    agent?: string;

    description?: string;

    model?: string;
  }

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

  export interface Formatter {
    command?: Array<string>;

    disabled?: boolean;

    environment?: { [key: string]: string };

    extensions?: Array<string>;
  }

  export interface Disabled {
    disabled: true;
  }

  export interface UnionMember1 {
    command: Array<string>;

    disabled?: boolean;

    env?: { [key: string]: string };

    extensions?: Array<string>;

    initialization?: { [key: string]: unknown };
  }

  /**
   * @deprecated Use `agent` field instead.
   */
  export interface Mode {
    build?: Mode.Build;

    plan?: Mode.Plan;

    [k: string]: Mode.AgentConfig | undefined;
  }

  export namespace Mode {
    export interface Build {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: Build.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace Build {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }

    export interface Plan {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: Plan.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace Plan {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }

    export interface AgentConfig {
      /**
       * Description of when to use the agent
       */
      description?: string;

      disable?: boolean;

      mode?: 'subagent' | 'primary' | 'all';

      model?: string;

      permission?: AgentConfig.Permission;

      prompt?: string;

      temperature?: number;

      tools?: { [key: string]: boolean };

      top_p?: number;

      [k: string]: unknown;
    }

    export namespace AgentConfig {
      export interface Permission {
        bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

        edit?: 'ask' | 'allow' | 'deny';

        webfetch?: 'ask' | 'allow' | 'deny';
      }
    }
  }

  export interface AgentConfig {
    /**
     * Description of when to use the agent
     */
    description?: string;

    disable?: boolean;

    mode?: 'subagent' | 'primary' | 'all';

    model?: string;

    permission?: AgentConfig.Permission;

    prompt?: string;

    temperature?: number;

    tools?: { [key: string]: boolean };

    top_p?: number;

    [k: string]: unknown;
  }

  export namespace AgentConfig {
    export interface Permission {
      bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

      edit?: 'ask' | 'allow' | 'deny';

      webfetch?: 'ask' | 'allow' | 'deny';
    }
  }

  export interface AgentConfig {
    /**
     * Description of when to use the agent
     */
    description?: string;

    disable?: boolean;

    mode?: 'subagent' | 'primary' | 'all';

    model?: string;

    permission?: AgentConfig.Permission;

    prompt?: string;

    temperature?: number;

    tools?: { [key: string]: boolean };

    top_p?: number;

    [k: string]: unknown;
  }

  export namespace AgentConfig {
    export interface Permission {
      bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

      edit?: 'ask' | 'allow' | 'deny';

      webfetch?: 'ask' | 'allow' | 'deny';
    }
  }

  export interface Permission {
    bash?: 'ask' | 'allow' | 'deny' | { [key: string]: 'ask' | 'allow' | 'deny' };

    edit?: 'ask' | 'allow' | 'deny';

    webfetch?: 'ask' | 'allow' | 'deny';
  }

  export interface Provider {
    id?: string;

    api?: string;

    env?: Array<string>;

    models?: { [key: string]: Provider.Models };

    name?: string;

    npm?: string;

    options?: Provider.Options;
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

      release_date?: string;

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

    export interface Options {
      apiKey?: string;

      baseURL?: string;

      /**
       * Timeout in milliseconds for requests to this provider. Default is 300000 (5
       * minutes). Set to false to disable timeout.
       */
      timeout?: number | boolean;

      [k: string]: unknown;
    }
  }

  /**
   * TUI specific settings
   */
  export interface Tui {
    /**
     * TUI scroll speed
     */
    scroll_speed: number;
  }
}

export interface KeybindsConfig {
  /**
   * Next agent
   */
  agent_cycle: string;

  /**
   * Previous agent
   */
  agent_cycle_reverse: string;

  /**
   * List agents
   */
  agent_list: string;

  /**
   * Exit the application
   */
  app_exit: string;

  /**
   * Show help dialog
   */
  app_help: string;

  /**
   * Open external editor
   */
  editor_open: string;

  /**
   * @deprecated Close file
   */
  file_close: string;

  /**
   * @deprecated Split/unified diff
   */
  file_diff_toggle: string;

  /**
   * @deprecated Currently not available. List files
   */
  file_list: string;

  /**
   * @deprecated Search file
   */
  file_search: string;

  /**
   * Clear input field
   */
  input_clear: string;

  /**
   * Insert newline in input
   */
  input_newline: string;

  /**
   * Paste from clipboard
   */
  input_paste: string;

  /**
   * Submit input
   */
  input_submit: string;

  /**
   * Leader key for keybind combinations
   */
  leader: string;

  /**
   * Copy message
   */
  messages_copy: string;

  /**
   * Navigate to first message
   */
  messages_first: string;

  /**
   * Scroll messages down by half page
   */
  messages_half_page_down: string;

  /**
   * Scroll messages up by half page
   */
  messages_half_page_up: string;

  /**
   * Navigate to last message
   */
  messages_last: string;

  /**
   * @deprecated Toggle layout
   */
  messages_layout_toggle: string;

  /**
   * @deprecated Navigate to next message
   */
  messages_next: string;

  /**
   * Scroll messages down by one page
   */
  messages_page_down: string;

  /**
   * Scroll messages up by one page
   */
  messages_page_up: string;

  /**
   * @deprecated Navigate to previous message
   */
  messages_previous: string;

  /**
   * Redo message
   */
  messages_redo: string;

  /**
   * @deprecated use messages_undo. Revert message
   */
  messages_revert: string;

  /**
   * Undo message
   */
  messages_undo: string;

  /**
   * Next recent model
   */
  model_cycle_recent: string;

  /**
   * Previous recent model
   */
  model_cycle_recent_reverse: string;

  /**
   * List available models
   */
  model_list: string;

  /**
   * Create/update AGENTS.md
   */
  project_init: string;

  /**
   * Cycle to next child session
   */
  session_child_cycle: string;

  /**
   * Cycle to previous child session
   */
  session_child_cycle_reverse: string;

  /**
   * Compact the session
   */
  session_compact: string;

  /**
   * Export session to editor
   */
  session_export: string;

  /**
   * Interrupt current session
   */
  session_interrupt: string;

  /**
   * List all sessions
   */
  session_list: string;

  /**
   * Create a new session
   */
  session_new: string;

  /**
   * Share current session
   */
  session_share: string;

  /**
   * Show session timeline
   */
  session_timeline: string;

  /**
   * Unshare current session
   */
  session_unshare: string;

  /**
   * @deprecated use agent_cycle. Next agent
   */
  switch_agent: string;

  /**
   * @deprecated use agent_cycle_reverse. Previous agent
   */
  switch_agent_reverse: string;

  /**
   * @deprecated use agent_cycle. Next mode
   */
  switch_mode: string;

  /**
   * @deprecated use agent_cycle_reverse. Previous mode
   */
  switch_mode_reverse: string;

  /**
   * List available themes
   */
  theme_list: string;

  /**
   * Toggle thinking blocks
   */
  thinking_blocks: string;

  /**
   * Toggle tool details
   */
  tool_details: string;
}

export interface McpLocalConfig {
  /**
   * Command and arguments to run the MCP server
   */
  command: Array<string>;

  /**
   * Type of MCP server connection
   */
  type: 'local';

  /**
   * Enable or disable the MCP server on startup
   */
  enabled?: boolean;

  /**
   * Environment variables to set when running the MCP server
   */
  environment?: { [key: string]: string };
}

export interface McpRemoteConfig {
  /**
   * Type of MCP server connection
   */
  type: 'remote';

  /**
   * URL of the remote MCP server
   */
  url: string;

  /**
   * Enable or disable the MCP server on startup
   */
  enabled?: boolean;

  /**
   * Headers to send with the request
   */
  headers?: { [key: string]: string };
}

export interface ConfigGetParams {
  directory?: string;
}

export declare namespace ConfigResource {
  export {
    type Config as Config,
    type KeybindsConfig as KeybindsConfig,
    type McpLocalConfig as McpLocalConfig,
    type McpRemoteConfig as McpRemoteConfig,
    type ConfigGetParams as ConfigGetParams,
  };
}
