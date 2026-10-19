import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { app } from '../app.js';

test('GET /health answers 200', async () => {
  const server = app.listen(0);
  await once(server, 'listening');
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
  } finally {
    server.close();
  }
});
