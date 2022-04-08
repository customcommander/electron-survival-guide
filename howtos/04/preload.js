/**
The `on` method returns a pair of functions to be used with
RxJS's [`fromEventPattern`](https://rxjs.dev/api/index/function/fromEventPattern) function.
**/
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('MY_APP', {
  on: channel => ([
    (handler) => { // addListener
      function _handler(ev, ...args) {
        console.log(`Received from channel '${channel}':`, ...args);
        handler(...args);
      }
      console.log(`Start observing from ipcRenderer.on('${channel}')`);
      ipcRenderer.on(channel, _handler);
      return _handler;
    }, //    |
        // +--+
        // |
        // v
    (_, _handler) => { // removeListener
      console.log(`Stop observing from ipcRenderer.on('${channel}')`);
      ipcRenderer.removeListener(channel, _handler);
    }
  ])
});
