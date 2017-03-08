const timeit = require('./')

timeit(`node -e "console.log('Hello, Node!')"`)
  .then(console.log)
