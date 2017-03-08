# win-timeit

**Simple wrapper around `timeit` from the [Windows Server 2003 Resource Kit Tools](https://www.microsoft.com/en-us/download/details.aspx?id=17657).**

## Installation

```sh
npm install win-timeit
```

## Quickstart

```js
const timeit = require('win-timeit')

timeit('echo hello world')
  .then(console.log)
  /* => { versionNumber: 'Windows NT 6.2 (Build 9200)',
          exitTime: '0:26 am, Thursday, March 9 2017',
          elapsedTime: '0:00:00.030',
          processTime: '0:00:00.015',
          systemCalls: 6397,
          contextSwitches: 2109,
          pageFaults: 3645,
          bytesRead: 9170,
          bytesWritten: 117282,
          bytesOther: 327412 } */
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).