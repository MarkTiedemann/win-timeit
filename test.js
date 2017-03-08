const test = require('ava')
const timeit = require('./')

const cmd = `node -e "console.log('Hello, Node!')"`

test(cmd, assert => {
  return timeit(cmd)
  .then(data => {
    assert.is(typeof data, 'object')
    assert.is(typeof data.versionNumber, 'string')
    assert.is(typeof data.exitTime, 'string')
    assert.is(typeof data.elapsedTime, 'string')
    assert.is(typeof data.processTime, 'string')
    assert.is(typeof data.systemCalls, 'number')
    assert.is(typeof data.contextSwitches, 'number')
    assert.is(typeof data.pageFaults, 'number')
    assert.is(typeof data.bytesRead, 'number')
    assert.is(typeof data.bytesWritten, 'number')
    assert.is(typeof data.bytesOther, 'number')
  })
})
