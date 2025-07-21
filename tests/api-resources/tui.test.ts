// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Opencode from '@opencode-ai/sdk';

const client = new Opencode({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tui', () => {
  // skipped: tests are disabled for the time being
  test.skip('prompt: only required params', async () => {
    const responsePromise = client.tui.prompt({
      parts: [{ id: 'id', messageID: 'messageID', sessionID: 'sessionID', text: 'text', type: 'text' }],
      text: 'text',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('prompt: required and optional params', async () => {
    const response = await client.tui.prompt({
      parts: [
        {
          id: 'id',
          messageID: 'messageID',
          sessionID: 'sessionID',
          text: 'text',
          type: 'text',
          synthetic: true,
          time: { start: 0, end: 0 },
        },
      ],
      text: 'text',
    });
  });
});
