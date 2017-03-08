const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')
const parse = require('./lib/parse')

const exe = path.join(__dirname, 'vendors', 'timeit.exe')
const dat = path.join(process.cwd(), 'timeit.dat')

module.exports = cmd => {
  return new Promise((resolve, reject) => {
    // 1. exec cmd
    exec(`${exe} ${cmd} > nul`, (err, stdout, stderr) => {
      if (err) return reject(err)
      // 2. rm timeit.dat
      fs.unlink(dat, () => resolve(parse(stderr)))
    })
  })
}
