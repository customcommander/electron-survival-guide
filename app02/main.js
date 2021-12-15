const {app, BrowserWindow} = require('electron');

app.whenReady().then(async () => {
  const bwin = new BrowserWindow({
    width: 400,
    height: 250,
    webPreferences: {
      nodeIntegration: false, // <- Good!
      contextIsolation: true  // <- Nice!
    }
  });
  await bwin.loadFile('renderer.html');
  bwin.show();
});
