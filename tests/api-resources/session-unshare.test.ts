// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Opencode from '@opencode-ai/sdk';

const client = new Opencode({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessionUnshare', () => {
  // skipped: tests are disabled for the time being
  test.skip('unshare: only required params', async () => {
    const responsePromise = client.sessionUnshare.unshare({ sessionID: 'sessionID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('unshare: required and optional params', async () => {
    const response = await client.sessionUnshare.unshare({ sessionID: 'sessionID' });
  });
});
