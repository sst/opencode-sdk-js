// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Opencode from '@opencode-ai/sdk';

const client = new Opencode({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tui', () => {
  // Prism tests are disabled
  test.skip('appendPrompt: only required params', async () => {
    const responsePromise = client.tui.appendPrompt({ text: 'text' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('appendPrompt: required and optional params', async () => {
    const response = await client.tui.appendPrompt({ text: 'text', directory: 'directory' });
  });

  // Prism tests are disabled
  test.skip('clearPrompt', async () => {
    const responsePromise = client.tui.clearPrompt();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('clearPrompt: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tui.clearPrompt({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('executeCommand: only required params', async () => {
    const responsePromise = client.tui.executeCommand({ command: 'command' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('executeCommand: required and optional params', async () => {
    const response = await client.tui.executeCommand({ command: 'command', directory: 'directory' });
  });

  // Prism tests are disabled
  test.skip('openHelp', async () => {
    const responsePromise = client.tui.openHelp();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('openHelp: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tui.openHelp({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('openModels', async () => {
    const responsePromise = client.tui.openModels();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('openModels: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tui.openModels({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('openSessions', async () => {
    const responsePromise = client.tui.openSessions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('openSessions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tui.openSessions({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('openThemes', async () => {
    const responsePromise = client.tui.openThemes();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('openThemes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tui.openThemes({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('showToast: only required params', async () => {
    const responsePromise = client.tui.showToast({ message: 'message', variant: 'info' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('showToast: required and optional params', async () => {
    const response = await client.tui.showToast({
      message: 'message',
      variant: 'info',
      directory: 'directory',
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('submitPrompt', async () => {
    const responsePromise = client.tui.submitPrompt();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submitPrompt: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tui.submitPrompt({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });
});
