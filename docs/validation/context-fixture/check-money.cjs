const assert = require('node:assert/strict');
const { formatMinor } = require('./money.cjs');
assert.equal(formatMinor(123, 'USD'), '1.23');
assert.equal(formatMinor(123, 'JPY'), '123');
assert.equal(formatMinor(1234, 'KWD'), '1.234');
assert.throws(() => formatMinor(100, 'XXX'), /Unsupported currency/);
console.log('Money examples pass');
