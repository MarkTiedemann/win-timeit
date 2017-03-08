module.exports = stderr => {
  const props = [
    'versionNumber',
    'exitTime',
    'elapsedTime',
    'processTime',
    'systemCalls',
    'contextSwitches',
    'pageFaults',
    'bytesRead',
    'bytesWritten',
    'bytesOther'
  ]

  const values = stderr.trim().split('\n').map(line =>
    line.substring(line.indexOf(':') + 1).trim()
  )

  const result = {}

  props.forEach((prop, index) => {
    index >= 4
      ? result[prop] = Number(values[index])
      // only first 4 props are non-numeric
      : result[prop] = values[index]
  })

  return result
}
