/**
Because node integration is enabled this script has access to the Node.js APIs.
We can see that this script is attempting to read a file that was meant to remain secret.

Also since the context isolation is disabled this script is sharing the same context execution
as the renderer page so can directly modify the DOM and/or read cookies.
**/
const fs = require('fs');
const path = require('path');
const secret = fs.readFileSync(path.join(__dirname, 'secret.txt'));
document.querySelector('pre').innerHTML = secret;
