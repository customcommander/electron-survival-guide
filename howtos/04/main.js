/**
The main process sends some data to the renderer process
on the `count` channel every 500ms.
**/
const {app, BrowserWindow} = require('electron');
const path = require('path');

app.whenReady().then(async () => {
  const bwin = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js')
    }
  });

  await bwin.loadFile('renderer.html');
  bwin.show();
  bwin.webContents.openDevTools();

  let count = 0;
  setInterval(() => {
    bwin.webContents.send('count', count++); // Send to renderer process.
  }, 500);
});
