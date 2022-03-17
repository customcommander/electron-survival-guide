/**
The renderer process can ask if the app is running from the `Applications` folder
by asking in the `in-app-folder` IPC channel. The main process will respond in that same channel.
**/
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

app.whenReady().then(async () => {
  const bwin = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js')
    }
  });

  // Must be registered **before** the renderer process starts.
  ipcMain.handle('in-app-folder', () => app.isInApplicationsFolder());

  await bwin.loadFile('renderer.html');
  bwin.show();
});
