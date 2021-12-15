## Bad practice 101

Just to be clear: **don't do this!**

This shows how easy it is for *any* JavaScript code running in the renderer process to behave like a full-blown Node.js program including access to Node.js `require` and its native APIs.

We have also disabled context isolation meaning that any script (including third-party script) can also manipulate the page and its data (e.g. cookies).

If your app gets compromised (e.g. XSS, rogue third-party dependency, etc.) the potential for damage is huge.

app01/main.js
``` javascript
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
```
app01/renderer.html
``` html
<html>
  <head>
    <style>
      body {background-color:black;color:limegreen}
    </style>
  </head>
  <body>
    <pre></pre>
    <!-- This could be a third-party script -->
    <script src="./renderer.js"></script>
  </body>
</html>
```
app01/renderer.js
``` javascript
const fs = require('fs');
const path = require('path');
const secret = fs.readFileSync(path.join(__dirname, 'secret.txt'));
document.querySelector('pre').innerHTML = secret;
```
app01/secret.txt
``` html
something nobody will see… wait!?
```

![](app01/screenshot.png)
![](./screenshot.png)
