/**
The `MY_APP.echo` method will invoke the main process
on the `echo` channel with some value. The main process
simply answer back with the same value.
**/
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('MY_APP', {
  echo(any) {
    return ipcRenderer.invoke('echo', any);
  }
});
