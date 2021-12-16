/**
We have enabled the node integration and disabled context isolation:
**/
const {app, BrowserWindow} = require('electron');

app.whenReady().then(async () => {
  const bwin = new BrowserWindow({
    width: 300,
    height: 300,
    webPreferences: {
      nodeIntegration: true,  // <- Don't do this!
      contextIsolation: false // <- Don't do this!
    }
  });
  await bwin.loadFile('renderer.html');
  bwin.show();
});
