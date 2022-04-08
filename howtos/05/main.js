/**
The main process starts four renderer processes.
Each one of them will invoke the main process on the `echo` channel.
**/
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

app.whenReady().then(async () => {
  const winDef = {
    width: 200,
    height: 400,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js')
    }
  };

  const bwin1 = new BrowserWindow({ title: 'FOO', x:  20, y: 60, ...winDef});
  const bwin2 = new BrowserWindow({ title: 'BAR', x: 230, y: 60, ...winDef});
  const bwin3 = new BrowserWindow({ title: 'BAZ', x: 440, y: 60, ...winDef});
  const bwin4 = new BrowserWindow({ title: 'BAT', x: 650, y: 60, ...winDef});

  await bwin1.loadFile('renderer.html'); bwin1.show();
  await bwin2.loadFile('renderer.html'); bwin2.show();
  await bwin3.loadFile('renderer.html'); bwin3.show();
  await bwin4.loadFile('renderer.html'); bwin4.show();

  ipcMain.handle('echo', (_, any) => any);
});
