// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Opencode from '@opencode-ai/sdk';

const client = new Opencode({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource session', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.session.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.create(
        { directory: 'directory', parentID: 'parentID', title: 'title' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.session.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.update(
        'id',
        { directory: 'directory', title: 'title' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.session.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.list({ directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.session.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.delete('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('abort', async () => {
    const responsePromise = client.session.abort('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('abort: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.abort('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('children', async () => {
    const responsePromise = client.session.children('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('children: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.children('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('command: only required params', async () => {
    const responsePromise = client.session.command('id', { arguments: 'arguments', command: 'command' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('command: required and optional params', async () => {
    const response = await client.session.command('id', {
      arguments: 'arguments',
      command: 'command',
      directory: 'directory',
      agent: 'agent',
      messageID: 'msg',
      model: 'model',
    });
  });

  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.session.get('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.get('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('init: only required params', async () => {
    const responsePromise = client.session.init('id', {
      messageID: 'messageID',
      modelID: 'modelID',
      providerID: 'providerID',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('init: required and optional params', async () => {
    const response = await client.session.init('id', {
      messageID: 'messageID',
      modelID: 'modelID',
      providerID: 'providerID',
      directory: 'directory',
    });
  });

  // Prism tests are disabled
  test.skip('message: only required params', async () => {
    const responsePromise = client.session.message('messageID', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('message: required and optional params', async () => {
    const response = await client.session.message('messageID', { id: 'id', directory: 'directory' });
  });

  // Prism tests are disabled
  test.skip('messages', async () => {
    const responsePromise = client.session.messages('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('messages: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.messages('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('prompt: only required params', async () => {
    const responsePromise = client.session.prompt('id', { parts: [{ text: 'text', type: 'text' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('prompt: required and optional params', async () => {
    const response = await client.session.prompt('id', {
      parts: [{ text: 'text', type: 'text', id: 'id', synthetic: true, time: { start: 0, end: 0 } }],
      directory: 'directory',
      agent: 'agent',
      messageID: 'msg',
      model: { modelID: 'modelID', providerID: 'providerID' },
      system: 'system',
      tools: { foo: true },
    });
  });

  // Prism tests are disabled
  test.skip('revert: only required params', async () => {
    const responsePromise = client.session.revert('id', { messageID: 'msg' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('revert: required and optional params', async () => {
    const response = await client.session.revert('id', {
      messageID: 'msg',
      directory: 'directory',
      partID: 'prt',
    });
  });

  // Prism tests are disabled
  test.skip('share', async () => {
    const responsePromise = client.session.share('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('share: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.share('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('shell: only required params', async () => {
    const responsePromise = client.session.shell('id', { agent: 'agent', command: 'command' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('shell: required and optional params', async () => {
    const response = await client.session.shell('id', {
      agent: 'agent',
      command: 'command',
      directory: 'directory',
    });
  });

  // Prism tests are disabled
  test.skip('summarize: only required params', async () => {
    const responsePromise = client.session.summarize('id', { modelID: 'modelID', providerID: 'providerID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('summarize: required and optional params', async () => {
    const response = await client.session.summarize('id', {
      modelID: 'modelID',
      providerID: 'providerID',
      directory: 'directory',
    });
  });

  // Prism tests are disabled
  test.skip('unrevert', async () => {
    const responsePromise = client.session.unrevert('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unrevert: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.unrevert('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('unshare', async () => {
    const responsePromise = client.session.unshare('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('unshare: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.session.unshare('id', { directory: 'directory' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Opencode.NotFoundError);
  });
});
