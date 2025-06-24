// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Opencode from 'opencode';

const client = new Opencode({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessionSummarize', () => {
  // skipped: tests are disabled for the time being
  test.skip('summarize: only required params', async () => {
    const responsePromise = client.sessionSummarize.summarize({
      modelID: 'modelID',
      providerID: 'providerID',
      sessionID: 'sessionID',
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
  test.skip('summarize: required and optional params', async () => {
    const response = await client.sessionSummarize.summarize({
      modelID: 'modelID',
      providerID: 'providerID',
      sessionID: 'sessionID',
    });
  });
});
