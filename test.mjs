import assert from 'assert';

import isMain from './index.mjs';

describe('if-main', function () {
  it('works', async function () {
    function noop() {}

    assert.equal(await isMain('file:///hi', noop, { argv: [] }), false);
    assert.equal(await isMain('file:///hi', noop, { argv: ['hi'] }), false);
    assert.equal(await isMain('file:///hi', noop, { argv: ['hi', 'hi'] }), false);
    assert.equal(await isMain('file:///hi', noop, { argv: ['hi', '/hi'] }), true);
    assert.equal(await isMain('file:///omg/hello', () => {}, { argv: ['hi', '/omg/hello'] }), true);
  });
});
