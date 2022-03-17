/**
The preload script exposes a method under the `MY_APP` namespace that
the renderer process can use to know if the app is run from the `Applications` folder.
**/
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('MY_APP', {
  async isInApplicationsFolder() {
    return ipcRenderer.invoke('in-app-folder');
  }
});
