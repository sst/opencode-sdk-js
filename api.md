# Shared

Types:

- <code><a href="./src/resources/shared.ts">MessageAbortedError</a></code>
- <code><a href="./src/resources/shared.ts">ProviderAuthError</a></code>
- <code><a href="./src/resources/shared.ts">UnknownError</a></code>

# Event

Types:

- <code><a href="./src/resources/event.ts">EventListResponse</a></code>

Methods:

- <code title="get /event">client.event.<a href="./src/resources/event.ts">list</a>({ ...params }) -> EventListResponse</code>

# Path

Types:

- <code><a href="./src/resources/path.ts">Path</a></code>

Methods:

- <code title="get /path">client.path.<a href="./src/resources/path.ts">get</a>({ ...params }) -> Path</code>

# App

Types:

- <code><a href="./src/resources/app.ts">Model</a></code>
- <code><a href="./src/resources/app.ts">Provider</a></code>
- <code><a href="./src/resources/app.ts">AppLogResponse</a></code>
- <code><a href="./src/resources/app.ts">AppProvidersResponse</a></code>

Methods:

- <code title="post /log">client.app.<a href="./src/resources/app.ts">log</a>({ ...params }) -> AppLogResponse</code>
- <code title="get /config/providers">client.app.<a href="./src/resources/app.ts">providers</a>({ ...params }) -> AppProvidersResponse</code>

# Agent

Types:

- <code><a href="./src/resources/agent.ts">Agent</a></code>
- <code><a href="./src/resources/agent.ts">AgentListResponse</a></code>

Methods:

- <code title="get /agent">client.agent.<a href="./src/resources/agent.ts">list</a>({ ...params }) -> AgentListResponse</code>

# Find

Types:

- <code><a href="./src/resources/find.ts">Symbol</a></code>
- <code><a href="./src/resources/find.ts">FindFilesResponse</a></code>
- <code><a href="./src/resources/find.ts">FindSymbolsResponse</a></code>
- <code><a href="./src/resources/find.ts">FindTextResponse</a></code>

Methods:

- <code title="get /find/file">client.find.<a href="./src/resources/find.ts">files</a>({ ...params }) -> FindFilesResponse</code>
- <code title="get /find/symbol">client.find.<a href="./src/resources/find.ts">symbols</a>({ ...params }) -> FindSymbolsResponse</code>
- <code title="get /find">client.find.<a href="./src/resources/find.ts">text</a>({ ...params }) -> FindTextResponse</code>

# File

Types:

- <code><a href="./src/resources/file.ts">File</a></code>
- <code><a href="./src/resources/file.ts">FileNode</a></code>
- <code><a href="./src/resources/file.ts">FileListResponse</a></code>
- <code><a href="./src/resources/file.ts">FileReadResponse</a></code>
- <code><a href="./src/resources/file.ts">FileStatusResponse</a></code>

Methods:

- <code title="get /file">client.file.<a href="./src/resources/file.ts">list</a>({ ...params }) -> FileListResponse</code>
- <code title="get /file/content">client.file.<a href="./src/resources/file.ts">read</a>({ ...params }) -> FileReadResponse</code>
- <code title="get /file/status">client.file.<a href="./src/resources/file.ts">status</a>({ ...params }) -> FileStatusResponse</code>

# Config

Types:

- <code><a href="./src/resources/config.ts">Config</a></code>
- <code><a href="./src/resources/config.ts">KeybindsConfig</a></code>
- <code><a href="./src/resources/config.ts">McpLocalConfig</a></code>
- <code><a href="./src/resources/config.ts">McpRemoteConfig</a></code>

Methods:

- <code title="get /config">client.config.<a href="./src/resources/config.ts">get</a>({ ...params }) -> Config</code>

# Command

Types:

- <code><a href="./src/resources/command.ts">Command</a></code>
- <code><a href="./src/resources/command.ts">CommandListResponse</a></code>

Methods:

- <code title="get /command">client.command.<a href="./src/resources/command.ts">list</a>({ ...params }) -> CommandListResponse</code>

# Project

Types:

- <code><a href="./src/resources/project.ts">Project</a></code>
- <code><a href="./src/resources/project.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /project">client.project.<a href="./src/resources/project.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="get /project/current">client.project.<a href="./src/resources/project.ts">current</a>({ ...params }) -> Project</code>

# Session

Types:

- <code><a href="./src/resources/session/session.ts">AgentPart</a></code>
- <code><a href="./src/resources/session/session.ts">AgentPartInput</a></code>
- <code><a href="./src/resources/session/session.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/session/session.ts">FilePart</a></code>
- <code><a href="./src/resources/session/session.ts">FilePartInput</a></code>
- <code><a href="./src/resources/session/session.ts">FilePartSource</a></code>
- <code><a href="./src/resources/session/session.ts">FilePartSourceText</a></code>
- <code><a href="./src/resources/session/session.ts">FileSource</a></code>
- <code><a href="./src/resources/session/session.ts">Message</a></code>
- <code><a href="./src/resources/session/session.ts">Part</a></code>
- <code><a href="./src/resources/session/session.ts">ReasoningPart</a></code>
- <code><a href="./src/resources/session/session.ts">Session</a></code>
- <code><a href="./src/resources/session/session.ts">SnapshotPart</a></code>
- <code><a href="./src/resources/session/session.ts">StepFinishPart</a></code>
- <code><a href="./src/resources/session/session.ts">StepStartPart</a></code>
- <code><a href="./src/resources/session/session.ts">SymbolSource</a></code>
- <code><a href="./src/resources/session/session.ts">TextPart</a></code>
- <code><a href="./src/resources/session/session.ts">TextPartInput</a></code>
- <code><a href="./src/resources/session/session.ts">ToolPart</a></code>
- <code><a href="./src/resources/session/session.ts">ToolStateCompleted</a></code>
- <code><a href="./src/resources/session/session.ts">ToolStateError</a></code>
- <code><a href="./src/resources/session/session.ts">ToolStatePending</a></code>
- <code><a href="./src/resources/session/session.ts">ToolStateRunning</a></code>
- <code><a href="./src/resources/session/session.ts">UserMessage</a></code>
- <code><a href="./src/resources/session/session.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionDeleteResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionAbortResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionChildrenResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionCommandResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionInitResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionMessageResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionMessagesResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionPromptResponse</a></code>
- <code><a href="./src/resources/session/session.ts">SessionSummarizeResponse</a></code>

Methods:

- <code title="post /session">client.session.<a href="./src/resources/session/session.ts">create</a>({ ...params }) -> Session</code>
- <code title="patch /session/{id}">client.session.<a href="./src/resources/session/session.ts">update</a>(id, { ...params }) -> Session</code>
- <code title="get /session">client.session.<a href="./src/resources/session/session.ts">list</a>({ ...params }) -> SessionListResponse</code>
- <code title="delete /session/{id}">client.session.<a href="./src/resources/session/session.ts">delete</a>(id, { ...params }) -> SessionDeleteResponse</code>
- <code title="post /session/{id}/abort">client.session.<a href="./src/resources/session/session.ts">abort</a>(id, { ...params }) -> SessionAbortResponse</code>
- <code title="get /session/{id}/children">client.session.<a href="./src/resources/session/session.ts">children</a>(id, { ...params }) -> SessionChildrenResponse</code>
- <code title="post /session/{id}/command">client.session.<a href="./src/resources/session/session.ts">command</a>(id, { ...params }) -> SessionCommandResponse</code>
- <code title="get /session/{id}">client.session.<a href="./src/resources/session/session.ts">get</a>(id, { ...params }) -> Session</code>
- <code title="post /session/{id}/init">client.session.<a href="./src/resources/session/session.ts">init</a>(id, { ...params }) -> SessionInitResponse</code>
- <code title="get /session/{id}/message/{messageID}">client.session.<a href="./src/resources/session/session.ts">message</a>(messageID, { ...params }) -> SessionMessageResponse</code>
- <code title="get /session/{id}/message">client.session.<a href="./src/resources/session/session.ts">messages</a>(id, { ...params }) -> SessionMessagesResponse</code>
- <code title="post /session/{id}/message">client.session.<a href="./src/resources/session/session.ts">prompt</a>(id, { ...params }) -> SessionPromptResponse</code>
- <code title="post /session/{id}/revert">client.session.<a href="./src/resources/session/session.ts">revert</a>(id, { ...params }) -> Session</code>
- <code title="post /session/{id}/share">client.session.<a href="./src/resources/session/session.ts">share</a>(id, { ...params }) -> Session</code>
- <code title="post /session/{id}/shell">client.session.<a href="./src/resources/session/session.ts">shell</a>(id, { ...params }) -> AssistantMessage</code>
- <code title="post /session/{id}/summarize">client.session.<a href="./src/resources/session/session.ts">summarize</a>(id, { ...params }) -> SessionSummarizeResponse</code>
- <code title="post /session/{id}/unrevert">client.session.<a href="./src/resources/session/session.ts">unrevert</a>(id, { ...params }) -> Session</code>
- <code title="delete /session/{id}/share">client.session.<a href="./src/resources/session/session.ts">unshare</a>(id, { ...params }) -> Session</code>

## Permissions

Types:

- <code><a href="./src/resources/session/permissions.ts">Permission</a></code>
- <code><a href="./src/resources/session/permissions.ts">PermissionRespondResponse</a></code>

Methods:

- <code title="post /session/{id}/permissions/{permissionID}">client.session.permissions.<a href="./src/resources/session/permissions.ts">respond</a>(permissionID, { ...params }) -> PermissionRespondResponse</code>

# Tui

Types:

- <code><a href="./src/resources/tui.ts">TuiAppendPromptResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiClearPromptResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiExecuteCommandResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiOpenHelpResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiOpenModelsResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiOpenSessionsResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiOpenThemesResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiShowToastResponse</a></code>
- <code><a href="./src/resources/tui.ts">TuiSubmitPromptResponse</a></code>

Methods:

- <code title="post /tui/append-prompt">client.tui.<a href="./src/resources/tui.ts">appendPrompt</a>({ ...params }) -> TuiAppendPromptResponse</code>
- <code title="post /tui/clear-prompt">client.tui.<a href="./src/resources/tui.ts">clearPrompt</a>({ ...params }) -> TuiClearPromptResponse</code>
- <code title="post /tui/execute-command">client.tui.<a href="./src/resources/tui.ts">executeCommand</a>({ ...params }) -> TuiExecuteCommandResponse</code>
- <code title="post /tui/open-help">client.tui.<a href="./src/resources/tui.ts">openHelp</a>({ ...params }) -> TuiOpenHelpResponse</code>
- <code title="post /tui/open-models">client.tui.<a href="./src/resources/tui.ts">openModels</a>({ ...params }) -> TuiOpenModelsResponse</code>
- <code title="post /tui/open-sessions">client.tui.<a href="./src/resources/tui.ts">openSessions</a>({ ...params }) -> TuiOpenSessionsResponse</code>
- <code title="post /tui/open-themes">client.tui.<a href="./src/resources/tui.ts">openThemes</a>({ ...params }) -> TuiOpenThemesResponse</code>
- <code title="post /tui/show-toast">client.tui.<a href="./src/resources/tui.ts">showToast</a>({ ...params }) -> TuiShowToastResponse</code>
- <code title="post /tui/submit-prompt">client.tui.<a href="./src/resources/tui.ts">submitPrompt</a>({ ...params }) -> TuiSubmitPromptResponse</code>
