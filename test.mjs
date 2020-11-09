import chai from 'chai';
import isMain from './index.mjs';

const { expect } = chai;

describe('if-main', function () {
  it('works', async function () {
    function noop() {}

    expect(await isMain('file:///hi', noop, { argv: [] })).to.eql(false);
    expect(await isMain('file:///hi', noop, { argv: ['hi'] })).to.eql(false);
    expect(await isMain('file:///hi', noop, { argv: ['hi', 'hi'] })).to.eql(false);
    expect(await isMain('file:///hi', noop, { argv: ['hi', '/hi'] })).to.eql(true);
    expect(await isMain('file:///omg/hello', () => {}, { argv: ['hi', '/omg/hello'] })).to.eql(
      true,
    );
  });
});
