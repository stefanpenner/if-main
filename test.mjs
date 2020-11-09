import assert from 'assert';

import isMain from './index.mjs';
import { execFile as _execFile } from 'child_process';
import { promisify } from 'util';
import { EOL } from 'os';

const execFile = promisify(_execFile);

describe('if-main', function () {
  it('works', async function () {
    function noop() {}

    assert.equal(await isMain('file:///hi', noop, { argv: [] }), false);
    assert.equal(await isMain('file:///hi', noop, { argv: ['hi'] }), false);
    assert.equal(await isMain('file:///hi', noop, { argv: ['hi', 'hi'] }), false);
    assert.equal(await isMain('file:///hi', noop, { argv: ['hi', '/hi'] }), true);
    assert.equal(await isMain('file:///omg/hello', () => {}, { argv: ['hi', '/omg/hello'] }), true);
  });

  it('integrates', async function () {
    assert.deepEqual(await execFile('node', ['./example.mjs']), {
      stdout: `Hello, undefined!${EOL}`,
      stderr: '',
    });

    assert.deepEqual(await execFile('node', ['./example.mjs', 'world']), {
      stdout: `Hello, world!${EOL}`,
      stderr: '',
    });
  });
});
