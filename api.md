# Event

Types:

- <code><a href="./src/resources/event.ts">EventListResponse</a></code>

Methods:

- <code title="get /event">client.event.<a href="./src/resources/event.ts">list</a>() -> EventListResponse</code>

# AppInfo

Types:

- <code><a href="./src/resources/app-info.ts">AppInfoCreateResponse</a></code>

Methods:

- <code title="post /app_info">client.appInfo.<a href="./src/resources/app-info.ts">create</a>() -> AppInfoCreateResponse</code>

# ConfigGet

Types:

- <code><a href="./src/resources/config-get.ts">ConfigGetRetrieveResponse</a></code>

Methods:

- <code title="post /config_get">client.configGet.<a href="./src/resources/config-get.ts">retrieve</a>() -> ConfigGetRetrieveResponse</code>

# AppInitialize

Types:

- <code><a href="./src/resources/app-initialize.ts">AppInitializeInitializeResponse</a></code>

Methods:

- <code title="post /app_initialize">client.appInitialize.<a href="./src/resources/app-initialize.ts">initialize</a>() -> AppInitializeInitializeResponse</code>

# SessionInitialize

Types:

- <code><a href="./src/resources/session-initialize.ts">SessionInitializeCreateResponse</a></code>

Methods:

- <code title="post /session_initialize">client.sessionInitialize.<a href="./src/resources/session-initialize.ts">create</a>({ ...params }) -> SessionInitializeCreateResponse</code>

# PathGet

Types:

- <code><a href="./src/resources/path-get.ts">PathGetCreateResponse</a></code>

Methods:

- <code title="post /path_get">client.pathGet.<a href="./src/resources/path-get.ts">create</a>() -> PathGetCreateResponse</code>

# SessionCreate

Types:

- <code><a href="./src/resources/session-create.ts">SessionInfo</a></code>

Methods:

- <code title="post /session_create">client.sessionCreate.<a href="./src/resources/session-create.ts">create</a>() -> SessionInfo</code>

# SessionShare

Methods:

- <code title="post /session_share">client.sessionShare.<a href="./src/resources/session-share.ts">create</a>({ ...params }) -> SessionInfo</code>

# SessionUnshare

Methods:

- <code title="post /session_unshare">client.sessionUnshare.<a href="./src/resources/session-unshare.ts">unshare</a>({ ...params }) -> SessionInfo</code>

# SessionMessages

Types:

- <code><a href="./src/resources/session-messages.ts">SessionMessageCreateResponse</a></code>

Methods:

- <code title="post /session_messages">client.sessionMessages.<a href="./src/resources/session-messages.ts">create</a>({ ...params }) -> SessionMessageCreateResponse</code>

# SessionList

Types:

- <code><a href="./src/resources/session-list.ts">SessionListCreateResponse</a></code>

Methods:

- <code title="post /session_list">client.sessionList.<a href="./src/resources/session-list.ts">create</a>() -> SessionListCreateResponse</code>

# SessionAbort

Types:

- <code><a href="./src/resources/session-abort.ts">SessionAbortAbortResponse</a></code>

Methods:

- <code title="post /session_abort">client.sessionAbort.<a href="./src/resources/session-abort.ts">abort</a>({ ...params }) -> SessionAbortAbortResponse</code>

# SessionSummarize

Types:

- <code><a href="./src/resources/session-summarize.ts">SessionSummarizeSummarizeResponse</a></code>

Methods:

- <code title="post /session_summarize">client.sessionSummarize.<a href="./src/resources/session-summarize.ts">summarize</a>({ ...params }) -> SessionSummarizeSummarizeResponse</code>

# SessionChat

Types:

- <code><a href="./src/resources/session-chat.ts">MessageInfo</a></code>
- <code><a href="./src/resources/session-chat.ts">MessagePart</a></code>
- <code><a href="./src/resources/session-chat.ts">ProviderAuthError</a></code>
- <code><a href="./src/resources/session-chat.ts">UnknownError</a></code>

Methods:

- <code title="post /session_chat">client.sessionChat.<a href="./src/resources/session-chat.ts">create</a>({ ...params }) -> MessageInfo</code>

# ProviderList

Types:

- <code><a href="./src/resources/provider-list.ts">ProviderListCreateResponse</a></code>

Methods:

- <code title="post /provider_list">client.providerList.<a href="./src/resources/provider-list.ts">create</a>() -> ProviderListCreateResponse</code>

# FileSearch

Types:

- <code><a href="./src/resources/file-search.ts">FileSearchSearchResponse</a></code>

Methods:

- <code title="post /file_search">client.fileSearch.<a href="./src/resources/file-search.ts">search</a>({ ...params }) -> FileSearchSearchResponse</code>

# InstallationInfo

Types:

- <code><a href="./src/resources/installation-info.ts">InstallationInfoCreateResponse</a></code>

Methods:

- <code title="post /installation_info">client.installationInfo.<a href="./src/resources/installation-info.ts">create</a>() -> InstallationInfoCreateResponse</code>
